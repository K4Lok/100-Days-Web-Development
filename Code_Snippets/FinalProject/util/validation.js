function signupInputsAreValid(formData) {
    return (
        checkEmail(formData.email, formData['confirm-email']) &&
        checkPassword(formData.password) &&
        !isEmpty(formData.fullname)
        // !isEmpty(formData.street) &&
        // !isEmpty(formData.postal) &&
        // !isEmpty(formData.city)
    );
}

function checkEmail(email, confirmEmail) {
    return (
        email && 
        email.includes('@') &&
        email === confirmEmail
    );
}

function checkPassword(password) {
    return (
        password &&
        password.trim().length >= 6 
    );
}

function isEmpty(value) {
    return !value || value.trim() === '';
}

module.exports = {
    signupInputsAreValid: signupInputsAreValid,

}