
  function sendMessage() {
    // Mengambil pesan dari textarea
    var message = document.getElementById("message-box").value;

    // Membuat link untuk WhatsApp dengan pesan yang ditambahkan
    var whatsappLink = "https://wa.me/+6283834517583?text=" + encodeURIComponent(message);

    // Buka link WhatsApp di tab baru
    window.open(whatsappLink, "_blank");
  }

  // Mendapatkan elemen audio
var audio = document.getElementById("audio-player");

// Mengatur volume menjadi 0.5 (setengah dari volume penuh)
audio.volume = 0.2;
