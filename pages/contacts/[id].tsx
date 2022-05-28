/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../Layout";

import useContact from "../../hooks/useContact";

import firebase from "../../firebase";
import Contact from "../../entities/Contact";

export interface IContactProps {
  contact: Contact;
}

const Contacts: React.FC<IContactProps> = ({ contact }) => {
  const [ myContact ] = useContact(contact);
  console.log(myContact);

  return (
    <Layout>
      <section className="row">
        <div className="col-md-12 mt-4">
          <h4 className="text-center">
            GANARAS MÁS CONOCIMIENTOS Y EXPERIENCIAS
          </h4>
        </div>
        <div className="col-md-6">
          <small className="text-muted">
            Publicado hace alrededor de 12 horas
          </small>
          <img
            src="https://www.academiamoviles.com/viewsAM/fotosCursos/274-set-iosav.jpg"
            className="img-fluid"
            alt="Responsive image"
          />
          <h4 className="mt-2">Agregar comentario</h4>
          <form className="row">
            <div className="col-9">
              <input type="text" className="form-control" name="mensaje" />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary btn-block">
                Agregar
              </button>
            </div>
          </form>
          <h4 className="mt-3">Comentarios</h4>
          <p>Se el primero en dejar tu comentario</p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12">
              <div className="mt-4">
                <a
                  href="https://www.academiamoviles.com/view/cursos_desarrollo.php?idlp=208&amp;param=mnu%3EiOS%20con%20Swift%205%20(Avanzado)"
                  target="_blank"
                  type="button"
                  className="btn btn-info" rel="noreferrer"
                >
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                  ir a la página oficial
                </a>
              </div>
              <div className="mt-3">
                <button type="button" className="btn btn-danger mr-2">
                  Me gusta <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                </button>
                <span
                  className="badge badge-primary"
                  style={{ fontSize: "20px" }}
                >
                  0 <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                </span>
              </div>
              <div></div>
            </div>
            <div className="col-12 mt-2">
              <h4>
                Descripción{" "}
                <small className="text-muted">
                  (empresa: Academias moviles)
                </small>
              </h4>
              <small className="text-muted">(publicado por : eduardo)</small>
              <p>
                Este curso Avanzado está orientado a todo programador iOS, que
                desee incrementar sus conocimientos y buenas prácticas usadas
                por nuestros instructores en sus aplicaciones de calidad y nivel
                internacional.
              </p>
            </div>
            <div className="col-md-12">
              <button className="btn btn-danger btn-block">
                Eliminar Producto{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const doc = await firebase.db.collection("cursos").doc(id);

  const curso = await doc.get();

  return {
    props: {
      curso: curso.data(),
    },
  };

  console.log("el parametro es: ", params);

  return {
    props: {}, // will be passed to the page component as props
  };
}
