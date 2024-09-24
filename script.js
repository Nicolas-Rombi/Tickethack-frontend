document.getElementById('date').valueAsDate = new Date();

document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    const response = await fetch('/search', {
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
    partRight.innerHTML = ''; // Réinitialise les résultats précédents

    if (trips.length === 0) {
        partRight.innerHTML = '<p>Aucun trajet trouvé.</p>';
    } else {
        trips.forEach(trip => {
            const tripElement = document.createElement('p');
            tripElement.textContent = `Départ: ${trip.departure}, Arrivée: ${trip.arrival}, Date: ${trip.date}`;
            partRight.appendChild(tripElement);
        });
    }
}