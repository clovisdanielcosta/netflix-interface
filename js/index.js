var vid = document.getElementById("myVideo");
var priv = document.getElementById("privacy");

//Function to made iframe invisible on start
function openPlay() { 
    vid.style.display = "none";
}
//Function change status iframe to visible and hide others sections
function enableAutoplay() { 
    priv.style.display = "none";
    vid.style.display = "block";
    vid.play();
    disableAutoplay();  
}
//Function to permit audio be played on browser
function disableMute() { 
    vid.style.display = "none";
    vid.muted = false;
    enableAutoplay();

}
//Function to hide iframe again video and redirect to page open-page e verify localhost or server
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