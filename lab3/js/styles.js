var bieuthuc = "";

function toan_hang(x) {
    bieuthuc = bieuthuc + x;

}

function toan_tu(tt) {
    bieuthuc = bieuthuc + tt;

}

function lam_lai() {
    bieuthuc = null;
}

function thuc_hien() {
    var ketqua = eval(bieuthuc);
    bieuthuc = "";
    alert("Kết quả là: " + ketqua);
}