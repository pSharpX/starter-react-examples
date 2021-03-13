import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./App.css";
import DataContextProvider from "./context/DataContext";
import Contactos from "./example/Contactos";
import Nosotros from "./example/Nosotros";
import Informacion from "./example/Informacion";
import UsuarioPerfil from "./example/UsuarioPerfil";
import UsuarioPublico from "./example/UsuarioPublico";

function App2() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink to="/contactos" className="pr-2">
              Contactos
            </NavLink>
            <Link to="/about" className="pr-2">
              Nosotros
            </Link>
            <Link to="/usuario/publico" className="pr-2">
              Acceso Publico
            </Link>
            <Link
              className="pr-2"
              to={{
                pathname: "/informacion/christian/rivera",
                search: "?edad=20&sexo=M",
              }}
              replace
            >
              Perfil Christian
            </Link>
          </header>

          <div className="container mt-4">
            <Switch>
              <Route
                path="/informacion/:name/:lastname"
                component={Informacion}
              />
              <Route path="/contactos" component={Contactos} />
              <Route
                path="/about"
                render={({ history, location, match }) => (
                  <Nosotros
                    somos="Empresa Rimac"
                    history={history}
                    location={location}
                    match={match}
                  />
                )}
              />
              <Route path="/usuario/publico" component={UsuarioPublico} />
              <Route path="/usuario/:name" component={UsuarioPerfil} />
              <Route
                path="*"
                render={() => <div>Ruta no encontrada - 404</div>}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App2;
