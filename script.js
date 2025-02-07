function redirectToWhatsApp() {
    const phoneNumber = '212707353830';
    const message = encodeURIComponent("Hello Youssef! I miss you");
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}
