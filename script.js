document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Name: ${name}, Email: ${email}`);
    // Here you would typically send the data to a server or handle it further.
});
