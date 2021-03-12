import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function Informacion({ location, ...props }) {
  const { name, lastname } = useParams();
  const queryParams = new URLSearchParams(location.search);
  return (
    <div>
      Bienvenido {name} {lastname} !! 
      <p>Informacion adicional:</p>
      <p>Edad:  {queryParams.get("edad")}</p>
      <p>Sexo:  {queryParams.get("sexo")}</p>
    </div>
  );
}
