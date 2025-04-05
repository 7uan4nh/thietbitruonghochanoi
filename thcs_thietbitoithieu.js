document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("contentFrame");
    let linkThietBiNav = document.getElementById("thcs_thietbitoithieu");
    let linkThietBiAside = document.getElementById("thcs_thietbitoithieu-aside");

    if (!iframe) {
        console.error("Không tìm thấy iframe!");
        return;
    }

    // function openPage(url) {
    //     iframe.src = url; 
    //     iframe.style.display = "block"; 
    // }
    function openPage(url) {
        let iframeMacDinh = document.getElementById("macdinhhienthi");
    
        iframe.src = url;
        iframe.style.display = "block";
    
        // Ẩn iframe mặc định
        if (iframeMacDinh) {
            iframeMacDinh.style.display = "none";
        }
    }

    if (linkThietBiNav) {
        linkThietBiNav.addEventListener("click", function (event) {
            event.preventDefault();
            openPage("thcs_thietbitoithieu.html");
        });
    }

    if (linkThietBiAside) {
        linkThietBiAside.addEventListener("click", function (event) {
            event.preventDefault();
            openPage("thcs_thietbitoithieu.html");
        });
    }
});