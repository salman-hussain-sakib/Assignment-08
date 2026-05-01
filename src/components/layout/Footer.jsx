import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-base-200 pt-16 pb-8 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary">SkillSphere</span>
            </Link>
            <p className="text-base-content/70 text-sm leading-relaxed mb-6">
              Empowering learners worldwide with industry-leading courses and expert-led training. Transform your career with SkillSphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SAKIB.SALMAN.HUSSAIN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><FacebookIcon size={18} /></a>
              <a href="https://www.instagram.com/hussainsakib.dm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><InstagramIcon size={18} /></a>
              <a href="https://www.linkedin.com/in/salmanhussainsakib/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><LinkedinIcon size={18} /></a>
              <a href="https://x.com/sakibsalmanh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><XIcon size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 text-base-content/70">
                <Mail size={16} className="text-primary" />
                <span>sakibsalmanh@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-base-content/70">
                <Phone size={16} className="text-primary" />
                <span>+8801700963008</span>
              </li>
              <li className="flex items-center space-x-3 text-base-content/70">
                <MapPin size={16} className="text-primary" />
                <span>Bangladesh, Sylhet</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Made with ❤️ by Salman Hussain Sakib</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
