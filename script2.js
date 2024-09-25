const cartPage = document.getElementById('my-carts');

const tripKeys = Object.keys(localStorage); 
if (tripKeys.length > 0) {
    tripKeys.forEach(key => {
        const trip = JSON.parse(localStorage.getItem(key)); 
        const tripElement = document.createElement('div');
        tripElement.className = 'trip-item';
        tripElement.innerHTML = `
            <p>${trip.departure}> ${trip.arrival}  ${moment(trip.date).format('HH:mm')}   ${trip.price}€</p><button type="submit" id="delete">x</button>`
           
        cartPage.appendChild(tripElement);
    });
} else {
    cartPage.innerHTML = `<p>Aucun trajet trouvé dans le panier.</p>`;
}

