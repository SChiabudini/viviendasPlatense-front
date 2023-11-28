const validation = (userInput) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInput.email)){
        errors.email = 'El email ingresado no es válido';
    }

    if(!userInput.email){
        errors.email = 'Debe ingresar una dirección de email';
    }

    if(userInput.email.length > 40){
        errors.email = 'El email no debe superar los 40 caracteres';
    }

    if(!userInput.name){
        errors.name = 'Debe ingresar un nombre';
    }

    if(userInput.name.length < 6 || userInput.name.length > 30){
        errors.name = "El nombre debe tener una longitud entre 6 y 10 caracteres"
    }

    if(!userInput.message){
        errors.message = 'Debe ingresar un mensaje';
    }

    if(userInput.message.length < 20){
        errors.message = "El mensaje debe contener al menos 20 caracteres"
    }

    return errors;
}

export default validation;