import React, { useState } from 'react';
import { Cpu, Brain, Home, BookOpen, Lightbulb, BarChart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" style={styles.logoLink} onClick={closeMenu}>
                    <div style={styles.logo}>
                        <img src="/logo.png" alt="Logo" className="logo-icon" />
                        <div>
                            <h1 style={styles.logoTitle}>SistemaLearn</h1>
                            <p style={styles.logoSubtitle}>Aprendizaje de Sistemas Informáticos</p>
                        </div>
                    </div>
                </Link>

                <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                        <Home size={20} />
                        <span>Inicio</span>
                    </Link>
                    <Link to="/conceptos" className={`nav-link ${isActive('/conceptos')}`} onClick={closeMenu}>
                        <BookOpen size={20} />
                        <span>Conceptos</span>
                    </Link>
                    <Link to="/analogias" className={`nav-link ${isActive('/analogias')}`} onClick={closeMenu}>
                        <Lightbulb size={20} />
                        <span>Analogías</span>
                    </Link>
                    {/* <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`} onClick={closeMenu}>
                        <Brain size={20} />
                        <span>Evaluación</span>
                    </Link>
                    <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`} onClick={closeMenu}>
                        <BarChart size={20} />
                        <span>Mi Progreso</span>
                    </Link> */}
                </nav>
            </div>
        </header>
    );
};

const styles = {
    logoLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    logoIcon: {
        color: '#4361ee',
    },
    logoTitle: {
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#3a0ca3',
        margin: 0,
    },
    logoSubtitle: {
        fontSize: '0.9rem',
        color: '#6c757d',
        margin: 0,
    },
};

export default Header;