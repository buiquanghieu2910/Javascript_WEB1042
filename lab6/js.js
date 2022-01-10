function hienThi(visible) {
    var phi_vc = document.getElementById("gia");
    phi_vc.style.display = visible ? "" : "none";
}

function validateForm() //xác thực các điều kiện
{
    var sanPham = document.getElementById("txtSanPham"); //truy xuất vào thành phần của form
    var loaiHang = document.getElementById("txtLoai");
    var soLuong = document.getElementById("txtSL");
    var dGia = document.getElementById("txtDonGia");
    var thanhTien = document.getElementById("txtThanhTien");
    var radios = document.getElementsByName("radio");
    //validate 
    if (sanPham.value.length == 0) {
        alert("Vui lòng nhập tên Sản phẩm");
        return false;
    }

    if (loaiHang.value == '0') {
        alert("Vui lòng chọn Loại hàng");
        return false;
    }

    if (soLuong.value == 0) {
        alert("Số lượng là số dương lớn hơn 0");
        return false;
    }


    if (!radios[0].checked && !radios[1].checked) {
        alert("Vui lòng chọn nơi nhận hàng !");
        return false;

    }
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            radios = radios[i];
        }
    }


    var show = document.getElementById('show');

    show.innerHTML += `
       Khách hàng: ${sanPham.value}<br>
       Loại hàng: Loại ${loaiHang.value}<br>
       Đơn giá: ${dGia.value}<br>
       Số lượng: ${soLuong.value}<br>
       Thành tiền: ${thanhTien.value}<br>
       Nơi nhận hàng: ${radios.value}<br><br>
        `

    return true;


}




var app = angular.module("myapp", []).controller("myctrl", function($scope) {

    $scope.soLuong = 0;
    $scope.kq = 0;
    $scope.count = 0;
    $scope.loai = '0';
    $scope.dongia = function() {
        switch ($scope.loai) {
            case '1':
                $scope.donGia = 500000;
                $scope.kq = parseFloat($scope.donGia) * parseFloat($scope.soLuong);
                break;

            case '2':
                $scope.donGia = 300000;
                $scope.kq = parseFloat($scope.donGia) * parseFloat($scope.soLuong);
                break;

            case '3':
                $scope.donGia = 100000;
                $scope.kq = parseFloat($scope.donGia) * parseFloat($scope.soLuong);
                break;
        }
    }

    $scope.tinh = function() {
        $scope.kq = parseFloat($scope.donGia) * parseFloat($scope.soLuong);

    }
})