import React from 'react';
import { Cpu, HardDrive, Shield, Network, Cloud, Terminal, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConceptCard = ({ concepto }) => {
    // Iconos según categoría
    const getIcon = (categoria) => {
        switch (categoria) {
            case 'hardware':
                return <Cpu size={24} />;
            case 'software':
                return <Terminal size={24} />;
            case 'redes':
                return <Network size={24} />;
            case 'seguridad':
                return <Shield size={24} />;
            case 'avanzado':
                return <Cloud size={24} />;
            default:
                return <BookOpen size={24} />;
        }
    };

    // Color de fondo según nivel
    const getBadgeClass = (nivel) => {
        switch (nivel) {
            case 'básico':
                return 'badge-basico';
            case 'intermedio':
                return 'badge-intermedio';
            case 'avanzado':
                return 'badge-avanzado';
            default:
                return 'badge-basico';
        }
    };

    return (
        <div className="card" style={styles.card}>
            <div style={styles.cardHeader}>
                <div style={styles.iconContainer}>
                    {getIcon(concepto.categoria)}
                </div>
                <div>
                    <span className={`badge ${getBadgeClass(concepto.nivel)}`}>
                        {concepto.nivel.toUpperCase()}
                    </span>
                    <span className="badge" style={styles.categoryBadge}>
                        {concepto.categoria.toUpperCase()}
                    </span>
                </div>
            </div>

            <h3 style={styles.cardTitle}>{concepto.titulo}</h3>
            <p style={styles.cardDescription}>{concepto.descripcion}</p>

            <div style={styles.analogyPreview}>
                <h4 style={styles.analogyTitle}>Analogía:</h4>
                <p style={styles.analogyText}>{concepto.analogia.titulo}</p>
                <p style={styles.analogyDesc}>{concepto.analogia.descripcion.substring(0, 100)}...</p>
            </div>

            <div style={styles.examples}>
                <h4 style={styles.examplesTitle}>Ejemplos:</h4>
                <div style={styles.examplesList}>
                    {concepto.ejemplos.slice(0, 2).map((ejemplo, index) => (
                        <span key={index} style={styles.example}>{ejemplo}</span>
                    ))}
                </div>
            </div>

            <div style={styles.cardFooter}>
                <Link to={`/analogias/${concepto.id}`} style={styles.detailsLink}>
                    Ver analogía completa
                </Link>
            </div>
        </div>
    );
};

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '15px',
    },
    iconContainer: {
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        borderRadius: '12px',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4361ee',
    },
    categoryBadge: {
        backgroundColor: '#e9ecef',
        color: '#495057',
    },
    cardTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '12px',
        color: '#212529',
    },
    cardDescription: {
        color: '#6c757d',
        marginBottom: '20px',
        flex: 1,
    },
    analogyPreview: {
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        borderLeft: '4px solid #4cc9f0',
    },
    analogyTitle: {
        fontSize: '0.9rem',
        fontWeight: '600',
        color: '#4cc9f0',
        marginBottom: '5px',
    },
    analogyText: {
        fontWeight: '600',
        marginBottom: '5px',
        color: '#212529',
    },
    analogyDesc: {
        fontSize: '0.9rem',
        color: '#6c757d',
        lineHeight: '1.5',
    },
    examples: {
        marginBottom: '20px',
    },
    examplesTitle: {
        fontSize: '0.9rem',
        fontWeight: '600',
        color: '#495057',
        marginBottom: '8px',
    },
    examplesList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    example: {
        backgroundColor: '#e9ecef',
        padding: '4px 10px',
        borderRadius: '50px',
        fontSize: '0.85rem',
        color: '#495057',
    },
    cardFooter: {
        marginTop: 'auto',
    },
    detailsLink: {
        display: 'inline-block',
        backgroundColor: '#4361ee',
        color: 'white',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        width: '100%',
    },
};

// Estilos adicionales para hover
const hoverStyles = `
  .concept-card .details-link:hover {
    background-color: #3a0ca3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 12, 163, 0.3);
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = hoverStyles;
    document.head.appendChild(styleSheet);
}

export default ConceptCard;