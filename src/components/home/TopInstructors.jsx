"use client";

import { motion } from "framer-motion";
import { Briefcase, Send, CodeXml } from "lucide-react";

export default function TopInstructors() {
  const instructors = [
    {
      name: "Dr. Angela Yu",
      role: "Lead Web Developer",
      image: "https://i.pravatar.cc/300?u=angela",
      students: "1M+",
      courses: 12
    },
    {
      name: "John Doe",
      role: "Graphic Design Expert",
      image: "https://i.pravatar.cc/300?u=john",
      students: "50k+",
      courses: 8
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Strategist",
      image: "https://i.pravatar.cc/300?u=sarah",
      students: "120k+",
      courses: 15
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      image: "https://i.pravatar.cc/300?u=michael",
      students: "80k+",
      courses: 6
    }
  ];

  return (
    <section className="py-24 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🏆 Top Instructors Section</h2>
          <p className="text-base-content/60 max-w-2xl mx-auto">Learn from the best in the industry who are passionate about teaching.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-base-100 rounded-3xl overflow-hidden shadow-lg border border-base-200 p-2 group-hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <div className="flex space-x-3">
                      <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"><Send size={18} /></a>
                      <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"><Briefcase size={18} /></a>
                      <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"><CodeXml size={18} /></a>
                    </div>
                  </div>
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{instructor.role}</p>
                  <div className="flex justify-center space-x-6 text-xs text-base-content/60">
                    <div className="text-center">
                      <p className="font-bold text-base-content">{instructor.students}</p>
                      <p>Students</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-base-content">{instructor.courses}</p>
                      <p>Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
