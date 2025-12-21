import React from 'react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerSection}>
                    <div style={styles.footerLogo}>
                        <Cpu size={24} style={styles.footerIcon} />
                        <h3 style={styles.footerTitle}>SistemaLearn</h3>
                    </div>
                    <p style={styles.footerText}>
                        Plataforma educativa para aprender conceptos de sistemas informáticos
                        a través de analogías sencillas y ejemplos prácticos.
                    </p>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Enlaces Rápidos</h4>
                    <ul style={styles.footerLinks}>
                        <li><a href="/conceptos" style={styles.footerLink}>Conceptos</a></li>
                        <li><a href="/analogias" style={styles.footerLink}>Analogías</a></li>
                        <li><a href="/quiz" style={styles.footerLink}>Evaluación</a></li>
                        <li><a href="/dashboard" style={styles.footerLink}>Mi Progreso</a></li>
                    </ul>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Categorías</h4>
                    <ul style={styles.footerLinks}>
                        <li><a href="/conceptos?categoria=hardware" style={styles.footerLink}>Hardware</a></li>
                        <li><a href="/conceptos?categoria=software" style={styles.footerLink}>Software</a></li>
                        <li><a href="/conceptos?categoria=redes" style={styles.footerLink}>Redes</a></li>
                        <li><a href="/conceptos?categoria=seguridad" style={styles.footerLink}>Seguridad</a></li>
                    </ul>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Conéctate</h4>
                    <div style={styles.socialLinks}>
                        <a href="#" style={styles.socialLink} aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="#" style={styles.socialLink} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" style={styles.socialLink} aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p style={styles.copyright}>
                        © {new Date().getFullYear()} SistemaLearn. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#3a0ca3',
        color: 'white',
        padding: '40px 20px 20px',
        marginTop: '60px',
    },
    footerContent: {
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
    },
    footerSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    footerLogo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px',
    },
    footerIcon: {
        color: '#4cc9f0',
    },
    footerTitle: {
        fontSize: '1.5rem',
        margin: 0,
    },
    footerText: {
        lineHeight: '1.6',
        opacity: '0.9',
        fontSize: '0.95rem',
    },
    footerHeading: {
        fontSize: '1.2rem',
        marginBottom: '20px',
        position: 'relative',
        paddingBottom: '10px',
    },
    footerLinks: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        padding: '8px 0',
        opacity: '0.9',
        transition: 'opacity 0.3s ease',
    },
    socialLinks: {
        display: 'flex',
        gap: '15px',
        marginBottom: '25px',
    },
    socialLink: {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
    },
    copyright: {
        fontSize: '0.9rem',
        opacity: '0.8',
        marginTop: '10px',
    },
};

// Estilos adicionales para hover
const hoverStyles = `
  .footer a:hover {
    opacity: 1;
  }
  
  .footer .social-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = hoverStyles;
    document.head.appendChild(styleSheet);
}

export default Footer;