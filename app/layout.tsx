import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yasir Ahmad Malik | AI Engineer & Flutter Developer',
  description:
    'Portfolio of Yasir Ahmad Malik — Junior AI Engineer & Flutter Developer based in Lahore, Pakistan. Specializing in Python, TensorFlow, Computer Vision, FastAPI, and Flutter mobile development.',
  keywords: [
    'Yasir Ahmad Malik',
    'AI Engineer',
    'Flutter Developer',
    'Machine Learning',
    'Computer Vision',
    'Python Developer',
    'Lahore Pakistan',
    'Portfolio',
  ],
  authors: [{ name: 'Yasir Ahmad Malik' }],
  openGraph: {
    title: 'Yasir Ahmad Malik | AI Engineer & Flutter Developer',
    description:
      'Portfolio of Yasir Ahmad Malik — Junior AI Engineer & Flutter Developer based in Lahore, Pakistan.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0D0D0D] text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
