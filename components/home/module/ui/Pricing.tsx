"use client";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for occasional summarization needs",
    features: [
      "5 summaries per day",
      "Up to 3,000 characters per text",
      "Standard summarization quality",
      "Text-only summaries",
      "Web-based access only"
    ],
    cta: "Get Started",
    ctaLink: "/",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Ideal for students and professionals",
    features: [
      "Unlimited summaries",
      "Up to 10,000 characters per text",
      "Enhanced summarization quality",
      "Key points extraction",
      "Multiple output formats",
      "Priority processing",
      "Email summaries"
    ],
    cta: "Start Free Trial",
    ctaLink: "/",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited character count",
      "API access",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated support",
      "Team management",
      "SSO authentication"
    ],
    cta: "Contact Sales",
    ctaLink: "/",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold  mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto  text-lg"
          >
            Choose the plan that fits your needs. All plans include our core summarization technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted 
                  ? "border-2 border-teal-500 relative" 
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-teal-500 text-center py-1 text-sm font-medium ">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? "pt-7" : ""}`}>
                <h3 className="text-xl font-semibold  mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold ">{plan.price}</span>
                  <span className="ml-2 ">/{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Link 
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-teal-500 hover:bg-teal-600"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              
              <div className="p-8 ">
                <p className="font-medium  mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span >{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
