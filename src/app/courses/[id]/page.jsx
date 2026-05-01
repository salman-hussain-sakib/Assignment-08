"use client";

import { courses } from "@/lib/courses";
import { useSession } from "@/lib/auth-client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { Star, BookOpen, CheckCircle, ArrowLeft, PlayCircle, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function CourseDetailsPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  
  const course = courses.find(c => c.id === id);

  // Protect this page - only logged in users can see details
  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?callbackUrl=/courses/${id}`);
    }
  }, [session, isPending, router, id]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
          <p className="text-base-content/60 animate-pulse">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="btn btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 pb-20">
      <div className="bg-neutral text-neutral-content py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src={course.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/courses" className="inline-flex items-center text-primary-content/60 hover:text-primary-content mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Courses
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-primary mb-6">{course.category}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-lg text-neutral-content/70 mb-8 max-w-xl">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={`https://i.pravatar.cc/100?img=${course.id + 5}`} alt={course.instructor} />
                    </div>
                  </div>
                  <span className="font-medium">Created by <span className="text-primary font-bold">{course.instructor}</span></span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star size={20} fill="currentColor" />
                  <span className="font-bold text-white">{course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12 py-10">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-3 text-primary" /> What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-base-200/50 p-8 rounded-3xl border border-base-200">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-success mt-1 shrink-0" />
                    <span className="text-base-content/80">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <ShieldCheck className="mr-3 text-primary" /> Course Content
              </h2>
              <div className="space-y-3">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-base-100 border border-base-200 rounded-xl hover:bg-base-200 transition-colors cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">{item}</span>
                    </div>
                    <PlayCircle size={20} className="text-base-content/30 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 card bg-base-100 shadow-2xl border border-base-200 overflow-hidden">
              <figure className="relative h-48">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/50 animate-pulse">
                    <PlayCircle size={40} />
                  </div>
                </div>
              </figure>
              <div className="card-body p-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold text-primary">${course.price}</span>
                  <span className="badge badge-error text-white font-bold">Limited Offer</span>
                </div>
                <Link href={`/checkout/${course.id}?type=enroll`} className="btn btn-primary btn-lg rounded-2xl w-full shadow-lg shadow-primary/20 mb-4">
                  Enroll Now
                </Link>
                <Link href={`/checkout/${course.id}?type=buy`} className="btn btn-outline btn-lg rounded-2xl w-full">
                  Buy Now
                </Link>
                <div className="mt-8 space-y-4">
                  <p className="text-center text-xs text-base-content/40 font-bold uppercase tracking-widest">Included in this course</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock size={16} className="text-primary" />
                    <span>{course.duration} on-demand video</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
