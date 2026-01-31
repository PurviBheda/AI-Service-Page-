import React from 'react';
import { motion } from 'motion/react';
import { Brain, Bot, BarChart3, ShieldCheck, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: <Brain className="text-blue-500" size={32} />,
    title: "AI Strategy Consulting",
    description: "Develop a roadmap for AI adoption tailored to your business goals and operational needs."
  },
  {
    icon: <Bot className="text-purple-500" size={32} />,
    title: "Custom LLM Solutions",
    description: "Training and fine-tuning large language models on your private data for proprietary intelligence."
  },
  {
    icon: <BarChart3 className="text-emerald-500" size={32} />,
    title: "Predictive Analytics",
    description: "Turn historical data into future foresight with robust machine learning forecasting models."
  },
  {
    icon: <Zap className="text-orange-500" size={32} />,
    title: "Workflow Automation",
    description: "Identify and eliminate bottlenecks by deploying autonomous agents and smart automations."
  },
  {
    icon: <ShieldCheck className="text-red-500" size={32} />,
    title: "AI Governance & Ethics",
    description: "Ensure your AI implementations are secure, compliant, and ethically sound from day one."
  },
  {
    icon: <Globe className="text-cyan-500" size={32} />,
    title: "Scaling Operations",
    description: "Scale your business horizontally and vertically by leveraging high-volume AI infrastructure."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Empowering Your Business with <br /> <span className="text-blue-500">Intelligent Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide a full suite of AI services designed to integrate seamlessly into your current infrastructure and drive immediate value.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-6 p-3 bg-zinc-800 rounded-xl inline-block group-hover:bg-zinc-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
