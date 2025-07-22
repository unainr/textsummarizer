import Link from "next/link";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">TS</span>
              </div>
              <span className=" font-semibold text-xl">TextSummarizer</span>
            </div>
            <p className="mt-4  max-w-md">
              TextSummarizer uses advanced AI to transform lengthy content into clear, concise summaries while preserving key information and context.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@textsummarizer.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className=" font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className=" hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className=" hover:text-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api" className=" hover:text-black transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/integrations" className=" hover:text-black transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className=" hover:text-black transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className=" font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className=" hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className=" hover:text-black transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className=" hover:text-black transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/help" className=" hover:text-black transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=" text-sm">
              © {currentYear} TextSummarizer. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className=" text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className=" text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className=" text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
