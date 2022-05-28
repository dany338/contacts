import { useState, useContext, useEffect } from "react";
import Botones from "./Buttons";
import Buscador from "./Search";
import Navegacion from "./Navegacion";

import { AuthContext } from "../../redux/auth";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { state, cerrar } = useContext(AuthContext);

  useEffect(() => {
    if (state.userInfo) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [state]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <div className="collapse navbar-collapse">
        <Buscador />
        <Navegacion isLogged={isLogged} />
        <Botones isLogged={isLogged} close={() => cerrar()} />
      </div>
    </nav>
  );
};

export default Header;
