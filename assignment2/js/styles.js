function validateForm() //xác thực các điều kiện
{
    var msv = document.getElementById("mSV"); //truy xuất vào thành phần của form
    if (msv.value.length == 0) {
        alert("Vui lòng nhập Mã sinh viên");
        return false;
    }

    var ten = document.getElementById("ten"); //truy xuất vào thành phần của form
    if (ten.value.length == 0) {
        alert("Vui lòng nhập Họ và tên");
        return false;
    }

    var email = document.getElementById("email"); //truy xuất vào thành phần của form
    if (email.value.length == 0) {
        alert("Vui lòng nhập Email");
        return false;
    }

    var gioiTinh = document.getElementById("gioiTinh"); //truy xuất vào thành phần của form
    alert(gioiTinh);
    if (gioiTinh.value.length == 0) {
        alert("Vui lòng chọn Giới tính");
        return false;
    }

    alert("Chúc mừng bạn đã nhập đúng");
    return true;
}