"use client";

import { courses } from "@/lib/courses";
import { useSession } from "@/lib/auth-client";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ShieldCheck, ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

function CheckoutContent() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const id = Number(params.id);
  const type = searchParams.get('type') || 'enroll';
  const [isProcessing, setIsProcessing] = useState(false);
  
  const course = courses.find(c => c.id === id);

  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?callbackUrl=/checkout/${id}?type=${type}`);
    }
  }, [session, isPending, router, id, type]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="btn btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate network request for premium feel
    setTimeout(() => {
      setIsProcessing(false);
      
      // Save to local storage
      const storageKey = `skillsphere_courses_${session.user.id}`;
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      // Prevent duplicates
      if (!existing.find(item => item.courseId === course.id)) {
        existing.push({ courseId: course.id, type, date: Date.now() });
        localStorage.setItem(storageKey, JSON.stringify(existing));
      }

      toast.success(
        <div className="flex flex-col">
          <span className="font-bold text-lg">{type === 'buy' ? 'Successfully Purchased!' : 'Successfully Enrolled!'}</span>
          <span className="text-sm">Welcome to {course.title}</span>
        </div>,
        { duration: 4000 }
      );
      router.push("/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-200/50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/courses/${id}`} className="inline-flex items-center text-base-content/60 hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft size={16} className="mr-2" /> Back to Course
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-10 flex items-center">
          <ShieldCheck className="mr-3 text-success" size={36} /> Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary Card */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
              <h2 className="text-xl font-bold mb-6 border-b border-base-200 pb-4">Order Summary</h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <img src={course.image} alt={course.title} className="w-full sm:w-40 h-28 object-cover rounded-2xl shadow-md" />
                <div className="flex-1 text-center sm:text-left">
                  <div className="badge badge-primary mb-2">{course.category}</div>
                  <h3 className="text-lg font-bold leading-tight mb-2">{course.title}</h3>
                  <p className="text-sm text-base-content/60 font-medium">Instructor: {course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
              <h2 className="text-xl font-bold mb-6 border-b border-base-200 pb-4">Payment Method</h2>
              <div className="p-4 border-2 border-primary/20 bg-primary/5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Fast Checkout</p>
                    <p className="text-xs text-base-content/60 mt-1">One-click enrollment process</p>
                  </div>
                </div>
                <CheckCircle className="text-primary" size={28} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Checkout Actions Card */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Details</h2>
              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between items-center text-base-content/70">
                  <span>Original Price</span>
                  <span className="line-through">${(course.price * 1.2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-success font-medium">
                  <span>Discount</span>
                  <span>-${(course.price * 0.2).toFixed(2)}</span>
                </div>
                <div className="border-t border-base-200 pt-4 flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${course.price}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout} 
                disabled={isProcessing}
                className="btn btn-primary btn-lg w-full rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center h-16 text-lg"
              >
                {isProcessing ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Complete Purchase"
                )}
              </button>
              
              <p className="text-xs text-center text-base-content/50 mt-6 leading-relaxed flex items-center justify-center gap-1">
                <ShieldCheck size={14} /> Secure and encrypted checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
