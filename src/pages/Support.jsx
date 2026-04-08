import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const bgImages = [
  '/assets/trekking_path.png',
  '/assets/expedition_camp.png',
  '/assets/hero_mountains.png'
];

export default function Support() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
        
        {/* Background Sliding Gallery */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
          >
            <motion.img 
              src={bgImages[currentSlide]} 
              alt="Himalayan Background"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} 
            />
          </motion.div>
        </AnimatePresence>

        {/* Mission Statement Overlay */}
        <div style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem',
          textAlign: 'center',
        }}>
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              maxWidth: '800px',
              background: 'rgba(5, 5, 5, 0.4)',
              backdropFilter: 'blur(10px)',
              padding: '4rem',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px'
            }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--accent)' }}>
              Our Mission
            </h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#f0f0f0', marginBottom: '2rem', maxWidth: '100%' }}>
              To foster a deep, enduring connection between humanity and the majesty of the high mountains. We believe that stepping beyond the boundaries of comfort into the untamed wilderness builds character, resilience, and a profound respect for our natural world. By organizing elite, sustainable expeditions, we strive to protect these sacred environments while guiding our members to the summit of their potential.
            </p>
            
            <a href="/contact" className="cta">Join The Cause</a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
