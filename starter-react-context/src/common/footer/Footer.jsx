import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Footer() {
  const [data, setData] = useContext(DataContext);

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Place sticky footer content here. Nombre: {data.nombre}.</span>
      </div>
    </footer>
  );
}

export default Footer;
