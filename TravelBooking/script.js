function submitBooking() {
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;

    const confirmationMessage = `Booking confirmed for ${destination}. 
        Check-In: ${checkIn}, Check-Out: ${checkOut}.`;

    document.getElementById('confirmationMessage').innerText = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
}
