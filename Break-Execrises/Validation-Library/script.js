const validationLibrary = {
    email(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regex.test(email)){
            return {
                valid: true,
                error: null
            };
        }        
        return {
            valid: false,
            error: "Invalid email format"
        };
    },

    phone(phone){
        const regex = /^\+?[1-9]\d{1,14}$/;
        // /^(\+\d{1,3})?\s?\(?\d{3,4}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
        if(regex.test(phone)){
            return {
                valid: true,
                error: null
            };
        }
        return {
            valid: false,
            error: "Invalid phone number format"
        };
    },

    password(password){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(regex.test(password)){
            return {
                valid: true,
                error: null
            };
        }
        return {
            valid: false,
            error: "Password must contain at least 8 characters, including uppercase, lowercase, digit, and special character"
        };
    },

    dob(dob){
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(18|19|20)\d{2}$/;
        if(regex.test(dob)){
            return {
                valid: true,
                error: null
            };
        }
        return {
            valid: false,
            error: "Invalid date of birth format"
        };
    }
};

console.log(validationLibrary.email("akintobi.comm"));
console.log(validationLibrary.phone("+2341234567768534890"));
console.log(validationLibrary.password("SecurePass123!"));
console.log(validationLibrary.dob("01/10/1890"));

// Example usage:
// const emailInput = document.getElementById('email');

// emailInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevents the form from submitting by default
//         emailInput.reportValidity(); // Triggers the built-in HTML5 validation
//     }
// });