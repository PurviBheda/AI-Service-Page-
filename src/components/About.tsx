import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1745920770891-b46fc1799646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnRzJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3Njk4NTk4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-white text-4xl font-bold mb-1">12+</div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">Years of AI Research</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Human Expertise Meets <span className="text-blue-500">Machine Intelligence</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Founded by industry veterans from Google and DeepMind, NeuralPath was built on the belief that AI should be a partner to human creativity, not a replacement. We bridge the gap between complex research and practical business application.
            </p>
            
            <div className="space-y-4">
              {[
                "Pioneering Generative AI implementation since 2021",
                "Custom proprietary frameworks for data security",
                "Over $250M in efficiency savings for our clients",
                "Dedicated ethical AI oversight board"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">Sarah Jenkins</div>
                <div className="text-blue-500 text-sm font-medium">Founder & CEO</div>
              </div>
              <div className="h-12 w-px bg-zinc-800" />
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center text-white">
                  in
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
