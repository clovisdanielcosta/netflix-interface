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
        window.location = "/open-page.html";
    }, 5000)  
} 