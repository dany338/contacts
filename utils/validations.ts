export const validateLogin = (valores: any) => {
  let errores = {};
  validateEmail(valores.email, errores);
  validatePassword(valores.password, errores);

  return errores;
};

export const validateCreateAccount = (valores: any) => {
  let errores = {};
  validateEmail(valores.email, errores);
  validatePassword(valores.password, errores);
  validateName(valores.name, errores);

  return errores;
};

export const validateCreateContact = (valores: any) => {
  let errores = {};
  validateFirstName(valores.firstName, errores);
  validateLastName(valores.lastName, errores);
  validateEmail(valores.email, errores);
  validatePhone(valores.phone, errores);

  return errores;
};

export const validateSearch = (valores: any) => {
  let errores = {};
  validateQuery(valores.query, errores);

  return errores;
};

const validateEmail = (email: any, errores: any) => {
  if (!email) {
    errores.email = "El email es obligatorio";
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errores.email = "El email no es valido";
    }
  }
};

const validatePassword = (password: any, errores: any) => {
  if (!password) {
    errores.password = "La contraseña es obligatoria";
  } else {
    if (password.length < 6) {
      errores.password = "La contraseña debe tener al menos 6 caracteres";
    }
  }
};

const validateQuery = (query: any, errores: any) => {
  if (!query) {
    errores.query = "The Query is require";
  }
};

const validateName = (name: any, errores: any) => {
  if (!name) {
    errores.name = 'The Name is required';
  }
};

const validateFirstName = (nombre: any, errores: any) => {
  if (!nombre) {
    errores.firstName = 'The First Name is required';
  }
};

const validateLastName = (empresa: any, errores: any) => {
  if (!empresa) {
    errores.lastName = 'The Last Name is required';
  }
};

const validatePhone = (phone: any, errores: any) => {
  if (!phone) {
    errores.phone = 'The phone is required';
  } else {
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
      errores.phone = 'The phone is invalid!';
    }
  }
};
