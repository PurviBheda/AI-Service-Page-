import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Leading AI Implementation 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Future-Proof Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expert AI Strategy</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              We help enterprises integrate cutting-edge artificial intelligence to automate workflows, derive deeper insights, and scale human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group">
                Book a Strategy Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 rounded-xl font-bold transition-all flex items-center justify-center">
                View Case Studies
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <ImageWithFallback 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80`} 
                      alt="User"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">500+ Projects Delivered</p>
                <div className="flex text-yellow-500">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1648459776041-cbeab708f17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwYmx1ZSUyMGRhcmt8ZW58MXx8fHwxNzY5ODU5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl max-w-[200px]"
            >
              <div className="text-blue-500 font-bold text-3xl mb-1">94%</div>
              <div className="text-gray-400 text-sm leading-tight">Efficiency Increase across client base</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl max-w-[200px]"
            >
              <div className="text-purple-500 font-bold text-3xl mb-1">10x</div>
              <div className="text-gray-400 text-sm leading-tight">Faster Data Processing capabilities</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
