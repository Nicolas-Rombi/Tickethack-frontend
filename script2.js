let selectedTrip = localStorage.getItem('mon-trip');
if (selectedTrip) {
    selectedTrip = JSON.parse(selectedTrip);
    const cartPage = document.getElementById('cart-page');
    
    const tripElement = document.createElement('div');
    tripElement.className = 'trip-item';
    tripElement.innerHTML = `
        <p>Départ : ${selectedTrip.departure}</p>
        <p>Arrivée : ${selectedTrip.arrival}</p>
        <p>Heure : ${moment(selectedTrip.date).format('HH:mm')}</p>
        <p>Prix : ${selectedTrip.price}€</p>
        <hr>
    `;
    
    cartPage.appendChild(tripElement);
}