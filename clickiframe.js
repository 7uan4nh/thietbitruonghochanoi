document.addEventListener("DOMContentLoaded", function () {
    const defaultFrame = document.getElementById("macdinhhienthi");
    const contentFrame = document.getElementById("contentFrame");

    // Lấy tất cả các liên kết cần thay đổi iframe
    const links = document.querySelectorAll("#thiet-bi-toi-thieu a, #thiet-bi-toi-thieu-aside");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn tải lại trang

            const pageSrc = this.getAttribute("href"); // Lấy đường dẫn trang cần mở

            // Hiển thị iframe mới và cập nhật src
            contentFrame.src = pageSrc;
            contentFrame.style.display = "block";

            // Ẩn iframe mặc định
            defaultFrame.style.display = "none";
        });
    });
});