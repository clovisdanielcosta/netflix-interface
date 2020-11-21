//Variables for functions which will hide or show sections
var vMain = document.getElementById("section-main");
var vCarousel = document.getElementById("section-carousel");
var vTrailer = document.getElementById("section-trailer");

//Function to hide section trailers
function hideOpenSection() {
    vTrailer.style.display = "none";
    vMain.style.display = "block";
    vCarousel.style.display = "block";
    }

 //Function back Home 
function backHome(){
    if (location.hostname === "localhost" || 
    location.hostname === "127.0.0.1" || 
    location.hostname === "") {
        window.location = "./open_page.html";
    } else {
        window.location = "https://github.com/clovisdanielcosta/netflix-interface/open_page.html";
    }
} 

//Function to switch between movies and show just section trailers
function showTrailer(movieReceived) {
    var trailer = "";
    var wrapper = document.createElement("div");
    vMain.style.display = "none";
    vCarousel.style.display = "none";
    vTrailer.style.display = "block";
    switch (movieReceived) {
        case 1: trailer = "TTIbWKEUPnc"; break;
        case 2: trailer = "ZwrS0dJZ-9A"; break;
        case 3: trailer = "Z1xIeP7irVo"; break;
        case 4: trailer = "MblpkLSSvjM"; break;
        case 5: trailer = "sCZFxgsg86k"; break;
        case 6: trailer = "zQEjE_M2Esw"; break;
        case 7: trailer = "rcV1I-397Wg"; break;
        case 8: trailer = "AD5cvVk-4Ps"; break;
        case 9: trailer = "Bmw6VOj9igY"; break;
        case 10: trailer = "9ozuNGDDGM0"; break;
        default: trailer = "Bb9TnVa2aIA"; break;
    }
    //Injecting element iframe in section trailers
    wrapper.innerHTML = `\
    <iframe width="875" height="366" src="https://www.youtube.com/embed/${trailer}" \
    frameborder="0" \
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \
    allowfullscreen>\
    </iframe>`;
    document.body.appendChild(wrapper);
}
