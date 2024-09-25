const cartPage = document.getElementById('my-carts');
let totalPrice = 0;

const tripKeys = Object.keys(localStorage); 
if (tripKeys.length > 0) {
    tripKeys.forEach(key => {
        const trip = JSON.parse(localStorage.getItem(key)); 
       totalPrice += trip.price;
        const tripElement = document.createElement('div');
        tripElement.className = 'trip-item';
        tripElement.innerHTML = `
            <p>${trip.departure}> ${trip.arrival}  ${moment(trip.date).format('HH:mm')}   ${trip.price}€</p><button type="submit" id="${key}" class="delete">x</button>`
           
        cartPage.appendChild(tripElement);
        
    });
    const PrixTotal = document.getElementById('total');
    PrixTotal.textContent = `Total : ${totalPrice}€`;
    
} else {
    cartPage.innerHTML = `<p>Aucun trajet trouvé dans le panier.</p>`;
}

const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach(button => {
        button.addEventListener('click', function() {
            const tripId = button.getAttribute('id');
            console.log(tripId);
            localStorage.removeItem(tripId);
            location.reload()
        })})
