// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("thiet-bi-toi-thieu").addEventListener("click", function (event) {
//         event.preventDefault(); // Ngăn chặn điều hướng trang
//         let iframe = document.getElementById("contentFrame");
//         iframe.src = "thietbitoithieu.html"; // Đường dẫn đến trang thiết bị nổi bật
//         iframe.style.display = "block"; // Hiển thị iframe
        
//     });
    
// });

document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("contentFrame");
    let linkThietBiNav = document.getElementById("thiet-bi-toi-thieu");
    let linkThietBiAside = document.getElementById("thiet-bi-toi-thieu-aside");

    if (!iframe) {
        console.error("Không tìm thấy iframe!");
        return;
    }

    function openPage(url) {
        iframe.src = url; 
        iframe.style.display = "block"; 
    }

    if (linkThietBiNav) {
        linkThietBiNav.addEventListener("click", function (event) {
            event.preventDefault();
            openPage("thietbitoithieu.html");
        });
    }

    if (linkThietBiAside) {
        linkThietBiAside.addEventListener("click", function (event) {
            event.preventDefault();
            openPage("thietbitoithieu.html");
        });
    }
});