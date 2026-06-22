'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    title: 'Machine Learning Algorithm',
    issuer: 'Coursera',
    date: 'Mar 2023',
    link: 'https://coursera.org/verify/HVSHNZZKW3LK',
    logo: '/portfolio/assets/coursera.png',
    color: '#00D4FF',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'Apr 2023',
    link: 'https://www.credly.com/go/MOhFbp96',
    logo: '/portfolio/assets/ibm.png',
    color: '#7F00FF',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    date: 'Apr 2023',
    link: 'https://coursera.org/verify/LW58WLT6ANBP',
    logo: '/portfolio/assets/coursera.png',
    color: '#00D4FF',
  },
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'Coursera',
    date: 'Apr 2023',
    link: 'https://coursera.org/verify/RBLYN2SBXQY4',
    logo: '/portfolio/assets/coursera.png',
    color: '#7F00FF',
  },
  {
    title: 'Cyber Security',
    issuer: 'Coursera',
    date: 'Dec 2022',
    link: 'https://coursera.org/verify/JVRVMT279TQR',
    logo: '/portfolio/assets/coursera.png',
    color: '#00D4FF',
  },
  {
    title: 'Machine Learning, AI & Data Science',
    issuer: 'Pakistan Gov (Hunarmand Kamyab Jawan Program)',
    date: 'June 2025',
    link: null,
    logo: '/portfolio/assets/unarmand.png',
    color: '#7F00FF',
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certifications"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 70% 30%, rgba(0, 212, 255, 0.04) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #00D4FF, transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00D4FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            Credentials
          </p>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7F00FF, #00D4FF)' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <CertCard cert={cert} />
                </a>
              ) : (
                <CertCard cert={cert} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({
  cert,
}: {
  cert: {
    title: string;
    issuer: string;
    date: string;
    link: string | null;
    logo: string;
    color: string;
  };
}) {
  return (
    <div
      className="group glass border rounded-2xl p-5 h-full card-hover relative overflow-hidden"
      style={{ borderColor: `${cert.color}20` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${cert.color}08 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Logo or icon */}
          <div
            className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
            style={{ background: `${cert.color}10` }}
          >
            {cert.logo ? (
              <Image
                src={cert.logo}
                alt={cert.issuer}
                width={36}
                height={36}
                className="object-contain w-8 h-8"
                unoptimized
              />
            ) : (
              <Award size={22} style={{ color: cert.color }} />
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{cert.date}</span>
            {cert.link && (
              <ExternalLink
                size={14}
                className="text-gray-600 group-hover:text-[#00D4FF] transition-colors"
              />
            )}
          </div>
        </div>

        <h3 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-[#00D4FF] transition-colors">
          {cert.title}
        </h3>

        <div className="flex items-center gap-2">
          <Award size={12} style={{ color: cert.color }} />
          <span className="text-xs text-gray-400">{cert.issuer}</span>
        </div>

        {cert.link && (
          <div className="mt-3 flex items-center gap-1.5 text-xs font-medium" style={{ color: cert.color }}>
            <span>Verify Certificate</span>
            <ExternalLink size={11} />
          </div>
        )}
      </div>
    </div>
  );
}
