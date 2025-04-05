document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("contentFrame");
    let linkThietBiNav = document.getElementById("noithat_phonghop");
    let linkThietBiAside = document.getElementById("noithat_phonghop-aside");

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
            openPage("noithat_phonghop.html");
        });
    }

    if (linkThietBiAside) {
        linkThietBiAside.addEventListener("click", function (event) {
            event.preventDefault();
            openPage("noithat_phonghop.html");
        });
    }
});