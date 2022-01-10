function validateForm() {
    var Name = document.getElementById("name"); //truy xuất vào thành phần của form
    if (Name.value.length == 0) {
        alert("Vui lòng nhập Tên");
        return false;
    }

    var Sex = document.getElementById("sex"); //truy xuất vào thành phần của form
    if (Sex.value.length == 0) {
        alert("Vui lòng chọn giới tính");
        return false;
    }
    alert("Name: " + Name.value);
    return true;
}