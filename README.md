<h1 align="center">
:small_red_triangle_down: Recreating the Netflix Interface
</h1>

<p align="center">
  <img  alt="Logo Netflix" src="img/netflix-logo-big.png" width="40%">
</p>

<h2 align="center">
Bootcamp everis Fullstack Developer by Digital Innovation One
</h2>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<p>
This repository was created as part of bootcamp "everis FullStack Developer" by Digital Innovation One and it's purpose is recreate the Netflix interface to reinforce the principles of HTM5, CSS3 and responsive websites.
</p>

<p align="center">
  <a href="#cloud-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-learning">Learning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-sharing">Sharing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-customizing">Customizing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-license">License</a>
</p>

<p align="center">
  <img alt="Gif animado do projeto" src="#" width="100%">
</p>

## :cloud: Deploy

  Was used GitHub.io to publish this page and you can see it by click on the link below:

  - [https://clovisdanielcosta.github.io/netflix-interface/](https://clovisdanielcosta.github.io/netflix-interface/)


## :rocket: Technologies

  To build this project the follow technologies were used:

  - [Html5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
  - [Css3](https://www.w3schools.com/css/)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [FontAwesome](https://fontawesome.com/)
  - [OwlCarousel](https://owlcarousel2.github.io/OwlCarousel2/)

## :computer: Installation

  Just clone this repository in the folder that you want and run index.html on your browser:

  `$ git clone https://github.com/clovisdanielcosta/netflix-interface.git`


## :books: Learning

  - Better understanding about style inheritance between elements in HTML structure.
  - Better understanding about properties standard automatically assigned to CSS elements.
  - Stumble with site Fontawesome and Owl Carousel for the first time.
  - Use of sub property linear-gradient on CSS background element.
  - Use of JQuery carousel despite it´s use was about to change to deprecated. 
  - Very smart tip of make a exclusive css file for responsiveness.

## :small_orange_diamond: Sharing

  To inject elements in your file HTML using javascript you could take a look in this code below. You just need put the function "showTrailer(1)" on onclick event in yours buttons or anchors. Don't forget pass the parameter of movie selected inside of parenthesis in the function:

  ```javascript

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

  ```

## :small_orange_diamond: Customizing

  - Applied my own pattern of folders structure and filenames. 
  - Personal choose of fonts and colors.
  - Use of CSS display.style to hide and show sections which minimize add of extra pages on project. 
  - Use of video on open page to make user experience more comfortable.
  - Use of injection elements html by javascript doing a catch the code of movie selected.

## :small_orange_diamond: License

This project is under MIT license. Open file [LICENSE](LICENSE.md) to details. 
The images in this project were made by repo's owner or taken from another repo in the web with the right authorization of use.

## :small_orange_diamond: Thanks

I wanna to say thank you to <b>Digital Innovation One</b> and <b>everis</b> for make this bootcamp possible. Special thanks to Felipe Aguiar by skillfully teaching in this course. Make me like of front-end a little more. Thank you so much. You all are doing a great job. 

Well done! :clap: :clap: