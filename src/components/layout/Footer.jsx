import Link from "next/link";
import { MessageCircle, Send, Camera, Globe, Mail, Phone, MapPin } from "lucide-react";

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
              <a href="#" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Send size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Camera size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe size={18} /></a>
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
                <span>support@skillsphere.com</span>
              </li>
              <li className="flex items-center space-x-3 text-base-content/70">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-3 text-base-content/70">
                <MapPin size={16} className="text-primary" />
                <span>123 Learning Way, Silicon Valley, CA</span>
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
            <span>Made with ❤️ for learners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
