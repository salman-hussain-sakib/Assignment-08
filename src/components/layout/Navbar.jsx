"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, BookOpen, User, LogOut, Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              SkillSphere
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
            {session && (
              <Link href="/profile" className="text-sm font-medium hover:text-primary transition-colors">My Profile</Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-base-200 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary" />}
              </button>
            )}

            {isPending ? (
              <span className="loading loading-spinner loading-sm text-primary"></span>
            ) : session ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary/20">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`}
                    />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
                  <li className="px-4 py-2 border-bottom border-base-200 mb-1">
                    <p className="font-bold text-sm">{session.user.name}</p>
                    <p className="text-xs text-base-content/60 truncate">{session.user.email}</p>
                  </li>
                  <li><Link href="/profile"><User size={16} /> Profile</Link></li>
                  <li><button onClick={handleLogout} className="text-error"><LogOut size={16} /> Logout</button></li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
                <Link href="/register" className="btn btn-primary btn-sm rounded-full px-6">Register</Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-base-200"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-base-200">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base-100 border-t border-base-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/courses" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              {session ? (
                <>
                  <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-error hover:bg-base-200">Logout</button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Link href="/login" className="btn btn-outline btn-sm" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link href="/register" className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
