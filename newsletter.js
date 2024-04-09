// newsletter.js

//getting the subscription
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
//saving it
    let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    subscribedEmails.push(email);

    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

    alert('Thank you for subscribing!');
});
