import { useState } from 'react';
import validation from './validation';

const Form = () => {
    const initialUserInput = {
        name: '',
        email: '',
        message: ''
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    const [touchedFields, setTouchedFields] = useState({
        name: false,
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
    }

    const handleBlur = (event) => {
        const { name } = event.target;

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: touchedFields[name] ? validation(userInput)[name] : ''
        }));
    }

    const isFormValid = () => {
        const formErrors = validation(userInput);
        const isEmptyField = Object.values(userInput).some(value => value === '');
        const hasError = Object.values(formErrors).some(error => error !== '');
        return !isEmptyField && !hasError;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            // El formulario es válido, puedes enviar los datos
            console.log('Formulario válido:', userInput);

            // Puedes realizar acciones adicionales después de enviar el formulario

            // Mostrar mensaje de éxito
            setSuccessMessage('El mensaje ha sido enviado con éxito. En breve nos comunicaremos con usted.');

            // Reiniciar los campos del formulario
            setUserInput(initialUserInput);
            setTouchedFields({
                name: false,
                email: false,
                message: false
            });
            setErrors({});
        } else {
            // El formulario no es válido, puedes manejarlo de alguna manera
            console.log('Formulario inválido');
        }
    }

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
