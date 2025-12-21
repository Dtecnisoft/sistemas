import React, { useState } from 'react';
import ConceptCard from '../components/ConceptCard';
import Sidebar from '../components/Sidebar';
import { conceptos } from '../data/conceptosData';

const Conceptos = () => {
    const [filtroCategoria, setFiltroCategoria] = useState('all');
    const [filtroNivel, setFiltroNivel] = useState('all');
    const [buscar, setBuscar] = useState('');

    // Filtrar conceptos
    const conceptosFiltrados = conceptos.filter(concepto => {
        const coincideCategoria = filtroCategoria === 'all' || concepto.categoria === filtroCategoria;
        const coincideNivel = filtroNivel === 'all' || concepto.nivel === filtroNivel;
        const coincideBusqueda = concepto.titulo.toLowerCase().includes(buscar.toLowerCase()) ||
            concepto.descripcion.toLowerCase().includes(buscar.toLowerCase());

        return coincideCategoria && coincideNivel && coincideBusqueda;
    });

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="titulo-seccion">Conceptos de Sistemas Informáticos</h1>
                <p className="page-subtitle">
                    Explora {conceptosFiltrados.length} conceptos explicados mediante analogías sencillas.
                    Filtra por categoría o nivel para encontrar lo que necesitas.
                </p>
            </div>

            <div className="contenedor-principal">
                <Sidebar
                    filtroCategoria={filtroCategoria}
                    setFiltroCategoria={setFiltroCategoria}
                    filtroNivel={filtroNivel}
                    setFiltroNivel={setFiltroNivel}
                    buscar={buscar}
                    setBuscar={setBuscar}
                />

                <main className="main-content">
                    {conceptosFiltrados.length === 0 ? (
                        <div className="card no-results">
                            <h3 className="no-results-title">No se encontraron conceptos</h3>
                            <p className="no-results-text">
                                Intenta con otros filtros o términos de búsqueda.
                            </p>
                            <button
                                className="reset-filters-btn"
                                onClick={() => {
                                    setFiltroCategoria('all');
                                    setFiltroNivel('all');
                                    setBuscar('');
                                }}
                            >
                                Restablecer todos los filtros
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="results-info">
                                <p className="results-count">
                                    Mostrando {conceptosFiltrados.length} de {conceptos.length} conceptos
                                </p>
                                {filtroCategoria !== 'all' || filtroNivel !== 'all' || buscar !== '' ? (
                                    <button
                                        className="clear-filters-btn"
                                        onClick={() => {
                                            setFiltroCategoria('all');
                                            setFiltroNivel('all');
                                            setBuscar('');
                                        }}
                                    >
                                        Limpiar filtros
                                    </button>
                                ) : null}
                            </div>

                            <div className="grid-conceptos">
                                {conceptosFiltrados.map(concepto => (
                                    <ConceptCard key={concepto.id} concepto={concepto} />
                                ))}
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Conceptos;