"use client";
import { motion } from "motion/react";
import { 
  Zap, 
  Globe, 
  Lock, 
  FileText, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Cpu
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-teal-500" />,
    title: "Lightning Fast",
    description: "Get summaries in seconds, not minutes. Our AI processes even lengthy documents with remarkable speed."
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-500" />,
    title: "Multi-language Support",
    description: "Summarize content in over 40 languages with the same level of accuracy and quality."
  },
  {
    icon: <Lock className="h-6 w-6 text-teal-500" />,
    title: "Secure & Private",
    description: "Your data is never stored or used for training. What you upload stays private and is deleted after processing."
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-500" />,
    title: "Multiple Formats",
    description: "Support for various text formats including articles, research papers, reports, and more."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-teal-500" />,
    title: "Customizable Length",
    description: "Choose how detailed you want your summary to be, from brief overviews to comprehensive digests."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
    title: "Key Points Extraction",
    description: "Our AI identifies and highlights the most important information from your text."
  },
  {
    icon: <Layers className="h-6 w-6 text-teal-500" />,
    title: "Contextual Understanding",
    description: "Advanced NLP algorithms that understand context, not just keywords, for more accurate summaries."
  },
  {
    icon: <Cpu className="h-6 w-6 text-indigo-500" />,
    title: "Powered by Gemini",
    description: "Utilizing Google's cutting-edge Gemini AI model for state-of-the-art text comprehension."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold  mb-4"
          >
            Advanced Features for Powerful Summarization
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto  text-lg"
          >
            Our AI-powered platform offers everything you need to transform lengthy content into clear, concise summaries.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" p-6 rounded-xl  "
            >
              <div className="w-12 h-12 rounded-lg  flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold  mb-2">{feature.title}</h3>
              <p >{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
