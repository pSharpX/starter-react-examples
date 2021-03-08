import React, { useContext } from 'react';
import AppNavbar from '../navbar/Navbar';
import ScrollerMenu from '../menu/ScrollerMenu';
import DataContext from '../../../context/DataContext';


export default function Header() {

    const [info, setInfo] = useContext(DataContext);

    return (
        <header>
            <div className="container">Hello {info.nombre} {info.apellido} !  </div>
            <button onClick={() => {
                setInfo({
                    nombre: "Carlos",
                    apellido: "Apellidos"
                })
            }}>Modificar Nombre !</button>
            <ScrollerMenu />
            <AppNavbar />
        </header>            
    );
}