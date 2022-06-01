/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useValidation = (intialState: any, validar: any, fn: any) => {
  const [valores, setValores] = useState(intialState);
  const [errors, setErrores] = useState({});
  const [solicitud, setSolicitud] = useState(false);

  useEffect(() => {
    if (solicitud) {
      const noHayErrores = Object.keys(errors).length === 0;
      if (noHayErrores) {
        fn();
      }
    }
  }, [errors]);

  const handleChange = (e: any) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
    setErrores({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('🚀 ~ file: entro');
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSolicitud(true);
  };

  return [valores, errors, handleChange, handleSubmit];
};

export default useValidation;