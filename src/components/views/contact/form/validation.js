const validation = (userInput) => {
    const errors = {};

    if (!userInput.number) {
        errors.number = 'Debe ingresar un número';
    }

    if (userInput.number.length > 15) {
        errors.number = 'El número no debe superar los 15 caracteres';
    }
    
    if (!/^\d+$/.test(userInput.number)) {
        errors.number = 'El número debe contener solo dígitos';
    }


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

    if(userInput.name.length < 3 || userInput.name.length > 30){
        errors.name = "El nombre debe tener una longitud entre 3 y 30 caracteres"
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