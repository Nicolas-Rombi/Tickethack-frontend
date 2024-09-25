const cartPage = document.getElementById('cart-page');

const tripKeys = Object.keys(localStorage); // Récupère toutes les clés de localStorage
if (tripKeys.length > 0) {
    tripKeys.forEach(key => {
        const trip = JSON.parse(localStorage.getItem(key)); // Récupère chaque trajet
        const tripElement = document.createElement('div');
        tripElement.className = 'trip-item';
        tripElement.innerHTML = `
            <p>Départ : ${trip.departure}</p>
            <p>Arrivée : ${trip.arrival}</p>
            <p>Heure : ${moment(trip.date).format('HH:mm')}</p>
            <p>Prix : ${trip.price}€</p>
            <hr>`;
        cartPage.appendChild(tripElement);
    });
} else {
    cartPage.innerHTML = `<p>Aucun trajet trouvé dans le panier.</p>`;
}