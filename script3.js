const bookingPage = document.getElementById('my-bookings');
fetch('http://localhost:3000/purchase')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.length > 0) {
            data.forEach(booking => {
                const bookingElement = document.createElement('div');
                bookingElement.className = 'booking-item';
                const departureMoment = moment(booking.date);
                const now = moment();
                const timeDifference = departureMoment.diff(now); 
                let timeRemaining;

                if (timeDifference > 0) {
                    const hours = departureMoment.diff(now, 'hours');
                    const minutes = departureMoment.diff(now, 'minutes') % 60;
                    timeRemaining = `${hours}h ${minutes}m`;
                } 

                bookingElement.innerHTML = `
                    <p>${booking.departure} > ${booking.arrival}</p>
                    <p>${moment(booking.date).format('HH:mm')}</p>
                    <p>${booking.price}€</p>
                    <p>Départ dans : ${timeRemaining}</p>
                `;
                bookingPage.appendChild(bookingElement);
            });
        } else {
            bookingPage.innerHTML = '<p>Aucune réservation trouvée.</p>';
        }
    })
    