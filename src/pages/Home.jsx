import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Users, BookOpen, ArrowRight, Brain, Target, Star } from 'lucide-react';
import ConceptCard from '../components/ConceptCard';
import { conceptos } from '../data/conceptosData';

const Home = () => {
    const conceptosDestacados = conceptos.slice(0, 3);

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section className="hero-section">
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        Aprende <span style={styles.heroHighlight}>Sistemas Informáticos</span>
                        <br />con Analogías Sencillas
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Transformamos conceptos complejos en ideas fáciles de entender
                        usando comparaciones de la vida real. Perfecto para principiantes
                        y estudiantes de tecnología.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/conceptos" className="btn btn-primary" style={styles.ctaButton}>
                            Explorar Conceptos
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/analogias" className="btn btn-secondary">
                            Ver Analogías
                        </Link>
                    </div>
                </div>
                <div className="hero-illustration">
                    <div style={styles.illustrationContainer}>
                        <Cpu size={80} style={styles.illustrationIcon} />
                        <div style={styles.illustrationText}>CPU</div>
                    </div>
                    <div style={styles.illustrationArrow}>→</div>
                    <div style={styles.illustrationContainer}>
                        <Brain size={80} style={styles.illustrationIcon} />
                        <div style={styles.illustrationText}>Analogía</div>
                    </div>
                    <div style={styles.illustrationArrow}>→</div>
                    <div style={styles.illustrationContainer}>
                        <BookOpen size={80} style={styles.illustrationIcon} />
                        <div style={styles.illustrationText}>Comprensión</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={styles.featuresSection}>
                <h2 className="titulo-seccion">¿Por qué aprender con analogías?</h2>
                <div className="features-grid">
                    <div className="card" style={styles.featureCard}>
                        <div style={styles.featureIcon}>
                            <Brain size={32} />
                        </div>
                        <h3 style={styles.featureTitle}>Fácil Comprensión</h3>
                        <p style={styles.featureText}>
                            Relacionamos conceptos técnicos con situaciones cotidianas que ya conoces,
                            haciendo el aprendizaje más intuitivo.
                        </p>
                    </div>

                    <div className="card" style={styles.featureCard}>
                        <div style={styles.featureIcon}>
                            <Zap size={32} />
                        </div>
                        <h3 style={styles.featureTitle}>Aprendizaje Rápido</h3>
                        <p style={styles.featureText}>
                            Estudia a tu propio ritmo con explicaciones claras y concisas.
                            Domina conceptos complejos en menos tiempo.
                        </p>
                    </div>

                    <div className="card" style={styles.featureCard}>
                        <div style={styles.featureIcon}>
                            <Users size={32} />
                        </div>
                        <h3 style={styles.featureTitle}>Para Todos los Niveles</h3>
                        <p style={styles.featureText}>
                            Desde principiantes hasta avanzados, nuestros contenidos están
                            adaptados a diferentes niveles de conocimiento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Concepts */}
            <section style={styles.conceptsSection}>
                <div style={styles.sectionHeader}>
                    <h2 className="titulo-seccion">Conceptos Destacados</h2>
                    <Link to="/conceptos" style={styles.seeAllLink}>
                        Ver todos <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid-conceptos">
                    {conceptosDestacados.map(concepto => (
                        <ConceptCard key={concepto.id} concepto={concepto} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section style={styles.ctaSection}>
                <div className="card cta-card">
                    <div style={styles.ctaContent}>
                        <h2 style={styles.ctaTitle}>Comienza tu viaje de aprendizaje hoy</h2>
                        <p style={styles.ctaText}>
                            Únete a miles de estudiantes que ya están dominando los conceptos
                            de sistemas informáticos de una manera más simple y efectiva.
                        </p>
                        <Link to="/conceptos" className="btn btn-primary" style={styles.ctaButton}>
                            Empezar a Aprender Gratis
                        </Link>
                    </div>
                    <div className="cta-illustration">
                        <Target size={120} style={styles.ctaIcon} />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={styles.statsSection}>
                <div style={styles.statsGrid}>
                    <div style={styles.statItem}>
                        <Star size={24} style={styles.statIcon} />
                        <div style={styles.statContent}>
                            <h3 style={styles.statNumber}>8+</h3>
                            <p style={styles.statLabel}>Conceptos Explicados</p>
                        </div>
                    </div>
                    <div style={styles.statItem}>
                        <BookOpen size={24} style={styles.statIcon} />
                        <div style={styles.statContent}>
                            <h3 style={styles.statNumber}>16+</h3>
                            <p style={styles.statLabel}>Analogías Únicas</p>
                        </div>
                    </div>
                    <div style={styles.statItem}>
                        <Users size={24} style={styles.statIcon} />
                        <div style={styles.statContent}>
                            <h3 style={styles.statNumber}>3</h3>
                            <p style={styles.statLabel}>Niveles de Dificultad</p>
                        </div>
                    </div>
                    <div style={styles.statItem}>
                        <Zap size={24} style={styles.statIcon} />
                        <div style={styles.statContent}>
                            <h3 style={styles.statNumber}>100%</h3>
                            <p style={styles.statLabel}>Gratuito</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heroSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        marginBottom: '80px',
        padding: '40px 0',
    },
    heroContent: {
        paddingRight: '20px',
    },
    heroTitle: {
        fontSize: '3rem',
        fontWeight: '800',
        lineHeight: '1.2',
        marginBottom: '20px',
        color: '#212529',
    },
    heroHighlight: {
        color: '#4361ee',
        position: 'relative',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#6c757d',
        marginBottom: '30px',
    },
    heroButtons: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    ctaButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    heroIllustration: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
    },
    illustrationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
    },
    illustrationIcon: {
        color: '#4361ee',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        padding: '20px',
        borderRadius: '20px',
    },
    illustrationText: {
        fontWeight: '600',
        color: '#3a0ca3',
    },
    illustrationArrow: {
        fontSize: '2rem',
        color: '#4cc9f0',
        fontWeight: '300',
    },
    featuresSection: {
        marginBottom: '80px',
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
    },
    featureCard: {
        textAlign: 'center',
        padding: '30px',
    },
    featureIcon: {
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        color: '#4361ee',
    },
    featureTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '15px',
        color: '#212529',
    },
    featureText: {
        color: '#6c757d',
        lineHeight: '1.6',
    },
    conceptsSection: {
        marginBottom: '80px',
    },
    sectionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
    },
    seeAllLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: '#4361ee',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    ctaSection: {
        marginBottom: '80px',
    },
    ctaCard: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
        backgroundColor: '#3a0ca3',
        color: 'white',
    },
    ctaContent: {
        padding: '20px',
    },
    ctaTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '20px',
        lineHeight: '1.3',
    },
    ctaText: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        opacity: '0.9',
        marginBottom: '30px',
    },
    ctaIllustration: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
    },
    ctaIcon: {
        color: '#4cc9f0',
        opacity: '0.8',
    },
    statsSection: {
        marginBottom: '60px',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
    },
    statItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    statIcon: {
        color: '#4361ee',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        padding: '15px',
        borderRadius: '12px',
    },
    statContent: {
        flex: 1,
    },
    statNumber: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#3a0ca3',
        marginBottom: '5px',
    },
    statLabel: {
        color: '#6c757d',
        fontSize: '0.95rem',
    },
};

// Estilos adicionales para hover
const hoverStyles = `
  .home .see-all-link:hover {
    gap: 10px;
    color: #3a0ca3;
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = hoverStyles;
    document.head.appendChild(styleSheet);
}

export default Home;