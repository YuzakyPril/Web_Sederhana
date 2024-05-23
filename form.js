function contactForm() 
{
	if (document.FormContact.nama.value=="") {
		alert("Isi nama jika anda ingin mengirim pesan kepada kami!!!") ;
		return false;
	}

	if (document.FormContact.email.value=="") {
		alert("Isi email jika anda ingin mengirim pesan kepada kami!!!") ;
		return false;
	}

	if (document.FormContact.pesan.value=="") {
		alert("Isi pesan jika anda ingin mengirim pesan kepada kami!!!") ;
		return false;
	}
}