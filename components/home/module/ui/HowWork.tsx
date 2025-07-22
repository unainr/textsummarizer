"use client";
import { motion } from "motion/react";
import { FileText, Cpu, Download } from "lucide-react";

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-teal-500" />,
    title: "Paste Your Text",
    description: "Copy and paste the article, document, or content you want to summarize into our text input field."
  },
  {
    icon: <Cpu className="h-8 w-8 text-indigo-500" />,
    title: "AI Processing",
    description: "Our advanced AI analyzes the content, identifies key points, and generates a concise summary while preserving meaning."
  },
  {
    icon: <Download className="h-8 w-8 text-teal-500" />,
    title: "Get Your Summary",
    description: "Review the generated summary and download it as a text file or copy it directly for your use."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold  mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto  text-lg"
          >
            Summarizing text has never been easier. Our streamlined process takes just seconds.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-500 to-indigo-500 transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className=" p-8 rounded-xl border  relative z-10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold  mb-4">{step.title}</h3>
                <p >{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
