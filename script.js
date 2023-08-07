// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // we can add more input fields and validation here if needed.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Performing data validation here. That is checking if the email is valid.
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const contact = document.getElementById('phonenumber').value;

    // Validate contact number
    if (!isValidContactNumber(contact)) {
        alert('Please enter a valid contact number.');
        return;
    }

    // Submit the form (you can optionally remove this line if you want to just redirect)
    document.getElementById('userForm').submit();

    // Redirect to the success page after form submission
    window.location.href = 'success.html';
}

// Rest of the code remains the same...

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', handleSubmit);


// Function to validate email using regular expression
function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate contact number using regular expression
function isValidContactNumber(contactNumber) {
    // Regular expression for contact number validation
    const contactNumberPattern = /^\d{10,}$/;
    return contactNumberPattern.test(contactNumber);
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', handleSubmit);
