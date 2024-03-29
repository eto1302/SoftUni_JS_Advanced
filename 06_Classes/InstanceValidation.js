class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        if(typeof clientId === 'string' && !isNaN(clientId) && clientId.length === 6){
            this.clientId = clientId;
        }
        else{
            throw new TypeError('Client ID must be a 6-digit number')
        }

        if (/^([a-z]+@[a-z\.]+)$/i.test(email)) {
            this.email = email;
        }
        else {
            throw new TypeError('Invalid e-mail');
        }

        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        else if (!/^[a-z]+$/i.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        else {
            this.firstName = firstName;
        }

        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        else if (!/^[a-z]+$/i.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        } 
        else{
            this.lastName = lastName;
        }
    }
}