"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Image as ImageIcon, UserPlus, Globe, ArrowRight, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp.email({
        email,
        password,
        name,
        image: image || `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`,
        callbackURL: "/login",
      }, {
        onSuccess: () => {
          toast.success("Account created successfully! Please login.");
          router.push("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Registration failed. Try again.");
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-base-100 lg:rounded-[40px] shadow-2xl overflow-hidden border border-base-200 relative z-10"
      >
        {/* Illustration Side */}
        <div className="hidden lg:flex bg-[#82E1C1]/5 items-center justify-center p-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent pointer-events-none" />
          <div className="relative w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
               <img 
                src="https://img.freepik.com/free-vector/online-education-concept-illustration_114360-8487.jpg?t=st=1714392000&exp=1714395600&hmac=4567890" 
                alt="Register illustration" 
                className="w-full h-auto rounded-3xl mix-blend-multiply"
              />
            </motion.div>
            
            <div className="mt-12 text-center relative z-10">
              <h3 className="text-2xl font-bold text-[#1A2238] mb-4">Master new skills</h3>
              <p className="text-base-content/60">Join over 10,000+ students already learning on our platform.</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 lg:p-20 flex flex-col justify-center">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
              <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <BookOpen size={24} />
              </div>
              <span className="text-2xl font-bold text-primary">SkillSphere</span>
            </Link>
            <h2 className="text-4xl font-extrabold text-[#1A2238] mb-4">Create Account</h2>
            <p className="text-base-content/60">
              Join us and start your professional development.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#1A2238]">Full Name</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                  <input
                    type="text"
                    required
                    className="input input-bordered w-full pl-12 h-14 rounded-2xl focus:input-primary bg-base-200/30 border-base-300"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#1A2238]">Email Address</span>
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
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#1A2238]">Photo URL (Optional)</span>
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="url"
                  className="input input-bordered w-full pl-12 h-14 rounded-2xl focus:input-primary bg-base-200/30 border-base-300"
                  placeholder="https://example.com/photo.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#1A2238]">Password</span>
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

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full rounded-2xl h-16 text-lg font-bold shadow-xl shadow-primary/20 mt-6"
            >
              {loading ? <span className="loading loading-spinner"></span> : <><UserPlus size={20} className="mr-2" /> Register Now</>}
            </button>
          </form>

          <div className="divider text-xs text-base-content/30 uppercase font-bold tracking-[0.2em] my-8">Or register with</div>

          <button
            onClick={handleSocialLogin}
            className="btn btn-outline w-full rounded-2xl h-16 border-base-300 hover:bg-base-200 hover:text-base-content font-bold text-lg"
          >
            <Globe size={22} className="mr-3 text-red-500" /> Google
          </button>

          <p className="text-center text-base text-base-content/60 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-primary hover:underline inline-flex items-center">
              Log in <ArrowRight size={16} className="ml-1" />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

