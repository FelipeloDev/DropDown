import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Multiselect } from "multiselect-react-dropdown";

const Formulario = () => {
  const [country, setCountry] = useState([
    "Colombia (+57)",
    "Estados Unidos (+1)",
    "Panamá (+507)",
  ]);

  const [wayOfContact, setWayOfContact] = useState([
    "WhatsApp",
    "Llamada telefónica",
    "Video conferencia",
    "Correo electrónico",
  ]);
  const [whenContact, serWhenContact] = useState([
    "En cualquier momento",
    "Ahora mismo",
    "Esta noche",
    "Mañana",
    "En dos días",
    "En una semana",
  ]);

  const [regionOfInteres, setRegionOfInteres] = useState([
    "Antioquia",
    "Cundinamarca",
    "Caribe",
  ]);

  const [typeOfInvestment, setTypeOfInvestment] = useState([
    "Vivienda de retiro",
    "Vivienda vacacional",
    "Inversion en propiedad raíz",
    "Vivienda familiar",
  ]);

  return (
    <div>
      <Formik
        initialValues={{
          nombres: "",
          apellidos: "",
          documento: "",
          email: "",
          telefono: "",
        }}
        onSubmit={() => {
          console.log("hola");
          console.log("hola2");
        }}
        validate={(valors) => {
          let errors = {};

          //Validacion nombres
          if (!valors.nombres) {
            errors.nombres = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valors.nombres)) {
            errors.nombres = "El nombre solo puede contener letras y espacios";
          }

          //Validacion apellidos
          if (!valors.apellidos) {
            errors.apellidos = "Por favor ingresa un apellido";
          } else if (!/^[a-zA-Z\s]*$/.test(valors.apellidos)) {
            errors.apellidos =
              "El apellido solo puede contener letras y espacios";
          }

          if (!valors.documento) {
            errors.documento = "Por favor ingresa un número de documento";
          } else if (!/^\d+$/.test(valors.documento)) {
            errors.documento = "El documento solo puede contener números";
          }

          if (!valors.email) {
            errors.email = "Por favor ingresa un correo válido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valors.email
            )
          ) {
            errors.email =
              "La dirección de correo solo puede contener letras, números, puntos y guiones";
          }
          return errors;
        }}
      >
        {({ errors, values, handleChange, handleBlur, handleSubmit }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                id="nombres"
                value={values.nombres}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="errors">{errors.nombres}</div>}
              />
            </div>
            <div>
              <Field
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                id="apellidos"
              />
            </div>
            <div>
              <Field
                type="text"
                name="documento"
                placeholder="Número de documento"
                id="documento"
              />
            </div>
            <div>
              <Field
                type="text"
                name="email"
                placeholder="Correo electrónico"
                id="email"
              />
            </div>
            <div>
              <Multiselect
                options={country}
                isObject={false}
                showCheckbox
                avoidHighlightFirstOption={true}
              />
            </div>
            <div>
              <Field
                type="text"
                name="telefono"
                placeholder="Teléfono"
                id="telefono"
              />
            </div>
            <div>
              <Multiselect
                options={wayOfContact}
                isObject={false}
                showCheckbox
                avoidHighlightFirstOption={true}
                placeholder="Por qué medio desea ser contactado"
              />
            </div>
            <div>
              <Multiselect
                options={whenContact}
                isObject={false}
                showCheckbox
                avoidHighlightFirstOption={true}
                placeholder="Cuándo desea ser contactado"
              />
            </div>
            <div>
              <Multiselect
                options={regionOfInteres}
                isObject={false}
                showCheckbox
                avoidHighlightFirstOption={true}
                placeholder="Región de interés"
              />
            </div>
            <div>
              <Multiselect
                options={typeOfInvestment}
                isObject={false}
                showCheckbox
                avoidHighlightFirstOption={true}
                placeholder="Tipo de inversión"
              />
            </div>

            <button type="submit">SOLICITAR INFORMACIÓN</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
