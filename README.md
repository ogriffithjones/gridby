<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![twitter-shield]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Gridby</h2>

  <p align="center">
    A simple vue directive to include Shopify Swappable into your vue project.
    <br />
    <a href="https://github.com/ogriffithjones/gridby/issues">Report Bug</a>
    ·
    <a href="https://github.com/ogriffithjones/gridby/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

A simple vue.js directive that implements Shopify Swappable / Draggable. Feel free to copy/paste the directive to reduce unnecessary node modules.

<a href="https://github.com/Shopify/draggable">Shopify Draggable</a> 
* This directive is specifically for swappable.js however you can just swap Swappable in the directive with Collidable etc.
* This directive doesn't currently support events however these are being worked on. 
* Feel free to fork and add any functionality you want.


### Built With
Frameworks, Modules & Tools
* [Vue](https://vuejs.org/)
* [Shopify Darggable](https://github.com/Shopify/draggable)



<!-- GETTING STARTED -->
## Getting Started

To install the directive, follow these simple steps.

### Install

* npm
```sh
npm i --save gridby
```
* Require it in your vue.js component file:
```sh
// ES5
var gridby = require('gridby');
// ES6
import 'gridby';
```
* Set as directive
```sh
directives: {
    gridby
},
```

### Usage

* Add the directive to an element.
```sh
<div v-gridby="{ draggable: '.block' }">
    <div class="block"></div>
    <div class="block"></div>
</div>
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ogriffithjones/vue-contextmenu/issues) to propose a features (and report issues).



<!-- CONTRIBUTING -->
## Contributing

👍 Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact
Oliver Griffith-Jones - [@olzgj](https://twitter.com/olzgj) - hello@olivergriffithjones.com

Project Link: [github.com/ogriffithjones/vue-contextmenu/](https://github.com/ogriffithjones/vue-contextmenu/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Vue Simple Context Menu](https://github.com/johndatserakis/vue-simple-context-menu)
* [V Click Outside](https://www.npmjs.com/package/v-click-outside)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/ogriffithjones/vue-contextmenu.svg?style=flat-square
[issues-url]: https://github.com/ogriffithjones/vue-contextmenu/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[twitter-shield]: https://img.shields.io/twitter/follow/OlzGJ?label=Follow
[product-screenshot]: images/screenshot.png
