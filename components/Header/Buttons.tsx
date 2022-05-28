import React from "react";
import Link from "next/link";

export interface IButtonsProps {
  isLogged: boolean;
  close: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<IButtonsProps> = ({ isLogged, close }) => {
  return (
    <>
      {isLogged ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <p className="nav-link m-0">
              <strong>Hola: eduardo </strong>
            </p>
          </li>
          <li className="nav-item">
            <button className="mt-1 btn btn-danger btn-sm" onClick={close}>
              Sign Out
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-1">
            <Link href={"/login"}>
              <button className="mt-1 btn btn-success btn-sm">Login</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/crear-cuenta"}>
              <button className="mt-1 btn btn-info btn-sm">Crear cuenta</button>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Buttons;
