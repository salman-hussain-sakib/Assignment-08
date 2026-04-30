"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, LogIn, Globe, ArrowRight, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn.email({
        email,
        password,
        callbackURL: callbackUrl,
      }, {
        onSuccess: () => {
          toast.success("Welcome back to SkillSphere!");
          router.push(callbackUrl);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Invalid credentials. Please try again.");
        }
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async () => {
    await signIn.social({
        provider: "google",
        callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-base-100 lg:rounded-[40px] shadow-2xl overflow-hidden border border-base-200 relative z-10"
      >
        {/* Form Side */}
        <div className="p-8 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center space-x-2 mb-8 group">
              <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <BookOpen size={24} />
              </div>
              <span className="text-2xl font-bold text-primary">SkillSphere</span>
            </Link>
            <h2 className="text-4xl font-extrabold text-[#1A2238] mb-4">Login to your account</h2>
            <p className="text-base-content/60">
              Enter your details to access your learning dashboard.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#1A2238]">Your Email</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                  <input
                    type="email"
                    required
                    className="input input-bordered w-full pl-12 h-14 rounded-2xl focus:input-primary bg-base-200/30 border-base-300"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text font-bold text-[#1A2238]">Password</span>
                  <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                  <input
                    type="password"
                    required
                    className="input input-bordered w-full pl-12 h-14 rounded-2xl focus:input-primary bg-base-200/30 border-base-300"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-xs rounded-md" id="remember-me" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-base-content/60 font-medium cursor-pointer">Remember me</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full rounded-2xl h-16 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? <span className="loading loading-spinner"></span> : <><LogIn size={20} className="mr-2" /> Log in</>}
            </button>
          </form>

          <div className="divider text-xs text-base-content/30 uppercase font-bold tracking-[0.2em] my-10">Login with social</div>

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={handleSocialLogin}
              className="btn btn-outline w-full rounded-2xl h-16 border-base-300 hover:bg-base-200 hover:text-base-content font-bold text-lg"
            >
              <Globe size={22} className="mr-3 text-red-500" /> Google
            </button>
          </div>

          <p className="text-center text-base text-base-content/60 mt-10">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold text-primary hover:underline inline-flex items-center">
              Register <ArrowRight size={16} className="ml-1" />
            </Link>
          </p>
        </div>

        {/* Illustration Side */}
        <div className="hidden lg:flex bg-[#6366F1]/5 items-center justify-center p-20 order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="relative w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
               <img 
                src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1714392000&exp=1714395600&hmac=3456789" 
                alt="Login illustration" 
                className="w-full h-auto rounded-3xl mix-blend-multiply"
              />
            </motion.div>
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            
            <div className="mt-12 text-center relative z-10">
              <h3 className="text-2xl font-bold text-[#1A2238] mb-4">Start your journey today</h3>
              <p className="text-base-content/60">Unlock thousands of courses and join a global community of learners.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

