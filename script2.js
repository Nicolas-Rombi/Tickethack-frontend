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
            <div>${trip.departure}> ${trip.arrival}</div> <div> ${moment(trip.date).format('HH:mm')} </div>  <div> ${trip.price}€</div> <button type="submit" id="${key}" class="delete">x</button>`
           
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
        const purchaseButton = document.getElementById('purchase');

        document.getElementById('Purchase').addEventListener('click', () => {
            const tripKeys = Object.keys(localStorage);
            const trips = tripKeys.map(key => {
                const trip = JSON.parse(localStorage.getItem(key));
        
                // Supprimer le champ _id pour éviter les duplications
                const { _id, ...tripWithoutId } = trip; 
                return tripWithoutId;
            });
        
            fetch('http://localhost:3000/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trips }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    localStorage.clear(); 
                    window.location.href = 'bookings.html';
                } 
            })
        
        });