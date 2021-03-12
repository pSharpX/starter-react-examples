import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function UsuarioPerfil({ location, match, ...props }) {
  const name = match.params.name;
  return <div>Perfil {name} !!</div>;
}
