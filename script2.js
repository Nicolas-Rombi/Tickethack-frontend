let selectedTrips = JSON.parse(localStorage.getItem('selectedTrips'))
console.log(selectedTrips);

const cartPage = document.getElementById('cart-page');
selectedTrips.forEach(trip => {
    const tripElement = document.createElement('div');
    tripElement.className = 'trip-item';
    tripElement.innerHTML = `
        <p>Départ : ${trip.departure}</p>
        <p>Arrivée : ${trip.arrival}</p>
        <p>Heure : ${moment(trip.date).format('HH:mm')}</p>
        <p>Prix : ${trip.price}€</p>
        <hr>
    `;
    cartPage.appendChild(tripElement);
});