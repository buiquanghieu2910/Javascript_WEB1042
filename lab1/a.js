function checkChanLe() {
	var a = prompt("Nhập vào số a", "Bùi Quang Hiếu");

	if (a % 2 == 0) {
		alert(a + " là số chẵn");
		document.write(a + " là số chẵn");
	}
	else {
		alert(a + " là số lẻ");
		document.write(a + " là số lẻ");
	}
}