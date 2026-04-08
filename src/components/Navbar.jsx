import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treks', path: '/treks' },
    { name: 'Expeditions', path: '/expeditions' },
    { name: 'Support Us', path: '/support' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
          background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.6)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.5s ease',
          boxSizing: 'border-box'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{
            fontWeight: 600,
            fontSize: '1.2rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#f0f0f0'
          }}>
            Himalaya's Beckon
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-only" style={{ display: 'flex', gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                color: location.pathname === link.path ? '#ff5e00' : '#f0f0f0',
                textDecoration: 'none',
                fontWeight: 300,
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                transition: 'color 0.3s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className="mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ cursor: 'pointer', zIndex: 101, display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
          <div style={{ width: '25px', height: '2px', backgroundColor: '#f0f0f0', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#f0f0f0', opacity: mobileMenuOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#f0f0f0', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="mobile-only"
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100%', height: '100vh',
              background: 'rgba(5, 5, 5, 0.98)',
              zIndex: 99,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '2.5rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: location.pathname === link.path ? '#ff5e00' : '#f0f0f0',
                    textDecoration: 'none',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    fontSize: '1.5rem',
                    letterSpacing: '2px'
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
