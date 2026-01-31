import React from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    toast.success('Message sent! We will get back to you within 24 hours.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[32px] overflow-hidden border border-zinc-800">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 bg-blue-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to start your AI journey?</h2>
                <p className="text-blue-100 text-lg mb-12">
                  Drop us a line or call us to schedule a free 30-minute consultation with our lead strategists.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm">Call us</div>
                      <div className="text-white font-bold text-xl">+1 (555) 000-1234</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm">Email us</div>
                      <div className="text-white font-bold text-xl">hello@neuralpath.ai</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm">Visit us</div>
                      <div className="text-white font-bold text-xl">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl" />
            </div>

            {/* Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                      })}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                  <input
                    {...register('company')}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Tech Solutions Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tell us about your project</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="What can we help you solve with AI?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
