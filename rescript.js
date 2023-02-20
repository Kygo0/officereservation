const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstname = form.elements['first-name'].value;
    const lastname = form.elements['last-name'].value;
    const date = form.elements['date'].value;
    const time = form.elements['time'].value;
    console.log(`First Name: ${firstname},Last Name: ${lastname} Date: ${date}, Time: ${time}`);
});