// Fetching the navbar file
fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching navigation:', error);
    });

// Fetching the footer file

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching navigation:', error);
    });