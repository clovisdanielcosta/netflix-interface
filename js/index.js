var vid = document.getElementById("myVideo");
var priv = document.getElementById("privacy");

function openPlay() { 
    vid.style.display = "none";
}

function enableAutoplay() { 
    priv.style.display = "none";
    vid.style.display = "block";
    vid.play();
    disableAutoplay();  
}
function disableMute() { 
    vid.style.display = "none";
    vid.muted = false;
    enableAutoplay();

}

function disableAutoplay() { 
    setTimeout( () => {
        vid.style.display = "none";
        if (location.hostname === "localhost" || 
            location.hostname === "127.0.0.1" || 
            location.hostname === "") {
                window.location = "./open_page.html";
            } else {
                window.location = "https://clovisdanielcosta.github.io/netflix-interface/open_page.html";
            }
    }, 5000)  
} 