
btnTinh.addEventListener ("click", function(e) {
    e.preventDefault ();

    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value;;
    var soNguoi = document.getElementById("soNguoi").value;;

    console.log (hoTen,tongThuNhap, soNguoi);

    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoi*1600000;

    if (tongThuNhap>0 && tongThuNhap<=60000000) {
        var thueNop = thuNhapChiuThue*5/100;
    } else if (tongThuNhap>60000000 && tongThuNhap<=120000000) {
        var thueNop = thuNhapChiuThue*10/100;
    } else if (tongThuNhap>120000000 && tongThuNhap<=210000000) {
        var thueNop = thuNhapChiuThue*15/100;
    }  else if (tongThuNhap>210000000 && tongThuNhap<=384000000) {
        var thueNop = thuNhapChiuThue*20/100;
    }else if (tongThuNhap>384000000 && tongThuNhap<=624000000) {
        var thueNop = thuNhapChiuThue*25/100;
    }else if (tongThuNhap>624000000 && tongThuNhap<=960000000) {
        var thueNop = thuNhapChiuThue*30/100;
    }else if (tongThuNhap>960000000) {
        var thueNop = thuNhapChiuThue*35/100;
    }

    var txtThongBao = document.getElementById("txtThongBao");
    txtThongBao.innerHTML = hoTen +": " + thueNop+" VND";
});

const phiHD_Dan = 4.5;
const phiDV_Dan = 20.5;
const phiThueKenh_Dan = 7.5;

const phiHD_DN = 15;
const phiDV_DN_10 = 7.5;
const phiDV_DN_them = 5;
const phiThueKenh_DN = 50;

function findselected() { 
    var chonLoaiKH = document.querySelector('input[name="loaiKH"]:checked').value;
    if(chonLoaiKH=="nhaDan"){

        document.getElementById("soKetNoi").setAttribute('disabled', true);
    }
    else{
        document.getElementById("soKetNoi").removeAttribute('disabled');
    }
}

if(nhaDan.checked){
    loaiKH = nhaDan.value;
}
 else {
    loaiKH = doanhNghiep.value;
}

console.log(loaiKH);


btnTinh2.addEventListener ("click", function(e) {
    e.preventDefault ();
    var maKH = document.getElementById("maKH").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
    var soKenh = parseFloat(document.getElementById("soKenh").value);
    console.log (maKH,soKetNoi,soKenh)

if(nhaDan.checked){
    loaiKH = nhaDan.value;
}
 else {
    loaiKH = doanhNghiep.value;
}
console.log(loaiKH);

if (loaiKH=="nhaDan") {
    var tongTien = phiHD_Dan + phiDV_Dan + phiThueKenh_Dan*soKenh;
    console.log(tongTien);
} else if (loaiKH=="doanhNghiep" && soKetNoi<=10) {
    tongTien = phiHD_DN + phiDV_DN_10*soKetNoi + phiThueKenh_DN*soKenh;
    console.log(tongTien);
} else {
    tongTien = phiHD_DN + phiDV_DN_10*10 +(soKetNoi-10)*phiDV_DN_them + phiThueKenh_DN*soKenh;
    console.log(tongTien);
}
    
txtThongBao2 = document.getElementById("txtThongBao2");
txtThongBao2.innerHTML = "Tổng tiền cáp của Khách hàng "+ maKH +" là: "+ tongTien+ "$";     
});