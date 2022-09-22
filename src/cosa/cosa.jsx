import React, { useState } from "react";
import { Field, Formik } from "formik";

import "./cosa.css";
import Multiselect from "../Multiselect/Multiselect";
import Dropdown from "../dropdown/dropdown";

const Cosa = () => {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ];

  const [value, setValue] = useState("");

  return (
    <div className="form__wrapper">
      <Formik
        initialValues={{
          nombres: "",
          apellidos: "",
          correo: "",
          documento: "",
          telefono: "",
          toggle: false,
          multiselectCountry: "",
        }}
        validate={(valores) => {
          let errores = {};

          //Validacion nombre
          if (!valores.nombres) {
            errores.nombres = "* Este campo es requerido";
          } else if (!/^[a-zA-Z\s]*$/.test(valores.nombres)) {
            errores.nombres = "* No carácteres especiales";
          }
          //validacion apellidos
          if (!valores.apellidos) {
            errores.apellidos = "* Este campo es requerido";
          } else if (!/^[a-zA-Z\s]*$/.test(valores.apellidos)) {
            errores.apellidos = "* No carácteres especiales";
          }

          //Validacion documento
          if (!valores.documento) {
            errores.documento = "* Este campo es requerido";
          } else if (!/^\d+$/.test(valores.documento)) {
            errores.documento = "* Solo números";
          } else if (valores.documento.length < 4) {
            errores.documento = "* Minimo 4 digitos";
          }

          //validacion telefono
          if (!valores.telefono) {
            errores.telefono = "* Este campo es requerido";
          } else if (!/^\d+$/.test(valores.telefono)) {
            errores.telefono = "* Solo números";
          } else if (valores.telefono.length < 7) {
            errores.telefono = "* Minimo 7 digitos";
          }

          //validacion correo
          if (!valores.correo) {
            errores.correo = "* Este campo es requerido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "* Correo no valido";
          }

          //validación checkbox terminos y condiciones
          if (!valores.toggle === true) {
            errores.toggle = "* Este campo es requerido";
          }

          //Validando multicheck
          if (valores.multiselectCountry.length === 0) {
            errores.multiselectCountry = "* Este campo es requerido";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log("Henlo");
          console.log(valores);
          resetForm();
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <section className="form__container">
            <div className="grid3 form__title">
              <h2>
                <u>¿Buscas invertir en Colombia?</u> <br /> Regístrate para
                brindarte una asesoría personalizada
              </h2>
              <p className="paragraph">
                Nuestro equipo comercial está facultado para acompañarte en la
                elección de la mejor inversión para ti al momento de comprar
                vivienda.
              </p>
            </div>
            <form action="" className="form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  placeholder="Nombres"
                  value={values.nombres}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                {touched.nombres && errors.nombres && (
                  <div className="errors">{errors.nombres}</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Apellidos"
                  value={values.apellidos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                {touched.apellidos && errors.apellidos && (
                  <div className="errors">{errors.apellidos}</div>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="correo"
                  id="correo"
                  placeholder="Correo electrónico"
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                {touched.correo && errors.correo && (
                  <div className="errors">{errors.correo}</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="documento"
                  id="documento"
                  placeholder="Número de documento"
                  value={values.documento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                {touched.documento && errors.documento && (
                  <div className="errors">{errors.documento}</div>
                )}
              </div>

              <div>
                <Multiselect
                  options={options}
                  value={value}
                  onChange={(o) => setValue(o)}
                  name="multiselectCountry"
                />
              </div>
              <div className="divs">
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  placeholder="Teléfono"
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                {touched.telefono && errors.telefono && (
                  <div className="errors">{errors.telefono}</div>
                )}
              </div>

              <div className="grid2 ">
                <Multiselect
                  options={options}
                  value={value}
                  onChange={(o) => setValue(o)}
                />
              </div>
              <div className="grid2 grid4">
                <Dropdown
                  placeholder="select"
                  multiple
                  items={[
                    {
                      id: "1",
                      value: "some value",
                      disabled: false,
                    },
                    {
                      id: "2",
                      value: "some other value",
                      disabled: false,
                    },
                  ]}
                />
              </div>
              <div className="grid2 grid4">
                <Dropdown
                  placeholder="Medio"
                  multiple
                  items={[
                    {
                      id: "1",
                      value: "some value",
                      disabled: false,
                    },
                    {
                      id: "2",
                      value: "some other value",
                      disabled: false,
                    },
                  ]}
                />
              </div>
              <div className="grid2">
                <Dropdown
                  placeholder="select"
                  name=""
                  multiple
                  items={[
                    {
                      id: "1",
                      value: "some value",
                      disabled: false,
                    },
                    {
                      id: "2",
                      value: "some other value",
                      disabled: false,
                    },
                  ]}
                />
              </div>

              <label className="check grid3">
                <Field
                  type="checkbox"
                  className="checkbox__input"
                  name="toggle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <p className="data__treatment">
                  Autorizo el tratamiento de mis datos personales conforme a las{" "}
                  <a href="name">políticas de privacidad</a> y{" "}
                  <a href="name">los términos y condiciones</a>, los cuales
                  declaro conocer y aceptar.
                </p>
              </label>
              {touched.toggle && errors.toggle && (
                <div className="errors">{errors.toggle}</div>
              )}
              <div className="grid3 button__div">
                <button className="form__button " type="submit">
                  SOLICITAR INFORMACIÓN
                </button>
              </div>
            </form>
          </section>
        )}
      </Formik>
    </div>
  );
};

export default Cosa;
