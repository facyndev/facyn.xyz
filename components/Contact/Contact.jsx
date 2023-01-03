import React, { useRef, useState } from 'react';
import styles from '../../styles/all.module.css';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EmailResult = () => {
    return (
        <p>¡Tu mensaje ha sido enviado correctamente! Muy pronto me pondre en contacto con usted.</p>
        )
    }
    
    export default function Contact() {
        const [result, showResult] = useState(false);
        
        const form = useRef();
        
        const sendEmail = () => {
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_KEY)
          .then((result) => {
              console.log('[Facyn] Mail Enviado');
          }, (error) => {
              console.log('[Facyn] Error al enviar email.');
          });

        showResult(true);
    }

    setTimeout(() => {
      showResult(false);
    }, 5000)
  return (
    <Formik
    initialValues={{
        user_name: '',
        user_email: '',
        message: ''
    }}

    validate={(values) => {
        let errors = {}

        // Validaciones de nombre.
        if(!values.user_name) {
            errors.user_name = "Debes ingresar un nombre."
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
            errors.user_name = "El nombre no puede contener más de 40 caracteres ni tampoco números y simbolos."
        } 

        // Validaciones de correo.
        if(!values.user_email) {
            errors.user_email = "Debes ingresar un correo."
        } else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.user_email)) {
            errors.user_email = "El correo no es valido. El formato debe ser algo similar a example@example.com"
        }

        // Validaciones de mensaje.
        if(!values.message) {
            errors.message = "Debes ingresar un asunto."
        }
        return errors;
    }}
    onSubmit={(values, {resetForm}) => {
        resetForm();
        sendEmail();
    }}
    >
    {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
    <form className={styles.pageForm} onSubmit={handleSubmit} ref={form} data-aos="flip-up">
      <input 
      type="text" 
      className={styles.inputForm}
      name="user_name" 
      placeholder="Nombre"
      value={values.user_name}
      onChange={handleChange}
      onBlur={handleBlur}/>
      <input 
      type="text" 
      className={styles.inputForm} 
      name="user_email" 
      placeholder="Correo electronico"
      value={values.user_email}
      onChange={handleChange}
      onBlur={handleBlur}/>
      <textarea 
      name="message"
      placeholder="Asunto"
      value={values.message}
      onChange={handleChange}
      onBlur={handleBlur}/>
      <input type="submit" value="Enviar" className={styles.pageButton}/>
      {result ? <div className={styles.pageAlertSuccess}><EmailResult/></div> : null}
      {errors.user_name && <div className={styles.pageAlertError}>{errors.user_name}</div>}
      {errors.user_email && <div className={styles.pageAlertError}>{errors.user_email}</div>}
      {errors.message && <div className={styles.pageAlertError}>{errors.message}</div>}
        </form>
        )}
    </Formik>
  );
};