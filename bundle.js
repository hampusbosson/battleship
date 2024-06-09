/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Bebas_Neue,Roboto/Bebas_Neue/BebasNeue-regular.ttf */ "./src/assets/fonts/Bebas_Neue,Roboto/Bebas_Neue/BebasNeue-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Light.ttf */ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Medium.ttf */ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Regular.ttf */ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/background.webp */ "./src/assets/images/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'bebas';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'roboto-light';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: 'roboto-medium';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: 'roboto-regular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

body {
    height: 100vh;
    width: 100vw; 
    background: linear-gradient(
        rgba(0, 0, 0, 0.598), /* Semi-transparent black */
        rgba(0, 0, 0, 0.321)
    ), url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: cover; /* Ensure the image covers the whole element */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    font-family: 'roboto-light';
}

body, 
h1, 
p {
    margin: 0; 
}

.content {
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
}

/* pregame page */

.pregame-card {
    height: 25rem;
    width: 35rem;
    background-color: rgba(0, 0, 0, 0.75);
    color: white; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem; 
    border-radius: 15px;  
}

.pregame-header {
    margin-top: 3rem;
    font-size: 5rem;  
    font-family: 'bebas';
    letter-spacing: 3px;
}

.input-box {
    border-bottom: 1px solid white; 
}

.name-input {
    height: 3rem;
    width: 13rem;
    border: none;
    outline: none;
    background: none; 
    color: white;
    font-size: 1.4rem;
    border-radius: 10px; 
    text-align: center;
}

.start-button {
    height: 3rem;
    width: 13rem; 
    background: none;
    border: none; 
    outline: none;
    color: rgb(189, 189, 189);
    font-size: 1.3rem;
}

.start-button:hover {
    background-color: rgb(67, 66, 66);
    border-radius: 10px; 
    cursor: pointer;
    color: white;
}

/* board-setup page */

.setup-container {
    display: flex;
    width: 50rem;
    height: 45rem;
    min-width: 50rem;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 15px; 
}

.setup-board {
    width: 31.25rem;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem; 
}

.setup-grid-container {
    display: grid;
    grid-template-columns: auto 1fr; 
    grid-template-rows: auto 1fr; 
    gap: 0; 
}

.setup-grid {
    height: 31.25rem; /* Adjusted for 10 squares including borders */
    width: 31.25rem; /* Adjusted for 10 squares including borders */
    display: flex;
    flex-wrap: wrap;
    grid-column: 2 / span 2; /* Spans from the second to the third column */
    grid-row: 2; /* Second row */
    background-color: rgba(173, 216, 230, 0.123);
}

.setup-grid:hover {
    cursor: crosshair;
}

.letters-container {
    display: flex; 
    grid-column: 2 / span 1;
    grid-row: 1; 
    justify-content: space-between;
    margin: 0 1.2rem 0.4rem;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.5)
}

.letter {
    width: 10px; 
}

.numbers-container {
    display: flex;
    flex-direction: column;
    grid-column: 1; /* First column */
    grid-row: 2 / span 1; /* Spans second row */
    justify-content: space-between;
    align-items: center;
    margin-top: 0.6rem;
    margin-bottom: 1.8rem;
    margin-right: 0.8rem;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.5)
}

.number {
    height: 10px;
}

.grid-square {
    position: relative; 
    height: 3rem;
    width: 3rem;
    background-color: rgba(88, 110, 128, 0.267);
    border: 1px solid rgba(170, 170, 170, 0.503);   
    margin: 0;
    padding: 0; 
}

.grid-square:hover {
    background-color: rgba(88, 110, 128, 0.562);
}


.grid-square-invalid:hover {
    background-color: rgba(255, 0, 0, 0.399); 
}

.grid-highlight {
    background-color: rgba(88, 110, 128, 0.562);
}

.grid-highlight-invalid {
    background-color: rgba(255, 0, 0, 0.399); 
  }

.setup-top-btns {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem; 
    margin-left: 2.4rem;
    margin-top: 2rem;
}

.setup-bottom-btns {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem; 
    margin-left: 2.4rem;
    margin-top: 0.4rem; 
}

.setup-btn, .confirm-btn {
    background: none;
    outline: none;
    border: 1px solid lightgray;
    color: lightgray;
    margin: 0; 
    border-radius: 5px;
    height: 2.5rem;
    width: 9rem;
    font-family: 'roboto-light';
}

.setup-btn:hover, .ship-box:hover, #close-winner-modal-btn:hover {
    transform: scale(1.03);
    cursor: pointer;
}

#reset-btn, .confirm-btn {
    height: 3rem;
    width: 11rem;
    font-size: 1.2rem;
}

.confirm-btn {
    color: gray;
    border: 1px solid gray;
}

.confirm-btn-active {
    color: lightgray;
    border: 1px solid lightgray;
}

.confirm-btn-active:hover {
    cursor: pointer;
    transform: scale(1.03);
}

#reset-btn:hover {
    background-color: rgba(255, 0, 0, 0.371);
}

.fleet-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
    align-items: center;
    justify-content: center;
    color: lightgray;
    margin-left: 1.5rem; 
}

.ship-box {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.277);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem; 
    height: 6.5rem;
    width: 8rem;
    border: 1px solid rgba(255, 255, 255, 0.501);
    border-radius: 10px;  
    background-color: rgba(0, 0, 0, 0.5);
}

.ship-box-highlight {
    border: 1px solid white; 
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.735);
    background-color: black;
    height: 6.7rem;
    width: 8.2rem;
}

.ship-box-placed {
    border: none;
    box-shadow: none;
    height: 6.5rem;
    width: 8rem;
    background-color: rgba(0, 0, 0, 0.5);
}

.ship-box-placed:hover {
    transform: none;
    cursor: default;
}

.ship-icon {
    width: 6rem;
    height: 2.5rem; 
}

.ship-icon-placed {
    display: none;
}

.ship-text {
    color: gray; 
}

.ship-text-highlight {
    color: white;
}

.ship-text-placed {
    color: transparent;
}

.axis-highlight {
    background-color: white;
    color: black;
}

#ship-container {
    background: transparent;
}

.ship {
    height: 100%;
    width: 100%;
}

/* setup-modal: */
.setup-modal, .winner-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.621); /* Black w/ opacity */
}
  
.setup-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    margin: 15% auto; /* 15% from the top and centered */
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 10px;
    border: 1px solid #ffffff;
    min-height: 5rem;
    max-width: 33rem; 
    border-radius: 15px;
}

.modal-message {
    min-width: 30rem;
    display: flex;
    gap: 1rem;
}

.winner-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000d1;
    margin: 15% auto; /* 15% from the top and centered */
    border: 1px solid #ffffff;
    min-height: 22rem;
    min-width: 35rem; 
    border-radius: 15px;
    padding-top: 30px;
}


.winner-modal-message {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}


#close-winner-modal-btn {
    height: 3rem;
    width: 13rem; 
    background: none;
    border: none; 
    outline: none;
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
    border: 1px solid white;
    border-radius: 10px;
    margin-top: 2rem;
}

.winner-message {
    color: rgb(255, 255, 255);
    font-size: 2.2rem;
    font-family: 'roboto-medium';
    font-style: italic;
}

#winner-text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    max-width: 30rem;
    text-align: center; /* Center-align the text */
    margin: 0 auto; /* Optional: Center the container itself */
    font-family: 'roboto-light';
}

@keyframes blink {
    50% {
      border-color: transparent;
    }
}
  
.typing-cursor {
    border-right: 2px solid;
    animation: blink 1s step-start 0s infinite;
}

#welcome-text {
    padding-top: 0.3rem;
    padding-right: 1.5rem;
    font-size: 1.2rem;
    font-family: 'roboto-regular';
    color: white;
    font-variant: underline;
    height: 22px;
}

.commander-icon {
    width: 110px;
}

#close-modal-btn {
    font-family: 'roboto-light';
    margin-left: 25rem;
    margin-top: -1.7rem;
    width: 5.5rem;
    height: 1.6rem;
    padding: 0; 
    background: none;
    border: none;
    border-radius: 5px;  
    outline: none;
    background-color: rgba(255, 255, 255, 0.259);
    color: rgb(189, 189, 189);
    font-size: 1rem;
}

#close-modal-btn:hover {
    background-color: rgb(109, 109, 109);
    border-radius: 5px; 
    cursor: pointer;
    color: white;
}

/* Battle-page */ 

.battle-card {
    display: flex;
    justify-content: center;
    gap: 5rem;
    background-color: rgba(0, 0, 0, 0.75);
    min-width: 78rem;
    height: 43rem; 
    border-radius: 20px; 
}

.player-side, .computer-side {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.computer-grid {
    position: relative;
    overflow: hidden;
    background-color: rgba(255, 0, 0, 0.287);
}

.player-header, .computer-header {
    font-family: 'roboto-regular';
    display: flex;
    justify-content: flex-end;
    color: white;
    font-size: 1.3rem;
    margin-right: 0.5rem;
}

.player-header {
    color: lightblue;
}

.computer-header {
    color:#f3a640;
}

.missed-square::after {
    content: "";
    position: absolute;
    width: 18px; /* Size of the circle */
    height: 18px; /* Size of the circle */
    background-color: lightblue;
    border-radius: 50%; /* Makes the shape a circle */
    /* Center the circle */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.attacked-square::after {
    content: "";
    position: absolute;
    width: 18px; /* Size of the circle */
    height: 18px; /* Size of the circle */
    background-color: red;
    border-radius: 50%; /* Makes the shape a circle */
    /* Center the circle */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.missed-square:hover, .attacked-square:hover {
    cursor: default;
}


  


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA8E;AAClF;;AAEA;IACI,2BAA2B;IAC3B,4CAAqE;AACzE;;AAEA;IACI,4BAA4B;IAC5B,4CAAsE;AAC1E;;AAEA;IACI,6BAA6B;IAC7B,4CAAuE;AAC3E;;AAEA;IACI,aAAa;IACb,YAAY;IACZ;;;8CAGyC;IACzC,sBAAsB,EAAE,8CAA8C;IACtE,4BAA4B,EAAE,qCAAqC;IACnE,2BAA2B;AAC/B;;AAEA;;;IAGI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,YAAY;IACZ,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA,qBAAqB;;AAErB;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,MAAM;AACV;;AAEA;IACI,gBAAgB,EAAE,8CAA8C;IAChE,eAAe,EAAE,8CAA8C;IAC/D,aAAa;IACb,eAAe;IACf,uBAAuB,EAAE,8CAA8C;IACvE,WAAW,EAAE,eAAe;IAC5B,4CAA4C;AAChD;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,8BAA8B;IAC9B,uBAAuB;IACvB,iBAAiB;IACjB;AACJ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc,EAAE,iBAAiB;IACjC,oBAAoB,EAAE,qBAAqB;IAC3C,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2CAA2C;IAC3C,4CAA4C;IAC5C,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2CAA2C;AAC/C;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,wCAAwC;EAC1C;;AAEF;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,gBAAgB;IAChB,SAAS;IACT,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,+CAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,WAAW;IACX,4CAA4C;IAC5C,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,+CAA+C;IAC/C,uBAAuB;IACvB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,4BAA4B,EAAE,mBAAmB;IACjD,sCAAsC,EAAE,qBAAqB;AACjE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB,EAAE,kCAAkC;IACpD,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAGA;IACI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB,EAAE,0BAA0B;IAC9C,cAAc,EAAE,0CAA0C;IAC1D,2BAA2B;AAC/B;;AAEA;IACI;MACE,yBAAyB;IAC3B;AACJ;;AAEA;IACI,uBAAuB;IACvB,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,4CAA4C;IAC5C,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE,uBAAuB;IACpC,YAAY,EAAE,uBAAuB;IACrC,2BAA2B;IAC3B,kBAAkB,EAAE,6BAA6B;IACjD,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE,uBAAuB;IACpC,YAAY,EAAE,uBAAuB;IACrC,qBAAqB;IACrB,kBAAkB,EAAE,6BAA6B;IACjD,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'bebas';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Bebas_Neue/BebasNeue-regular.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-light';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Light.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-medium';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Medium.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-regular';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Regular.ttf');\n}\n\nbody {\n    height: 100vh;\n    width: 100vw; \n    background: linear-gradient(\n        rgba(0, 0, 0, 0.598), /* Semi-transparent black */\n        rgba(0, 0, 0, 0.321)\n    ), url('./assets/images/background.webp');\n    background-size: cover; /* Ensure the image covers the whole element */\n    background-repeat: no-repeat; /* Prevent the image from repeating */\n    font-family: 'roboto-light';\n}\n\nbody, \nh1, \np {\n    margin: 0; \n}\n\n.content {\n    height: 100%; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* pregame page */\n\n.pregame-card {\n    height: 25rem;\n    width: 35rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: white; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem; \n    border-radius: 15px;  \n}\n\n.pregame-header {\n    margin-top: 3rem;\n    font-size: 5rem;  \n    font-family: 'bebas';\n    letter-spacing: 3px;\n}\n\n.input-box {\n    border-bottom: 1px solid white; \n}\n\n.name-input {\n    height: 3rem;\n    width: 13rem;\n    border: none;\n    outline: none;\n    background: none; \n    color: white;\n    font-size: 1.4rem;\n    border-radius: 10px; \n    text-align: center;\n}\n\n.start-button {\n    height: 3rem;\n    width: 13rem; \n    background: none;\n    border: none; \n    outline: none;\n    color: rgb(189, 189, 189);\n    font-size: 1.3rem;\n}\n\n.start-button:hover {\n    background-color: rgb(67, 66, 66);\n    border-radius: 10px; \n    cursor: pointer;\n    color: white;\n}\n\n/* board-setup page */\n\n.setup-container {\n    display: flex;\n    width: 50rem;\n    height: 45rem;\n    min-width: 50rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 15px; \n}\n\n.setup-board {\n    width: 31.25rem;\n    margin-left: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem; \n}\n\n.setup-grid-container {\n    display: grid;\n    grid-template-columns: auto 1fr; \n    grid-template-rows: auto 1fr; \n    gap: 0; \n}\n\n.setup-grid {\n    height: 31.25rem; /* Adjusted for 10 squares including borders */\n    width: 31.25rem; /* Adjusted for 10 squares including borders */\n    display: flex;\n    flex-wrap: wrap;\n    grid-column: 2 / span 2; /* Spans from the second to the third column */\n    grid-row: 2; /* Second row */\n    background-color: rgba(173, 216, 230, 0.123);\n}\n\n.setup-grid:hover {\n    cursor: crosshair;\n}\n\n.letters-container {\n    display: flex; \n    grid-column: 2 / span 1;\n    grid-row: 1; \n    justify-content: space-between;\n    margin: 0 1.2rem 0.4rem;\n    font-size: 1.3rem;\n    color: rgba(255, 255, 255, 0.5)\n}\n\n.letter {\n    width: 10px; \n}\n\n.numbers-container {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1; /* First column */\n    grid-row: 2 / span 1; /* Spans second row */\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 0.6rem;\n    margin-bottom: 1.8rem;\n    margin-right: 0.8rem;\n    font-size: 1.4rem;\n    color: rgba(255, 255, 255, 0.5)\n}\n\n.number {\n    height: 10px;\n}\n\n.grid-square {\n    position: relative; \n    height: 3rem;\n    width: 3rem;\n    background-color: rgba(88, 110, 128, 0.267);\n    border: 1px solid rgba(170, 170, 170, 0.503);   \n    margin: 0;\n    padding: 0; \n}\n\n.grid-square:hover {\n    background-color: rgba(88, 110, 128, 0.562);\n}\n\n\n.grid-square-invalid:hover {\n    background-color: rgba(255, 0, 0, 0.399); \n}\n\n.grid-highlight {\n    background-color: rgba(88, 110, 128, 0.562);\n}\n\n.grid-highlight-invalid {\n    background-color: rgba(255, 0, 0, 0.399); \n  }\n\n.setup-top-btns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 2rem; \n    margin-left: 2.4rem;\n    margin-top: 2rem;\n}\n\n.setup-bottom-btns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 3rem; \n    margin-left: 2.4rem;\n    margin-top: 0.4rem; \n}\n\n.setup-btn, .confirm-btn {\n    background: none;\n    outline: none;\n    border: 1px solid lightgray;\n    color: lightgray;\n    margin: 0; \n    border-radius: 5px;\n    height: 2.5rem;\n    width: 9rem;\n    font-family: 'roboto-light';\n}\n\n.setup-btn:hover, .ship-box:hover, #close-winner-modal-btn:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n}\n\n#reset-btn, .confirm-btn {\n    height: 3rem;\n    width: 11rem;\n    font-size: 1.2rem;\n}\n\n.confirm-btn {\n    color: gray;\n    border: 1px solid gray;\n}\n\n.confirm-btn-active {\n    color: lightgray;\n    border: 1px solid lightgray;\n}\n\n.confirm-btn-active:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n#reset-btn:hover {\n    background-color: rgba(255, 0, 0, 0.371);\n}\n\n.fleet-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem; \n    align-items: center;\n    justify-content: center;\n    color: lightgray;\n    margin-left: 1.5rem; \n}\n\n.ship-box {\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.277);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem; \n    height: 6.5rem;\n    width: 8rem;\n    border: 1px solid rgba(255, 255, 255, 0.501);\n    border-radius: 10px;  \n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.ship-box-highlight {\n    border: 1px solid white; \n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.735);\n    background-color: black;\n    height: 6.7rem;\n    width: 8.2rem;\n}\n\n.ship-box-placed {\n    border: none;\n    box-shadow: none;\n    height: 6.5rem;\n    width: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.ship-box-placed:hover {\n    transform: none;\n    cursor: default;\n}\n\n.ship-icon {\n    width: 6rem;\n    height: 2.5rem; \n}\n\n.ship-icon-placed {\n    display: none;\n}\n\n.ship-text {\n    color: gray; \n}\n\n.ship-text-highlight {\n    color: white;\n}\n\n.ship-text-placed {\n    color: transparent;\n}\n\n.axis-highlight {\n    background-color: white;\n    color: black;\n}\n\n#ship-container {\n    background: transparent;\n}\n\n.ship {\n    height: 100%;\n    width: 100%;\n}\n\n/* setup-modal: */\n.setup-modal, .winner-modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed; /* Stay in place */\n    z-index: 2; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.621); /* Black w/ opacity */\n}\n  \n.setup-modal-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #000000;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding-top: 20px;\n    padding-bottom: 10px;\n    padding-left: 15px;\n    padding-right: 10px;\n    border: 1px solid #ffffff;\n    min-height: 5rem;\n    max-width: 33rem; \n    border-radius: 15px;\n}\n\n.modal-message {\n    min-width: 30rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.winner-modal-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #000000d1;\n    margin: 15% auto; /* 15% from the top and centered */\n    border: 1px solid #ffffff;\n    min-height: 22rem;\n    min-width: 35rem; \n    border-radius: 15px;\n    padding-top: 30px;\n}\n\n\n.winner-modal-message {\n    height: 100%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n\n#close-winner-modal-btn {\n    height: 3rem;\n    width: 13rem; \n    background: none;\n    border: none; \n    outline: none;\n    color: rgb(255, 255, 255);\n    font-size: 1.3rem;\n    border: 1px solid white;\n    border-radius: 10px;\n    margin-top: 2rem;\n}\n\n.winner-message {\n    color: rgb(255, 255, 255);\n    font-size: 2.2rem;\n    font-family: 'roboto-medium';\n    font-style: italic;\n}\n\n#winner-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    max-width: 30rem;\n    text-align: center; /* Center-align the text */\n    margin: 0 auto; /* Optional: Center the container itself */\n    font-family: 'roboto-light';\n}\n\n@keyframes blink {\n    50% {\n      border-color: transparent;\n    }\n}\n  \n.typing-cursor {\n    border-right: 2px solid;\n    animation: blink 1s step-start 0s infinite;\n}\n\n#welcome-text {\n    padding-top: 0.3rem;\n    padding-right: 1.5rem;\n    font-size: 1.2rem;\n    font-family: 'roboto-regular';\n    color: white;\n    font-variant: underline;\n    height: 22px;\n}\n\n.commander-icon {\n    width: 110px;\n}\n\n#close-modal-btn {\n    font-family: 'roboto-light';\n    margin-left: 25rem;\n    margin-top: -1.7rem;\n    width: 5.5rem;\n    height: 1.6rem;\n    padding: 0; \n    background: none;\n    border: none;\n    border-radius: 5px;  \n    outline: none;\n    background-color: rgba(255, 255, 255, 0.259);\n    color: rgb(189, 189, 189);\n    font-size: 1rem;\n}\n\n#close-modal-btn:hover {\n    background-color: rgb(109, 109, 109);\n    border-radius: 5px; \n    cursor: pointer;\n    color: white;\n}\n\n/* Battle-page */ \n\n.battle-card {\n    display: flex;\n    justify-content: center;\n    gap: 5rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    min-width: 78rem;\n    height: 43rem; \n    border-radius: 20px; \n}\n\n.player-side, .computer-side {\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.computer-grid {\n    position: relative;\n    overflow: hidden;\n    background-color: rgba(255, 0, 0, 0.287);\n}\n\n.player-header, .computer-header {\n    font-family: 'roboto-regular';\n    display: flex;\n    justify-content: flex-end;\n    color: white;\n    font-size: 1.3rem;\n    margin-right: 0.5rem;\n}\n\n.player-header {\n    color: lightblue;\n}\n\n.computer-header {\n    color:#f3a640;\n}\n\n.missed-square::after {\n    content: \"\";\n    position: absolute;\n    width: 18px; /* Size of the circle */\n    height: 18px; /* Size of the circle */\n    background-color: lightblue;\n    border-radius: 50%; /* Makes the shape a circle */\n    /* Center the circle */\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.attacked-square::after {\n    content: \"\";\n    position: absolute;\n    width: 18px; /* Size of the circle */\n    height: 18px; /* Size of the circle */\n    background-color: red;\n    border-radius: 50%; /* Makes the shape a circle */\n    /* Center the circle */\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.missed-square:hover, .attacked-square:hover {\n    cursor: default;\n}\n\n\n  \n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/code/game.js":
/*!**************************!*\
  !*** ./src/code/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/code/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/code/gameboard.js");
/* harmony import */ var _dom_placeShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/placeShips */ "./src/dom/placeShips.js");
/* harmony import */ var _dom_pregame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/pregame */ "./src/dom/pregame.js");





const Game = (() => {
  const playerBoard = _dom_placeShips__WEBPACK_IMPORTED_MODULE_2__["default"].getPlayerBoard();
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerBoard);

  const gameOver = () => {
    return playerBoard.allShipsAreSunk() || computerBoard.allShipsAreSunk();
  };

  const getPlayerBoard = () => {
    return playerBoard;
  };

  const getComputerBoard = () => {
    return computerBoard;
  };

  const initComputerBoard = () => {
    computerBoard.placeComputerShips();
    console.log(computerBoard.getBoard());
  };

  const gameWinner = () => {
    if (playerBoard.allShipsAreSunk()) {
      return 'COMPUTER';
    } else if (computerBoard.allShipsAreSunk()) {
      return _dom_pregame__WEBPACK_IMPORTED_MODULE_3__["default"].getPlayerName();
    }
  };

  const playTurn = (x, y) => {
    if (!gameOver()) {
      newPlayer.attack(computerBoard, x, y);
    } else {
      console.log(`Game over! Winner is ${gameWinner()}`);
    }
  };

  const resetBoards = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
  };

  return {
    playTurn,
    gameWinner,
    resetBoards,
    initComputerBoard,
    getPlayerBoard,
    getComputerBoard,
    gameOver,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/code/gameboard.js":
/*!*******************************!*\
  !*** ./src/code/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/code/ship.js");


const Gameboard = () => {
  let board = Array(10)
    .fill()
    .map(() => Array(10).fill(0));
  let ships = {}; // object to track ships by ID

  const getBoard = () => board;

  const getShips = () => ships;

  const getShipByID = (id) => {
    return ships[id];
  };

  const placeShip = (ship, x, y) => {
    if (outsideBoard(ship, x, y))
      throw new Error('Cant place ship outside of 10x10 board!');

    if (squareOccupied(ship, x, y)) throw new Error('square already occupied!');

    if (board[x][y] === 0 && ship.getLength() === 1) board[x][y] = ship.getID();

    if (board[x][y] === 0 && ship.getLength() > 1) {
      if (ship.getAxis() === 'x')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x + i][y] = ship.getID();
        }
      if (ship.getAxis() === 'y')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x][y + i] = ship.getID();
        }
    }
    ships[ship.getID()] = ship;
    
    const square = document.getElementById(`${x}${y}`);
    console.log(square);
    ship.setStartSquare(square);
  };

  const shipPlaced = (shipId) => {
    let placed = false;
    let board = getBoard();

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === shipId) {
          // Check if the cell contains the shipId
          placed = true;
          break; // Stop searching once shipId is found
        }
      }
      if (placed) {
        break; // Break the outer loop if shipId is found
      }
    }

    return placed;
  };

  const isOccupied = (x, y) => {
    return board[x][y] !== 0;
  };

  const outsideBoard = (ship, x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return true;
    if (ship.getAxis() === 'x' && x + ship.getLength() > 10) return true;
    if (ship.getAxis() === 'y' && y + ship.getLength() > 10) return true;

    return false;
  };

  const squareOccupied = (ship, x, y) => {
    if (ship.getAxis() === 'x') {
      if (x + ship.getLength() > 10) return true;
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x + i][y] !== 0) {
          return true; // Square is occupied
        }
      }
    } else if (ship.getAxis() === 'y') {
      if (y + ship.getLength() > 10) return true;
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x][y + i] !== 0) {
          return true; // Square is occupied
        }
      }
    }
    return false; // No squares are occupied
  };

  const squareContainsShip = (x, y) => {
    return board[x][y] !== 'x' && board[x][y] !== 0;
  };

  const squareAttacked = (x, y) => {
    return board[x][y] === 'hit';
  };

  const missedAttack = (x, y) => {
    return board[x][y] === 'x';
  };

  const isEmptyField = (x, y) => {
    return board[x][y] !== 'x' && board[x][y] !== 'hit';
  };

  const receiveAttack = (x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10)
      throw new Error('Cannot attack outside of 10x10 board!');

    if (squareAttacked(x, y)) throw new Error('Square is already attacked!');

    if (board[x][y] === 0) {
      board[x][y] = 'x'; // Mark as missed attack
      return false;
    }
    // Assuming board[x][y] contains a ship ID for a hit
    const shipID = board[x][y];
    const ship = getShipByID(shipID);
    ship.hit();
    board[x][y] = 'hit'; // Mark as attacked
    return true;
  };

  const allShipsAreSunk = () => {
    return Object.values(ships).every((ship) => ship.isSunk());
  };

  const generateComputerShips = () => {
    const ships = {
      0: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0),
      1: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 1),
      2: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 2),
      3: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 3),
      4: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 4),
    };

    for (const key in ships) {
      const ship = ships[key];
      const randomNum = Math.floor(Math.random() * 2);
      if (randomNum == 1) {
        ship.rotateShip();
      }
    }
    return ships;
  };

  const placeComputerShips = () => {
    const ships = generateComputerShips();
    for (const key in ships) {
      const ship = ships[key];
      let randomX, randomY;

      do {
        randomX = Math.floor(
          Math.random() * (ship.getAxis() === 'x' ? 10 - ship.getLength() : 10),
        );
        randomY = Math.floor(
          Math.random() * (ship.getAxis() === 'y' ? 10 - ship.getLength() : 10),
        );
      } while (squareOccupied(ship, randomX, randomY));

      placeShip(ship, randomX, randomY);
    }
  };

  const resetBoard = () => {
    board = Array(10)
      .fill()
      .map(() => Array(10).fill(0));

    ships = {};
  };

  return {
    placeShip,
    isOccupied,
    isEmptyField,
    getBoard,
    getShips,
    receiveAttack,
    allShipsAreSunk,
    resetBoard,
    squareAttacked,
    missedAttack,
    shipPlaced,
    placeComputerShips,
    squareContainsShip,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/code/player.js":
/*!****************************!*\
  !*** ./src/code/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (gameboard) => {
  let computerHits = [];

  const attack = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
    if (!enemyBoard.squareAttacked(x, y)) {
      computerAttack(gameboard);
    }
  };

  const computerAttack = (playerBoard) => {
    let invalidCoordinate = true;
    let x;
    let y;

    while (invalidCoordinate) {
      if (computerHits.length > 1) {
        [x, y] = getRandomAndRemove(computerHits);
      } else {
        x = getRandomCoordinate();
        y = getRandomCoordinate();
      }
      if (playerBoard.isEmptyField(x, y)) {
        invalidCoordinate = false;
        playerBoard.receiveAttack(x, y);
        if (playerBoard.getBoard()[x][y] === 'hit') {
          // Check if it's a hit
          computerAttack(playerBoard); // Recursively attack again if it was a hit
        }
      }
    }

    addComputerAttack(playerBoard, x, y);
  };

  const addComputerAttack = (playerBoard, x, y) => {
    if (computerHits.length === 1) {
      computerHits = [];
    }

    if (playerBoard.getBoard()[x][y] === 'x') {
      return;
    }
    let origin = false;
    if (computerHits.length === 0) {
      computerHits.push([x, y]);
      origin = true;
    }
    if (x > 0 && x <= 9) {
      computerHits.push([x - 1, y]); // top
    }
    if (x >= 0 && x < 9) {
      computerHits.push([x + 1, y]); // top
    }
    if (y > 0 && y <= 9) {
      computerHits.push([x, y - 1]); // top
    }
    if (y >= 0 && y < 9) {
      computerHits.push([x, y + 1]); // top
    }

    if (computerHits.length > 1 && !origin) {
      if (x === computerHits[0][0]) {
        computerHits = [
          ...computerHits.slice(0, 1),
          ...computerHits.slice(1).filter((subArr) => subArr[0] === x),
        ];
      } else if (y === computerHits[0][1]) {
        computerHits = [
          ...computerHits.slice(0, 1),
          ...computerHits.slice(1).filter((subArr) => subArr[1] === y),
        ];
      }
    }
  };

  const getRandomCoordinate = () => {
    return Math.floor(Math.random() * 10);
  };

  function getRandomAndRemove(array) {
    const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
    const randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    return randomElement;
  }

  return {
    attack,
    computerAttack,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/code/ship.js":
/*!**************************!*\
  !*** ./src/code/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length, id) => {
  if (length > 5 || length < 1) {
    throw new Error('Invalid ship length: Length must be between 1 and 5.');
  }

  const ship = {
    length: length,
    hits: 0,
    sunk: false,
    axis: 'y',
    id: id + 1,
    startSquare: 0
  };

  const getLength = () => ship.length;

  const getAxis = () => ship.axis;

  const getID = () => ship.id;

  const getHits = () => ship.hits;

  const rotateShip = () => {
    if (ship.axis === 'x') {
      ship.axis = 'y';
    } else {
      ship.axis = 'x';
    }
  };

  const hit = () => {
    ship.hits++;
    if (ship.hits === ship.length) ship.sunk = true;
  };

  const isSunk = () => {
    return ship.sunk;
  };

  const setStartSquare = (startSquare) => {
    ship.startSquare = startSquare;
  };

  const getStartSquare = () => {
    return ship.startSquare;
  };

  return { getLength, getAxis, getID, getHits, hit, isSunk, rotateShip, setStartSquare, getStartSquare };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/dom/combat.js":
/*!***************************!*\
  !*** ./src/dom/combat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShips */ "./src/dom/placeShips.js");
/* harmony import */ var _code_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code/game */ "./src/code/game.js");
/* harmony import */ var _winnerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winnerModal */ "./src/dom/winnerModal.js");





const Combat = (() => {
  const getPlayerGrid = () => {
    return _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].getClonedGrid();
  };

  const loadCombatContent = () => {
    _helper__WEBPACK_IMPORTED_MODULE_0__["default"].restorePage();
    const content = document.getElementById('content');

    content.append(loadBattleCard());
    _code_game__WEBPACK_IMPORTED_MODULE_2__["default"].initComputerBoard();

    const compGrid = document.getElementById('computer-grid');
    const computerSquares = compGrid.querySelectorAll('.grid-square');
    computerSquares.forEach((square) => {
      square.addEventListener('click', () => {
        if (
          !square.classList.contains('missed-square') &&
          !square.classList.contains('attacked-square')
        ) {
          attackSquare(square);
        }
        if (_code_game__WEBPACK_IMPORTED_MODULE_2__["default"].gameOver()) {
          content.appendChild(_winnerModal__WEBPACK_IMPORTED_MODULE_3__["default"].loadWinnerModal());
          _winnerModal__WEBPACK_IMPORTED_MODULE_3__["default"].initTypingEffectWinner();
        }
      });
    });
  };

  const loadBattleCard = () => {
    const battleSection = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
      className: 'battle-card',
    });

    battleSection.append(loadPlayerSide(), loadComputerSide());

    return battleSection;
  };

  const loadPlayerSide = () => {
    const playerSide = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', { className: 'player-side' });
    const playerHeader = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'player-header',
      textContent: 'FRIENDLY WATERS',
    });
    playerSide.classList.add('player-side');

    playerSide.append(playerHeader, getPlayerGrid());
    return playerSide;
  };

  const loadComputerSide = () => {
    const computerSide = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
      className: 'computer-side',
    });
    const computerHeader = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'computer-header',
      textContent: 'ENEMY WATERS',
    });
    const computerGrid = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].loadGridSquare();
    computerGrid.lastChild.classList.add('computer-grid');
    computerGrid.lastChild.id = 'computer-grid';
    computerSide.classList.add('computer-side');

    computerSide.append(computerHeader, computerGrid);

    return computerSide;
  };

  const attackSquare = (square) => {
    let xAxis = parseInt(square.id.charAt(0), 10);
    let yAxis = parseInt(square.id.charAt(1), 10);
    const computerBoard = _code_game__WEBPACK_IMPORTED_MODULE_2__["default"].getComputerBoard();

    // Play the turn before checking the results
    _code_game__WEBPACK_IMPORTED_MODULE_2__["default"].playTurn(xAxis, yAxis);
    console.log(computerBoard.getBoard());

    // Now check if the attack was a hit or miss
    if (computerBoard.squareAttacked(xAxis, yAxis)) {
      square.classList.add('attacked-square');
      displaySunkenEnemyShips(computerBoard);
    }
    if (computerBoard.missedAttack(xAxis, yAxis)) {
      square.classList.add('missed-square');
    }

    displayComputerAttack();
  };

  const displayComputerAttack = () => {
    const playerGrid = getPlayerGrid();
    const playerSquares = playerGrid.querySelectorAll('.grid-square');
    const playerBoard = _code_game__WEBPACK_IMPORTED_MODULE_2__["default"].getPlayerBoard();

    playerSquares.forEach((square) => {
      let xAxis = parseInt(square.id.charAt(0), 10);
      let yAxis = parseInt(square.id.charAt(1), 10);

      if (playerBoard.squareAttacked(xAxis, yAxis)) {
        square.classList.add('attacked-square');
      }
      if (playerBoard.missedAttack(xAxis, yAxis)) {
        square.classList.add('missed-square');
      }
    });
  };

  const displaySunkenEnemyShips = (enemyBoard) => {
    let enemyShips = enemyBoard.getShips();
    Object.values(enemyShips).forEach((ship) => {
      if (ship.isSunk()) {
        let startSquare = ship.getStartSquare();
        let shipName = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].ships[ship.getID() - 1].name;
        let shipLength = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].ships[ship.getID() - 1].length;
        let shipAxis = ship.getAxis();
        if (shipAxis === 'x') {
          shipAxis = 'y';
        } else if (shipAxis === 'y') {
          shipAxis = 'x';
        }
        let computerGrid = document.getElementById('computer-grid');

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].placeShipIcon(
          computerGrid,
          startSquare,
          shipName,
          shipAxis,
          shipLength,
        );
      }
    });
  };

  return { loadCombatContent };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Combat);


/***/ }),

/***/ "./src/dom/combatSetup.js":
/*!********************************!*\
  !*** ./src/dom/combatSetup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShips */ "./src/dom/placeShips.js");
/* harmony import */ var _setupModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setupModal */ "./src/dom/setupModal.js");
/* harmony import */ var _combat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combat */ "./src/dom/combat.js");





const CombatSetup = (() => {
  let activeAxis = 'x';

  const getActiveAxis = () => activeAxis;

  const loadSetupContent = () => {
    _helper__WEBPACK_IMPORTED_MODULE_0__["default"].restorePage();
    const content = document.getElementById('content');
    content.append(_setupModal__WEBPACK_IMPORTED_MODULE_2__["default"].loadSetupModal(), loadGameboard());
    _setupModal__WEBPACK_IMPORTED_MODULE_2__["default"].initTypingEffectSetup();

    _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].shipBoxSelector();
    _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].placeShip();
  };

  const loadGameboard = () => {
    const setupContainer = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'setup-container',
    });
    const setupBoard = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'setup-board' });

    setupBoard.append(
      loadTopButtons(),
      _helper__WEBPACK_IMPORTED_MODULE_0__["default"].loadGridSquare(),
      loadBottomButtons(),
    );
    setupContainer.append(setupBoard, loadFleet());

    return setupContainer;
  };

  const loadTopButtons = () => {
    const buttonBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'setup-top-btns' });

    buttonBox.append(buttons.xAxisBtn, buttons.yAxisBtn);

    buttons.xAxisBtn.classList.add('axis-highlight');

    const removeHighlightFromAllButtons = () => {
      buttons.xAxisBtn.classList.remove('axis-highlight');
      buttons.yAxisBtn.classList.remove('axis-highlight');
    };

    buttons.xAxisBtn.addEventListener('click', () => {
      removeHighlightFromAllButtons();
      buttons.xAxisBtn.classList.add('axis-highlight');
      activeAxis = 'x';
      _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].updateGridHighlights();
    });

    buttons.yAxisBtn.addEventListener('click', () => {
      removeHighlightFromAllButtons();
      buttons.yAxisBtn.classList.add('axis-highlight');
      activeAxis = 'y';
      _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].updateGridHighlights();
    });

    return buttonBox;
  };

  const loadFleet = () => {
    const fleetContainer = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'fleet-container',
    });

    for (let i = 0; i < 5; i++) {
      let shipBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
        className: 'ship-box',
        id: i,
      });
      let shipText = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
        textContent: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].shipNames[i],
        className: 'ship-text',
      });
      let shipIcon = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('img', {
        src: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].shipIcons[i],
        className: 'ship-icon',
      });
      shipBox.append(shipIcon, shipText);
      fleetContainer.appendChild(shipBox);
    }

    return fleetContainer;
  };

  const loadBottomButtons = () => {
    const buttonBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('dic', { className: 'setup-bottom-btns' });

    buttonBox.append(buttons.resetBtn, buttons.confirmBtn);

    buttons.resetBtn.addEventListener('click', () => {
      resetPage();
      const playerBoard = _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerBoard();
      playerBoard.resetBoard();
      loadFleet();
      _placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].resetShipsPlaced();
      _helper__WEBPACK_IMPORTED_MODULE_0__["default"].resetConfirmBtn();
    });

    buttons.confirmBtn.addEventListener('click', () => {
      if (_placeShips__WEBPACK_IMPORTED_MODULE_1__["default"].allShipsPlaced()) {
        _combat__WEBPACK_IMPORTED_MODULE_3__["default"].loadCombatContent();
      }
    });

    return buttonBox;
  };

  const buttons = {
    xAxisBtn: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
      className: 'setup-btn',
      id: 'xAxis-btn',
      textContent: 'X axis',
    }),
    yAxisBtn: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
      className: 'setup-btn',
      id: 'yAxis-btn',
      textContent: 'Y axis',
    }),
    resetBtn: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
      className: 'setup-btn',
      id: 'reset-btn',
      textContent: 'Reset',
    }),
    confirmBtn: _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
      className: 'confirm-btn',
      textContent: 'Confirm',
    }),
  };

  const resetPage = () => {
    _helper__WEBPACK_IMPORTED_MODULE_0__["default"].resetGameboardGrid();
    activeAxis = 'x';
    const yAxisBtn = document.getElementById('yAxis-btn');
    const xAxisBtn = document.getElementById('xAxis-btn');
    yAxisBtn.classList.remove('axis-highlight');
    xAxisBtn.classList.add('axis-highlight');

    const shipBoxes = document.querySelectorAll('.ship-box');
    shipBoxes.forEach((box) => {
      box.firstChild.classList.remove('ship-icon-placed');
      box.lastChild.classList.remove('ship-text-placed');
      box.classList.remove('ship-box-placed');
    });
  };

  return {
    loadSetupContent,
    getActiveAxis,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CombatSetup);


/***/ }),

/***/ "./src/dom/helper.js":
/*!***************************!*\
  !*** ./src/dom/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons_commander_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/commander.png */ "./src/assets/icons/commander.png");
/* harmony import */ var _assets_icons_carrier_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/carrier.svg */ "./src/assets/icons/carrier.svg");
/* harmony import */ var _assets_icons_battleship_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/battleship.svg */ "./src/assets/icons/battleship.svg");
/* harmony import */ var _assets_icons_cruiser_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/cruiser.svg */ "./src/assets/icons/cruiser.svg");
/* harmony import */ var _assets_icons_submarine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/submarine.svg */ "./src/assets/icons/submarine.svg");
/* harmony import */ var _assets_icons_destroyer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/destroyer.svg */ "./src/assets/icons/destroyer.svg");







const helper = (() => {
  const restorePage = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
  };

  const create = (type, data) => {
    if (!type) console.log('missing type');

    const element = document.createElement(type);

    for (const [key, value] of Object.entries(data)) {
      element[key] = value;
    }

    return element;
  };

  const loadGrid = () => {
    const grid = Array(10)
      .fill()
      .map(() => Array(10).fill());

    return grid;
  };

  const loadGridSquare = () => {
    const gridContainer = create('div', {
      className: 'setup-grid-container',
      position: 'relative',
    });
    const gridSquare = create('div', {
      className: 'setup-grid',
      id: 'setup-grid',
      position: 'absolute',
    });
    gridSquare.style.zIndex = '1';

    loadGrid().forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let square = create('div', {
          className: 'grid-square',
          id: `${rowIndex}${columnIndex}`,
        });
        gridSquare.appendChild(square);
      });
    });

    gridContainer.append(loadLetterSection(), loadNumberSection(), gridSquare);

    return gridContainer;
  };

  const loadNumberSection = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersContainer = create('div', { classList: 'numbers-container' });

    numbers.forEach((num) => {
      const number = create('div', { classList: 'number', textContent: num });
      numbersContainer.appendChild(number);
    });

    return numbersContainer;
  };

  const loadLetterSection = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const lettersContainer = create('div', { classList: 'letters-container' });

    letters.forEach((ltr) => {
      const letter = create('div', { classList: 'letter', textContent: ltr });
      lettersContainer.appendChild(letter);
    });

    return lettersContainer;
  };

  const loadCommanderIcon = () => {
    const iconContainer = create('div', {
      className: 'commander-icon-box',
    });
    const commanderIcon = create('img', {
      src: _assets_icons_commander_png__WEBPACK_IMPORTED_MODULE_0__,
      className: 'commander-icon',
    });

    iconContainer.appendChild(commanderIcon);

    return iconContainer;
  };

  const shipIcons = [
    _assets_icons_carrier_svg__WEBPACK_IMPORTED_MODULE_1__,
    _assets_icons_battleship_svg__WEBPACK_IMPORTED_MODULE_2__,
    _assets_icons_cruiser_svg__WEBPACK_IMPORTED_MODULE_3__,
    _assets_icons_submarine_svg__WEBPACK_IMPORTED_MODULE_4__,
    _assets_icons_destroyer_svg__WEBPACK_IMPORTED_MODULE_5__,
  ];

  const shipNames = [
    'Carrier (5f)',
    'Battleship (4f)',
    'Cruiser (4f)',
    'Submarine (3f)',
    'Destroyer (2f)',
  ];

  const ships = {
    0: { length: 5, name: 'Carrier' },
    1: { length: 4, name: 'Battleship' },
    2: { length: 4, name: 'Cruiser' },
    3: { length: 3, name: 'Submarine' },
    4: { length: 2, name: 'Destroyer' },
  };

  const resetGridSquares = () => {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
      square.classList.remove('grid-highlight');
    });
  };

  const placeShipIcon = (
    parentContainer,
    startSquare,
    shipType,
    axis,
    shipLength,
  ) => {
    console.log(startSquare);
    const shipContainer = create('div', { id: 'ship-container' });
    shipContainer.classList.add(`${shipType}-${axis}`);

    if (axis === 'y') {
      shipContainer.style.height = `${shipLength * 3}rem`;
      shipContainer.style.width = '3rem';
    } else {
      shipContainer.style.width = `${shipLength * 3}rem`;
      shipContainer.style.height = '3rem';
    }

    let iconURL;
    switch (shipType) {
      case 'Carrier':
        iconURL = _assets_icons_carrier_svg__WEBPACK_IMPORTED_MODULE_1__;
        break;
      case 'Battleship':
        iconURL = _assets_icons_battleship_svg__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case 'Cruiser':
        iconURL = _assets_icons_cruiser_svg__WEBPACK_IMPORTED_MODULE_3__;
        break;
      case 'Submarine':
        iconURL = _assets_icons_submarine_svg__WEBPACK_IMPORTED_MODULE_4__;
        break;
      case 'Destroyer':
        iconURL = _assets_icons_destroyer_svg__WEBPACK_IMPORTED_MODULE_5__;
        break;
      default:
        console.error('Unknown ship type');
        return;
    }

    let icon = create('img', { src: iconURL, className: 'ship' });
    shipContainer.appendChild(icon);

    shipContainer.style.position = 'absolute';
    shipContainer.style.zIndex = '-1';

    let squareSelector = `#${CSS.escape(startSquare.id)}`;
    let square = parentContainer.querySelector(squareSelector);
    if (square) {
      square.prepend(shipContainer);
    } else {
      console.error(`Square with selector ${squareSelector} not found.`);
    }
  };

  const resetGameboardGrid = () => {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
      while (square.firstChild) {
        square.removeChild(square.firstChild);
      }
    });
  };

  const activateConfirmBtn = () => {
    const confirmBtn = document.querySelector('.confirm-btn');

    confirmBtn.classList.add('confirm-btn-active');
  };

  const resetConfirmBtn = () => {
    const confirmBtn = document.querySelector('.confirm-btn');

    confirmBtn.classList.remove('confirm-btn-active');
  };

  const typeWriter = (text, elementId, typingSpeed, callback) => {
    let i = 0;
    const element = document.getElementById(elementId);
    element.classList.add('typing-cursor');

    const typing = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typingSpeed);
      } else {
        element.classList.remove('typing-cursor');
        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    typing();
  };

  return {
    create,
    restorePage,
    loadGridSquare,
    loadLetterSection,
    loadNumberSection,
    loadCommanderIcon,
    placeShipIcon,
    resetGridSquares,
    resetGameboardGrid,
    activateConfirmBtn,
    resetConfirmBtn,
    typeWriter,
    shipIcons,
    shipNames,
    ships,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);


/***/ }),

/***/ "./src/dom/placeShips.js":
/*!*******************************!*\
  !*** ./src/dom/placeShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _code_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code/gameboard */ "./src/code/gameboard.js");
/* harmony import */ var _code_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code/ship */ "./src/code/ship.js");
/* harmony import */ var _combatSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combatSetup */ "./src/dom/combatSetup.js");





const PlaceShips = (() => {
  let currentMouseOverHandlers = new Map();
  let currentMouseOutHandlers = new Map();
  let playerBoard = (0,_code_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let shipsPlaced = 0;
  var clonedGrid;

  const getPlayerBoard = () => {
    return playerBoard;
  };

  const shipPlacement = (() => {
    let placementIsValid = true; 

    return {
        setPlacementValid: (isValid) => {
            placementIsValid = isValid;
        },
        isPlacementValid: () => placementIsValid,
    };
  })();

  const selectedShip = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const allShipsPlaced = () => {
    return shipsPlaced === 5;
  };

  const resetShipsPlaced = () => {
    shipsPlaced = 0; 
  };

  const resetSelectedShip = () => {
    for (const key in selectedShip) {
      selectedShip[key] = false;
    }
  };

  const isShipSelected = () => {
    for (const key in selectedShip) {
      if (selectedShip[key] === true) {
        return true; // Return immediately when a selected ship is found
      }
    }
    return false; // Return false if no selected ship is found
  };

  const getSelectedShipID = () => {
    let id = '0'; 
    for (const key in selectedShip) {
        if (selectedShip[key] === true) {
            id = key;
        } 
    }
    return id.toString(); 
  };

  const selectShip = (shipId) => {
    resetShipBoxes();
    resetSelectedShip();
    if (playerBoard.shipPlaced(parseInt(shipId) + 1)) {
        return;
    }
    selectedShip[shipId] = true; // Assuming selectedShip is accessible at this scope
  
    // Update UI to reflect the selected ship
    const shipBox = document.getElementById(shipId);
    shipBox.classList.add('ship-box-highlight');
    shipBox.lastChild.classList.add('ship-text-highlight');
  
    // Update grid highlights based on the newly selected ship
    updateGridHighlights();
  };
  
  const updateGridHighlights = () => {
    if (!isShipSelected()) {
        return;
    }
    let shipId = getSelectedShipID(); // Ensure this returns the ID as a string, which is key in helper.ships
    let shipLength = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].ships[shipId].length;
    lightGridSquares(shipLength, _combatSetup__WEBPACK_IMPORTED_MODULE_3__["default"].getActiveAxis());
  };

  const shipBoxSelector = () => {
    const shipBoxes = document.querySelectorAll('.ship-box');
    shipBoxes.forEach((ship) => {
      ship.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        console.log(ship.id);
        selectShip(ship.id); // Pass the ID of the clicked ship to selectShip
      });
    });

    //set placementValid to true everytime mouse is not over grid
    document.addEventListener('mouseover', () => {
        const isgridClicked = event.target.closest('.setup-grid');
        if (!isgridClicked) {
            shipPlacement.setPlacementValid(true);
        }
      });

    document.addEventListener('click', (event) => {
        // Check if the clicked element or any of its parents match the '.ship-box' selector
        const isShipBoxClick = event.target.closest('.ship-box');
        // Check if the clicked element's ID is 'xAxisBtn' or 'yAxisBtn'
        const isAxisButtonClick = event.target.id === 'xAxis-btn' || event.target.id === 'yAxis-btn';

        // If the click is not on a ship box and not on the axis buttons, and the placement is valid
        if (!isShipBoxClick && !isAxisButtonClick && shipPlacement.isPlacementValid()) {
          resetSelectedShip();
          resetShipBoxes();
        }
      });
  };

  const resetShipBoxes = () => {
    const shipBox = document.querySelectorAll('.ship-box');

    shipBox.forEach((otherShip) => {
      otherShip.classList.remove('ship-box-highlight');
      otherShip.lastChild.classList.remove('ship-text-highlight');
    });

    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((element) => {
      element.removeEventListener(
        'mouseover',
        currentMouseOverHandlers.get(element),
      );
      element.removeEventListener(
        'mouseout',
        currentMouseOutHandlers.get(element),
      );
    });
  };

  const removeShipBoxContent = (shipId) => {
    const selectedShipBox = document.getElementById(`${shipId}`);
    selectedShipBox.firstChild.classList.add('ship-icon-placed');
    selectedShipBox.lastChild.classList.add('ship-text-placed');
    selectedShipBox.classList.add('ship-box-placed');
  };

  const lightGridSquares = (shipLength, axis) => {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridWidth = 10; // Assuming a grid width of 10 for this example
  
    gridSquares.forEach((element, index) => {
      // Remove existing event listeners if they exist
      if (currentMouseOverHandlers.has(element)) {
        element.removeEventListener('mouseover', currentMouseOverHandlers.get(element));
        element.removeEventListener('mouseout', currentMouseOutHandlers.get(element));
      }
  
      // Define new handlers
      const mouseOverHandler = () => {
        let endIndex = index + (axis === 'x' ? shipLength - 1 : (shipLength - 1) * gridWidth);
        let placementIsValid = true; 
        shipPlacement.setPlacementValid(placementIsValid); // Assume valid until proven otherwise
  
        // First pass: Check if any part of the placement is invalid
        for (let i = index; i <= endIndex && placementIsValid; i += (axis === 'x' ? 1 : gridWidth)) {
          if (i >= gridSquares.length || (axis === 'x' && Math.floor(i / gridWidth) !== Math.floor(index / gridWidth))) {
            placementIsValid = false;
            shipPlacement.setPlacementValid(placementIsValid);
            break; // Stop checking if we already know the placement is invalid
          }
  
          let [x, y] = gridSquares[i].id.split('').map(Number); // Using Number as a shorthand
          if (playerBoard.isOccupied(x, y)) {
            placementIsValid = false;
            shipPlacement.setPlacementValid(placementIsValid);
            break; // Stop checking if we find any square is occupied
          }
        }
  
        // Second pass: Apply classes based on placement validity
        for (let i = index; i <= endIndex && i < gridSquares.length; i += (axis === 'x' ? 1 : gridWidth)) {
          if (axis === 'x' && Math.floor(i / gridWidth) !== Math.floor(index / gridWidth)) {
            break; // Additional safeguard for horizontal axis
          }
  
          const square = gridSquares[i];
          if (placementIsValid) {
            square.classList.add('grid-highlight');
          } else {
            square.classList.add('grid-square-invalid', 'grid-highlight-invalid');
          }
        }
      };
  
      const mouseOutHandler = () => {
        gridSquares.forEach(square => {
          square.classList.remove('grid-highlight', 'grid-highlight-invalid', 'grid-square-invalid');
        });
      };
  
      // Update the map with new handlers
      currentMouseOverHandlers.set(element, mouseOverHandler);
      currentMouseOutHandlers.set(element, mouseOutHandler);
  
      // Attach the new event listeners
      element.addEventListener('mouseover', mouseOverHandler);
      element.addEventListener('mouseout', mouseOutHandler);
    });
  };

  const placeShip = () => {
    const board = document.getElementById('setup-grid');
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
      square.addEventListener('click', () => {
        if (!isShipSelected() || !shipPlacement.isPlacementValid()) {
            return;
        }
        //remove highlight on gridsquares
        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].resetGridSquares();
        //find selected ship
        let selectedShipId = null;
        for (let id in selectedShip) {
          if (selectedShip[id] === true) {
            selectedShipId = parseInt(id);
          }
        }
        //ship data 
        let rotationAxis = _combatSetup__WEBPACK_IMPORTED_MODULE_3__["default"].getActiveAxis();
        let xAxis = parseInt(square.id.charAt(0), 10);
        let yAxis = parseInt(square.id.charAt(1), 10);
        let shipLength = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].ships[selectedShipId].length;
        let shipName = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].ships[selectedShipId].name;
        //rotate ship if needed
        let ship = (0,_code_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(shipLength, selectedShipId);
        if (rotationAxis === 'y') {
            ship.rotateShip();
        }
        
        playerBoard.placeShip(ship, xAxis, yAxis);
        shipsPlaced += 1;
        console.log(shipsPlaced);
        console.log(playerBoard.getBoard()); 

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].placeShipIcon(board, square, shipName, rotationAxis, shipLength);

        removeShipBoxContent(selectedShipId);
        resetSelectedShip();

        if (allShipsPlaced()) {
          _helper__WEBPACK_IMPORTED_MODULE_0__["default"].activateConfirmBtn();
          var grid = document.querySelector('.setup-grid-container');
          clonedGrid = grid.cloneNode(true);
        }
      });
    });
  };

    const getClonedGrid = () => {
    return clonedGrid;
  };

  return {
    shipBoxSelector,
    placeShip,
    updateGridHighlights,
    getPlayerBoard,
    allShipsPlaced,
    resetShipsPlaced,
    getClonedGrid
  };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceShips);


/***/ }),

/***/ "./src/dom/pregame.js":
/*!****************************!*\
  !*** ./src/dom/pregame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _combatSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combatSetup */ "./src/dom/combatSetup.js");



const pregame = (() => {
  let playerName; 

  const setPlayerName = (name) => {
      playerName = name;
  };

  const getPlayerName = () => {
      let firstChar = playerName.charAt(0).toUpperCase();
      let restOfName = playerName.slice(1);

      return firstChar + restOfName; 
  };

  const loadCard = () => {
    const content = document.getElementById('content');

    content.append(createPregameCard());
  };

  const createPregameCard = () => {
    const section = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', { className: 'pregame-card' });

    section.append(createHeader(), createTextInput(), createStartButton());

    return section;
  };

  const createHeader = () => {
    const header = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('h1', {
      className: 'pregame-header',
      textContent: 'BATTLESHIP',
    });
    return header;
  };

  const createTextInput = () => {
    const textInput = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('input', {
      type: 'text',
      className: 'name-input',
      id: 'username',
      placeholder: 'Captain name...',
      minLength: 0, 
      maxLength: 15
    });

    const textBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
        className: 'input-box'
    });

    textBox.appendChild(textInput);

    return textBox;
  };

  const setUsername = () => {
    let userInput = document.getElementById('username');
    setPlayerName(userInput.value);
  };

  const createStartButton = () => {
    const startButton = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', { 
      className: 'start-button',
      type: 'button',
      id: 'play-now-button',
    });

    const text = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', {
        className: 'start-button-text',
        textContent: 'ENTER COMBAT'
    });

    startButton.appendChild(text);
    startButton.addEventListener('click', function() {
      setUsername();
      _combatSetup__WEBPACK_IMPORTED_MODULE_1__["default"].loadSetupContent();
    }); 

    return startButton;
  };

  return {
    loadCard,
    getPlayerName
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pregame);


/***/ }),

/***/ "./src/dom/setupModal.js":
/*!*******************************!*\
  !*** ./src/dom/setupModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _pregame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregame */ "./src/dom/pregame.js");



const SetupModal = (() => {
  const loadSetupModal = () => {
    const modal = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'setup-modal' });

    modal.appendChild(loadModalContent());

    return modal;
  };

  const closeModal = () => {
    const modal = document.querySelector('.setup-modal');
    modal.style.display = 'none';
  };

  const loadModalContent = () => {
    const modalContent = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'setup-modal-content',
    });
    const msgBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'modal-message' });
    msgBox.append(_helper__WEBPACK_IMPORTED_MODULE_0__["default"].loadCommanderIcon(), loadText());
    modalContent.appendChild(msgBox);

    return modalContent;
  };

  const loadText = () => {
    const text = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { id: 'welcome-text' });

    return text;
  };

  const initTypingEffectSetup = () => {
    const message = `Welcome Captain ${_pregame__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayerName()}!`;
    const secondMessage =
      'Plan our formation by selecting the axis and ship and drop it on the map.';

    const addCloseButton = () => {
      const button = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
        id: 'close-modal-btn',
        textContent: 'Yes Sir!',
      });
      const modalContent = document.querySelector('.setup-modal-content');
      setTimeout(() => {
        modalContent.appendChild(button);

        button.addEventListener('click', () => {
          closeModal();
        });
      }, 800);
    };

    _helper__WEBPACK_IMPORTED_MODULE_0__["default"].typeWriter(message, 'welcome-text', 30, () => {
      setTimeout(() => {
        let text = document.getElementById('welcome-text');
        text.innerHTML = '';
        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].typeWriter(secondMessage, 'welcome-text', 20, addCloseButton);
      }, 1000);
    });
  };

  return {
    loadSetupModal,
    initTypingEffectSetup,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetupModal);


/***/ }),

/***/ "./src/dom/winnerModal.js":
/*!********************************!*\
  !*** ./src/dom/winnerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/dom/helper.js");
/* harmony import */ var _code_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code/game */ "./src/code/game.js");



const winnerModal = (() => {
  const loadWinnerModal = () => {
    const modal = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'winner-modal' });

    modal.appendChild(loadModalContent());

    return modal;
  };

  const closeModal = () => {
    const modal = document.querySelector('.winner-modal');
    modal.style.display = 'none';
  };

  const loadModalContent = () => {
    const modalContent = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'winner-modal-content',
    });

    const msgBox = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'winner-modal-message' });
    const winnerMessage = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      className: 'winner-message',
      textContent: `${_code_game__WEBPACK_IMPORTED_MODULE_1__["default"].gameWinner()} WIN!`,
    });
    msgBox.append(winnerMessage, _helper__WEBPACK_IMPORTED_MODULE_0__["default"].loadCommanderIcon(), loadText());
    modalContent.appendChild(msgBox);

    return modalContent;
  };

  const loadText = () => {
    const text = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { id: 'winner-text' });

    return text;
  };

  const initTypingEffectWinner = () => {
    let message =
      _code_game__WEBPACK_IMPORTED_MODULE_1__["default"].gameWinner() === 'COMPUTER'
        ? 'The enemy fleet has outmaneuvered you, Captain. Better luck next time!'
        : 'Mission accomplished, Captain! You truly are the master of the seas.';

    const addCloseButton = () => {
      const button = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
        id: 'close-winner-modal-btn',
        textContent: 'New Battle',
      });
      const modalContent = document.querySelector('.winner-modal-content');
      setTimeout(() => {
        modalContent.appendChild(button);

        button.addEventListener('click', () => {
          closeModal();
          window.location.reload();
        });
      }, 800);
    };

    _helper__WEBPACK_IMPORTED_MODULE_0__["default"].typeWriter(message, 'winner-text', 30, () => {
      // Call addCloseButton after typeWriter is done typing
      addCloseButton();
    });
  };

  return { loadWinnerModal, initTypingEffectWinner };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (winnerModal);


/***/ }),

/***/ "./src/assets/fonts/Bebas_Neue,Roboto/Bebas_Neue/BebasNeue-regular.ttf":
/*!*****************************************************************************!*\
  !*** ./src/assets/fonts/Bebas_Neue,Roboto/Bebas_Neue/BebasNeue-regular.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

/***/ }),

/***/ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Light.ttf":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Light.ttf ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ }),

/***/ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Medium.ttf":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Medium.ttf ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Regular.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/Bebas_Neue,Roboto/Roboto/Roboto-Regular.ttf ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/icons/battleship.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/battleship.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe1c506445cad93aaa52.svg";

/***/ }),

/***/ "./src/assets/icons/carrier.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/carrier.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dadfa49606b9af0ef141.svg";

/***/ }),

/***/ "./src/assets/icons/commander.png":
/*!****************************************!*\
  !*** ./src/assets/icons/commander.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d03298a1a122256f69b2.png";

/***/ }),

/***/ "./src/assets/icons/cruiser.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/cruiser.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f8478f0701cfb332a05.svg";

/***/ }),

/***/ "./src/assets/icons/destroyer.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/destroyer.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e79f1f108f54eed6e09.svg";

/***/ }),

/***/ "./src/assets/icons/submarine.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/submarine.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "195e7b145d60206d2e5d.svg";

/***/ }),

/***/ "./src/assets/images/background.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/background.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e8325e1779275c826e3.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_pregame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/pregame */ "./src/dom/pregame.js");



_dom_pregame__WEBPACK_IMPORTED_MODULE_1__["default"].loadCard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK01BQW9GO0FBQ2hJLDRDQUE0Qyw2TEFBMkU7QUFDdkgsNENBQTRDLCtMQUE0RTtBQUN4SCw0Q0FBNEMsaU1BQTZFO0FBQ3pILDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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VUFBVSx3QkFBd0IscUJBQXFCLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEseUJBQXlCLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIsYUFBYSx5QkFBeUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFB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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7O0FBRXBDLG9EQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvZGUvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb2RlL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb2RlL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb2RlL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL2NvbWJhdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vY29tYmF0U2V0dXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vcHJlZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vc2V0dXBNb2RhbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vd2lubmVyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZSxSb2JvdG8vQmViYXNfTmV1ZS9CZWJhc05ldWUtcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlLFJvYm90by9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWUsUm9ib3RvL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWUsUm9ib3RvL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdiZWJhcyc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3OyBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41OTgpLCAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrICovXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zMjEpXG4gICAgKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIEVuc3VyZSB0aGUgaW1hZ2UgY292ZXJzIHRoZSB3aG9sZSBlbGVtZW50ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogUHJldmVudCB0aGUgaW1hZ2UgZnJvbSByZXBlYXRpbmcgKi9cbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XG59XG5cbmJvZHksIFxuaDEsIFxucCB7XG4gICAgbWFyZ2luOiAwOyBcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBwcmVnYW1lIHBhZ2UgKi9cblxuLnByZWdhbWUtY2FyZCB7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxufVxuXG4ucHJlZ2FtZS1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgZm9udC1zaXplOiA1cmVtOyAgXG4gICAgZm9udC1mYW1pbHk6ICdiZWJhcyc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLmlucHV0LWJveCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyBcbn1cblxuLm5hbWUtaW5wdXQge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTNyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXJ0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxM3JlbTsgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7IFxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NiwgNjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIGJvYXJkLXNldHVwIHBhZ2UgKi9cblxuLnNldHVwLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTByZW07XG4gICAgaGVpZ2h0OiA0NXJlbTtcbiAgICBtaW4td2lkdGg6IDUwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXG59XG5cbi5zZXR1cC1ib2FyZCB7XG4gICAgd2lkdGg6IDMxLjI1cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS4ycmVtOyBcbn1cblxuLnNldHVwLWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7IFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7IFxuICAgIGdhcDogMDsgXG59XG5cbi5zZXR1cC1ncmlkIHtcbiAgICBoZWlnaHQ6IDMxLjI1cmVtOyAvKiBBZGp1c3RlZCBmb3IgMTAgc3F1YXJlcyBpbmNsdWRpbmcgYm9yZGVycyAqL1xuICAgIHdpZHRoOiAzMS4yNXJlbTsgLyogQWRqdXN0ZWQgZm9yIDEwIHNxdWFyZXMgaW5jbHVkaW5nIGJvcmRlcnMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMjsgLyogU3BhbnMgZnJvbSB0aGUgc2Vjb25kIHRvIHRoZSB0aGlyZCBjb2x1bW4gKi9cbiAgICBncmlkLXJvdzogMjsgLyogU2Vjb25kIHJvdyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC4xMjMpO1xufVxuXG4uc2V0dXAtZ3JpZDpob3ZlciB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5sZXR0ZXJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG4gICAgZ3JpZC1yb3c6IDE7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgMS4ycmVtIDAuNHJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXG59XG5cbi5sZXR0ZXIge1xuICAgIHdpZHRoOiAxMHB4OyBcbn1cblxuLm51bWJlcnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ3JpZC1jb2x1bW46IDE7IC8qIEZpcnN0IGNvbHVtbiAqL1xuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxOyAvKiBTcGFucyBzZWNvbmQgcm93ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXG59XG5cbi5udW1iZXIge1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLmdyaWQtc3F1YXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC4yNjcpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTcwLCAxNzAsIDE3MCwgMC41MDMpOyAgIFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwOyBcbn1cblxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC41NjIpO1xufVxuXG5cbi5ncmlkLXNxdWFyZS1pbnZhbGlkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zOTkpOyBcbn1cblxuLmdyaWQtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC41NjIpO1xufVxuXG4uZ3JpZC1oaWdobGlnaHQtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk5KTsgXG4gIH1cblxuLnNldHVwLXRvcC1idG5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTsgXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc2V0dXAtYm90dG9tLWJ0bnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtOyBcbiAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTsgXG59XG5cbi5zZXR1cC1idG4sIC5jb25maXJtLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIG1hcmdpbjogMDsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiA5cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0Jztcbn1cblxuLnNldHVwLWJ0bjpob3ZlciwgLnNoaXAtYm94OmhvdmVyLCAjY2xvc2Utd2lubmVyLW1vZGFsLWJ0bjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNyZXNldC1idG4sIC5jb25maXJtLWJ0biB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmNvbmZpcm0tYnRuIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uY29uZmlybS1idG4tYWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmNvbmZpcm0tYnRuLWFjdGl2ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbiNyZXNldC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM3MSk7XG59XG5cbi5mbGVldC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuNXJlbTsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07IFxufVxuXG4uc2hpcC1ib3gge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtOyBcbiAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2hpcC1ib3gtaGlnaGxpZ2h0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA2LjdyZW07XG4gICAgd2lkdGg6IDguMnJlbTtcbn1cblxuLnNoaXAtYm94LXBsYWNlZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgaGVpZ2h0OiA2LjVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2hpcC1ib3gtcGxhY2VkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2hpcC1pY29uIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTsgXG59XG5cbi5zaGlwLWljb24tcGxhY2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hpcC10ZXh0IHtcbiAgICBjb2xvcjogZ3JheTsgXG59XG5cbi5zaGlwLXRleHQtaGlnaGxpZ2h0IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaGlwLXRleHQtcGxhY2VkIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5heGlzLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jc2hpcC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2hpcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBzZXR1cC1tb2RhbDogKi9cbi5zZXR1cC1tb2RhbCwgLndpbm5lci1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDI7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjEpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4gIFxuLnNldHVwLW1vZGFsLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgbWF4LXdpZHRoOiAzM3JlbTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm1vZGFsLW1lc3NhZ2Uge1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi53aW5uZXItbW9kYWwtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQxO1xuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBtaW4taGVpZ2h0OiAyMnJlbTtcbiAgICBtaW4td2lkdGg6IDM1cmVtOyBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5cbi53aW5uZXItbW9kYWwtbWVzc2FnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG5cbiNjbG9zZS13aW5uZXItbW9kYWwtYnRuIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDEzcmVtOyBcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTsgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLndpbm5lci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bSc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jd2lubmVyLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXItYWxpZ24gdGhlIHRleHQgKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgLyogT3B0aW9uYWw6IENlbnRlciB0aGUgY29udGFpbmVyIGl0c2VsZiAqL1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0Jztcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgNTAlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuICBcbi50eXBpbmctY3Vyc29yIHtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XG59XG5cbiN3ZWxjb21lLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXZhcmlhbnQ6IHVuZGVybGluZTtcbiAgICBoZWlnaHQ6IDIycHg7XG59XG5cbi5jb21tYW5kZXItaWNvbiB7XG4gICAgd2lkdGg6IDExMHB4O1xufVxuXG4jY2xvc2UtbW9kYWwtYnRuIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xuICAgIG1hcmdpbi10b3A6IC0xLjdyZW07XG4gICAgd2lkdGg6IDUuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAwOyBcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNTkpO1xuICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBCYXR0bGUtcGFnZSAqLyBcblxuLmJhdHRsZS1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIG1pbi13aWR0aDogNzhyZW07XG4gICAgaGVpZ2h0OiA0M3JlbTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXG59XG5cbi5wbGF5ZXItc2lkZSwgLmNvbXB1dGVyLXNpZGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNvbXB1dGVyLWdyaWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjI4Nyk7XG59XG5cbi5wbGF5ZXItaGVhZGVyLCAuY29tcHV0ZXItaGVhZGVyIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ucGxheWVyLWhlYWRlciB7XG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLmNvbXB1dGVyLWhlYWRlciB7XG4gICAgY29sb3I6I2YzYTY0MDtcbn1cblxuLm1pc3NlZC1zcXVhcmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXG4gICAgaGVpZ2h0OiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgc2hhcGUgYSBjaXJjbGUgKi9cbiAgICAvKiBDZW50ZXIgdGhlIGNpcmNsZSAqL1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmF0dGFja2VkLXNxdWFyZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cbiAgICBoZWlnaHQ6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2VzIHRoZSBzaGFwZSBhIGNpcmNsZSAqL1xuICAgIC8qIENlbnRlciB0aGUgY2lyY2xlICovXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubWlzc2VkLXNxdWFyZTpob3ZlciwgLmF0dGFja2VkLXNxdWFyZTpob3ZlciB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5cbiAgXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUE4RTtBQUNsRjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBcUU7QUFDekU7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNENBQXNFO0FBQzFFOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1o7Ozs4Q0FHeUM7SUFDekMsc0JBQXNCLEVBQUUsOENBQThDO0lBQ3RFLDRCQUE0QixFQUFFLHFDQUFxQztJQUNuRSwyQkFBMkI7QUFDL0I7O0FBRUE7OztJQUdJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lB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QixFQUFFLDZCQUE2QjtJQUNqRCxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2JlYmFzJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWVcXFxcLFJvYm90by9CZWJhc19OZXVlL0JlYmFzTmV1ZS1yZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZVxcXFwsUm9ib3RvL1JvYm90by9Sb2JvdG8tTGlnaHQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZVxcXFwsUm9ib3RvL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlXFxcXCxSb2JvdG8vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyBcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjU5OCksIC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zMjEpXFxuICAgICksIHVybCgnLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQud2VicCcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBFbnN1cmUgdGhlIGltYWdlIGNvdmVycyB0aGUgd2hvbGUgZWxlbWVudCAqL1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBQcmV2ZW50IHRoZSBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XFxufVxcblxcbmJvZHksIFxcbmgxLCBcXG5wIHtcXG4gICAgbWFyZ2luOiAwOyBcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogcHJlZ2FtZSBwYWdlICovXFxuXFxuLnByZWdhbWUtY2FyZCB7XFxuICAgIGhlaWdodDogMjVyZW07XFxuICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxcbn1cXG5cXG4ucHJlZ2FtZS1oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBmb250LXNpemU6IDVyZW07ICBcXG4gICAgZm9udC1mYW1pbHk6ICdiZWJhcyc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcblxcbi5pbnB1dC1ib3gge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7IFxcbn1cXG5cXG4ubmFtZS1pbnB1dCB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTNyZW07IFxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjYsIDY2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBib2FyZC1zZXR1cCBwYWdlICovXFxuXFxuLnNldHVwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MHJlbTtcXG4gICAgaGVpZ2h0OiA0NXJlbTtcXG4gICAgbWluLXdpZHRoOiA1MHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXFxufVxcblxcbi5zZXR1cC1ib2FyZCB7XFxuICAgIHdpZHRoOiAzMS4yNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjJyZW07IFxcbn1cXG5cXG4uc2V0dXAtZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjsgXFxuICAgIGdhcDogMDsgXFxufVxcblxcbi5zZXR1cC1ncmlkIHtcXG4gICAgaGVpZ2h0OiAzMS4yNXJlbTsgLyogQWRqdXN0ZWQgZm9yIDEwIHNxdWFyZXMgaW5jbHVkaW5nIGJvcmRlcnMgKi9cXG4gICAgd2lkdGg6IDMxLjI1cmVtOyAvKiBBZGp1c3RlZCBmb3IgMTAgc3F1YXJlcyBpbmNsdWRpbmcgYm9yZGVycyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyOyAvKiBTcGFucyBmcm9tIHRoZSBzZWNvbmQgdG8gdGhlIHRoaXJkIGNvbHVtbiAqL1xcbiAgICBncmlkLXJvdzogMjsgLyogU2Vjb25kIHJvdyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMTIzKTtcXG59XFxuXFxuLnNldHVwLWdyaWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmxldHRlcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMTsgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDEuMnJlbSAwLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXFxufVxcblxcbi5sZXR0ZXIge1xcbiAgICB3aWR0aDogMTBweDsgXFxufVxcblxcbi5udW1iZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAxOyAvKiBGaXJzdCBjb2x1bW4gKi9cXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7IC8qIFNwYW5zIHNlY29uZCByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXFxufVxcblxcbi5udW1iZXIge1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjI2Nyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTcwLCAxNzAsIDE3MCwgMC41MDMpOyAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IFxcbn1cXG5cXG4uZ3JpZC1zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC41NjIpO1xcbn1cXG5cXG5cXG4uZ3JpZC1zcXVhcmUtaW52YWxpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM5OSk7IFxcbn1cXG5cXG4uZ3JpZC1oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC41NjIpO1xcbn1cXG5cXG4uZ3JpZC1oaWdobGlnaHQtaW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM5OSk7IFxcbiAgfVxcblxcbi5zZXR1cC10b3AtYnRucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtOyBcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLnNldHVwLWJvdHRvbS1idG5zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07IFxcbiAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07IFxcbn1cXG5cXG4uc2V0dXAtYnRuLCAuY29uZmlybS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XFxufVxcblxcbi5zZXR1cC1idG46aG92ZXIsIC5zaGlwLWJveDpob3ZlciwgI2Nsb3NlLXdpbm5lci1tb2RhbC1idG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXNldC1idG4sIC5jb25maXJtLWJ0biB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDExcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbmZpcm0tYnRuIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5jb25maXJtLWJ0bi1hY3RpdmUge1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5jb25maXJtLWJ0bi1hY3RpdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbiNyZXNldC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zNzEpO1xcbn1cXG5cXG4uZmxlZXQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41cmVtOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07IFxcbn1cXG5cXG4uc2hpcC1ib3gge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtOyBcXG4gICAgaGVpZ2h0OiA2LjVyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5zaGlwLWJveC1oaWdobGlnaHQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MzUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiA2LjdyZW07XFxuICAgIHdpZHRoOiA4LjJyZW07XFxufVxcblxcbi5zaGlwLWJveC1wbGFjZWQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGhlaWdodDogNi41cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uc2hpcC1ib3gtcGxhY2VkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zaGlwLWljb24ge1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07IFxcbn1cXG5cXG4uc2hpcC1pY29uLXBsYWNlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaGlwLXRleHQge1xcbiAgICBjb2xvcjogZ3JheTsgXFxufVxcblxcbi5zaGlwLXRleHQtaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcC10ZXh0LXBsYWNlZCB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmF4aXMtaGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3NoaXAtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogc2V0dXAtbW9kYWw6ICovXFxuLnNldHVwLW1vZGFsLCAud2lubmVyLW1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAyOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjIxKTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG4gIFxcbi5zZXR1cC1tb2RhbC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIG1heC13aWR0aDogMzNyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwtbWVzc2FnZSB7XFxuICAgIG1pbi13aWR0aDogMzByZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLndpbm5lci1tb2RhbC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQxO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBtaW4taGVpZ2h0OiAyMnJlbTtcXG4gICAgbWluLXdpZHRoOiAzNXJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4ud2lubmVyLW1vZGFsLW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuI2Nsb3NlLXdpbm5lci1tb2RhbC1idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxM3JlbTsgXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLndpbm5lci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bSc7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3dpbm5lci10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlci1hbGlnbiB0aGUgdGV4dCAqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogT3B0aW9uYWw6IENlbnRlciB0aGUgY29udGFpbmVyIGl0c2VsZiAqL1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICA1MCUge1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuICBcXG4udHlwaW5nLWN1cnNvciB7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XFxufVxcblxcbiN3ZWxjb21lLXRleHQge1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXZhcmlhbnQ6IHVuZGVybGluZTtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4uY29tbWFuZGVyLWljb24ge1xcbiAgICB3aWR0aDogMTEwcHg7XFxufVxcblxcbiNjbG9zZS1tb2RhbC1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTEuN3JlbTtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjU5KTtcXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQmF0dGxlLXBhZ2UgKi8gXFxuXFxuLmJhdHRsZS1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgbWluLXdpZHRoOiA3OHJlbTtcXG4gICAgaGVpZ2h0OiA0M3JlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbn1cXG5cXG4ucGxheWVyLXNpZGUsIC5jb21wdXRlci1zaWRlIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29tcHV0ZXItZ3JpZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjg3KTtcXG59XFxuXFxuLnBsYXllci1oZWFkZXIsIC5jb21wdXRlci1oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmNvbXB1dGVyLWhlYWRlciB7XFxuICAgIGNvbG9yOiNmM2E2NDA7XFxufVxcblxcbi5taXNzZWQtc3F1YXJlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cXG4gICAgaGVpZ2h0OiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2VzIHRoZSBzaGFwZSBhIGNpcmNsZSAqL1xcbiAgICAvKiBDZW50ZXIgdGhlIGNpcmNsZSAqL1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmF0dGFja2VkLXNxdWFyZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXFxuICAgIGhlaWdodDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgc2hhcGUgYSBjaXJjbGUgKi9cXG4gICAgLyogQ2VudGVyIHRoZSBjaXJjbGUgKi9cXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5taXNzZWQtc3F1YXJlOmhvdmVyLCAuYXR0YWNrZWQtc3F1YXJlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5cXG4gIFxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGFjZVNoaXBzIGZyb20gJy4uL2RvbS9wbGFjZVNoaXBzJztcbmltcG9ydCBwcmVnYW1lIGZyb20gJy4uL2RvbS9wcmVnYW1lJztcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gUGxhY2VTaGlwcy5nZXRQbGF5ZXJCb2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IG5ld1BsYXllciA9IFBsYXllcihwbGF5ZXJCb2FyZCk7XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkLmFsbFNoaXBzQXJlU3VuaygpIHx8IGNvbXB1dGVyQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgaW5pdENvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkLmdldEJvYXJkKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVXaW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzQXJlU3VuaygpKSB7XG4gICAgICByZXR1cm4gJ0NPTVBVVEVSJztcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkpIHtcbiAgICAgIHJldHVybiBwcmVnYW1lLmdldFBsYXllck5hbWUoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheVR1cm4gPSAoeCwgeSkgPT4ge1xuICAgIGlmICghZ2FtZU92ZXIoKSkge1xuICAgICAgbmV3UGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCB4LCB5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYEdhbWUgb3ZlciEgV2lubmVyIGlzICR7Z2FtZVdpbm5lcigpfWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldEJvYXJkcyA9ICgpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XG4gICAgY29tcHV0ZXJCb2FyZC5yZXNldEJvYXJkKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5VHVybixcbiAgICBnYW1lV2lubmVyLFxuICAgIHJlc2V0Qm9hcmRzLFxuICAgIGluaXRDb21wdXRlckJvYXJkLFxuICAgIGdldFBsYXllckJvYXJkLFxuICAgIGdldENvbXB1dGVyQm9hcmQsXG4gICAgZ2FtZU92ZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBBcnJheSgxMClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG4gIGxldCBzaGlwcyA9IHt9OyAvLyBvYmplY3QgdG8gdHJhY2sgc2hpcHMgYnkgSURcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG5cbiAgY29uc3QgZ2V0U2hpcEJ5SUQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gc2hpcHNbaWRdO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKG91dHNpZGVCb2FyZChzaGlwLCB4LCB5KSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudCBwbGFjZSBzaGlwIG91dHNpZGUgb2YgMTB4MTAgYm9hcmQhJyk7XG5cbiAgICBpZiAoc3F1YXJlT2NjdXBpZWQoc2hpcCwgeCwgeSkpIHRocm93IG5ldyBFcnJvcignc3F1YXJlIGFscmVhZHkgb2NjdXBpZWQhJyk7XG5cbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IDAgJiYgc2hpcC5nZXRMZW5ndGgoKSA9PT0gMSkgYm9hcmRbeF1beV0gPSBzaGlwLmdldElEKCk7XG5cbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IDAgJiYgc2hpcC5nZXRMZW5ndGgoKSA+IDEpIHtcbiAgICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3gnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IHNoaXAuZ2V0SUQoKTtcbiAgICAgICAgfVxuICAgICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneScpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcC5nZXRJRCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNoaXBzW3NoaXAuZ2V0SUQoKV0gPSBzaGlwO1xuICAgIFxuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApO1xuICAgIGNvbnNvbGUubG9nKHNxdWFyZSk7XG4gICAgc2hpcC5zZXRTdGFydFNxdWFyZShzcXVhcmUpO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBQbGFjZWQgPSAoc2hpcElkKSA9PiB7XG4gICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gc2hpcElkKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNlbGwgY29udGFpbnMgdGhlIHNoaXBJZFxuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7IC8vIFN0b3Agc2VhcmNoaW5nIG9uY2Ugc2hpcElkIGlzIGZvdW5kXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgYnJlYWs7IC8vIEJyZWFrIHRoZSBvdXRlciBsb29wIGlmIHNoaXBJZCBpcyBmb3VuZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZWQ7XG4gIH07XG5cbiAgY29uc3QgaXNPY2N1cGllZCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldICE9PSAwO1xuICB9O1xuXG4gIGNvbnN0IG91dHNpZGVCb2FyZCA9IChzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKHggPCAwIHx8IHggPj0gMTAgfHwgeSA8IDAgfHwgeSA+PSAxMCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneCcgJiYgeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneScgJiYgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc3F1YXJlT2NjdXBpZWQgPSAoc2hpcCwgeCwgeSkgPT4ge1xuICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3gnKSB7XG4gICAgICBpZiAoeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeCArIGldW3ldICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIFNxdWFyZSBpcyBvY2N1cGllZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3knKSB7XG4gICAgICBpZiAoeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beSArIGldICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIFNxdWFyZSBpcyBvY2N1cGllZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgLy8gTm8gc3F1YXJlcyBhcmUgb2NjdXBpZWRcbiAgfTtcblxuICBjb25zdCBzcXVhcmVDb250YWluc1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSAhPT0gJ3gnICYmIGJvYXJkW3hdW3ldICE9PSAwO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZUF0dGFja2VkID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV0gPT09ICdoaXQnO1xuICB9O1xuXG4gIGNvbnN0IG1pc3NlZEF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldID09PSAneCc7XG4gIH07XG5cbiAgY29uc3QgaXNFbXB0eUZpZWxkID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV0gIT09ICd4JyAmJiBib2FyZFt4XVt5XSAhPT0gJ2hpdCc7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHggPCAwIHx8IHggPj0gMTAgfHwgeSA8IDAgfHwgeSA+PSAxMClcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGF0dGFjayBvdXRzaWRlIG9mIDEweDEwIGJvYXJkIScpO1xuXG4gICAgaWYgKHNxdWFyZUF0dGFja2VkKHgsIHkpKSB0aHJvdyBuZXcgRXJyb3IoJ1NxdWFyZSBpcyBhbHJlYWR5IGF0dGFja2VkIScpO1xuXG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAwKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICd4JzsgLy8gTWFyayBhcyBtaXNzZWQgYXR0YWNrXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFzc3VtaW5nIGJvYXJkW3hdW3ldIGNvbnRhaW5zIGEgc2hpcCBJRCBmb3IgYSBoaXRcbiAgICBjb25zdCBzaGlwSUQgPSBib2FyZFt4XVt5XTtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcEJ5SUQoc2hpcElEKTtcbiAgICBzaGlwLmhpdCgpO1xuICAgIGJvYXJkW3hdW3ldID0gJ2hpdCc7IC8vIE1hcmsgYXMgYXR0YWNrZWRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc0FyZVN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcHMpLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAwOiBTaGlwKDUsIDApLFxuICAgICAgMTogU2hpcCg0LCAxKSxcbiAgICAgIDI6IFNoaXAoNCwgMiksXG4gICAgICAzOiBTaGlwKDMsIDMpLFxuICAgICAgNDogU2hpcCgyLCA0KSxcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1trZXldO1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBpZiAocmFuZG9tTnVtID09IDEpIHtcbiAgICAgICAgc2hpcC5yb3RhdGVTaGlwKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwcztcbiAgfTtcblxuICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzaGlwcykge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW2tleV07XG4gICAgICBsZXQgcmFuZG9tWCwgcmFuZG9tWTtcblxuICAgICAgZG8ge1xuICAgICAgICByYW5kb21YID0gTWF0aC5mbG9vcihcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKHNoaXAuZ2V0QXhpcygpID09PSAneCcgPyAxMCAtIHNoaXAuZ2V0TGVuZ3RoKCkgOiAxMCksXG4gICAgICAgICk7XG4gICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoc2hpcC5nZXRBeGlzKCkgPT09ICd5JyA/IDEwIC0gc2hpcC5nZXRMZW5ndGgoKSA6IDEwKSxcbiAgICAgICAgKTtcbiAgICAgIH0gd2hpbGUgKHNxdWFyZU9jY3VwaWVkKHNoaXAsIHJhbmRvbVgsIHJhbmRvbVkpKTtcblxuICAgICAgcGxhY2VTaGlwKHNoaXAsIHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gQXJyYXkoMTApXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcblxuICAgIHNoaXBzID0ge307XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNPY2N1cGllZCxcbiAgICBpc0VtcHR5RmllbGQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc0FyZVN1bmssXG4gICAgcmVzZXRCb2FyZCxcbiAgICBzcXVhcmVBdHRhY2tlZCxcbiAgICBtaXNzZWRBdHRhY2ssXG4gICAgc2hpcFBsYWNlZCxcbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMsXG4gICAgc3F1YXJlQ29udGFpbnNTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKGdhbWVib2FyZCkgPT4ge1xuICBsZXQgY29tcHV0ZXJIaXRzID0gW107XG5cbiAgY29uc3QgYXR0YWNrID0gKGVuZW15Qm9hcmQsIHgsIHkpID0+IHtcbiAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKCFlbmVteUJvYXJkLnNxdWFyZUF0dGFja2VkKHgsIHkpKSB7XG4gICAgICBjb21wdXRlckF0dGFjayhnYW1lYm9hcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlckF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGxldCBpbnZhbGlkQ29vcmRpbmF0ZSA9IHRydWU7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG5cbiAgICB3aGlsZSAoaW52YWxpZENvb3JkaW5hdGUpIHtcbiAgICAgIGlmIChjb21wdXRlckhpdHMubGVuZ3RoID4gMSkge1xuICAgICAgICBbeCwgeV0gPSBnZXRSYW5kb21BbmRSZW1vdmUoY29tcHV0ZXJIaXRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgIHkgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyQm9hcmQuaXNFbXB0eUZpZWxkKHgsIHkpKSB7XG4gICAgICAgIGludmFsaWRDb29yZGluYXRlID0gZmFsc2U7XG4gICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5nZXRCb2FyZCgpW3hdW3ldID09PSAnaGl0Jykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBoaXRcbiAgICAgICAgICBjb21wdXRlckF0dGFjayhwbGF5ZXJCb2FyZCk7IC8vIFJlY3Vyc2l2ZWx5IGF0dGFjayBhZ2FpbiBpZiBpdCB3YXMgYSBoaXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbXB1dGVyQXR0YWNrKHBsYXllckJvYXJkLCB4LCB5KTtcbiAgfTtcblxuICBjb25zdCBhZGRDb21wdXRlckF0dGFjayA9IChwbGF5ZXJCb2FyZCwgeCwgeSkgPT4ge1xuICAgIGlmIChjb21wdXRlckhpdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb21wdXRlckhpdHMgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XSA9PT0gJ3gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvcmlnaW4gPSBmYWxzZTtcbiAgICBpZiAoY29tcHV0ZXJIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29tcHV0ZXJIaXRzLnB1c2goW3gsIHldKTtcbiAgICAgIG9yaWdpbiA9IHRydWU7XG4gICAgfVxuICAgIGlmICh4ID4gMCAmJiB4IDw9IDkpIHtcbiAgICAgIGNvbXB1dGVySGl0cy5wdXNoKFt4IC0gMSwgeV0pOyAvLyB0b3BcbiAgICB9XG4gICAgaWYgKHggPj0gMCAmJiB4IDwgOSkge1xuICAgICAgY29tcHV0ZXJIaXRzLnB1c2goW3ggKyAxLCB5XSk7IC8vIHRvcFxuICAgIH1cbiAgICBpZiAoeSA+IDAgJiYgeSA8PSA5KSB7XG4gICAgICBjb21wdXRlckhpdHMucHVzaChbeCwgeSAtIDFdKTsgLy8gdG9wXG4gICAgfVxuICAgIGlmICh5ID49IDAgJiYgeSA8IDkpIHtcbiAgICAgIGNvbXB1dGVySGl0cy5wdXNoKFt4LCB5ICsgMV0pOyAvLyB0b3BcbiAgICB9XG5cbiAgICBpZiAoY29tcHV0ZXJIaXRzLmxlbmd0aCA+IDEgJiYgIW9yaWdpbikge1xuICAgICAgaWYgKHggPT09IGNvbXB1dGVySGl0c1swXVswXSkge1xuICAgICAgICBjb21wdXRlckhpdHMgPSBbXG4gICAgICAgICAgLi4uY29tcHV0ZXJIaXRzLnNsaWNlKDAsIDEpLFxuICAgICAgICAgIC4uLmNvbXB1dGVySGl0cy5zbGljZSgxKS5maWx0ZXIoKHN1YkFycikgPT4gc3ViQXJyWzBdID09PSB4KSxcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSBpZiAoeSA9PT0gY29tcHV0ZXJIaXRzWzBdWzFdKSB7XG4gICAgICAgIGNvbXB1dGVySGl0cyA9IFtcbiAgICAgICAgICAuLi5jb21wdXRlckhpdHMuc2xpY2UoMCwgMSksXG4gICAgICAgICAgLi4uY29tcHV0ZXJIaXRzLnNsaWNlKDEpLmZpbHRlcigoc3ViQXJyKSA9PiBzdWJBcnJbMV0gPT09IHkpLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQW5kUmVtb3ZlKGFycmF5KSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyYXkubGVuZ3RoIC0gMSkpICsgMTtcbiAgICBjb25zdCByYW5kb21FbGVtZW50ID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgIGFycmF5LnNwbGljZShyYW5kb21JbmRleCwgMSk7XG4gICAgcmV0dXJuIHJhbmRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGF0dGFjayxcbiAgICBjb21wdXRlckF0dGFjayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBpZCkgPT4ge1xuICBpZiAobGVuZ3RoID4gNSB8fCBsZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbGVuZ3RoOiBMZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUuJyk7XG4gIH1cblxuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3VuazogZmFsc2UsXG4gICAgYXhpczogJ3knLFxuICAgIGlkOiBpZCArIDEsXG4gICAgc3RhcnRTcXVhcmU6IDBcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBzaGlwLmxlbmd0aDtcblxuICBjb25zdCBnZXRBeGlzID0gKCkgPT4gc2hpcC5heGlzO1xuXG4gIGNvbnN0IGdldElEID0gKCkgPT4gc2hpcC5pZDtcblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gc2hpcC5oaXRzO1xuXG4gIGNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXAuYXhpcyA9PT0gJ3gnKSB7XG4gICAgICBzaGlwLmF4aXMgPSAneSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAuYXhpcyA9ICd4JztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHNoaXAuaGl0cysrO1xuICAgIGlmIChzaGlwLmhpdHMgPT09IHNoaXAubGVuZ3RoKSBzaGlwLnN1bmsgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcC5zdW5rO1xuICB9O1xuXG4gIGNvbnN0IHNldFN0YXJ0U3F1YXJlID0gKHN0YXJ0U3F1YXJlKSA9PiB7XG4gICAgc2hpcC5zdGFydFNxdWFyZSA9IHN0YXJ0U3F1YXJlO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXJ0U3F1YXJlID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwLnN0YXJ0U3F1YXJlO1xuICB9O1xuXG4gIHJldHVybiB7IGdldExlbmd0aCwgZ2V0QXhpcywgZ2V0SUQsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCByb3RhdGVTaGlwLCBzZXRTdGFydFNxdWFyZSwgZ2V0U3RhcnRTcXVhcmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBQbGFjZVNoaXBzIGZyb20gJy4vcGxhY2VTaGlwcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb2RlL2dhbWUnO1xuaW1wb3J0IHdpbm5lck1vZGFsIGZyb20gJy4vd2lubmVyTW9kYWwnO1xuXG5jb25zdCBDb21iYXQgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRQbGF5ZXJHcmlkID0gKCkgPT4ge1xuICAgIHJldHVybiBQbGFjZVNoaXBzLmdldENsb25lZEdyaWQoKTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ29tYmF0Q29udGVudCA9ICgpID0+IHtcbiAgICBoZWxwZXIucmVzdG9yZVBhZ2UoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRCYXR0bGVDYXJkKCkpO1xuICAgIEdhbWUuaW5pdENvbXB1dGVyQm9hcmQoKTtcblxuICAgIGNvbnN0IGNvbXBHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdyaWQnKTtcbiAgICBjb25zdCBjb21wdXRlclNxdWFyZXMgPSBjb21wR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnbWlzc2VkLXNxdWFyZScpICYmXG4gICAgICAgICAgIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2F0dGFja2VkLXNxdWFyZScpXG4gICAgICAgICkge1xuICAgICAgICAgIGF0dGFja1NxdWFyZShzcXVhcmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHYW1lLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdpbm5lck1vZGFsLmxvYWRXaW5uZXJNb2RhbCgpKTtcbiAgICAgICAgICB3aW5uZXJNb2RhbC5pbml0VHlwaW5nRWZmZWN0V2lubmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRCYXR0bGVDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhdHRsZVNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlKCdzZWN0aW9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnYmF0dGxlLWNhcmQnLFxuICAgIH0pO1xuXG4gICAgYmF0dGxlU2VjdGlvbi5hcHBlbmQobG9hZFBsYXllclNpZGUoKSwgbG9hZENvbXB1dGVyU2lkZSgpKTtcblxuICAgIHJldHVybiBiYXR0bGVTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQbGF5ZXJTaWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclNpZGUgPSBoZWxwZXIuY3JlYXRlKCdzZWN0aW9uJywgeyBjbGFzc05hbWU6ICdwbGF5ZXItc2lkZScgfSk7XG4gICAgY29uc3QgcGxheWVySGVhZGVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAncGxheWVyLWhlYWRlcicsXG4gICAgICB0ZXh0Q29udGVudDogJ0ZSSUVORExZIFdBVEVSUycsXG4gICAgfSk7XG4gICAgcGxheWVyU2lkZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2lkZScpO1xuXG4gICAgcGxheWVyU2lkZS5hcHBlbmQocGxheWVySGVhZGVyLCBnZXRQbGF5ZXJHcmlkKCkpO1xuICAgIHJldHVybiBwbGF5ZXJTaWRlO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDb21wdXRlclNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJTaWRlID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NvbXB1dGVyLXNpZGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY29tcHV0ZXItaGVhZGVyJyxcbiAgICAgIHRleHRDb250ZW50OiAnRU5FTVkgV0FURVJTJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wdXRlckdyaWQgPSBoZWxwZXIubG9hZEdyaWRTcXVhcmUoKTtcbiAgICBjb21wdXRlckdyaWQubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWdyaWQnKTtcbiAgICBjb21wdXRlckdyaWQubGFzdENoaWxkLmlkID0gJ2NvbXB1dGVyLWdyaWQnO1xuICAgIGNvbXB1dGVyU2lkZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaWRlJyk7XG5cbiAgICBjb21wdXRlclNpZGUuYXBwZW5kKGNvbXB1dGVySGVhZGVyLCBjb21wdXRlckdyaWQpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVyU2lkZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTcXVhcmUgPSAoc3F1YXJlKSA9PiB7XG4gICAgbGV0IHhBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgwKSwgMTApO1xuICAgIGxldCB5QXhpcyA9IHBhcnNlSW50KHNxdWFyZS5pZC5jaGFyQXQoMSksIDEwKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZS5nZXRDb21wdXRlckJvYXJkKCk7XG5cbiAgICAvLyBQbGF5IHRoZSB0dXJuIGJlZm9yZSBjaGVja2luZyB0aGUgcmVzdWx0c1xuICAgIEdhbWUucGxheVR1cm4oeEF4aXMsIHlBeGlzKTtcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkLmdldEJvYXJkKCkpO1xuXG4gICAgLy8gTm93IGNoZWNrIGlmIHRoZSBhdHRhY2sgd2FzIGEgaGl0IG9yIG1pc3NcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5zcXVhcmVBdHRhY2tlZCh4QXhpcywgeUF4aXMpKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQtc3F1YXJlJyk7XG4gICAgICBkaXNwbGF5U3Vua2VuRW5lbXlTaGlwcyhjb21wdXRlckJvYXJkKTtcbiAgICB9XG4gICAgaWYgKGNvbXB1dGVyQm9hcmQubWlzc2VkQXR0YWNrKHhBeGlzLCB5QXhpcykpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc3F1YXJlJyk7XG4gICAgfVxuXG4gICAgZGlzcGxheUNvbXB1dGVyQXR0YWNrKCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckdyaWQgPSBnZXRQbGF5ZXJHcmlkKCk7XG4gICAgY29uc3QgcGxheWVyU3F1YXJlcyA9IHBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lLmdldFBsYXllckJvYXJkKCk7XG5cbiAgICBwbGF5ZXJTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgbGV0IHhBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgwKSwgMTApO1xuICAgICAgbGV0IHlBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgxKSwgMTApO1xuXG4gICAgICBpZiAocGxheWVyQm9hcmQuc3F1YXJlQXR0YWNrZWQoeEF4aXMsIHlBeGlzKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyQm9hcmQubWlzc2VkQXR0YWNrKHhBeGlzLCB5QXhpcykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1zcXVhcmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U3Vua2VuRW5lbXlTaGlwcyA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgbGV0IGVuZW15U2hpcHMgPSBlbmVteUJvYXJkLmdldFNoaXBzKCk7XG4gICAgT2JqZWN0LnZhbHVlcyhlbmVteVNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBsZXQgc3RhcnRTcXVhcmUgPSBzaGlwLmdldFN0YXJ0U3F1YXJlKCk7XG4gICAgICAgIGxldCBzaGlwTmFtZSA9IGhlbHBlci5zaGlwc1tzaGlwLmdldElEKCkgLSAxXS5uYW1lO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGhlbHBlci5zaGlwc1tzaGlwLmdldElEKCkgLSAxXS5sZW5ndGg7XG4gICAgICAgIGxldCBzaGlwQXhpcyA9IHNoaXAuZ2V0QXhpcygpO1xuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgIHNoaXBBeGlzID0gJ3knO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICBzaGlwQXhpcyA9ICd4JztcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdyaWQnKTtcblxuICAgICAgICBoZWxwZXIucGxhY2VTaGlwSWNvbihcbiAgICAgICAgICBjb21wdXRlckdyaWQsXG4gICAgICAgICAgc3RhcnRTcXVhcmUsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEF4aXMsXG4gICAgICAgICAgc2hpcExlbmd0aCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkQ29tYmF0Q29udGVudCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tYmF0O1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgUGxhY2VTaGlwcyBmcm9tICcuL3BsYWNlU2hpcHMnO1xuaW1wb3J0IFNldHVwTW9kYWwgZnJvbSAnLi9zZXR1cE1vZGFsJztcbmltcG9ydCBDb21iYXQgZnJvbSAnLi9jb21iYXQnO1xuXG5jb25zdCBDb21iYXRTZXR1cCA9ICgoKSA9PiB7XG4gIGxldCBhY3RpdmVBeGlzID0gJ3gnO1xuXG4gIGNvbnN0IGdldEFjdGl2ZUF4aXMgPSAoKSA9PiBhY3RpdmVBeGlzO1xuXG4gIGNvbnN0IGxvYWRTZXR1cENvbnRlbnQgPSAoKSA9PiB7XG4gICAgaGVscGVyLnJlc3RvcmVQYWdlKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmQoU2V0dXBNb2RhbC5sb2FkU2V0dXBNb2RhbCgpLCBsb2FkR2FtZWJvYXJkKCkpO1xuICAgIFNldHVwTW9kYWwuaW5pdFR5cGluZ0VmZmVjdFNldHVwKCk7XG5cbiAgICBQbGFjZVNoaXBzLnNoaXBCb3hTZWxlY3RvcigpO1xuICAgIFBsYWNlU2hpcHMucGxhY2VTaGlwKCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXR1cENvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWNvbnRhaW5lcicsXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0dXBCb2FyZCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnc2V0dXAtYm9hcmQnIH0pO1xuXG4gICAgc2V0dXBCb2FyZC5hcHBlbmQoXG4gICAgICBsb2FkVG9wQnV0dG9ucygpLFxuICAgICAgaGVscGVyLmxvYWRHcmlkU3F1YXJlKCksXG4gICAgICBsb2FkQm90dG9tQnV0dG9ucygpLFxuICAgICk7XG4gICAgc2V0dXBDb250YWluZXIuYXBwZW5kKHNldHVwQm9hcmQsIGxvYWRGbGVldCgpKTtcblxuICAgIHJldHVybiBzZXR1cENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkVG9wQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25Cb3ggPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3NldHVwLXRvcC1idG5zJyB9KTtcblxuICAgIGJ1dHRvbkJveC5hcHBlbmQoYnV0dG9ucy54QXhpc0J0biwgYnV0dG9ucy55QXhpc0J0bik7XG5cbiAgICBidXR0b25zLnhBeGlzQnRuLmNsYXNzTGlzdC5hZGQoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG5cbiAgICBjb25zdCByZW1vdmVIaWdobGlnaHRGcm9tQWxsQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgIGJ1dHRvbnMueEF4aXNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYXhpcy1oaWdobGlnaHQnKTtcbiAgICAgIGJ1dHRvbnMueUF4aXNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYXhpcy1oaWdobGlnaHQnKTtcbiAgICB9O1xuXG4gICAgYnV0dG9ucy54QXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZUhpZ2hsaWdodEZyb21BbGxCdXR0b25zKCk7XG4gICAgICBidXR0b25zLnhBeGlzQnRuLmNsYXNzTGlzdC5hZGQoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG4gICAgICBhY3RpdmVBeGlzID0gJ3gnO1xuICAgICAgUGxhY2VTaGlwcy51cGRhdGVHcmlkSGlnaGxpZ2h0cygpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9ucy55QXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZUhpZ2hsaWdodEZyb21BbGxCdXR0b25zKCk7XG4gICAgICBidXR0b25zLnlBeGlzQnRuLmNsYXNzTGlzdC5hZGQoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG4gICAgICBhY3RpdmVBeGlzID0gJ3knO1xuICAgICAgUGxhY2VTaGlwcy51cGRhdGVHcmlkSGlnaGxpZ2h0cygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkJveDtcbiAgfTtcblxuICBjb25zdCBsb2FkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmxlZXRDb250YWluZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdmbGVldC1jb250YWluZXInLFxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGxldCBzaGlwQm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICdzaGlwLWJveCcsXG4gICAgICAgIGlkOiBpLFxuICAgICAgfSk7XG4gICAgICBsZXQgc2hpcFRleHQgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgIHRleHRDb250ZW50OiBoZWxwZXIuc2hpcE5hbWVzW2ldLFxuICAgICAgICBjbGFzc05hbWU6ICdzaGlwLXRleHQnLFxuICAgICAgfSk7XG4gICAgICBsZXQgc2hpcEljb24gPSBoZWxwZXIuY3JlYXRlKCdpbWcnLCB7XG4gICAgICAgIHNyYzogaGVscGVyLnNoaXBJY29uc1tpXSxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2hpcC1pY29uJyxcbiAgICAgIH0pO1xuICAgICAgc2hpcEJveC5hcHBlbmQoc2hpcEljb24sIHNoaXBUZXh0KTtcbiAgICAgIGZsZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBCb3gpO1xuICAgIH1cblxuICAgIHJldHVybiBmbGVldENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkQm90dG9tQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25Cb3ggPSBoZWxwZXIuY3JlYXRlKCdkaWMnLCB7IGNsYXNzTmFtZTogJ3NldHVwLWJvdHRvbS1idG5zJyB9KTtcblxuICAgIGJ1dHRvbkJveC5hcHBlbmQoYnV0dG9ucy5yZXNldEJ0biwgYnV0dG9ucy5jb25maXJtQnRuKTtcblxuICAgIGJ1dHRvbnMucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXNldFBhZ2UoKTtcbiAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gUGxhY2VTaGlwcy5nZXRQbGF5ZXJCb2FyZCgpO1xuICAgICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgbG9hZEZsZWV0KCk7XG4gICAgICBQbGFjZVNoaXBzLnJlc2V0U2hpcHNQbGFjZWQoKTtcbiAgICAgIGhlbHBlci5yZXNldENvbmZpcm1CdG4oKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbnMuY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChQbGFjZVNoaXBzLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgQ29tYmF0LmxvYWRDb21iYXRDb250ZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0dG9uQm94O1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSB7XG4gICAgeEF4aXNCdG46IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWJ0bicsXG4gICAgICBpZDogJ3hBeGlzLWJ0bicsXG4gICAgICB0ZXh0Q29udGVudDogJ1ggYXhpcycsXG4gICAgfSksXG4gICAgeUF4aXNCdG46IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWJ0bicsXG4gICAgICBpZDogJ3lBeGlzLWJ0bicsXG4gICAgICB0ZXh0Q29udGVudDogJ1kgYXhpcycsXG4gICAgfSksXG4gICAgcmVzZXRCdG46IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWJ0bicsXG4gICAgICBpZDogJ3Jlc2V0LWJ0bicsXG4gICAgICB0ZXh0Q29udGVudDogJ1Jlc2V0JyxcbiAgICB9KSxcbiAgICBjb25maXJtQnRuOiBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdjb25maXJtLWJ0bicsXG4gICAgICB0ZXh0Q29udGVudDogJ0NvbmZpcm0nLFxuICAgIH0pLFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0UGFnZSA9ICgpID0+IHtcbiAgICBoZWxwZXIucmVzZXRHYW1lYm9hcmRHcmlkKCk7XG4gICAgYWN0aXZlQXhpcyA9ICd4JztcbiAgICBjb25zdCB5QXhpc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5QXhpcy1idG4nKTtcbiAgICBjb25zdCB4QXhpc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4QXhpcy1idG4nKTtcbiAgICB5QXhpc0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdheGlzLWhpZ2hsaWdodCcpO1xuICAgIHhBeGlzQnRuLmNsYXNzTGlzdC5hZGQoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG5cbiAgICBjb25zdCBzaGlwQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1ib3gnKTtcbiAgICBzaGlwQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWljb24tcGxhY2VkJyk7XG4gICAgICBib3gubGFzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtdGV4dC1wbGFjZWQnKTtcbiAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWJveC1wbGFjZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxvYWRTZXR1cENvbnRlbnQsXG4gICAgZ2V0QWN0aXZlQXhpcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJhdFNldHVwO1xuIiwiaW1wb3J0IGNvbW1hbmRlckljb25QYXRoIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jb21tYW5kZXIucG5nJztcbmltcG9ydCBjYXJyaWVySWNvblBhdGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhcnJpZXIuc3ZnJztcbmltcG9ydCBiYXR0bGVzaGlwSWNvblBhdGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjcnVpc2VySWNvblBhdGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NydWlzZXIuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmVJY29uUGF0aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvc3VibWFyaW5lLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVySWNvblBhdGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Rlc3Ryb3llci5zdmcnO1xuXG5jb25zdCBoZWxwZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZXN0b3JlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgaWYgKCF0eXBlKSBjb25zb2xlLmxvZygnbWlzc2luZyB0eXBlJyk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICBlbGVtZW50W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBsb2FkR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gQXJyYXkoMTApXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCkpO1xuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZEdyaWRTcXVhcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtZ3JpZC1jb250YWluZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSk7XG4gICAgY29uc3QgZ3JpZFNxdWFyZSA9IGNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtZ3JpZCcsXG4gICAgICBpZDogJ3NldHVwLWdyaWQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgfSk7XG4gICAgZ3JpZFNxdWFyZS5zdHlsZS56SW5kZXggPSAnMSc7XG5cbiAgICBsb2FkR3JpZCgpLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZ3JpZC1zcXVhcmUnLFxuICAgICAgICAgIGlkOiBgJHtyb3dJbmRleH0ke2NvbHVtbkluZGV4fWAsXG4gICAgICAgIH0pO1xuICAgICAgICBncmlkU3F1YXJlLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kKGxvYWRMZXR0ZXJTZWN0aW9uKCksIGxvYWROdW1iZXJTZWN0aW9uKCksIGdyaWRTcXVhcmUpO1xuXG4gICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZE51bWJlclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgY29uc3QgbnVtYmVyc0NvbnRhaW5lciA9IGNyZWF0ZSgnZGl2JywgeyBjbGFzc0xpc3Q6ICdudW1iZXJzLWNvbnRhaW5lcicgfSk7XG5cbiAgICBudW1iZXJzLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgY29uc3QgbnVtYmVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ251bWJlcicsIHRleHRDb250ZW50OiBudW0gfSk7XG4gICAgICBudW1iZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbnVtYmVyc0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkTGV0dGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgY29uc3QgbGV0dGVyc0NvbnRhaW5lciA9IGNyZWF0ZSgnZGl2JywgeyBjbGFzc0xpc3Q6ICdsZXR0ZXJzLWNvbnRhaW5lcicgfSk7XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGx0cikgPT4ge1xuICAgICAgY29uc3QgbGV0dGVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ2xldHRlcicsIHRleHRDb250ZW50OiBsdHIgfSk7XG4gICAgICBsZXR0ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldHRlcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGV0dGVyc0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ29tbWFuZGVySWNvbiA9ICgpID0+IHtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdjb21tYW5kZXItaWNvbi1ib3gnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbW1hbmRlckljb24gPSBjcmVhdGUoJ2ltZycsIHtcbiAgICAgIHNyYzogY29tbWFuZGVySWNvblBhdGgsXG4gICAgICBjbGFzc05hbWU6ICdjb21tYW5kZXItaWNvbicsXG4gICAgfSk7XG5cbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1hbmRlckljb24pO1xuXG4gICAgcmV0dXJuIGljb25Db250YWluZXI7XG4gIH07XG5cbiAgY29uc3Qgc2hpcEljb25zID0gW1xuICAgIGNhcnJpZXJJY29uUGF0aCxcbiAgICBiYXR0bGVzaGlwSWNvblBhdGgsXG4gICAgY3J1aXNlckljb25QYXRoLFxuICAgIHN1Ym1hcmluZUljb25QYXRoLFxuICAgIGRlc3Ryb3llckljb25QYXRoLFxuICBdO1xuXG4gIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICAnQ2FycmllciAoNWYpJyxcbiAgICAnQmF0dGxlc2hpcCAoNGYpJyxcbiAgICAnQ3J1aXNlciAoNGYpJyxcbiAgICAnU3VibWFyaW5lICgzZiknLFxuICAgICdEZXN0cm95ZXIgKDJmKScsXG4gIF07XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgMDogeyBsZW5ndGg6IDUsIG5hbWU6ICdDYXJyaWVyJyB9LFxuICAgIDE6IHsgbGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCcgfSxcbiAgICAyOiB7IGxlbmd0aDogNCwgbmFtZTogJ0NydWlzZXInIH0sXG4gICAgMzogeyBsZW5ndGg6IDMsIG5hbWU6ICdTdWJtYXJpbmUnIH0sXG4gICAgNDogeyBsZW5ndGg6IDIsIG5hbWU6ICdEZXN0cm95ZXInIH0sXG4gIH07XG5cbiAgY29uc3QgcmVzZXRHcmlkU3F1YXJlcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1oaWdobGlnaHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBJY29uID0gKFxuICAgIHBhcmVudENvbnRhaW5lcixcbiAgICBzdGFydFNxdWFyZSxcbiAgICBzaGlwVHlwZSxcbiAgICBheGlzLFxuICAgIHNoaXBMZW5ndGgsXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXJ0U3F1YXJlKTtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGlkOiAnc2hpcC1jb250YWluZXInIH0pO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtzaGlwVHlwZX0tJHtheGlzfWApO1xuXG4gICAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwTGVuZ3RoICogM31yZW1gO1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICczcmVtJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3NoaXBMZW5ndGggKiAzfXJlbWA7XG4gICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICczcmVtJztcbiAgICB9XG5cbiAgICBsZXQgaWNvblVSTDtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgaWNvblVSTCA9IGNhcnJpZXJJY29uUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgaWNvblVSTCA9IGJhdHRsZXNoaXBJY29uUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgaWNvblVSTCA9IGNydWlzZXJJY29uUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTdWJtYXJpbmUnOlxuICAgICAgICBpY29uVVJMID0gc3VibWFyaW5lSWNvblBhdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRGVzdHJveWVyJzpcbiAgICAgICAgaWNvblVSTCA9IGRlc3Ryb3llckljb25QYXRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gc2hpcCB0eXBlJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaWNvbiA9IGNyZWF0ZSgnaW1nJywgeyBzcmM6IGljb25VUkwsIGNsYXNzTmFtZTogJ3NoaXAnIH0pO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICctMSc7XG5cbiAgICBsZXQgc3F1YXJlU2VsZWN0b3IgPSBgIyR7Q1NTLmVzY2FwZShzdGFydFNxdWFyZS5pZCl9YDtcbiAgICBsZXQgc3F1YXJlID0gcGFyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc3F1YXJlU2VsZWN0b3IpO1xuICAgIGlmIChzcXVhcmUpIHtcbiAgICAgIHNxdWFyZS5wcmVwZW5kKHNoaXBDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBTcXVhcmUgd2l0aCBzZWxlY3RvciAke3NxdWFyZVNlbGVjdG9yfSBub3QgZm91bmQuYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZWJvYXJkR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICB3aGlsZSAoc3F1YXJlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUNoaWxkKHNxdWFyZS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWJ0bicpO1xuXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLWJ0bi1hY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCByZXNldENvbmZpcm1CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWJ0bicpO1xuXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjb25maXJtLWJ0bi1hY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0eXBlV3JpdGVyID0gKHRleHQsIGVsZW1lbnRJZCwgdHlwaW5nU3BlZWQsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHlwaW5nLWN1cnNvcicpO1xuXG4gICAgY29uc3QgdHlwaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgICAgICBzZXRUaW1lb3V0KHR5cGluZywgdHlwaW5nU3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0eXBpbmctY3Vyc29yJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHR5cGluZygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIHJlc3RvcmVQYWdlLFxuICAgIGxvYWRHcmlkU3F1YXJlLFxuICAgIGxvYWRMZXR0ZXJTZWN0aW9uLFxuICAgIGxvYWROdW1iZXJTZWN0aW9uLFxuICAgIGxvYWRDb21tYW5kZXJJY29uLFxuICAgIHBsYWNlU2hpcEljb24sXG4gICAgcmVzZXRHcmlkU3F1YXJlcyxcbiAgICByZXNldEdhbWVib2FyZEdyaWQsXG4gICAgYWN0aXZhdGVDb25maXJtQnRuLFxuICAgIHJlc2V0Q29uZmlybUJ0bixcbiAgICB0eXBlV3JpdGVyLFxuICAgIHNoaXBJY29ucyxcbiAgICBzaGlwTmFtZXMsXG4gICAgc2hpcHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXI7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vY29kZS9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vY29kZS9zaGlwJztcbmltcG9ydCBDb21iYXRTZXR1cCBmcm9tICcuL2NvbWJhdFNldHVwJztcblxuY29uc3QgUGxhY2VTaGlwcyA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50TW91c2VPdmVySGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIGxldCBjdXJyZW50TW91c2VPdXRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgbGV0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBzaGlwc1BsYWNlZCA9IDA7XG4gIHZhciBjbG9uZWRHcmlkO1xuXG4gIGNvbnN0IGdldFBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgfTtcblxuICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKCgpID0+IHtcbiAgICBsZXQgcGxhY2VtZW50SXNWYWxpZCA9IHRydWU7IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UGxhY2VtZW50VmFsaWQ6IChpc1ZhbGlkKSA9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnRJc1ZhbGlkID0gaXNWYWxpZDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNQbGFjZW1lbnRWYWxpZDogKCkgPT4gcGxhY2VtZW50SXNWYWxpZCxcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IHtcbiAgICAwOiBmYWxzZSxcbiAgICAxOiBmYWxzZSxcbiAgICAyOiBmYWxzZSxcbiAgICAzOiBmYWxzZSxcbiAgICA0OiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHNQbGFjZWQgPT09IDU7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICBzaGlwc1BsYWNlZCA9IDA7IFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2VsZWN0ZWRTaGlwID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdGVkU2hpcCkge1xuICAgICAgc2VsZWN0ZWRTaGlwW2tleV0gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRTaGlwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIFJldHVybiBpbW1lZGlhdGVseSB3aGVuIGEgc2VsZWN0ZWQgc2hpcCBpcyBmb3VuZFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7IC8vIFJldHVybiBmYWxzZSBpZiBubyBzZWxlY3RlZCBzaGlwIGlzIGZvdW5kXG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWRTaGlwSUQgPSAoKSA9PiB7XG4gICAgbGV0IGlkID0gJzAnOyBcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxlY3RlZFNoaXApIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZCA9IGtleTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmV0dXJuIGlkLnRvU3RyaW5nKCk7IFxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNoaXAgPSAoc2hpcElkKSA9PiB7XG4gICAgcmVzZXRTaGlwQm94ZXMoKTtcbiAgICByZXNldFNlbGVjdGVkU2hpcCgpO1xuICAgIGlmIChwbGF5ZXJCb2FyZC5zaGlwUGxhY2VkKHBhcnNlSW50KHNoaXBJZCkgKyAxKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGVjdGVkU2hpcFtzaGlwSWRdID0gdHJ1ZTsgLy8gQXNzdW1pbmcgc2VsZWN0ZWRTaGlwIGlzIGFjY2Vzc2libGUgYXQgdGhpcyBzY29wZVxuICBcbiAgICAvLyBVcGRhdGUgVUkgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgc2hpcFxuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICAgIHNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gtaGlnaGxpZ2h0Jyk7XG4gICAgc2hpcEJveC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnc2hpcC10ZXh0LWhpZ2hsaWdodCcpO1xuICBcbiAgICAvLyBVcGRhdGUgZ3JpZCBoaWdobGlnaHRzIGJhc2VkIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBzaGlwXG4gICAgdXBkYXRlR3JpZEhpZ2hsaWdodHMoKTtcbiAgfTtcbiAgXG4gIGNvbnN0IHVwZGF0ZUdyaWRIaWdobGlnaHRzID0gKCkgPT4ge1xuICAgIGlmICghaXNTaGlwU2VsZWN0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzaGlwSWQgPSBnZXRTZWxlY3RlZFNoaXBJRCgpOyAvLyBFbnN1cmUgdGhpcyByZXR1cm5zIHRoZSBJRCBhcyBhIHN0cmluZywgd2hpY2ggaXMga2V5IGluIGhlbHBlci5zaGlwc1xuICAgIGxldCBzaGlwTGVuZ3RoID0gaGVscGVyLnNoaXBzW3NoaXBJZF0ubGVuZ3RoO1xuICAgIGxpZ2h0R3JpZFNxdWFyZXMoc2hpcExlbmd0aCwgQ29tYmF0U2V0dXAuZ2V0QWN0aXZlQXhpcygpKTtcbiAgfTtcblxuICBjb25zdCBzaGlwQm94U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94Jyk7XG4gICAgc2hpcEJveGVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgZXZlbnQgYnViYmxpbmdcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5pZCk7XG4gICAgICAgIHNlbGVjdFNoaXAoc2hpcC5pZCk7IC8vIFBhc3MgdGhlIElEIG9mIHRoZSBjbGlja2VkIHNoaXAgdG8gc2VsZWN0U2hpcFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL3NldCBwbGFjZW1lbnRWYWxpZCB0byB0cnVlIGV2ZXJ5dGltZSBtb3VzZSBpcyBub3Qgb3ZlciBncmlkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpc2dyaWRDbGlja2VkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZXR1cC1ncmlkJyk7XG4gICAgICAgIGlmICghaXNncmlkQ2xpY2tlZCkge1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IG9yIGFueSBvZiBpdHMgcGFyZW50cyBtYXRjaCB0aGUgJy5zaGlwLWJveCcgc2VsZWN0b3JcbiAgICAgICAgY29uc3QgaXNTaGlwQm94Q2xpY2sgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNoaXAtYm94Jyk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQncyBJRCBpcyAneEF4aXNCdG4nIG9yICd5QXhpc0J0bidcbiAgICAgICAgY29uc3QgaXNBeGlzQnV0dG9uQ2xpY2sgPSBldmVudC50YXJnZXQuaWQgPT09ICd4QXhpcy1idG4nIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gJ3lBeGlzLWJ0bic7XG5cbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIGlzIG5vdCBvbiBhIHNoaXAgYm94IGFuZCBub3Qgb24gdGhlIGF4aXMgYnV0dG9ucywgYW5kIHRoZSBwbGFjZW1lbnQgaXMgdmFsaWRcbiAgICAgICAgaWYgKCFpc1NoaXBCb3hDbGljayAmJiAhaXNBeGlzQnV0dG9uQ2xpY2sgJiYgc2hpcFBsYWNlbWVudC5pc1BsYWNlbWVudFZhbGlkKCkpIHtcbiAgICAgICAgICByZXNldFNlbGVjdGVkU2hpcCgpO1xuICAgICAgICAgIHJlc2V0U2hpcEJveGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2hpcEJveGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1ib3gnKTtcblxuICAgIHNoaXBCb3guZm9yRWFjaCgob3RoZXJTaGlwKSA9PiB7XG4gICAgICBvdGhlclNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1ib3gtaGlnaGxpZ2h0Jyk7XG4gICAgICBvdGhlclNoaXAubGFzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtdGV4dC1oaWdobGlnaHQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAnbW91c2VvdmVyJyxcbiAgICAgICAgY3VycmVudE1vdXNlT3ZlckhhbmRsZXJzLmdldChlbGVtZW50KSxcbiAgICAgICk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdtb3VzZW91dCcsXG4gICAgICAgIGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzLmdldChlbGVtZW50KSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcEJveENvbnRlbnQgPSAoc2hpcElkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2hpcElkfWApO1xuICAgIHNlbGVjdGVkU2hpcEJveC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaWNvbi1wbGFjZWQnKTtcbiAgICBzZWxlY3RlZFNoaXBCb3gubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtdGV4dC1wbGFjZWQnKTtcbiAgICBzZWxlY3RlZFNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gtcGxhY2VkJyk7XG4gIH07XG5cbiAgY29uc3QgbGlnaHRHcmlkU3F1YXJlcyA9IChzaGlwTGVuZ3RoLCBheGlzKSA9PiB7XG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBjb25zdCBncmlkV2lkdGggPSAxMDsgLy8gQXNzdW1pbmcgYSBncmlkIHdpZHRoIG9mIDEwIGZvciB0aGlzIGV4YW1wbGVcbiAgXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMgaWYgdGhleSBleGlzdFxuICAgICAgaWYgKGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBjdXJyZW50TW91c2VPdmVySGFuZGxlcnMuZ2V0KGVsZW1lbnQpKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzLmdldChlbGVtZW50KSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gRGVmaW5lIG5ldyBoYW5kbGVyc1xuICAgICAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gaW5kZXggKyAoYXhpcyA9PT0gJ3gnID8gc2hpcExlbmd0aCAtIDEgOiAoc2hpcExlbmd0aCAtIDEpICogZ3JpZFdpZHRoKTtcbiAgICAgICAgbGV0IHBsYWNlbWVudElzVmFsaWQgPSB0cnVlOyBcbiAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZChwbGFjZW1lbnRJc1ZhbGlkKTsgLy8gQXNzdW1lIHZhbGlkIHVudGlsIHByb3ZlbiBvdGhlcndpc2VcbiAgXG4gICAgICAgIC8vIEZpcnN0IHBhc3M6IENoZWNrIGlmIGFueSBwYXJ0IG9mIHRoZSBwbGFjZW1lbnQgaXMgaW52YWxpZFxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPD0gZW5kSW5kZXggJiYgcGxhY2VtZW50SXNWYWxpZDsgaSArPSAoYXhpcyA9PT0gJ3gnID8gMSA6IGdyaWRXaWR0aCkpIHtcbiAgICAgICAgICBpZiAoaSA+PSBncmlkU3F1YXJlcy5sZW5ndGggfHwgKGF4aXMgPT09ICd4JyAmJiBNYXRoLmZsb29yKGkgLyBncmlkV2lkdGgpICE9PSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHBsYWNlbWVudElzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQuc2V0UGxhY2VtZW50VmFsaWQocGxhY2VtZW50SXNWYWxpZCk7XG4gICAgICAgICAgICBicmVhazsgLy8gU3RvcCBjaGVja2luZyBpZiB3ZSBhbHJlYWR5IGtub3cgdGhlIHBsYWNlbWVudCBpcyBpbnZhbGlkXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgW3gsIHldID0gZ3JpZFNxdWFyZXNbaV0uaWQuc3BsaXQoJycpLm1hcChOdW1iZXIpOyAvLyBVc2luZyBOdW1iZXIgYXMgYSBzaG9ydGhhbmRcbiAgICAgICAgICBpZiAocGxheWVyQm9hcmQuaXNPY2N1cGllZCh4LCB5KSkge1xuICAgICAgICAgICAgcGxhY2VtZW50SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZChwbGFjZW1lbnRJc1ZhbGlkKTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBTdG9wIGNoZWNraW5nIGlmIHdlIGZpbmQgYW55IHNxdWFyZSBpcyBvY2N1cGllZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gU2Vjb25kIHBhc3M6IEFwcGx5IGNsYXNzZXMgYmFzZWQgb24gcGxhY2VtZW50IHZhbGlkaXR5XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8PSBlbmRJbmRleCAmJiBpIDwgZ3JpZFNxdWFyZXMubGVuZ3RoOyBpICs9IChheGlzID09PSAneCcgPyAxIDogZ3JpZFdpZHRoKSkge1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcgJiYgTWF0aC5mbG9vcihpIC8gZ3JpZFdpZHRoKSAhPT0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRXaWR0aCkpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBBZGRpdGlvbmFsIHNhZmVndWFyZCBmb3IgaG9yaXpvbnRhbCBheGlzXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjb25zdCBzcXVhcmUgPSBncmlkU3F1YXJlc1tpXTtcbiAgICAgICAgICBpZiAocGxhY2VtZW50SXNWYWxpZCkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkLXNxdWFyZS1pbnZhbGlkJywgJ2dyaWQtaGlnaGxpZ2h0LWludmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgY29uc3QgbW91c2VPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBncmlkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtaGlnaGxpZ2h0JywgJ2dyaWQtaGlnaGxpZ2h0LWludmFsaWQnLCAnZ3JpZC1zcXVhcmUtaW52YWxpZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gIFxuICAgICAgLy8gVXBkYXRlIHRoZSBtYXAgd2l0aCBuZXcgaGFuZGxlcnNcbiAgICAgIGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycy5zZXQoZWxlbWVudCwgbW91c2VPdmVySGFuZGxlcik7XG4gICAgICBjdXJyZW50TW91c2VPdXRIYW5kbGVycy5zZXQoZWxlbWVudCwgbW91c2VPdXRIYW5kbGVyKTtcbiAgXG4gICAgICAvLyBBdHRhY2ggdGhlIG5ldyBldmVudCBsaXN0ZW5lcnNcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlcik7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VPdXRIYW5kbGVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dXAtZ3JpZCcpO1xuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaXNTaGlwU2VsZWN0ZWQoKSB8fCAhc2hpcFBsYWNlbWVudC5pc1BsYWNlbWVudFZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBoaWdobGlnaHQgb24gZ3JpZHNxdWFyZXNcbiAgICAgICAgaGVscGVyLnJlc2V0R3JpZFNxdWFyZXMoKTtcbiAgICAgICAgLy9maW5kIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgbGV0IHNlbGVjdGVkU2hpcElkID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcFtpZF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkU2hpcElkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3NoaXAgZGF0YSBcbiAgICAgICAgbGV0IHJvdGF0aW9uQXhpcyA9IENvbWJhdFNldHVwLmdldEFjdGl2ZUF4aXMoKTtcbiAgICAgICAgbGV0IHhBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgwKSwgMTApO1xuICAgICAgICBsZXQgeUF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDEpLCAxMCk7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gaGVscGVyLnNoaXBzW3NlbGVjdGVkU2hpcElkXS5sZW5ndGg7XG4gICAgICAgIGxldCBzaGlwTmFtZSA9IGhlbHBlci5zaGlwc1tzZWxlY3RlZFNoaXBJZF0ubmFtZTtcbiAgICAgICAgLy9yb3RhdGUgc2hpcCBpZiBuZWVkZWRcbiAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgsIHNlbGVjdGVkU2hpcElkKTtcbiAgICAgICAgaWYgKHJvdGF0aW9uQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBzaGlwLnJvdGF0ZVNoaXAoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHhBeGlzLCB5QXhpcyk7XG4gICAgICAgIHNoaXBzUGxhY2VkICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBzUGxhY2VkKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSk7IFxuXG4gICAgICAgIGhlbHBlci5wbGFjZVNoaXBJY29uKGJvYXJkLCBzcXVhcmUsIHNoaXBOYW1lLCByb3RhdGlvbkF4aXMsIHNoaXBMZW5ndGgpO1xuXG4gICAgICAgIHJlbW92ZVNoaXBCb3hDb250ZW50KHNlbGVjdGVkU2hpcElkKTtcbiAgICAgICAgcmVzZXRTZWxlY3RlZFNoaXAoKTtcblxuICAgICAgICBpZiAoYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgIGhlbHBlci5hY3RpdmF0ZUNvbmZpcm1CdG4oKTtcbiAgICAgICAgICB2YXIgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cC1ncmlkLWNvbnRhaW5lcicpO1xuICAgICAgICAgIGNsb25lZEdyaWQgPSBncmlkLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgICBjb25zdCBnZXRDbG9uZWRHcmlkID0gKCkgPT4ge1xuICAgIHJldHVybiBjbG9uZWRHcmlkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2hpcEJveFNlbGVjdG9yLFxuICAgIHBsYWNlU2hpcCxcbiAgICB1cGRhdGVHcmlkSGlnaGxpZ2h0cyxcbiAgICBnZXRQbGF5ZXJCb2FyZCxcbiAgICBhbGxTaGlwc1BsYWNlZCxcbiAgICByZXNldFNoaXBzUGxhY2VkLFxuICAgIGdldENsb25lZEdyaWRcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VTaGlwcztcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IENvbWJhdFNldHVwIGZyb20gJy4vY29tYmF0U2V0dXAnO1xuXG5jb25zdCBwcmVnYW1lID0gKCgpID0+IHtcbiAgbGV0IHBsYXllck5hbWU7IFxuXG4gIGNvbnN0IHNldFBsYXllck5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgcGxheWVyTmFtZSA9IG5hbWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICAgIGxldCBmaXJzdENoYXIgPSBwbGF5ZXJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGV0IHJlc3RPZk5hbWUgPSBwbGF5ZXJOYW1lLnNsaWNlKDEpO1xuXG4gICAgICByZXR1cm4gZmlyc3RDaGFyICsgcmVzdE9mTmFtZTsgXG4gIH07XG5cbiAgY29uc3QgbG9hZENhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVQcmVnYW1lQ2FyZCgpKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmVnYW1lQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHsgY2xhc3NOYW1lOiAncHJlZ2FtZS1jYXJkJyB9KTtcblxuICAgIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjcmVhdGVUZXh0SW5wdXQoKSwgY3JlYXRlU3RhcnRCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gaGVscGVyLmNyZWF0ZSgnaDEnLCB7XG4gICAgICBjbGFzc05hbWU6ICdwcmVnYW1lLWhlYWRlcicsXG4gICAgICB0ZXh0Q29udGVudDogJ0JBVFRMRVNISVAnLFxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGV4dElucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGhlbHBlci5jcmVhdGUoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiAnbmFtZS1pbnB1dCcsXG4gICAgICBpZDogJ3VzZXJuYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2FwdGFpbiBuYW1lLi4uJyxcbiAgICAgIG1pbkxlbmd0aDogMCwgXG4gICAgICBtYXhMZW5ndGg6IDE1XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0Qm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICdpbnB1dC1ib3gnXG4gICAgfSk7XG5cbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG5cbiAgICByZXR1cm4gdGV4dEJveDtcbiAgfTtcblxuICBjb25zdCBzZXRVc2VybmFtZSA9ICgpID0+IHtcbiAgICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gICAgc2V0UGxheWVyTmFtZSh1c2VySW5wdXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywgeyBcbiAgICAgIGNsYXNzTmFtZTogJ3N0YXJ0LWJ1dHRvbicsXG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGlkOiAncGxheS1ub3ctYnV0dG9uJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBoZWxwZXIuY3JlYXRlKCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6ICdzdGFydC1idXR0b24tdGV4dCcsXG4gICAgICAgIHRleHRDb250ZW50OiAnRU5URVIgQ09NQkFUJ1xuICAgIH0pO1xuXG4gICAgc3RhcnRCdXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHNldFVzZXJuYW1lKCk7XG4gICAgICBDb21iYXRTZXR1cC5sb2FkU2V0dXBDb250ZW50KCk7XG4gICAgfSk7IFxuXG4gICAgcmV0dXJuIHN0YXJ0QnV0dG9uO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZENhcmQsXG4gICAgZ2V0UGxheWVyTmFtZVxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlZ2FtZTtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHByZWdhbWUgZnJvbSAnLi9wcmVnYW1lJztcblxuY29uc3QgU2V0dXBNb2RhbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRTZXR1cE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdzZXR1cC1tb2RhbCcgfSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChsb2FkTW9kYWxDb250ZW50KCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtbW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtbW9kYWwtY29udGVudCcsXG4gICAgfSk7XG4gICAgY29uc3QgbXNnQm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdtb2RhbC1tZXNzYWdlJyB9KTtcbiAgICBtc2dCb3guYXBwZW5kKGhlbHBlci5sb2FkQ29tbWFuZGVySWNvbigpLCBsb2FkVGV4dCgpKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobXNnQm94KTtcblxuICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgaWQ6ICd3ZWxjb21lLXRleHQnIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgY29uc3QgaW5pdFR5cGluZ0VmZmVjdFNldHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgV2VsY29tZSBDYXB0YWluICR7cHJlZ2FtZS5nZXRQbGF5ZXJOYW1lKCl9IWA7XG4gICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9XG4gICAgICAnUGxhbiBvdXIgZm9ybWF0aW9uIGJ5IHNlbGVjdGluZyB0aGUgYXhpcyBhbmQgc2hpcCBhbmQgZHJvcCBpdCBvbiB0aGUgbWFwLic7XG5cbiAgICBjb25zdCBhZGRDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgaWQ6ICdjbG9zZS1tb2RhbC1idG4nLFxuICAgICAgICB0ZXh0Q29udGVudDogJ1llcyBTaXIhJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLW1vZGFsLWNvbnRlbnQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDgwMCk7XG4gICAgfTtcblxuICAgIGhlbHBlci50eXBlV3JpdGVyKG1lc3NhZ2UsICd3ZWxjb21lLXRleHQnLCAzMCwgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUtdGV4dCcpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBoZWxwZXIudHlwZVdyaXRlcihzZWNvbmRNZXNzYWdlLCAnd2VsY29tZS10ZXh0JywgMjAsIGFkZENsb3NlQnV0dG9uKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZFNldHVwTW9kYWwsXG4gICAgaW5pdFR5cGluZ0VmZmVjdFNldHVwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dXBNb2RhbDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vY29kZS9nYW1lJztcblxuY29uc3Qgd2lubmVyTW9kYWwgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkV2lubmVyTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3dpbm5lci1tb2RhbCcgfSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChsb2FkTW9kYWxDb250ZW50KCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLW1vZGFsJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBsb2FkTW9kYWxDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3dpbm5lci1tb2RhbC1jb250ZW50JyxcbiAgICB9KTtcblxuICAgIGNvbnN0IG1zZ0JveCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLW1vZGFsLW1lc3NhZ2UnIH0pO1xuICAgIGNvbnN0IHdpbm5lck1lc3NhZ2UgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd3aW5uZXItbWVzc2FnZScsXG4gICAgICB0ZXh0Q29udGVudDogYCR7R2FtZS5nYW1lV2lubmVyKCl9IFdJTiFgLFxuICAgIH0pO1xuICAgIG1zZ0JveC5hcHBlbmQod2lubmVyTWVzc2FnZSwgaGVscGVyLmxvYWRDb21tYW5kZXJJY29uKCksIGxvYWRUZXh0KCkpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtc2dCb3gpO1xuXG4gICAgcmV0dXJuIG1vZGFsQ29udGVudDtcbiAgfTtcblxuICBjb25zdCBsb2FkVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBpZDogJ3dpbm5lci10ZXh0JyB9KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGNvbnN0IGluaXRUeXBpbmdFZmZlY3RXaW5uZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgR2FtZS5nYW1lV2lubmVyKCkgPT09ICdDT01QVVRFUidcbiAgICAgICAgPyAnVGhlIGVuZW15IGZsZWV0IGhhcyBvdXRtYW5ldXZlcmVkIHlvdSwgQ2FwdGFpbi4gQmV0dGVyIGx1Y2sgbmV4dCB0aW1lISdcbiAgICAgICAgOiAnTWlzc2lvbiBhY2NvbXBsaXNoZWQsIENhcHRhaW4hIFlvdSB0cnVseSBhcmUgdGhlIG1hc3RlciBvZiB0aGUgc2Vhcy4nO1xuXG4gICAgY29uc3QgYWRkQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b24gPSBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICAgIGlkOiAnY2xvc2Utd2lubmVyLW1vZGFsLWJ0bicsXG4gICAgICAgIHRleHRDb250ZW50OiAnTmV3IEJhdHRsZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItbW9kYWwtY29udGVudCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDgwMCk7XG4gICAgfTtcblxuICAgIGhlbHBlci50eXBlV3JpdGVyKG1lc3NhZ2UsICd3aW5uZXItdGV4dCcsIDMwLCAoKSA9PiB7XG4gICAgICAvLyBDYWxsIGFkZENsb3NlQnV0dG9uIGFmdGVyIHR5cGVXcml0ZXIgaXMgZG9uZSB0eXBpbmdcbiAgICAgIGFkZENsb3NlQnV0dG9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZFdpbm5lck1vZGFsLCBpbml0VHlwaW5nRWZmZWN0V2lubmVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3aW5uZXJNb2RhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwcmVnYW1lIGZyb20gJy4vZG9tL3ByZWdhbWUnO1xuXG5wcmVnYW1lLmxvYWRDYXJkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=