import { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa la librería

import validation from './validation';

const Form = () => {
    const initialUserInput = {
        name: '',
        number: '',
        email: '',
        message: ''
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    const [touchedFields, setTouchedFields] = useState({
        name: false,
        number: false,
        email: false,
        message: false
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [name]: value
        }));

        setTouchedFields((prevTouchedFields) => ({
            ...prevTouchedFields,
            [name]: true
        }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: touchedFields[name] ? validation(userInput)[name] : ''
        }));
    };

    const isFormValid = () => {
        const formErrors = validation(userInput);
        const isEmptyField = Object.values(userInput).some((value) => value === '');
        const hasError = Object.values(formErrors).some((error) => error !== '');
        return !isEmptyField && !hasError;
    };

    const sendEmail = () => {
        // Configura el servicio, plantilla y datos
        const serviceId = 'service_g8vbcwi';
        const templateId = 'template_cne2qyk';

        emailjs.send(serviceId, templateId, userInput).then(
            (response) => {
                console.log('Correo electrónico enviado con éxito:', response);
                setSuccessMessage(
                    'El mensaje ha sido enviado con éxito. En breve nos comunicaremos con usted.'
                );
                setUserInput(initialUserInput);
                setTouchedFields({
                    name: false,
                    number: false,
                    email: false,
                    message: false
                });
                setErrors({});
            },
            (error) => {
                console.error('Error al enviar el correo electrónico:', error);
            }
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            console.log('Formulario válido:', userInput);

            // Llama a la función para enviar el correo electrónico
            sendEmail();
        } else {
            // El formulario no es válido, puedes manejarlo de alguna manera
            console.log('Formulario inválido');
        }
    };

    return (
        <div>
            <h3>Envíanos tu consulta</h3>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    type="text"
                    value={userInput.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touchedFields.name && errors.name && <p>{errors.name}</p>}
                <label htmlFor="number">Teléfono</label>
                <input
                    name="number"
                    type="text"
                    value={userInput.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touchedFields.number && errors.number && <p>{errors.number}</p>}
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={userInput.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touchedFields.email && errors.email && <p>{errors.email}</p>}
                <label htmlFor="message">Mensaje</label>
                <textarea
                    name="message"
                    value={userInput.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></textarea>
                {touchedFields.message && errors.message && <p>{errors.message}</p>}
                <button type="submit" disabled={!isFormValid()}>Enviar</button>
            </form>
        </div>
    )
}

export default Form;
