import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cpu, ChevronRight, BookOpen, Lightbulb, Target, CheckCircle } from 'lucide-react';
import { conceptos } from '../data/conceptosData';

const Analogias = () => {
    const { id } = useParams();
    const [conceptoCompletado, setConceptoCompletado] = useState({});

    // Si hay un ID en la URL, mostrar ese concepto específico
    const conceptoSeleccionado = id
        ? conceptos.find(c => c.id === parseInt(id))
        : null;

    // Si no hay ID, mostrar la lista de conceptos con sus analogías
    if (!conceptoSeleccionado) {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 className="titulo-seccion">Analogías Explicadas</h1>
                    <p style={styles.subtitle}>
                        Cada analogía transforma un concepto técnico complejo en una situación
                        de la vida real fácil de entender. Haz clic en cualquier concepto para ver su analogía completa.
                    </p>
                </div>

                <div className="analogias-grid">
                    {conceptos.map(concepto => (
                        <div key={concepto.id} className="card" style={styles.analogiaCard}>
                            <div style={styles.cardHeader}>
                                <div style={styles.iconContainer}>
                                    <Cpu size={24} />
                                </div>
                                <div style={styles.cardTitleContainer}>
                                    <h3 style={styles.cardTitle}>{concepto.titulo}</h3>
                                    <p style={styles.cardCategory}>{concepto.categoria} • {concepto.nivel}</p>
                                </div>
                                {conceptoCompletado[concepto.id] && (
                                    <CheckCircle size={20} style={styles.completedIcon} />
                                )}
                            </div>

                            <div style={styles.analogySection}>
                                <h4 style={styles.sectionTitle}>
                                    <Lightbulb size={18} />
                                    <span>Analogía: {concepto.analogia.titulo}</span>
                                </h4>
                                <p style={styles.analogyDescription}>
                                    {concepto.analogia.descripcion}
                                </p>

                                <div style={styles.analogyDetails}>
                                    <h5 style={styles.detailsTitle}>Cómo se relaciona:</h5>
                                    <ul style={styles.detailsList}>
                                        {concepto.analogia.detalles.map((detalle, index) => (
                                            <li key={index} style={styles.detailItem}>
                                                <ChevronRight size={16} style={styles.bulletIcon} />
                                                {detalle}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div style={styles.cardFooter}>
                                <div style={styles.technicalInfo}>
                                    <h5 style={styles.techTitle}>
                                        <Target size={18} />
                                        <span>Detalles Técnicos</span>
                                    </h5>
                                    <p style={styles.techDescription}>{concepto.detallesTecnicos}</p>
                                </div>

                                <div style={styles.actions}>
                                    <button
                                        style={styles.completeButton}
                                        onClick={() => setConceptoCompletado(prev => ({
                                            ...prev,
                                            [concepto.id]: !prev[concepto.id]
                                        }))}
                                    >
                                        {conceptoCompletado[concepto.id] ? '✓ Completado' : 'Marcar como completado'}
                                    </button>
                                    <Link to={`/analogias/${concepto.id}`} style={styles.detailsLink}>
                                        Ver detalles completos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Vista detallada de una analogía específica
    return (
        <div style={styles.container}>
            <div style={styles.breadcrumb}>
                <Link to="/analogias" style={styles.breadcrumbLink}>
                    Analogías
                </Link>
                <ChevronRight size={16} />
                <span style={styles.breadcrumbCurrent}>{conceptoSeleccionado.titulo}</span>
            </div>

            <div className="card detailed-card">
                <div className="detailed-header">
                    <div>
                        <h1 style={styles.detailedTitle}>{conceptoSeleccionado.titulo}</h1>
                        <p style={styles.detailedDescription}>{conceptoSeleccionado.descripcion}</p>
                        <div style={styles.tags}>
                            <span className={`badge badge-${conceptoSeleccionado.nivel}`}>
                                {conceptoSeleccionado.nivel.toUpperCase()}
                            </span>
                            <span className="badge" style={styles.categoryBadge}>
                                {conceptoSeleccionado.categoria.toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <button
                        style={styles.completeDetailedButton}
                        onClick={() => setConceptoCompletado(prev => ({
                            ...prev,
                            [conceptoSeleccionado.id]: !prev[conceptoSeleccionado.id]
                        }))}
                    >
                        {conceptoCompletado[conceptoSeleccionado.id] ? (
                            <>
                                <CheckCircle size={20} />
                                <span>Concepto Completado</span>
                            </>
                        ) : (
                            <>
                                <BookOpen size={20} />
                                <span>Marcar como Completado</span>
                            </>
                        )}
                    </button>
                </div>

                <div style={styles.detailedContent}>
                    <section style={styles.detailedSection}>
                        <h2 style={styles.sectionHeading}>
                            <Lightbulb size={24} />
                            <span>Analogía: {conceptoSeleccionado.analogia.titulo}</span>
                        </h2>
                        <p style={styles.analogyFullDescription}>
                            {conceptoSeleccionado.analogia.descripcion}
                        </p>

                        <div className="comparison-table">
                            <div className="comparison-row">
                                <div className="comparison-header">
                                    <h4>Elemento de la Analogía</h4>
                                    <p>Corresponde a...</p>
                                </div>
                                <div className="comparison-header">
                                    <h4>En Sistemas Informáticos</h4>
                                    <p>Es equivalente a...</p>
                                </div>
                            </div>

                            {conceptoSeleccionado.analogia.detalles.map((detalle, index) => (
                                <div key={index} className="comparison-row">
                                    <div className="comparison-cell">
                                        <strong>{detalle.split(':')[0] || `Parte ${index + 1}`}</strong>
                                    </div>
                                    <div className="comparison-cell">
                                        {detalle.split(':')[1] || detalle}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section style={styles.detailedSection}>
                        <h2 style={styles.sectionHeading}>
                            <Target size={24} />
                            <span>Detalles Técnicos</span>
                        </h2>
                        <p style={styles.technicalFullDescription}>
                            {conceptoSeleccionado.detallesTecnicos}
                        </p>

                        <div style={styles.examplesSection}>
                            <h3 style={styles.examplesTitle}>Ejemplos Prácticos:</h3>
                            <div style={styles.examplesGrid}>
                                {conceptoSeleccionado.ejemplos.map((ejemplo, index) => (
                                    <div key={index} style={styles.exampleCard}>
                                        <div style={styles.exampleNumber}>{index + 1}</div>
                                        <p style={styles.exampleText}>{ejemplo}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div style={styles.navigationButtons}>
                        <Link to="/analogias" style={styles.backButton}>
                            ← Volver a todas las analogías
                        </Link>
                        {conceptoSeleccionado.id > 1 && (
                            <Link
                                to={`/analogias/${conceptoSeleccionado.id - 1}`}
                                style={styles.navButton}
                            >
                                ← Concepto anterior
                            </Link>
                        )}
                        {conceptoSeleccionado.id < conceptos.length && (
                            <Link
                                to={`/analogias/${conceptoSeleccionado.id + 1}`}
                                style={styles.navButton}
                            >
                                Siguiente concepto →
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '40px',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#6c757d',
        maxWidth: '800px',
    },
    analogiasGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    analogiaCard: {
        transition: 'all 0.3s ease',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #f1f3f5',
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
    cardTitleContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '5px',
        color: '#212529',
    },
    cardCategory: {
        fontSize: '0.9rem',
        color: '#6c757d',
    },
    completedIcon: {
        color: '#4caf50',
    },
    analogySection: {
        marginBottom: '25px',
    },
    sectionTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '15px',
        color: '#4361ee',
    },
    analogyDescription: {
        color: '#495057',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    analogyDetails: {
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
    },
    detailsTitle: {
        fontWeight: '600',
        marginBottom: '15px',
        color: '#495057',
    },
    detailsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    detailItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        marginBottom: '10px',
        color: '#495057',
        lineHeight: '1.5',
    },
    bulletIcon: {
        color: '#4cc9f0',
        flexShrink: 0,
        marginTop: '3px',
    },
    cardFooter: {
        paddingTop: '20px',
        borderTop: '1px solid #f1f3f5',
    },
    technicalInfo: {
        marginBottom: '20px',
    },
    techTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#495057',
    },
    techDescription: {
        color: '#6c757d',
        fontSize: '0.95rem',
        lineHeight: '1.6',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    completeButton: {
        padding: '10px 20px',
        backgroundColor: 'transparent',
        color: '#4361ee',
        border: '2px solid #4361ee',
        borderRadius: '6px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    detailsLink: {
        color: '#4361ee',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    breadcrumb: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '30px',
        fontSize: '0.95rem',
        color: '#6c757d',
    },
    breadcrumbLink: {
        color: '#4361ee',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    },
    breadcrumbCurrent: {
        fontWeight: '500',
        color: '#495057',
    },
    detailedCard: {
        padding: '40px',
    },
    detailedHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '40px',
        paddingBottom: '30px',
        borderBottom: '1px solid #f1f3f5',
    },
    detailedTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '15px',
        color: '#212529',
    },
    detailedDescription: {
        fontSize: '1.2rem',
        color: '#6c757d',
        marginBottom: '20px',
        maxWidth: '800px',
    },
    tags: {
        display: 'flex',
        gap: '10px',
    },
    categoryBadge: {
        backgroundColor: '#e9ecef',
        color: '#495057',
    },
    completeDetailedButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 24px',
        backgroundColor: '#4361ee',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    detailedContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    detailedSection: {
        paddingBottom: '30px',
        borderBottom: '1px solid #f1f3f5',
    },
    sectionHeading: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '25px',
        color: '#3a0ca3',
    },
    analogyFullDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.7',
        color: '#495057',
        marginBottom: '30px',
    },
    comparisonTable: {
        border: '1px solid #e9ecef',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    comparisonRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid #e9ecef',
    },
    comparisonHeader: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #e9ecef',
    },
    comparisonCell: {
        padding: '20px',
        borderRight: '1px solid #e9ecef',
    },
    technicalFullDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.7',
        color: '#495057',
        marginBottom: '30px',
    },
    examplesSection: {
        marginTop: '30px',
    },
    examplesTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#495057',
    },
    examplesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
    exampleCard: {
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'flex-start',
    },
    exampleNumber: {
        backgroundColor: '#4361ee',
        color: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        flexShrink: 0,
    },
    exampleText: {
        color: '#495057',
        lineHeight: '1.5',
    },
    navigationButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        marginTop: '20px',
    },
    backButton: {
        color: '#4361ee',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    navButton: {
        padding: '10px 20px',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        color: '#4361ee',
        textDecoration: 'none',
        borderRadius: '6px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
};

// Estilos adicionales para hover
const hoverStyles = `
  .analogias .complete-button:hover {
    background-color: rgba(67, 97, 238, 0.1);
  }
  
  .analogias .details-link:hover {
    color: #3a0ca3;
  }
  
  .analogias .breadcrumb-link:hover {
    color: #3a0ca3;
    text-decoration: underline;
  }
  
  .analogias .complete-detailed-button:hover {
    background-color: #3a0ca3;
    transform: translateY(-2px);
  }
  
  .analogias .back-button:hover {
    color: #3a0ca3;
  }
  
  .analogias .nav-button:hover {
    background-color: rgba(67, 97, 238, 0.2);
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = hoverStyles;
    document.head.appendChild(styleSheet);
}

export default Analogias;