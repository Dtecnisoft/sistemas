import React, { useState } from 'react';
import { Filter, Search, Book, Target, Clock, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { categorias, niveles } from '../data/conceptosData';

const Sidebar = ({ filtroCategoria, setFiltroCategoria, filtroNivel, setFiltroNivel, buscar, setBuscar }) => {
    const [progreso, setProgreso] = useState({
        completados: 3,
        total: 8,
        tiempoEstudio: '2h 30m',
        nivelActual: 'Principiante'
    });
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <aside className="sidebar">
            {/* Mobile Toggle Button */}
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Filter size={20} />
                    <span>Filtros y Progreso</span>
                </div>
                {isMobileOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <div className={`sidebar-content ${isMobileOpen ? 'open' : ''}`}>
                <div className="card sidebar-card">
                    <h3 className="sidebar-title">
                        <Filter size={20} />
                        <span>Filtros</span>
                    </h3>

                    <div className="filter-section">
                        <label className="filter-label">
                            <Search size={16} />
                            Buscar concepto
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: CPU, RAM, firewall..."
                            value={buscar}
                            onChange={(e) => setBuscar(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-section">
                        <h4 className="filter-subtitle">Categorías</h4>
                        <div className="filter-options">
                            {categorias.map((categoria) => (
                                <button
                                    key={categoria.id}
                                    onClick={() => setFiltroCategoria(categoria.id)}
                                    className={`filter-option ${filtroCategoria === categoria.id ? 'active' : ''}`}
                                >
                                    {categoria.nombre}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <h4 className="filter-subtitle">Nivel de dificultad</h4>
                        <div className="filter-options">
                            {niveles.map((nivel) => (
                                <button
                                    key={nivel.id}
                                    onClick={() => setFiltroNivel(nivel.id)}
                                    className={`filter-option ${filtroNivel === nivel.id ? 'active' : ''}`}
                                >
                                    {nivel.nombre}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card sidebar-card">
                    <h3 className="sidebar-title">
                        <Target size={20} />
                        <span>Mi Progreso</span>
                    </h3>

                    <div className="progress-section">
                        <div className="progress-item">
                            <Book size={16} />
                            <div className="progress-info">
                                <span className="progress-label">Conceptos completados</span>
                                <span className="progress-value">
                                    {progreso.completados}/{progreso.total}
                                </span>
                            </div>
                        </div>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${(progreso.completados / progreso.total) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-item">
                            <Clock size={16} />
                            <div className="progress-info">
                                <span className="progress-label">Tiempo de estudio</span>
                                <span className="progress-value">{progreso.tiempoEstudio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-item">
                            <Award size={16} />
                            <div className="progress-info">
                                <span className="progress-label">Nivel actual</span>
                                <span className="progress-value">{progreso.nivelActual}</span>
                            </div>
                        </div>
                    </div>

                    <button className="reset-button" onClick={() => {
                        setFiltroCategoria('all');
                        setFiltroNivel('all');
                        setBuscar('');
                    }}>
                        Restablecer filtros
                    </button>
                </div>

                <div className="card tip-card">
                    <h4 className="tip-title">💡 Tip de aprendizaje</h4>
                    <p className="tip-text">
                        Las analogías son herramientas poderosas para entender conceptos complejos.
                        Relaciona cada concepto informático con situaciones de la vida cotidiana
                        para facilitar su comprensión y memorización.
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;