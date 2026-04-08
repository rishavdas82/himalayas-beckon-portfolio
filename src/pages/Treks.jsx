import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useData } from '../hooks/useData';

export default function Treks() {
  const { data: treks, loading, error } = useData('/data/treks.json');

  return (
    <PageTransition>
      <header className="page-header">
        <img src="/assets/trekking_path.png" alt="Trekking Path" className="page-header-bg" />
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
          <h1>High-Altitude Treks</h1>
        </motion.div>
      </header>

      <section className="content-section">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2>Archive of Curated Trails</h2>
          <p>Our expansive history of treks designed for those seeking raw beauty combined with elite safety standards. We offer paths less traveled, ensuring an intimate experience with the high mountains.</p>
        </motion.div>

        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '6rem', color: 'var(--accent)' }}>
            <h2>Loading secure backend data...</h2>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', marginTop: '6rem', color: 'red' }}>
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className="grid">
            {treks.map((trek, i) => (
              <motion.div 
                className="card" 
                key={trek.id}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img src={trek.img} alt={trek.title} className="card-img" />
                </div>
                <div className="card-content">
                  <span className="meta">{trek.meta}</span>
                  <h3>{trek.title}</h3>
                  <p>{trek.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
