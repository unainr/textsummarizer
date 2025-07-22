"use client";
import React, { useEffect, useRef, useState } from "react";
import {
	ArrowDown,
	ArrowLeft,
	Bot,
	Check,
	Download,
	Loader2,
	Send,
	User,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ChatMessage {
	id: string;
	type: "user" | "ai";
	content: string;
	timestamp: string;
}

const SummarizeForm = () => {
	const [prompt, setPrompt] = useState("");
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [isScrolled, setIsScrolled] = useState(false);
	const [showScrollButton, setShowScrollButton] = useState(false);
	const bottomRef = useRef<HTMLDivElement>(null);
	const [downloadingId, setDownloadingId] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const isAtBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
			setIsScrolled(!isAtBottom);
			setShowScrollButton(!isAtBottom && messages.length > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [messages]);

	useEffect(() => {
		if (messages.length > 0 && !isScrolled) {
			bottomRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, isScrolled]);

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
		setIsScrolled(false);
	};

	const downloadText = (text: string, messageId: string) => {
		setDownloadingId(messageId);

		// Create a blob from the text
		const blob = new Blob([text], { type: "text/plain" });
		const url = URL.createObjectURL(blob);

		// Create a temporary link and trigger download
		const a = document.createElement("a");
		a.href = url;
		a.download = `summary-${new Date().toISOString().slice(0, 10)}.txt`;
		document.body.appendChild(a);
		a.click();

		// Clean up
		document.body.removeChild(a);
		URL.revokeObjectURL(url);

		// Show success indicator briefly
		setTimeout(() => {
			setDownloadingId(null);
		}, 2000);
	};

	const fetchData = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!prompt.trim()) return;

		const userMessage: ChatMessage = {
			id: (Date.now() + 1).toString(),
			type: "user",
			content: prompt,
			timestamp: new Date().toLocaleString(),
		};
		setMessages((prev) => [...prev, userMessage]);
		setPrompt("");
		setLoading(true);

		try {
			const res = await fetch("/api/gemini", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ prompt }),
			});

			if (!res.body) throw new Error("No response body");

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let result = "";

			const aiMessage: ChatMessage = {
				id: (Date.now() + 1).toString(),
				type: "ai",
				content: "",
				timestamp: new Date().toLocaleString(),
			};
			setMessages((prev) => [...prev, aiMessage]);

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				const chunk = decoder.decode(value, { stream: true });

				// Smooth typing effect for chunk characters
				for (let i = 0; i < chunk.length; i++) {
					result += chunk[i];
					const cleanedResult = result.replace(/(\*\*|`)/g, "");
					// Update AI message with current typed content
					setMessages((prev) =>
						prev.map((msg) =>
							msg.id === aiMessage.id ? { ...msg, content: cleanedResult } : msg
						)
					);

					// Delay between characters for typing effect (adjust ms for speed)
					await new Promise((r) => setTimeout(r, 6));
				}
			}
		} catch (error) {
			setMessages((prev) => [
				...prev,
				{
					id: (Date.now() + 2).toString(),
					type: "ai",
					content: `Error: ${error}.replace(/\*\*|\*/g, "")`,
					timestamp: new Date().toLocaleString(),
				},
			]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-[#282935] text-white flex flex-col">
			<Link href={"/"}>
				<Button variant="outline" className="absolute text-black top-4 left-4 cursor-pointer">
					<ArrowLeft className=" h-4 w-4" />
					Back
				</Button>
			</Link>
			<div className="flex-1 overflow-y-auto">
				{messages.map((msg, index) => (
					<div
						key={msg.id}
						className={`py-6 px-4 md:px-8 lg:px-16 xl:px-24 ${
							msg.type === "user" ? "bg-[#282935]" : ""
						} ${index !== 0 ? "border-t border-gray-700/50" : ""}`}>
						<div className="max-w-3xl mx-auto flex gap-4 items-start">
							<div
								className={`w-7 h-7 rounded-sm flex items-center justify-center flex-shrink-0 ${
									msg.type === "user" ? "bg-[#5436DA]" : "bg-[#10a37f]"
								}`}>
								{msg.type === "user" ? (
									<User size={16} className="text-white" />
								) : (
									<Bot size={16} className="text-white" />
								)}
							</div>
							<div className="min-w-0 whitespace-pre-wrap">
								{msg.content.split("\n").map((paragraph, i) =>
									paragraph ? (
										<p key={i} className="mb-4 last:mb-0">
											{paragraph}
										</p>
									) : null
								)}
							</div>
							{/* Download button for assistant messages */}
							{!loading && msg.type === "ai" && msg.content && (
								<Button
									size={"icon"}
									onClick={() => downloadText(msg.content, msg.id)}
									className=" text-xs rounded-full cursor-pointer text-white  bg-blue-500 hover:bg-blue-600"
									title="Download summary as text file">
									{downloadingId === msg.id ? (
										<Check size={18} className="text-green-500" />
									) : (
										<Download size={18} />
									)}
								</Button>
							)}
						</div>
					</div>
				))}
				{loading && (
					<div className="py-6 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#282935] border-t border-gray-700/50">
						<div className="max-w-3xl mx-auto flex gap-4 items-start">
							<div className="w-7 h-7 rounded-sm bg-[#10a37f] flex items-center justify-center flex-shrink-0">
								<Bot size={16} className="text-white" />
							</div>
							<div className="flex items-center">
								<div className="flex space-x-2">
									<div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
									<div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
									<div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
								</div>
							</div>
						</div>
					</div>
				)}
				<div ref={bottomRef} className="h-32" /> {/* Extra space at bottom */}
			</div>

			{showScrollButton && (
				<button
					onClick={scrollToBottom}
					className="fixed bottom-28 right-6 z-50 rounded-full p-2 bg-gray-700 text-white hover:bg-gray-600 shadow-lg cursor-pointer">
					<ArrowDown size={20} />
				</button>
			)}

			<div className="sticky bottom-0 bg-[#282935] border-t border-gray-700/50 p-2 md:p-4">
				<form onSubmit={fetchData} className="max-w-3xl mx-auto relative">
					<div className="relative flex items-center">
						<textarea
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							disabled={loading}
							className="w-full py-3 px-4 pr-12 rounded-lg bg-[#40414f] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10a37f] shadow-lg resize-none min-h-[80px] transition-all"
							placeholder="Paste text to summarize..."
							aria-label="Text to summarize"
							rows={3}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey && prompt.trim()) {
									e.preventDefault();
									fetchData(e as any);
								}
							}}
						/>
						<button
							type="submit"
							disabled={loading || !prompt.trim()}
							aria-label={
								loading ? "Summarizing..." : "Submit text for summarization"
							}
							className={`absolute right-3 bottom-3 p-2 rounded-md text-gray-300 transition-all ${
								!prompt.trim() || loading
									? "opacity-50 cursor-not-allowed"
									: "hover:bg-[#10a37f] hover:text-white active:scale-95"
							}`}>
							{loading ? (
								<Loader2 className="w-5 h-5 animate-spin" />
							) : (
								<Send className="w-5 h-5" />
							)}
						</button>
					</div>

					<p className="text-xs text-center text-gray-500 mt-2">
						TextSummarizer may produce inaccurate information about people,
						places, or facts.
					</p>
				</form>
			</div>
		</div>
	);
};

export default SummarizeForm;
