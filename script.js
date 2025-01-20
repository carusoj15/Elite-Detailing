// script.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!date || !time) {
        alert('Please select a valid date and time slot.');
        return;
    }

    const booking = {
        date,
        time
    };

    // Check for existing bookings (pseudo)
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const isSlotTaken = existingBookings.some(b => b.date === booking.date && b.time === booking.time);

    if (isSlotTaken) {
        alert('This time slot is already booked. Please choose another one.');
        return;
    }

    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert('Your slot has been successfully booked!');
});
