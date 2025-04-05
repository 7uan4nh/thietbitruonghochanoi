// let viTriAnh = 0; // Lưu vị trí ảnh hiện tại
//     let tuDongChay; // Biến để kiểm soát trình chiếu tự động

//     function hienAnh(index) {
//         let danhSachAnh = document.getElementsByClassName("anh-trinh-chieu");
        
//         // Ẩn tất cả ảnh
//         for (let i = 0; i < danhSachAnh.length; i++) {
//             danhSachAnh[i].style.display = "none";
//         }

//         // Chuyển sang ảnh tiếp theo
//         viTriAnh++;
//         if (viTriAnh > danhSachAnh.length) { viTriAnh = 1; }

//         // Hiển thị ảnh hiện tại
//         danhSachAnh[viTriAnh - 1].style.display = "block";
//         tuDongChay = setTimeout(hienAnh, 3000); // Tự động chuyển ảnh sau 3 giây
//     }

//     function chuyenAnh(huong) {
//         clearTimeout(tuDongChay); // Dừng tự động khi bấm nút

//         let danhSachAnh = document.getElementsByClassName("anh-trinh-chieu");
//         viTriAnh += huong; // Cộng hoặc trừ vị trí ảnh
//         if (danhSachAnh.length > 0) {
//             danhSachAnh[0].style.display = "block"; // Hiển thị ảnh đầu tiên ngay khi trang mở
//         }

//         if (viTriAnh > danhSachAnh.length) { viTriAnh = 1; }
//         if (viTriAnh < 1) { viTriAnh = danhSachAnh.length; }

//         // Ẩn tất cả ảnh
//         for (let i = 0; i < danhSachAnh.length; i++) {
//             danhSachAnh[i].style.display = "none";
//         }

//         // Hiển thị ảnh mới
//         danhSachAnh[viTriAnh - 1].style.display = "block";
//         tuDongChay = setTimeout(hienAnh, 3000); // Tiếp tục tự động sau khi bấm
//     }

//     hienAnh(); // Bắt đầu trình chiếu ảnh

document.addEventListener("DOMContentLoaded", function () {
    let danhSachAnh = document.querySelectorAll(".anh-trinh-chieu");
    let viTriAnh = 0; // Ảnh đầu tiên
    let tuDongChay;

    if (danhSachAnh.length === 0) {
        console.error("⚠ Không có ảnh nào trong trình chiếu! Kiểm tra lại HTML.");
        return;
    }

    function hienAnh(index) {
        if (index < 0 || index >= danhSachAnh.length) {
            console.error("❌ Chỉ số ảnh không hợp lệ:", index);
            return;
        }

        danhSachAnh.forEach(anh => anh.style.display = "none"); // Ẩn tất cả ảnh
        danhSachAnh[index].style.display = "block"; // Hiển thị ảnh tương ứng
    }

    function chuyenAnh(huong) {
        clearTimeout(tuDongChay); // Dừng tự động khi bấm nút
        viTriAnh = (viTriAnh + huong + danhSachAnh.length) % danhSachAnh.length; // Quay vòng ảnh
        hienAnh(viTriAnh);
        tuDongChay = setTimeout(() => chuyenAnh(1), 3000); // Tự động chuyển tiếp sau khi bấm
    }

    // Hiển thị ảnh đầu tiên khi tải trang
    hienAnh(viTriAnh);
    tuDongChay = setTimeout(() => chuyenAnh(1), 3000);

    // Gán sự kiện click cho nút chuyển ảnh
    document.querySelector(".nut-trai").addEventListener("click", () => chuyenAnh(-1));
    document.querySelector(".nut-phai").addEventListener("click", () => chuyenAnh(1));
});