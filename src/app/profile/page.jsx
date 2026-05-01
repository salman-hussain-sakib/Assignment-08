"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, Mail, Calendar, Edit3, Shield, Book, Award, Clock, ShoppingBag, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { courses } from "@/lib/courses";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      const storageKey = `skillsphere_courses_${session.user.id}`;
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      setSavedCourses(saved);
    }
  }, [session]);

  if (isPending || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const enrolledCourses = savedCourses.filter(c => c.type === 'enroll').map(c => courses.find(course => course.id === c.courseId)).filter(Boolean);
  const purchasedCourses = savedCourses.filter(c => c.type === 'buy').map(c => courses.find(course => course.id === c.courseId)).filter(Boolean);

  return (
    <div className="min-h-screen bg-base-200/50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-200"
        >
          {/* Profile Cover */}
          <div className="h-48 md:h-56 relative w-full bg-gradient-to-tr from-primary/10 via-base-200 to-secondary/10">
            {/* Subtle CSS-only dot pattern for a modern look */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            {/* Smooth fade into the card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-60"></div>
            
            <div className="absolute -bottom-16 left-8 md:left-12 z-10">
              <div className="avatar">
                <div className="w-32 md:w-40 rounded-3xl ring-8 ring-base-100 shadow-2xl bg-base-100">
                  <img
                    src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`}
                    alt={session.user.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 pb-12 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h1 className="text-3xl font-bold mb-2">{session.user.name}</h1>
                <p className="text-base-content/60 flex items-center">
                  <Mail size={16} className="mr-2" /> {session.user.email}
                </p>
              </div>
              <Link href="/profile/update" className="btn btn-primary rounded-xl mt-6 md:mt-0 shadow-lg shadow-primary/20">
                <Edit3 size={18} className="mr-2" /> Update Profile
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-1 space-y-6">
                <div className="bg-base-200/50 p-6 rounded-2xl border border-base-200">
                  <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-base-content/40">
                    <Shield size={16} className="mr-2" /> Account Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Status</span>
                      <span className="badge badge-success badge-sm text-white font-bold uppercase text-[10px]">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Role</span>
                      <span className="font-bold text-sm">Student</span>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200/50 p-6 rounded-2xl border border-base-200">
                  <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-base-content/40">
                    <Award size={16} className="mr-2" /> Learning Progress
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Enrolled Courses</span>
                      <span className="font-bold">{enrolledCourses.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Purchased Courses</span>
                      <span className="font-bold">{purchasedCourses.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-2 space-y-10">
                
                {/* Enrolled Courses Section */}
                <div>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <GraduationCap size={24} className="mr-3 text-primary" /> My Enrolled Courses
                  </h2>
                  <div className="space-y-4">
                    {enrolledCourses.length > 0 ? (
                      enrolledCourses.map((course) => (
                        <div key={course.id} className="flex flex-col sm:flex-row items-center sm:items-start p-4 bg-base-100 border border-base-200 rounded-2xl hover:bg-base-200 transition-colors">
                          <img src={course.image} alt={course.title} className="w-full sm:w-28 h-20 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-5 shadow-sm" />
                          <div className="flex-grow text-center sm:text-left h-full flex flex-col justify-center">
                            <div className="badge badge-primary badge-sm mb-2">{course.category}</div>
                            <p className="font-bold text-base line-clamp-1">{course.title}</p>
                            <p className="text-xs text-base-content/60 mt-1">{course.instructor}</p>
                          </div>
                          <Link href={`/courses/${course.id}`} className="btn btn-primary rounded-xl mt-4 sm:mt-0 sm:self-center px-6">Continue</Link>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 bg-base-200/50 rounded-3xl text-center border border-base-200 border-dashed">
                        <GraduationCap size={32} className="mx-auto text-base-content/20 mb-3" />
                        <p className="text-base-content/60 text-sm mb-4">You haven't enrolled in any courses yet.</p>
                        <Link href="/courses" className="btn btn-outline btn-sm rounded-lg">Browse Courses</Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Purchased Courses Section */}
                <div>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <ShoppingBag size={24} className="mr-3 text-primary" /> My Purchased Courses
                  </h2>
                  <div className="space-y-4">
                    {purchasedCourses.length > 0 ? (
                      purchasedCourses.map((course) => (
                        <div key={course.id} className="flex flex-col sm:flex-row items-center sm:items-start p-4 bg-base-100 border border-base-200 rounded-2xl hover:bg-base-200 transition-colors">
                          <img src={course.image} alt={course.title} className="w-full sm:w-28 h-20 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-5 shadow-sm" />
                          <div className="flex-grow text-center sm:text-left h-full flex flex-col justify-center">
                            <div className="badge badge-secondary badge-sm mb-2">Purchased</div>
                            <p className="font-bold text-base line-clamp-1">{course.title}</p>
                            <p className="text-xs text-base-content/60 mt-1">{course.instructor}</p>
                          </div>
                          <Link href={`/courses/${course.id}`} className="btn btn-outline border-base-300 rounded-xl mt-4 sm:mt-0 sm:self-center px-6 hover:bg-secondary hover:border-secondary hover:text-white">View Details</Link>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 bg-base-200/50 rounded-3xl text-center border border-base-200 border-dashed">
                        <ShoppingBag size={32} className="mx-auto text-base-content/20 mb-3" />
                        <p className="text-base-content/60 text-sm mb-4">You haven't purchased any courses yet.</p>
                        <Link href="/courses" className="btn btn-outline btn-sm rounded-lg">Browse Premium</Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-primary/10 mt-12">
                  <h2 className="text-xl font-bold mb-3 text-primary">Ready for a new challenge?</h2>
                  <p className="text-base-content/70 mb-6 max-w-lg">Explore our latest courses and expand your skills even further with expert-led training.</p>
                  <Link href="/courses" className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20">Discover More</Link>
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
