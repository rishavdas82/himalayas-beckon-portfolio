import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useData } from '../hooks/useData';

export default function Expeditions() {
  const { data: expeditions, loading, error } = useData('/data/expeditions.json');

  return (
    <PageTransition>
      <header className="page-header">
        <img src="/assets/expedition_camp.png" alt="Expedition Camp" className="page-header-bg" />
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
          <h1>Elite Expeditions</h1>
        </motion.div>
      </header>

      <section className="content-section">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2>Conquer The Giants</h2>
          <p>We boast a massive archive of 8000m+ and 7000m+ ascents. With a 1:1 Sherpa ratio and premium logistics, we maximize your chance of a safe and successful summit across the Himalayan range.</p>
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
            {expeditions.map((exp, i) => (
              <motion.div 
                className="card" 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img src={exp.img} alt={exp.title} className="card-img" />
                </div>
                <div className="card-content">
                  <span className="meta">{exp.meta}</span>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
