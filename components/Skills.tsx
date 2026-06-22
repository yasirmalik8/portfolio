'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Smartphone, Globe, Server, Cpu, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Generative AI & LLMs',
    icon: Cpu,
    color: '#F97316',
    skills: ['OpenAI GPT', 'Claude', 'Gemini', 'Ollama', 'LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'AI Agents', 'Multi-Agent Systems'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: '#F59E0B',
    skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Computer Vision', 'Deep Learning', 'Data Preprocessing', 'Keras', 'MediaPipe', 'NumPy', 'Pandas'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: '#F97316',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'UI/UX Design', 'GetX', 'Provider', 'Android Studio', 'Xcode'],
  },
  {
    title: 'Web & Frontend',
    icon: Globe,
    color: '#F59E0B',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Framer Motion'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    color: '#F97316',
    skills: ['FastAPI', 'PostgreSQL', 'MySQL', 'Firebase', 'FAISS', 'ChromaDB', 'Pinecone', 'REST APIs', 'Authentication', 'Docker'],
  },
  {
    title: 'Tools & Collaboration',
    icon: Users,
    color: '#F59E0B',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira', 'Trello', 'Slack', 'Agile / Scrum', 'Vercel', 'Netlify'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#111111]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="section-badge">Skills</span>
          <h2 className="section-heading mt-6">Technical Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }} className="card-dark p-6 group rounded-2xl cursor-default">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${category.color}12`, border: `1px solid ${category.color}20` }}>
                  <category.icon size={20} style={{ color: category.color }} />
                </div>
                <h3 className="font-bold text-white font-space text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default transition-all duration-200 bg-white/5 border border-white/10 text-white/65 hover:border-[#F97316]/50 hover:text-[#F97316] hover:bg-[#F97316]/5">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
