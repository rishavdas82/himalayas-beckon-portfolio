import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const slides = [
  { id: 1, img: '/assets/hero_mountains.png', title: 'Answer The Call', sub: 'Elevating the spirit of adventure.' },
  { id: 2, img: '/assets/trekking_path.png', title: 'Beyond Limits', sub: 'Discover high-altitude trails designed for the bold.' },
  { id: 3, img: '/assets/expedition_camp.png', title: 'Uncharted Summits', sub: 'Join our exclusive basecamps under star-filled skies.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* Hero Slider */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          >
            <motion.img 
              src={slides[currentSlide].img} 
              alt={slides[currentSlide].title}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div className="hero-content" style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
            }}>
              <motion.h1 
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
                style={{ fontSize: '1.5rem', color: '#ddd' }}
              >
                {slides[currentSlide].sub}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div style={{ position: 'absolute', bottom: '3rem', right: '4rem', zIndex: 10, display: 'flex', gap: '1rem' }}>
          {slides.map((_, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', cursor: 'pointer',
                background: currentSlide === index ? '#ff5e00' : 'rgba(255,255,255,0.3)',
                transform: currentSlide === index ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <section className="content-section">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
        >
          <h2>About The Club</h2>
          <p>
            Himalaya's Beckon is a premier mountaineering and exploration club dedicating to pushing human limits in the most majestic ranges on Earth. We offer meticulously crafted expeditions and treks tailored for those who demand excellence and a deeper connection with the wilderness.
          </p>
          <Link to="/expeditions" className="cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore Expeditions <ChevronRight size={18} />
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
