

document.getElementById('date').valueAsDate = new Date();


document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    const response = await fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ departure, arrival, date })
    });

    if (response.ok) {
        const data = await response.json();
        displayResults(data.trips);
    } else {
        console.error('Erreur lors de la recherche des trajets');
    }
});
   
function displayResults(trips) {
    const partRight = document.getElementById('part-right');
    partRight.innerHTML = ''; 

    if (trips.length === 0) {
        partRight.innerHTML = `
         <img src="./images/notfound.png" alt="">
        <p>Aucun trajet trouvé.</p>`;
    } else {
        
        trips.forEach(trip => {
           
           const formattedTime = moment(trip.date).format('HH:mm');
            const tripElement = document.createElement('div');
            tripElement.id = "chaque-trajet"
            tripElement.innerHTML = `
            ${trip.departure} > ${trip.arrival} ${formattedTime} ${trip.price}€ 
            <button class="book-button">Book</button>`;
            partRight.appendChild(tripElement);
            const bookButton = tripElement.querySelector('.book-button');
            bookButton.addEventListener('click', function() {
                let trips = JSON.parse(localStorage.getItem('mon-trips')) || [];
                trips.push(trip);
                localStorage.setItem('mon-trip', JSON.stringify(trip)); 
                console.log(localStorage.getItem('mon-trip'));
                window.location.href = 'cart.html';
            });
            
        });
    }
}



