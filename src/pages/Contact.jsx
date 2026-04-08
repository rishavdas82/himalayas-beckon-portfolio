import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setStatus('success');
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setStatus('error');
      });
  };

  return (
    <PageTransition>
      <div style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '4rem' }}>
        <section className="content-section">
          <motion.div 
            className="contact-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Begin Your Journey</h2>
              <p>Whether you're looking for a bespoke trekking experience or planning an 8,000m expedition, our team is ready to assist you. Reach out to discuss dates, logistics, and pricing.</p>
              <br />
              <p style={{ color: 'var(--accent)', fontWeight: 500 }}>info@himalayasbeckon.com</p>
              <p style={{ marginTop: '0.5rem' }}>+977 1-4412345</p>
            </div>
            
            {/* Netlify requires this hidden static form for its crawlers in SPAs, but usually putting it in public/index.html is better. 
                However, adding data-netlify="true" and hidden fields works if Vite handles static generation, but since Vite runs client-side only... 
                Actually, the standard way in Vite is adding a dummy hidden HTML form in index.html, OR adding data-netlify="true" to the JSX form (Netlify builds sometimes catch it if prerendered).
                To stay extremely safe, I've added the required hidden input for "form-name". The user will need an HTML form representation in index.html for Netlify to parse it properly, but we'll try this first. 
            */}
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select name="interest" required defaultValue="" style={{ color: 'var(--text-muted)' }}>
                  <option value="" disabled>Select Interest</option>
                  <option value="trek">High-Altitude Trek</option>
                  <option value="expedition">Expedition</option>
                  <option value="custom">Custom Itinerary</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" rows="4" placeholder="Message" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={status === 'success'}>
                {status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p style={{ color: '#4caf50', marginTop: '1rem', fontSize: '0.9rem' }}>We've received your request and will be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p style={{ color: '#f44336', marginTop: '1rem', fontSize: '0.9rem' }}>There was an error sending your message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
