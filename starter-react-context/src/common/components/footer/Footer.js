import React, { Component, useContext } from 'react';
import DataContext from '../../../context/DataContext';

export default function Footer() {
    const [info, setInfo] = useContext(DataContext);

    return (
        <footer className="footer">
            <div className="container" >
                <span className="text-muted">Nombre: {info.nombre}.</span>
            </div>
        </footer>
    );
}