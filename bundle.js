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


  


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'bebas';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Bebas_Neue/BebasNeue-regular.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-light';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Light.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-medium';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Medium.ttf');\n}\n\n@font-face {\n    font-family: 'roboto-regular';\n    src: url('./assets/fonts/Bebas_Neue\\,Roboto/Roboto/Roboto-Regular.ttf');\n}\n\nbody {\n    height: 100vh;\n    width: 100vw; \n    background: linear-gradient(\n        rgba(0, 0, 0, 0.598), /* Semi-transparent black */\n        rgba(0, 0, 0, 0.321)\n    ), url('./assets/images/background.webp');\n    background-size: cover; /* Ensure the image covers the whole element */\n    background-repeat: no-repeat; /* Prevent the image from repeating */\n    font-family: 'roboto-light';\n}\n\nbody, \nh1, \np {\n    margin: 0; \n}\n\n.content {\n    height: 100%; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* pregame page */\n\n.pregame-card {\n    height: 25rem;\n    width: 35rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: white; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem; \n    border-radius: 15px;  \n}\n\n.pregame-header {\n    margin-top: 3rem;\n    font-size: 5rem;  \n    font-family: 'bebas';\n    letter-spacing: 3px;\n}\n\n.input-box {\n    border-bottom: 1px solid white; \n}\n\n.name-input {\n    height: 3rem;\n    width: 13rem;\n    border: none;\n    outline: none;\n    background: none; \n    color: white;\n    font-size: 1.4rem;\n    border-radius: 10px; \n    text-align: center;\n}\n\n.start-button {\n    height: 3rem;\n    width: 13rem; \n    background: none;\n    border: none; \n    outline: none;\n    color: rgb(189, 189, 189);\n    font-size: 1.3rem;\n}\n\n.start-button:hover {\n    background-color: rgb(67, 66, 66);\n    border-radius: 10px; \n    cursor: pointer;\n    color: white;\n}\n\n/* board-setup page */\n\n.setup-container {\n    display: flex;\n    width: 50rem;\n    height: 45rem;\n    min-width: 50rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 15px; \n}\n\n.setup-board {\n    width: 31.25rem;\n    margin-left: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem; \n}\n\n.setup-grid-container {\n    display: grid;\n    grid-template-columns: auto 1fr; \n    grid-template-rows: auto 1fr; \n    gap: 0; \n}\n\n.setup-grid {\n    height: 31.25rem; /* Adjusted for 10 squares including borders */\n    width: 31.25rem; /* Adjusted for 10 squares including borders */\n    display: flex;\n    flex-wrap: wrap;\n    grid-column: 2 / span 2; /* Spans from the second to the third column */\n    grid-row: 2; /* Second row */\n    background-color: rgba(173, 216, 230, 0.123);\n}\n\n.setup-grid:hover {\n    cursor: crosshair;\n}\n\n.letters-container {\n    display: flex; \n    grid-column: 2 / span 1;\n    grid-row: 1; \n    justify-content: space-between;\n    margin: 0 1.2rem 0.4rem;\n    font-size: 1.3rem;\n    color: rgba(255, 255, 255, 0.5)\n}\n\n.letter {\n    width: 10px; \n}\n\n.numbers-container {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1; /* First column */\n    grid-row: 2 / span 1; /* Spans second row */\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 0.6rem;\n    margin-bottom: 1.8rem;\n    margin-right: 0.8rem;\n    font-size: 1.4rem;\n    color: rgba(255, 255, 255, 0.5)\n}\n\n.number {\n    height: 10px;\n}\n\n.grid-square {\n    position: relative; \n    height: 3rem;\n    width: 3rem;\n    background-color: rgba(88, 110, 128, 0.267);\n    border: 1px solid rgba(170, 170, 170, 0.503);   \n    margin: 0;\n    padding: 0; \n}\n\n.grid-square:hover {\n    background-color: rgba(88, 110, 128, 0.562);\n}\n\n\n.grid-square-invalid:hover {\n    background-color: rgba(255, 0, 0, 0.399); \n}\n\n.grid-highlight {\n    background-color: rgba(88, 110, 128, 0.562);\n}\n\n.grid-highlight-invalid {\n    background-color: rgba(255, 0, 0, 0.399); \n  }\n\n.setup-top-btns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 2rem; \n    margin-left: 2.4rem;\n    margin-top: 2rem;\n}\n\n.setup-bottom-btns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 3rem; \n    margin-left: 2.4rem;\n    margin-top: 0.4rem; \n}\n\n.setup-btn, .confirm-btn {\n    background: none;\n    outline: none;\n    border: 1px solid lightgray;\n    color: lightgray;\n    margin: 0; \n    border-radius: 5px;\n    height: 2.5rem;\n    width: 9rem;\n    font-family: 'roboto-light';\n}\n\n.setup-btn:hover, .ship-box:hover, #close-winner-modal-btn:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n}\n\n#reset-btn, .confirm-btn {\n    height: 3rem;\n    width: 11rem;\n    font-size: 1.2rem;\n}\n\n.confirm-btn {\n    color: gray;\n    border: 1px solid gray;\n}\n\n.confirm-btn-active {\n    color: lightgray;\n    border: 1px solid lightgray;\n}\n\n.confirm-btn-active:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n#reset-btn:hover {\n    background-color: rgba(255, 0, 0, 0.371);\n}\n\n.fleet-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem; \n    align-items: center;\n    justify-content: center;\n    color: lightgray;\n    margin-left: 1.5rem; \n}\n\n.ship-box {\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.277);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem; \n    height: 6.5rem;\n    width: 8rem;\n    border: 1px solid rgba(255, 255, 255, 0.501);\n    border-radius: 10px;  \n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.ship-box-highlight {\n    border: 1px solid white; \n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.735);\n    background-color: black;\n    height: 6.7rem;\n    width: 8.2rem;\n}\n\n.ship-box-placed {\n    border: none;\n    box-shadow: none;\n    height: 6.5rem;\n    width: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.ship-box-placed:hover {\n    transform: none;\n    cursor: default;\n}\n\n.ship-icon {\n    width: 6rem;\n    height: 2.5rem; \n}\n\n.ship-icon-placed {\n    display: none;\n}\n\n.ship-text {\n    color: gray; \n}\n\n.ship-text-highlight {\n    color: white;\n}\n\n.ship-text-placed {\n    color: transparent;\n}\n\n.axis-highlight {\n    background-color: white;\n    color: black;\n}\n\n#ship-container {\n    background: transparent;\n}\n\n.ship {\n    height: 100%;\n    width: 100%;\n}\n\n/* setup-modal: */\n.setup-modal, .winner-modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed; /* Stay in place */\n    z-index: 2; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.621); /* Black w/ opacity */\n}\n  \n.setup-modal-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #000000;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding-top: 20px;\n    padding-bottom: 10px;\n    padding-left: 15px;\n    padding-right: 10px;\n    border: 1px solid #ffffff;\n    min-height: 5rem;\n    max-width: 33rem; \n    border-radius: 15px;\n}\n\n.modal-message {\n    min-width: 30rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.winner-modal-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #000000d1;\n    margin: 15% auto; /* 15% from the top and centered */\n    border: 1px solid #ffffff;\n    min-height: 22rem;\n    min-width: 35rem; \n    border-radius: 15px;\n    padding-top: 30px;\n}\n\n\n.winner-modal-message {\n    height: 100%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n\n#close-winner-modal-btn {\n    height: 3rem;\n    width: 13rem; \n    background: none;\n    border: none; \n    outline: none;\n    color: rgb(255, 255, 255);\n    font-size: 1.3rem;\n    border: 1px solid white;\n    border-radius: 10px;\n    margin-top: 2rem;\n}\n\n.winner-message {\n    color: rgb(255, 255, 255);\n    font-size: 2.2rem;\n    font-family: 'roboto-medium';\n    font-style: italic;\n}\n\n#winner-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    max-width: 30rem;\n    text-align: center; /* Center-align the text */\n    margin: 0 auto; /* Optional: Center the container itself */\n    font-family: 'roboto-light';\n}\n\n@keyframes blink {\n    50% {\n      border-color: transparent;\n    }\n}\n  \n.typing-cursor {\n    border-right: 2px solid;\n    animation: blink 1s step-start 0s infinite;\n}\n\n#welcome-text {\n    padding-top: 0.3rem;\n    padding-right: 1.5rem;\n    font-size: 1.2rem;\n    font-family: 'roboto-regular';\n    color: white;\n    font-variant: underline;\n    height: 22px;\n}\n\n.commander-icon {\n    width: 110px;\n}\n\n#close-modal-btn {\n    font-family: 'roboto-light';\n    margin-left: 25rem;\n    margin-top: -1.7rem;\n    width: 5.5rem;\n    height: 1.6rem;\n    padding: 0; \n    background: none;\n    border: none;\n    border-radius: 5px;  \n    outline: none;\n    background-color: rgba(255, 255, 255, 0.259);\n    color: rgb(189, 189, 189);\n    font-size: 1rem;\n}\n\n#close-modal-btn:hover {\n    background-color: rgb(109, 109, 109);\n    border-radius: 5px; \n    cursor: pointer;\n    color: white;\n}\n\n/* Battle-page */ \n\n.battle-card {\n    display: flex;\n    justify-content: center;\n    gap: 5rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    min-width: 78rem;\n    height: 43rem; \n    border-radius: 20px; \n}\n\n.player-side, .computer-side {\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.computer-grid {\n    position: relative;\n    overflow: hidden;\n    background-color: rgba(255, 0, 0, 0.287);\n}\n\n.player-header, .computer-header {\n    font-family: 'roboto-regular';\n    display: flex;\n    justify-content: flex-end;\n    color: white;\n    font-size: 1.3rem;\n    margin-right: 0.5rem;\n}\n\n.player-header {\n    color: lightblue;\n}\n\n.computer-header {\n    color:#f3a640;\n}\n\n.missed-square::after {\n    content: \"\";\n    position: absolute;\n    width: 18px; /* Size of the circle */\n    height: 18px; /* Size of the circle */\n    background-color: lightblue;\n    border-radius: 50%; /* Makes the shape a circle */\n    /* Center the circle */\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.attacked-square::after {\n    content: \"\";\n    position: absolute;\n    width: 18px; /* Size of the circle */\n    height: 18px; /* Size of the circle */\n    background-color: red;\n    border-radius: 50%; /* Makes the shape a circle */\n    /* Center the circle */\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.missed-square:hover, .attacked-square:hover {\n    cursor: default;\n}\n\n\n  \n\n\n"],"sourceRoot":""}]);
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
    const gridContainer = helper.create('div', {
      className: 'setup-grid-container',
      position: 'relative',
    });
    const gridSquare = helper.create('div', {
      className: 'setup-grid',
      id: 'setup-grid',
      position: 'absolute',
    });
    gridSquare.style.zIndex = '1';

    loadGrid().forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let square = helper.create('div', {
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
    const iconPath = '../assets/icons/commander.png';
    const iconContainer = helper.create('div', {
      className: 'commander-icon-box',
    });
    const commanderIcon = helper.create('img', {
      src: iconPath,
      className: 'commander-icon',
    });

    iconContainer.appendChild(commanderIcon);

    return iconContainer;
  };

  const shipIcons = [
    '../assets/icons/carrier.svg',
    '../assets/icons/battleship.svg',
    '../assets/icons/cruiser.svg',
    '../assets/icons/submarine.svg',
    '../assets/icons/destroyer.svg',
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

    let iconURL = `../assets/icons/${shipType}-${axis}.svg`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK01BQW9GO0FBQ2hJLDRDQUE0Qyw2TEFBMkU7QUFDdkgsNENBQTRDLCtMQUE0RTtBQUN4SCw0Q0FBNEMsaU1BQTZFO0FBQ3pILDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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VUFBVSx3QkFBd0IscUJBQXFCLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEseUJBQXlCLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIsYUFBYSx5QkFBeUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFB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YnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb2RlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29kZS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29kZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29kZS9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9jb21iYXQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL2NvbWJhdFNldHVwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL3ByZWdhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL3NldHVwTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tL3dpbm5lck1vZGFsLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWUsUm9ib3RvL0JlYmFzX05ldWUvQmViYXNOZXVlLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZSxSb2JvdG8vUm9ib3RvL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlLFJvYm90by9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlLFJvYm90by9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnYmViYXMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNTk4KSwgLyogU2VtaS10cmFuc3BhcmVudCBibGFjayAqL1xuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMzIxKVxuICAgICksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBFbnN1cmUgdGhlIGltYWdlIGNvdmVycyB0aGUgd2hvbGUgZWxlbWVudCAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIFByZXZlbnQgdGhlIGltYWdlIGZyb20gcmVwZWF0aW5nICovXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xufVxuXG5ib2R5LCBcbmgxLCBcbnAge1xuICAgIG1hcmdpbjogMDsgXG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogcHJlZ2FtZSBwYWdlICovXG5cbi5wcmVnYW1lLWNhcmQge1xuICAgIGhlaWdodDogMjVyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcbn1cblxuLnByZWdhbWUtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogNXJlbTsgIFxuICAgIGZvbnQtZmFtaWx5OiAnYmViYXMnO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5pbnB1dC1ib3gge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgXG59XG5cbi5uYW1lLWlucHV0IHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDEzcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGFydC1idXR0b24ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTNyZW07IFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lOyBcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5zdGFydC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjYsIDY2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBib2FyZC1zZXR1cCBwYWdlICovXG5cbi5zZXR1cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwcmVtO1xuICAgIGhlaWdodDogNDVyZW07XG4gICAgbWluLXdpZHRoOiA1MHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxufVxuXG4uc2V0dXAtYm9hcmQge1xuICAgIHdpZHRoOiAzMS4yNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMnJlbTsgXG59XG5cbi5zZXR1cC1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyOyBcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyOyBcbiAgICBnYXA6IDA7IFxufVxuXG4uc2V0dXAtZ3JpZCB7XG4gICAgaGVpZ2h0OiAzMS4yNXJlbTsgLyogQWRqdXN0ZWQgZm9yIDEwIHNxdWFyZXMgaW5jbHVkaW5nIGJvcmRlcnMgKi9cbiAgICB3aWR0aDogMzEuMjVyZW07IC8qIEFkanVzdGVkIGZvciAxMCBzcXVhcmVzIGluY2x1ZGluZyBib3JkZXJzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7IC8qIFNwYW5zIGZyb20gdGhlIHNlY29uZCB0byB0aGUgdGhpcmQgY29sdW1uICovXG4gICAgZ3JpZC1yb3c6IDI7IC8qIFNlY29uZCByb3cgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMTIzKTtcbn1cblxuLnNldHVwLWdyaWQ6aG92ZXIge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4ubGV0dGVycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAxOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwIDEuMnJlbSAwLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxufVxuXG4ubGV0dGVyIHtcbiAgICB3aWR0aDogMTBweDsgXG59XG5cbi5udW1iZXJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdyaWQtY29sdW1uOiAxOyAvKiBGaXJzdCBjb2x1bW4gKi9cbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTsgLyogU3BhbnMgc2Vjb25kIHJvdyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxufVxuXG4ubnVtYmVyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5ncmlkLXNxdWFyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuMjY3KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNTAzKTsgICBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDsgXG59XG5cbi5ncmlkLXNxdWFyZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuNTYyKTtcbn1cblxuXG4uZ3JpZC1zcXVhcmUtaW52YWxpZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk5KTsgXG59XG5cbi5ncmlkLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuNTYyKTtcbn1cblxuLmdyaWQtaGlnaGxpZ2h0LWludmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM5OSk7IFxuICB9XG5cbi5zZXR1cC10b3AtYnRucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07IFxuICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnNldHVwLWJvdHRvbS1idG5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTsgXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07IFxufVxuXG4uc2V0dXAtYnRuLCAuY29uZmlybS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBtYXJnaW46IDA7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XG59XG5cbi5zZXR1cC1idG46aG92ZXIsIC5zaGlwLWJveDpob3ZlciwgI2Nsb3NlLXdpbm5lci1tb2RhbC1idG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVzZXQtYnRuLCAuY29uZmlybS1idG4ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb25maXJtLWJ0biB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmNvbmZpcm0tYnRuLWFjdGl2ZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5jb25maXJtLWJ0bi1hY3RpdmU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4jcmVzZXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zNzEpO1xufVxuXG4uZmxlZXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjVyZW07IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtOyBcbn1cblxuLnNoaXAtYm94IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTsgXG4gICAgaGVpZ2h0OiA2LjVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNoaXAtYm94LWhpZ2hsaWdodCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MzUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogNi43cmVtO1xuICAgIHdpZHRoOiA4LjJyZW07XG59XG5cbi5zaGlwLWJveC1wbGFjZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGhlaWdodDogNi41cmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNoaXAtYm94LXBsYWNlZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNoaXAtaWNvbiB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07IFxufVxuXG4uc2hpcC1pY29uLXBsYWNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoaXAtdGV4dCB7XG4gICAgY29sb3I6IGdyYXk7IFxufVxuXG4uc2hpcC10ZXh0LWhpZ2hsaWdodCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2hpcC10ZXh0LXBsYWNlZCB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYXhpcy1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI3NoaXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNoaXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogc2V0dXAtbW9kYWw6ICovXG4uc2V0dXAtbW9kYWwsIC53aW5uZXItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBTaXQgb24gdG9wICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjIxKTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuICBcbi5zZXR1cC1tb2RhbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIG1heC13aWR0aDogMzNyZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5tb2RhbC1tZXNzYWdlIHtcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ud2lubmVyLW1vZGFsLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkMTtcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgbWluLWhlaWdodDogMjJyZW07XG4gICAgbWluLXdpZHRoOiAzNXJlbTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuXG4ud2lubmVyLW1vZGFsLW1lc3NhZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuXG4jY2xvc2Utd2lubmVyLW1vZGFsLWJ0biB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxM3JlbTsgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7IFxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi53aW5uZXItbWVzc2FnZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuI3dpbm5lci10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIHRoZSB0ZXh0ICovXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIE9wdGlvbmFsOiBDZW50ZXIgdGhlIGNvbnRhaW5lciBpdHNlbGYgKi9cbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDUwJSB7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cbiAgXG4udHlwaW5nLWN1cnNvciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xufVxuXG4jd2VsY29tZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC12YXJpYW50OiB1bmRlcmxpbmU7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uY29tbWFuZGVyLWljb24ge1xuICAgIHdpZHRoOiAxMTBweDtcbn1cblxuI2Nsb3NlLW1vZGFsLWJ0biB7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMS43cmVtO1xuICAgIHdpZHRoOiA1LjVyZW07XG4gICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgcGFkZGluZzogMDsgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjU5KTtcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI2Nsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQmF0dGxlLXBhZ2UgKi8gXG5cbi5iYXR0bGUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBtaW4td2lkdGg6IDc4cmVtO1xuICAgIGhlaWdodDogNDNyZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxufVxuXG4ucGxheWVyLXNpZGUsIC5jb21wdXRlci1zaWRlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jb21wdXRlci1ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yODcpO1xufVxuXG4ucGxheWVyLWhlYWRlciwgLmNvbXB1dGVyLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnBsYXllci1oZWFkZXIge1xuICAgIGNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5jb21wdXRlci1oZWFkZXIge1xuICAgIGNvbG9yOiNmM2E2NDA7XG59XG5cbi5taXNzZWQtc3F1YXJlOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xuICAgIGhlaWdodDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIHNoYXBlIGEgY2lyY2xlICovXG4gICAgLyogQ2VudGVyIHRoZSBjaXJjbGUgKi9cbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5hdHRhY2tlZC1zcXVhcmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXG4gICAgaGVpZ2h0OiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgc2hhcGUgYSBjaXJjbGUgKi9cbiAgICAvKiBDZW50ZXIgdGhlIGNpcmNsZSAqL1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm1pc3NlZC1zcXVhcmU6aG92ZXIsIC5hdHRhY2tlZC1zcXVhcmU6aG92ZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuXG4gIFxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBOEU7QUFDbEY7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRDQUFzRTtBQUMxRTs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBdUU7QUFDM0U7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaOzs7OENBR3lDO0lBQ3pDLHNCQUFzQixFQUFFLDhDQUE4QztJQUN0RSw0QkFBNEIsRUFBRSxxQ0FBcUM7SUFDbkUsMkJBQTJCO0FBQy9COztBQUVBOzs7SUFHSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFt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YUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHVCQUF1QjtJQUNyQywyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUUsNkJBQTZCO0lBQ2pELHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxZQUFZLEVBQUUsdUJBQXVCO0lBQ3JDLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdiZWJhcyc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlXFxcXCxSb2JvdG8vQmViYXNfTmV1ZS9CZWJhc05ldWUtcmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWVcXFxcLFJvYm90by9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWVcXFxcLFJvYm90by9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZVxcXFwsUm9ib3RvL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41OTgpLCAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrICovXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMzIxKVxcbiAgICApLCB1cmwoJy4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLndlYnAnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIHdob2xlIGVsZW1lbnQgKi9cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogUHJldmVudCB0aGUgaW1hZ2UgZnJvbSByZXBlYXRpbmcgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xcbn1cXG5cXG5ib2R5LCBcXG5oMSwgXFxucCB7XFxuICAgIG1hcmdpbjogMDsgXFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIHByZWdhbWUgcGFnZSAqL1xcblxcbi5wcmVnYW1lLWNhcmQge1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICB3aWR0aDogMzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcXG59XFxuXFxuLnByZWdhbWUtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZm9udC1zaXplOiA1cmVtOyAgXFxuICAgIGZvbnQtZmFtaWx5OiAnYmViYXMnO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG5cXG4uaW5wdXQtYm94IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyBcXG59XFxuXFxuLm5hbWUtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEzcmVtOyBcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5zdGFydC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY2LCA2Nik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogYm9hcmQtc2V0dXAgcGFnZSAqL1xcblxcbi5zZXR1cC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGhlaWdodDogNDVyZW07XFxuICAgIG1pbi13aWR0aDogNTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxcbn1cXG5cXG4uc2V0dXAtYm9hcmQge1xcbiAgICB3aWR0aDogMzEuMjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS4ycmVtOyBcXG59XFxuXFxuLnNldHVwLWdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7IFxcbiAgICBnYXA6IDA7IFxcbn1cXG5cXG4uc2V0dXAtZ3JpZCB7XFxuICAgIGhlaWdodDogMzEuMjVyZW07IC8qIEFkanVzdGVkIGZvciAxMCBzcXVhcmVzIGluY2x1ZGluZyBib3JkZXJzICovXFxuICAgIHdpZHRoOiAzMS4yNXJlbTsgLyogQWRqdXN0ZWQgZm9yIDEwIHNxdWFyZXMgaW5jbHVkaW5nIGJvcmRlcnMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMjsgLyogU3BhbnMgZnJvbSB0aGUgc2Vjb25kIHRvIHRoZSB0aGlyZCBjb2x1bW4gKi9cXG4gICAgZ3JpZC1yb3c6IDI7IC8qIFNlY29uZCByb3cgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjEyMyk7XFxufVxcblxcbi5zZXR1cC1ncmlkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5sZXR0ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDE7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMCAxLjJyZW0gMC40cmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxcbn1cXG5cXG4ubGV0dGVyIHtcXG4gICAgd2lkdGg6IDEwcHg7IFxcbn1cXG5cXG4ubnVtYmVycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMTsgLyogRmlyc3QgY29sdW1uICovXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxOyAvKiBTcGFucyBzZWNvbmQgcm93ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxcbn1cXG5cXG4ubnVtYmVyIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMTAsIDEyOCwgMC4yNjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNTAzKTsgICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyBcXG59XFxuXFxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuNTYyKTtcXG59XFxuXFxuXFxuLmdyaWQtc3F1YXJlLWludmFsaWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zOTkpOyBcXG59XFxuXFxuLmdyaWQtaGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuNTYyKTtcXG59XFxuXFxuLmdyaWQtaGlnaGxpZ2h0LWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zOTkpOyBcXG4gIH1cXG5cXG4uc2V0dXAtdG9wLWJ0bnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTsgXFxuICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zZXR1cC1ib3R0b20tYnRucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtOyBcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC40cmVtOyBcXG59XFxuXFxuLnNldHVwLWJ0biwgLmNvbmZpcm0tYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xcbn1cXG5cXG4uc2V0dXAtYnRuOmhvdmVyLCAuc2hpcC1ib3g6aG92ZXIsICNjbG9zZS13aW5uZXItbW9kYWwtYnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmVzZXQtYnRuLCAuY29uZmlybS1idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jb25maXJtLWJ0biB7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uY29uZmlybS1idG4tYWN0aXZlIHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4uY29uZmlybS1idG4tYWN0aXZlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4jcmVzZXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzcxKTtcXG59XFxuXFxuLmZsZWV0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXJlbTsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtOyBcXG59XFxuXFxuLnNoaXAtYm94IHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3Nyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTsgXFxuICAgIGhlaWdodDogNi41cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uc2hpcC1ib3gtaGlnaGxpZ2h0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IFxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzM1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogNi43cmVtO1xcbiAgICB3aWR0aDogOC4ycmVtO1xcbn1cXG5cXG4uc2hpcC1ib3gtcGxhY2VkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBoZWlnaHQ6IDYuNXJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnNoaXAtYm94LXBsYWNlZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc2hpcC1pY29uIHtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGhlaWdodDogMi41cmVtOyBcXG59XFxuXFxuLnNoaXAtaWNvbi1wbGFjZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hpcC10ZXh0IHtcXG4gICAgY29sb3I6IGdyYXk7IFxcbn1cXG5cXG4uc2hpcC10ZXh0LWhpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXAtdGV4dC1wbGFjZWQge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5heGlzLWhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNzaGlwLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIHNldHVwLW1vZGFsOiAqL1xcbi5zZXR1cC1tb2RhbCwgLndpbm5lci1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMjsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyMSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuICBcXG4uc2V0dXAtbW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICBtYXgtd2lkdGg6IDMzcmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLW1lc3NhZ2Uge1xcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi53aW5uZXItbW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkMTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWluLWhlaWdodDogMjJyZW07XFxuICAgIG1pbi13aWR0aDogMzVyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuXFxuLndpbm5lci1tb2RhbC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcbiNjbG9zZS13aW5uZXItbW9kYWwtYnRuIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTNyZW07IFxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi53aW5uZXItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiN3aW5uZXItdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXItYWxpZ24gdGhlIHRleHQgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIE9wdGlvbmFsOiBDZW50ZXIgdGhlIGNvbnRhaW5lciBpdHNlbGYgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgNTAlIHtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcbiAgXFxuLnR5cGluZy1jdXJzb3Ige1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xcbn1cXG5cXG4jd2VsY29tZS10ZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC12YXJpYW50OiB1bmRlcmxpbmU7XFxuICAgIGhlaWdodDogMjJweDtcXG59XFxuXFxuLmNvbW1hbmRlci1pY29uIHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbn1cXG5cXG4jY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xcbiAgICBtYXJnaW4tbGVmdDogMjVyZW07XFxuICAgIG1hcmdpbi10b3A6IC0xLjdyZW07XFxuICAgIHdpZHRoOiA1LjVyZW07XFxuICAgIGhlaWdodDogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1OSk7XFxuICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2Nsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEJhdHRsZS1wYWdlICovIFxcblxcbi5iYXR0bGUtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIG1pbi13aWR0aDogNzhyZW07XFxuICAgIGhlaWdodDogNDNyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG59XFxuXFxuLnBsYXllci1zaWRlLCAuY29tcHV0ZXItc2lkZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbXB1dGVyLWdyaWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjI4Nyk7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyLCAuY29tcHV0ZXItaGVhZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICAgIGNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5jb21wdXRlci1oZWFkZXIge1xcbiAgICBjb2xvcjojZjNhNjQwO1xcbn1cXG5cXG4ubWlzc2VkLXNxdWFyZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXFxuICAgIGhlaWdodDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgc2hhcGUgYSBjaXJjbGUgKi9cXG4gICAgLyogQ2VudGVyIHRoZSBjaXJjbGUgKi9cXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hdHRhY2tlZC1zcXVhcmU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xcbiAgICBoZWlnaHQ6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIHNoYXBlIGEgY2lyY2xlICovXFxuICAgIC8qIENlbnRlciB0aGUgY2lyY2xlICovXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubWlzc2VkLXNxdWFyZTpob3ZlciwgLmF0dGFja2VkLXNxdWFyZTpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuXFxuICBcXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxhY2VTaGlwcyBmcm9tICcuLi9kb20vcGxhY2VTaGlwcyc7XG5pbXBvcnQgcHJlZ2FtZSBmcm9tICcuLi9kb20vcHJlZ2FtZSc7XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IFBsYWNlU2hpcHMuZ2V0UGxheWVyQm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBuZXdQbGF5ZXIgPSBQbGF5ZXIocGxheWVyQm9hcmQpO1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSB8fCBjb21wdXRlckJvYXJkLmFsbFNoaXBzQXJlU3VuaygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGluaXRDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpKTtcbiAgfTtcblxuICBjb25zdCBnYW1lV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSkge1xuICAgICAgcmV0dXJuICdDT01QVVRFUic7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzQXJlU3VuaygpKSB7XG4gICAgICByZXR1cm4gcHJlZ2FtZS5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXlUdXJuID0gKHgsIHkpID0+IHtcbiAgICBpZiAoIWdhbWVPdmVyKCkpIHtcbiAgICAgIG5ld1BsYXllci5hdHRhY2soY29tcHV0ZXJCb2FyZCwgeCwgeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBHYW1lIG92ZXIhIFdpbm5lciBpcyAke2dhbWVXaW5uZXIoKX1gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRCb2FyZHMgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIGNvbXB1dGVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheVR1cm4sXG4gICAgZ2FtZVdpbm5lcixcbiAgICByZXNldEJvYXJkcyxcbiAgICBpbml0Q29tcHV0ZXJCb2FyZCxcbiAgICBnZXRQbGF5ZXJCb2FyZCxcbiAgICBnZXRDb21wdXRlckJvYXJkLFxuICAgIGdhbWVPdmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpO1xuICBsZXQgc2hpcHMgPSB7fTsgLy8gb2JqZWN0IHRvIHRyYWNrIHNoaXBzIGJ5IElEXG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuXG4gIGNvbnN0IGdldFNoaXBCeUlEID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzW2lkXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSkgPT4ge1xuICAgIGlmIChvdXRzaWRlQm9hcmQoc2hpcCwgeCwgeSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnQgcGxhY2Ugc2hpcCBvdXRzaWRlIG9mIDEweDEwIGJvYXJkIScpO1xuXG4gICAgaWYgKHNxdWFyZU9jY3VwaWVkKHNoaXAsIHgsIHkpKSB0aHJvdyBuZXcgRXJyb3IoJ3NxdWFyZSBhbHJlYWR5IG9jY3VwaWVkIScpO1xuXG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAwICYmIHNoaXAuZ2V0TGVuZ3RoKCkgPT09IDEpIGJvYXJkW3hdW3ldID0gc2hpcC5nZXRJRCgpO1xuXG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAwICYmIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxKSB7XG4gICAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd4JylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBzaGlwLmdldElEKCk7XG4gICAgICAgIH1cbiAgICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3knKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IHNoaXAuZ2V0SUQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaGlwc1tzaGlwLmdldElEKCldID0gc2hpcDtcbiAgICBcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKTtcbiAgICBjb25zb2xlLmxvZyhzcXVhcmUpO1xuICAgIHNoaXAuc2V0U3RhcnRTcXVhcmUoc3F1YXJlKTtcbiAgfTtcblxuICBjb25zdCBzaGlwUGxhY2VkID0gKHNoaXBJZCkgPT4ge1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICBsZXQgYm9hcmQgPSBnZXRCb2FyZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09IHNoaXBJZCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjZWxsIGNvbnRhaW5zIHRoZSBzaGlwSWRcbiAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrOyAvLyBTdG9wIHNlYXJjaGluZyBvbmNlIHNoaXBJZCBpcyBmb3VuZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIGJyZWFrOyAvLyBCcmVhayB0aGUgb3V0ZXIgbG9vcCBpZiBzaGlwSWQgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VkO1xuICB9O1xuXG4gIGNvbnN0IGlzT2NjdXBpZWQgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSAhPT0gMDtcbiAgfTtcblxuICBjb25zdCBvdXRzaWRlQm9hcmQgPSAoc2hpcCwgeCwgeSkgPT4ge1xuICAgIGlmICh4IDwgMCB8fCB4ID49IDEwIHx8IHkgPCAwIHx8IHkgPj0gMTApIHJldHVybiB0cnVlO1xuICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3gnICYmIHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHJldHVybiB0cnVlO1xuICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gJ3knICYmIHkgKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNxdWFyZU9jY3VwaWVkID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd4Jykge1xuICAgICAgaWYgKHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3ggKyBpXVt5XSAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTcXVhcmUgaXMgb2NjdXBpZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd5Jykge1xuICAgICAgaWYgKHkgKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3kgKyBpXSAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTcXVhcmUgaXMgb2NjdXBpZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vIHNxdWFyZXMgYXJlIG9jY3VwaWVkXG4gIH07XG5cbiAgY29uc3Qgc3F1YXJlQ29udGFpbnNTaGlwID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV0gIT09ICd4JyAmJiBib2FyZFt4XVt5XSAhPT0gMDtcbiAgfTtcblxuICBjb25zdCBzcXVhcmVBdHRhY2tlZCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldID09PSAnaGl0JztcbiAgfTtcblxuICBjb25zdCBtaXNzZWRBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSA9PT0gJ3gnO1xuICB9O1xuXG4gIGNvbnN0IGlzRW1wdHlGaWVsZCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldICE9PSAneCcgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmICh4IDwgMCB8fCB4ID49IDEwIHx8IHkgPCAwIHx8IHkgPj0gMTApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhdHRhY2sgb3V0c2lkZSBvZiAxMHgxMCBib2FyZCEnKTtcblxuICAgIGlmIChzcXVhcmVBdHRhY2tlZCh4LCB5KSkgdGhyb3cgbmV3IEVycm9yKCdTcXVhcmUgaXMgYWxyZWFkeSBhdHRhY2tlZCEnKTtcblxuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCkge1xuICAgICAgYm9hcmRbeF1beV0gPSAneCc7IC8vIE1hcmsgYXMgbWlzc2VkIGF0dGFja1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBBc3N1bWluZyBib2FyZFt4XVt5XSBjb250YWlucyBhIHNoaXAgSUQgZm9yIGEgaGl0XG4gICAgY29uc3Qgc2hpcElEID0gYm9hcmRbeF1beV07XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXBCeUlEKHNoaXBJRCk7XG4gICAgc2hpcC5oaXQoKTtcbiAgICBib2FyZFt4XVt5XSA9ICdoaXQnOyAvLyBNYXJrIGFzIGF0dGFja2VkXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNBcmVTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNoaXBzKS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgMDogU2hpcCg1LCAwKSxcbiAgICAgIDE6IFNoaXAoNCwgMSksXG4gICAgICAyOiBTaGlwKDQsIDIpLFxuICAgICAgMzogU2hpcCgzLCAzKSxcbiAgICAgIDQ6IFNoaXAoMiwgNCksXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNba2V5XTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgaWYgKHJhbmRvbU51bSA9PSAxKSB7XG4gICAgICAgIHNoaXAucm90YXRlU2hpcCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZ2VuZXJhdGVDb21wdXRlclNoaXBzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1trZXldO1xuICAgICAgbGV0IHJhbmRvbVgsIHJhbmRvbVk7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIChzaGlwLmdldEF4aXMoKSA9PT0gJ3gnID8gMTAgLSBzaGlwLmdldExlbmd0aCgpIDogMTApLFxuICAgICAgICApO1xuICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKHNoaXAuZ2V0QXhpcygpID09PSAneScgPyAxMCAtIHNoaXAuZ2V0TGVuZ3RoKCkgOiAxMCksXG4gICAgICAgICk7XG4gICAgICB9IHdoaWxlIChzcXVhcmVPY2N1cGllZChzaGlwLCByYW5kb21YLCByYW5kb21ZKSk7XG5cbiAgICAgIHBsYWNlU2hpcChzaGlwLCByYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IEFycmF5KDEwKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG5cbiAgICBzaGlwcyA9IHt9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGlzT2NjdXBpZWQsXG4gICAgaXNFbXB0eUZpZWxkLFxuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNBcmVTdW5rLFxuICAgIHJlc2V0Qm9hcmQsXG4gICAgc3F1YXJlQXR0YWNrZWQsXG4gICAgbWlzc2VkQXR0YWNrLFxuICAgIHNoaXBQbGFjZWQsXG4gICAgcGxhY2VDb21wdXRlclNoaXBzLFxuICAgIHNxdWFyZUNvbnRhaW5zU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChnYW1lYm9hcmQpID0+IHtcbiAgbGV0IGNvbXB1dGVySGl0cyA9IFtdO1xuXG4gIGNvbnN0IGF0dGFjayA9IChlbmVteUJvYXJkLCB4LCB5KSA9PiB7XG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmICghZW5lbXlCb2FyZC5zcXVhcmVBdHRhY2tlZCh4LCB5KSkge1xuICAgICAgY29tcHV0ZXJBdHRhY2soZ2FtZWJvYXJkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICBsZXQgaW52YWxpZENvb3JkaW5hdGUgPSB0cnVlO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuXG4gICAgd2hpbGUgKGludmFsaWRDb29yZGluYXRlKSB7XG4gICAgICBpZiAoY29tcHV0ZXJIaXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgW3gsIHldID0gZ2V0UmFuZG9tQW5kUmVtb3ZlKGNvbXB1dGVySGl0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICB5ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllckJvYXJkLmlzRW1wdHlGaWVsZCh4LCB5KSkge1xuICAgICAgICBpbnZhbGlkQ29vcmRpbmF0ZSA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGEgaGl0XG4gICAgICAgICAgY29tcHV0ZXJBdHRhY2socGxheWVyQm9hcmQpOyAvLyBSZWN1cnNpdmVseSBhdHRhY2sgYWdhaW4gaWYgaXQgd2FzIGEgaGl0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wdXRlckF0dGFjayhwbGF5ZXJCb2FyZCwgeCwgeSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ29tcHV0ZXJBdHRhY2sgPSAocGxheWVyQm9hcmQsIHgsIHkpID0+IHtcbiAgICBpZiAoY29tcHV0ZXJIaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29tcHV0ZXJIaXRzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHBsYXllckJvYXJkLmdldEJvYXJkKClbeF1beV0gPT09ICd4Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb3JpZ2luID0gZmFsc2U7XG4gICAgaWYgKGNvbXB1dGVySGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbXB1dGVySGl0cy5wdXNoKFt4LCB5XSk7XG4gICAgICBvcmlnaW4gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoeCA+IDAgJiYgeCA8PSA5KSB7XG4gICAgICBjb21wdXRlckhpdHMucHVzaChbeCAtIDEsIHldKTsgLy8gdG9wXG4gICAgfVxuICAgIGlmICh4ID49IDAgJiYgeCA8IDkpIHtcbiAgICAgIGNvbXB1dGVySGl0cy5wdXNoKFt4ICsgMSwgeV0pOyAvLyB0b3BcbiAgICB9XG4gICAgaWYgKHkgPiAwICYmIHkgPD0gOSkge1xuICAgICAgY29tcHV0ZXJIaXRzLnB1c2goW3gsIHkgLSAxXSk7IC8vIHRvcFxuICAgIH1cbiAgICBpZiAoeSA+PSAwICYmIHkgPCA5KSB7XG4gICAgICBjb21wdXRlckhpdHMucHVzaChbeCwgeSArIDFdKTsgLy8gdG9wXG4gICAgfVxuXG4gICAgaWYgKGNvbXB1dGVySGl0cy5sZW5ndGggPiAxICYmICFvcmlnaW4pIHtcbiAgICAgIGlmICh4ID09PSBjb21wdXRlckhpdHNbMF1bMF0pIHtcbiAgICAgICAgY29tcHV0ZXJIaXRzID0gW1xuICAgICAgICAgIC4uLmNvbXB1dGVySGl0cy5zbGljZSgwLCAxKSxcbiAgICAgICAgICAuLi5jb21wdXRlckhpdHMuc2xpY2UoMSkuZmlsdGVyKChzdWJBcnIpID0+IHN1YkFyclswXSA9PT0geCksXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgaWYgKHkgPT09IGNvbXB1dGVySGl0c1swXVsxXSkge1xuICAgICAgICBjb21wdXRlckhpdHMgPSBbXG4gICAgICAgICAgLi4uY29tcHV0ZXJIaXRzLnNsaWNlKDAsIDEpLFxuICAgICAgICAgIC4uLmNvbXB1dGVySGl0cy5zbGljZSgxKS5maWx0ZXIoKHN1YkFycikgPT4gc3ViQXJyWzFdID09PSB5KSxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUFuZFJlbW92ZShhcnJheSkge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCAtIDEpKSArIDE7XG4gICAgY29uc3QgcmFuZG9tRWxlbWVudCA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuICAgIHJldHVybiByYW5kb21FbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2ssXG4gICAgY29tcHV0ZXJBdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgaWQpID0+IHtcbiAgaWYgKGxlbmd0aCA+IDUgfHwgbGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIGxlbmd0aDogTGVuZ3RoIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1LicpO1xuICB9XG5cbiAgY29uc3Qgc2hpcCA9IHtcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IGZhbHNlLFxuICAgIGF4aXM6ICd5JyxcbiAgICBpZDogaWQgKyAxLFxuICAgIHN0YXJ0U3F1YXJlOiAwXG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gc2hpcC5sZW5ndGg7XG5cbiAgY29uc3QgZ2V0QXhpcyA9ICgpID0+IHNoaXAuYXhpcztcblxuICBjb25zdCBnZXRJRCA9ICgpID0+IHNoaXAuaWQ7XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHNoaXAuaGl0cztcblxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgIGlmIChzaGlwLmF4aXMgPT09ICd4Jykge1xuICAgICAgc2hpcC5heGlzID0gJ3knO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLmF4aXMgPSAneCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBzaGlwLmhpdHMrKztcbiAgICBpZiAoc2hpcC5oaXRzID09PSBzaGlwLmxlbmd0aCkgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXAuc3VuaztcbiAgfTtcblxuICBjb25zdCBzZXRTdGFydFNxdWFyZSA9IChzdGFydFNxdWFyZSkgPT4ge1xuICAgIHNoaXAuc3RhcnRTcXVhcmUgPSBzdGFydFNxdWFyZTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGFydFNxdWFyZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcC5zdGFydFNxdWFyZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGdldEF4aXMsIGdldElELCBnZXRIaXRzLCBoaXQsIGlzU3Vuaywgcm90YXRlU2hpcCwgc2V0U3RhcnRTcXVhcmUsIGdldFN0YXJ0U3F1YXJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgUGxhY2VTaGlwcyBmcm9tICcuL3BsYWNlU2hpcHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vY29kZS9nYW1lJztcbmltcG9ydCB3aW5uZXJNb2RhbCBmcm9tICcuL3dpbm5lck1vZGFsJztcblxuY29uc3QgQ29tYmF0ID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UGxheWVyR3JpZCA9ICgpID0+IHtcbiAgICByZXR1cm4gUGxhY2VTaGlwcy5nZXRDbG9uZWRHcmlkKCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbWJhdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgaGVscGVyLnJlc3RvcmVQYWdlKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZChsb2FkQmF0dGxlQ2FyZCgpKTtcbiAgICBHYW1lLmluaXRDb21wdXRlckJvYXJkKCk7XG5cbiAgICBjb25zdCBjb21wR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ncmlkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJTcXVhcmVzID0gY29tcEdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgY29tcHV0ZXJTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZC1zcXVhcmUnKSAmJlxuICAgICAgICAgICFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdHRhY2tlZC1zcXVhcmUnKVxuICAgICAgICApIHtcbiAgICAgICAgICBhdHRhY2tTcXVhcmUoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZS5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh3aW5uZXJNb2RhbC5sb2FkV2lubmVyTW9kYWwoKSk7XG4gICAgICAgICAgd2lubmVyTW9kYWwuaW5pdFR5cGluZ0VmZmVjdFdpbm5lcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkQmF0dGxlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBiYXR0bGVTZWN0aW9uID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2JhdHRsZS1jYXJkJyxcbiAgICB9KTtcblxuICAgIGJhdHRsZVNlY3Rpb24uYXBwZW5kKGxvYWRQbGF5ZXJTaWRlKCksIGxvYWRDb21wdXRlclNpZGUoKSk7XG5cbiAgICByZXR1cm4gYmF0dGxlU2VjdGlvbjtcbiAgfTtcblxuICBjb25zdCBsb2FkUGxheWVyU2lkZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJTaWRlID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHsgY2xhc3NOYW1lOiAncGxheWVyLXNpZGUnIH0pO1xuICAgIGNvbnN0IHBsYXllckhlYWRlciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3BsYXllci1oZWFkZXInLFxuICAgICAgdGV4dENvbnRlbnQ6ICdGUklFTkRMWSBXQVRFUlMnLFxuICAgIH0pO1xuICAgIHBsYXllclNpZGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNpZGUnKTtcblxuICAgIHBsYXllclNpZGUuYXBwZW5kKHBsYXllckhlYWRlciwgZ2V0UGxheWVyR3JpZCgpKTtcbiAgICByZXR1cm4gcGxheWVyU2lkZTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ29tcHV0ZXJTaWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyU2lkZSA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdjb21wdXRlci1zaWRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wdXRlckhlYWRlciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NvbXB1dGVyLWhlYWRlcicsXG4gICAgICB0ZXh0Q29udGVudDogJ0VORU1ZIFdBVEVSUycsXG4gICAgfSk7XG4gICAgY29uc3QgY29tcHV0ZXJHcmlkID0gaGVscGVyLmxvYWRHcmlkU3F1YXJlKCk7XG4gICAgY29tcHV0ZXJHcmlkLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ncmlkJyk7XG4gICAgY29tcHV0ZXJHcmlkLmxhc3RDaGlsZC5pZCA9ICdjb21wdXRlci1ncmlkJztcbiAgICBjb21wdXRlclNpZGUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2lkZScpO1xuXG4gICAgY29tcHV0ZXJTaWRlLmFwcGVuZChjb21wdXRlckhlYWRlciwgY29tcHV0ZXJHcmlkKTtcblxuICAgIHJldHVybiBjb21wdXRlclNpZGU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU3F1YXJlID0gKHNxdWFyZSkgPT4ge1xuICAgIGxldCB4QXhpcyA9IHBhcnNlSW50KHNxdWFyZS5pZC5jaGFyQXQoMCksIDEwKTtcbiAgICBsZXQgeUF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDEpLCAxMCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWUuZ2V0Q29tcHV0ZXJCb2FyZCgpO1xuXG4gICAgLy8gUGxheSB0aGUgdHVybiBiZWZvcmUgY2hlY2tpbmcgdGhlIHJlc3VsdHNcbiAgICBHYW1lLnBsYXlUdXJuKHhBeGlzLCB5QXhpcyk7XG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZC5nZXRCb2FyZCgpKTtcblxuICAgIC8vIE5vdyBjaGVjayBpZiB0aGUgYXR0YWNrIHdhcyBhIGhpdCBvciBtaXNzXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuc3F1YXJlQXR0YWNrZWQoeEF4aXMsIHlBeGlzKSkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkLXNxdWFyZScpO1xuICAgICAgZGlzcGxheVN1bmtlbkVuZW15U2hpcHMoY29tcHV0ZXJCb2FyZCk7XG4gICAgfVxuICAgIGlmIChjb21wdXRlckJvYXJkLm1pc3NlZEF0dGFjayh4QXhpcywgeUF4aXMpKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXNxdWFyZScpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDb21wdXRlckF0dGFjaygpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDb21wdXRlckF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZ2V0UGxheWVyR3JpZCgpO1xuICAgIGNvbnN0IHBsYXllclNxdWFyZXMgPSBwbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS5nZXRQbGF5ZXJCb2FyZCgpO1xuXG4gICAgcGxheWVyU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGxldCB4QXhpcyA9IHBhcnNlSW50KHNxdWFyZS5pZC5jaGFyQXQoMCksIDEwKTtcbiAgICAgIGxldCB5QXhpcyA9IHBhcnNlSW50KHNxdWFyZS5pZC5jaGFyQXQoMSksIDEwKTtcblxuICAgICAgaWYgKHBsYXllckJvYXJkLnNxdWFyZUF0dGFja2VkKHhBeGlzLCB5QXhpcykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkLXNxdWFyZScpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllckJvYXJkLm1pc3NlZEF0dGFjayh4QXhpcywgeUF4aXMpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVN1bmtlbkVuZW15U2hpcHMgPSAoZW5lbXlCb2FyZCkgPT4ge1xuICAgIGxldCBlbmVteVNoaXBzID0gZW5lbXlCb2FyZC5nZXRTaGlwcygpO1xuICAgIE9iamVjdC52YWx1ZXMoZW5lbXlTaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbGV0IHN0YXJ0U3F1YXJlID0gc2hpcC5nZXRTdGFydFNxdWFyZSgpO1xuICAgICAgICBsZXQgc2hpcE5hbWUgPSBoZWxwZXIuc2hpcHNbc2hpcC5nZXRJRCgpIC0gMV0ubmFtZTtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBoZWxwZXIuc2hpcHNbc2hpcC5nZXRJRCgpIC0gMV0ubGVuZ3RoO1xuICAgICAgICBsZXQgc2hpcEF4aXMgPSBzaGlwLmdldEF4aXMoKTtcbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICBzaGlwQXhpcyA9ICd5JztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgc2hpcEF4aXMgPSAneCc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ncmlkJyk7XG5cbiAgICAgICAgaGVscGVyLnBsYWNlU2hpcEljb24oXG4gICAgICAgICAgY29tcHV0ZXJHcmlkLFxuICAgICAgICAgIHN0YXJ0U3F1YXJlLFxuICAgICAgICAgIHNoaXBOYW1lLFxuICAgICAgICAgIHNoaXBBeGlzLFxuICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZENvbWJhdENvbnRlbnQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJhdDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IFBsYWNlU2hpcHMgZnJvbSAnLi9wbGFjZVNoaXBzJztcbmltcG9ydCBTZXR1cE1vZGFsIGZyb20gJy4vc2V0dXBNb2RhbCc7XG5pbXBvcnQgQ29tYmF0IGZyb20gJy4vY29tYmF0JztcblxuY29uc3QgQ29tYmF0U2V0dXAgPSAoKCkgPT4ge1xuICBsZXQgYWN0aXZlQXhpcyA9ICd4JztcblxuICBjb25zdCBnZXRBY3RpdmVBeGlzID0gKCkgPT4gYWN0aXZlQXhpcztcblxuICBjb25zdCBsb2FkU2V0dXBDb250ZW50ID0gKCkgPT4ge1xuICAgIGhlbHBlci5yZXN0b3JlUGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKFNldHVwTW9kYWwubG9hZFNldHVwTW9kYWwoKSwgbG9hZEdhbWVib2FyZCgpKTtcbiAgICBTZXR1cE1vZGFsLmluaXRUeXBpbmdFZmZlY3RTZXR1cCgpO1xuXG4gICAgUGxhY2VTaGlwcy5zaGlwQm94U2VsZWN0b3IoKTtcbiAgICBQbGFjZVNoaXBzLnBsYWNlU2hpcCgpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0dXBDb250YWluZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZXR1cC1jb250YWluZXInLFxuICAgIH0pO1xuICAgIGNvbnN0IHNldHVwQm9hcmQgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3NldHVwLWJvYXJkJyB9KTtcblxuICAgIHNldHVwQm9hcmQuYXBwZW5kKFxuICAgICAgbG9hZFRvcEJ1dHRvbnMoKSxcbiAgICAgIGhlbHBlci5sb2FkR3JpZFNxdWFyZSgpLFxuICAgICAgbG9hZEJvdHRvbUJ1dHRvbnMoKSxcbiAgICApO1xuICAgIHNldHVwQ29udGFpbmVyLmFwcGVuZChzZXR1cEJvYXJkLCBsb2FkRmxlZXQoKSk7XG5cbiAgICByZXR1cm4gc2V0dXBDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRvcEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uQm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdzZXR1cC10b3AtYnRucycgfSk7XG5cbiAgICBidXR0b25Cb3guYXBwZW5kKGJ1dHRvbnMueEF4aXNCdG4sIGJ1dHRvbnMueUF4aXNCdG4pO1xuXG4gICAgYnV0dG9ucy54QXhpc0J0bi5jbGFzc0xpc3QuYWRkKCdheGlzLWhpZ2hsaWdodCcpO1xuXG4gICAgY29uc3QgcmVtb3ZlSGlnaGxpZ2h0RnJvbUFsbEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICBidXR0b25zLnhBeGlzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG4gICAgICBidXR0b25zLnlBeGlzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG4gICAgfTtcblxuICAgIGJ1dHRvbnMueEF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVIaWdobGlnaHRGcm9tQWxsQnV0dG9ucygpO1xuICAgICAgYnV0dG9ucy54QXhpc0J0bi5jbGFzc0xpc3QuYWRkKCdheGlzLWhpZ2hsaWdodCcpO1xuICAgICAgYWN0aXZlQXhpcyA9ICd4JztcbiAgICAgIFBsYWNlU2hpcHMudXBkYXRlR3JpZEhpZ2hsaWdodHMoKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbnMueUF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVIaWdobGlnaHRGcm9tQWxsQnV0dG9ucygpO1xuICAgICAgYnV0dG9ucy55QXhpc0J0bi5jbGFzc0xpc3QuYWRkKCdheGlzLWhpZ2hsaWdodCcpO1xuICAgICAgYWN0aXZlQXhpcyA9ICd5JztcbiAgICAgIFBsYWNlU2hpcHMudXBkYXRlR3JpZEhpZ2hsaWdodHMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBidXR0b25Cb3g7XG4gIH07XG5cbiAgY29uc3QgbG9hZEZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZsZWV0Q29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnZmxlZXQtY29udGFpbmVyJyxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBsZXQgc2hpcEJveCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2hpcC1ib3gnLFxuICAgICAgICBpZDogaSxcbiAgICAgIH0pO1xuICAgICAgbGV0IHNoaXBUZXh0ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgICB0ZXh0Q29udGVudDogaGVscGVyLnNoaXBOYW1lc1tpXSxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2hpcC10ZXh0JyxcbiAgICAgIH0pO1xuICAgICAgbGV0IHNoaXBJY29uID0gaGVscGVyLmNyZWF0ZSgnaW1nJywge1xuICAgICAgICBzcmM6IGhlbHBlci5zaGlwSWNvbnNbaV0sXG4gICAgICAgIGNsYXNzTmFtZTogJ3NoaXAtaWNvbicsXG4gICAgICB9KTtcbiAgICAgIHNoaXBCb3guYXBwZW5kKHNoaXBJY29uLCBzaGlwVGV4dCk7XG4gICAgICBmbGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQm94KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmxlZXRDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZEJvdHRvbUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uQm94ID0gaGVscGVyLmNyZWF0ZSgnZGljJywgeyBjbGFzc05hbWU6ICdzZXR1cC1ib3R0b20tYnRucycgfSk7XG5cbiAgICBidXR0b25Cb3guYXBwZW5kKGJ1dHRvbnMucmVzZXRCdG4sIGJ1dHRvbnMuY29uZmlybUJ0bik7XG5cbiAgICBidXR0b25zLnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzZXRQYWdlKCk7XG4gICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IFBsYWNlU2hpcHMuZ2V0UGxheWVyQm9hcmQoKTtcbiAgICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgIGxvYWRGbGVldCgpO1xuICAgICAgUGxhY2VTaGlwcy5yZXNldFNoaXBzUGxhY2VkKCk7XG4gICAgICBoZWxwZXIucmVzZXRDb25maXJtQnRuKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25zLmNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoUGxhY2VTaGlwcy5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgIENvbWJhdC5sb2FkQ29tYmF0Q29udGVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkJveDtcbiAgfTtcblxuICBjb25zdCBidXR0b25zID0ge1xuICAgIHhBeGlzQnRuOiBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZXR1cC1idG4nLFxuICAgICAgaWQ6ICd4QXhpcy1idG4nLFxuICAgICAgdGV4dENvbnRlbnQ6ICdYIGF4aXMnLFxuICAgIH0pLFxuICAgIHlBeGlzQnRuOiBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZXR1cC1idG4nLFxuICAgICAgaWQ6ICd5QXhpcy1idG4nLFxuICAgICAgdGV4dENvbnRlbnQ6ICdZIGF4aXMnLFxuICAgIH0pLFxuICAgIHJlc2V0QnRuOiBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZXR1cC1idG4nLFxuICAgICAgaWQ6ICdyZXNldC1idG4nLFxuICAgICAgdGV4dENvbnRlbnQ6ICdSZXNldCcsXG4gICAgfSksXG4gICAgY29uZmlybUJ0bjogaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnY29uZmlybS1idG4nLFxuICAgICAgdGV4dENvbnRlbnQ6ICdDb25maXJtJyxcbiAgICB9KSxcbiAgfTtcblxuICBjb25zdCByZXNldFBhZ2UgPSAoKSA9PiB7XG4gICAgaGVscGVyLnJlc2V0R2FtZWJvYXJkR3JpZCgpO1xuICAgIGFjdGl2ZUF4aXMgPSAneCc7XG4gICAgY29uc3QgeUF4aXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneUF4aXMtYnRuJyk7XG4gICAgY29uc3QgeEF4aXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneEF4aXMtYnRuJyk7XG4gICAgeUF4aXNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYXhpcy1oaWdobGlnaHQnKTtcbiAgICB4QXhpc0J0bi5jbGFzc0xpc3QuYWRkKCdheGlzLWhpZ2hsaWdodCcpO1xuXG4gICAgY29uc3Qgc2hpcEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94Jyk7XG4gICAgc2hpcEJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1pY29uLXBsYWNlZCcpO1xuICAgICAgYm94Lmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXRleHQtcGxhY2VkJyk7XG4gICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1ib3gtcGxhY2VkJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkU2V0dXBDb250ZW50LFxuICAgIGdldEFjdGl2ZUF4aXMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21iYXRTZXR1cDtcbiIsImNvbnN0IGhlbHBlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc3RvcmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlID0gKHR5cGUsIGRhdGEpID0+IHtcbiAgICBpZiAoIXR5cGUpIGNvbnNvbGUubG9nKCdtaXNzaW5nIHR5cGUnKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBBcnJheSgxMClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoKSk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCBsb2FkR3JpZFNxdWFyZSA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtZ3JpZC1jb250YWluZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSk7XG4gICAgY29uc3QgZ3JpZFNxdWFyZSA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWdyaWQnLFxuICAgICAgaWQ6ICdzZXR1cC1ncmlkJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIH0pO1xuICAgIGdyaWRTcXVhcmUuc3R5bGUuekluZGV4ID0gJzEnO1xuXG4gICAgbG9hZEdyaWQoKS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdncmlkLXNxdWFyZScsXG4gICAgICAgICAgaWQ6IGAke3Jvd0luZGV4fSR7Y29sdW1uSW5kZXh9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmQobG9hZExldHRlclNlY3Rpb24oKSwgbG9hZE51bWJlclNlY3Rpb24oKSwgZ3JpZFNxdWFyZSk7XG5cbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkTnVtYmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBjb25zdCBudW1iZXJzQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ251bWJlcnMtY29udGFpbmVyJyB9KTtcblxuICAgIG51bWJlcnMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBjcmVhdGUoJ2RpdicsIHsgY2xhc3NMaXN0OiAnbnVtYmVyJywgdGV4dENvbnRlbnQ6IG51bSB9KTtcbiAgICAgIG51bWJlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBudW1iZXJzQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRMZXR0ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBsZXR0ZXJzQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ2xldHRlcnMtY29udGFpbmVyJyB9KTtcblxuICAgIGxldHRlcnMuZm9yRWFjaCgobHRyKSA9PiB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSBjcmVhdGUoJ2RpdicsIHsgY2xhc3NMaXN0OiAnbGV0dGVyJywgdGV4dENvbnRlbnQ6IGx0ciB9KTtcbiAgICAgIGxldHRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobGV0dGVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZXR0ZXJzQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDb21tYW5kZXJJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb25QYXRoID0gJy4uL2Fzc2V0cy9pY29ucy9jb21tYW5kZXIucG5nJztcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY29tbWFuZGVyLWljb24tYm94JyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21tYW5kZXJJY29uID0gaGVscGVyLmNyZWF0ZSgnaW1nJywge1xuICAgICAgc3JjOiBpY29uUGF0aCxcbiAgICAgIGNsYXNzTmFtZTogJ2NvbW1hbmRlci1pY29uJyxcbiAgICB9KTtcblxuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWFuZGVySWNvbik7XG5cbiAgICByZXR1cm4gaWNvbkNvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBzaGlwSWNvbnMgPSBbXG4gICAgJy4uL2Fzc2V0cy9pY29ucy9jYXJyaWVyLnN2ZycsXG4gICAgJy4uL2Fzc2V0cy9pY29ucy9iYXR0bGVzaGlwLnN2ZycsXG4gICAgJy4uL2Fzc2V0cy9pY29ucy9jcnVpc2VyLnN2ZycsXG4gICAgJy4uL2Fzc2V0cy9pY29ucy9zdWJtYXJpbmUuc3ZnJyxcbiAgICAnLi4vYXNzZXRzL2ljb25zL2Rlc3Ryb3llci5zdmcnLFxuICBdO1xuXG4gIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICAnQ2FycmllciAoNWYpJyxcbiAgICAnQmF0dGxlc2hpcCAoNGYpJyxcbiAgICAnQ3J1aXNlciAoNGYpJyxcbiAgICAnU3VibWFyaW5lICgzZiknLFxuICAgICdEZXN0cm95ZXIgKDJmKScsXG4gIF07XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgMDogeyBsZW5ndGg6IDUsIG5hbWU6ICdDYXJyaWVyJyB9LFxuICAgIDE6IHsgbGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCcgfSxcbiAgICAyOiB7IGxlbmd0aDogNCwgbmFtZTogJ0NydWlzZXInIH0sXG4gICAgMzogeyBsZW5ndGg6IDMsIG5hbWU6ICdTdWJtYXJpbmUnIH0sXG4gICAgNDogeyBsZW5ndGg6IDIsIG5hbWU6ICdEZXN0cm95ZXInIH0sXG4gIH07XG5cbiAgY29uc3QgcmVzZXRHcmlkU3F1YXJlcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1oaWdobGlnaHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBJY29uID0gKFxuICAgIHBhcmVudENvbnRhaW5lcixcbiAgICBzdGFydFNxdWFyZSxcbiAgICBzaGlwVHlwZSxcbiAgICBheGlzLFxuICAgIHNoaXBMZW5ndGgsXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXJ0U3F1YXJlKTtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGlkOiAnc2hpcC1jb250YWluZXInIH0pO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtzaGlwVHlwZX0tJHtheGlzfWApO1xuXG4gICAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwTGVuZ3RoICogM31yZW1gO1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICczcmVtJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3NoaXBMZW5ndGggKiAzfXJlbWA7XG4gICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICczcmVtJztcbiAgICB9XG5cbiAgICBsZXQgaWNvblVSTCA9IGAuLi9hc3NldHMvaWNvbnMvJHtzaGlwVHlwZX0tJHtheGlzfS5zdmdgO1xuICAgIGxldCBpY29uID0gY3JlYXRlKCdpbWcnLCB7IHNyYzogaWNvblVSTCwgY2xhc3NOYW1lOiAnc2hpcCcgfSk7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIHNoaXBDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHNoaXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gJy0xJztcblxuICAgIGxldCBzcXVhcmVTZWxlY3RvciA9IGAjJHtDU1MuZXNjYXBlKHN0YXJ0U3F1YXJlLmlkKX1gO1xuICAgIGxldCBzcXVhcmUgPSBwYXJlbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihzcXVhcmVTZWxlY3Rvcik7XG4gICAgaWYgKHNxdWFyZSkge1xuICAgICAgc3F1YXJlLnByZXBlbmQoc2hpcENvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFNxdWFyZSB3aXRoIHNlbGVjdG9yICR7c3F1YXJlU2VsZWN0b3J9IG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lYm9hcmRHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG5cbiAgICBncmlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHdoaWxlIChzcXVhcmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlQ29uZmlybUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tYnRuJyk7XG5cbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0tYnRuLWFjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q29uZmlybUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tYnRuJyk7XG5cbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbmZpcm0tYnRuLWFjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHR5cGVXcml0ZXIgPSAodGV4dCwgZWxlbWVudElkLCB0eXBpbmdTcGVlZCwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0eXBpbmctY3Vyc29yJyk7XG5cbiAgICBjb25zdCB0eXBpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IHRleHQuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgICAgIHNldFRpbWVvdXQodHlwaW5nLCB0eXBpbmdTcGVlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R5cGluZy1jdXJzb3InKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHlwaW5nKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgcmVzdG9yZVBhZ2UsXG4gICAgbG9hZEdyaWRTcXVhcmUsXG4gICAgbG9hZExldHRlclNlY3Rpb24sXG4gICAgbG9hZE51bWJlclNlY3Rpb24sXG4gICAgbG9hZENvbW1hbmRlckljb24sXG4gICAgcGxhY2VTaGlwSWNvbixcbiAgICByZXNldEdyaWRTcXVhcmVzLFxuICAgIHJlc2V0R2FtZWJvYXJkR3JpZCxcbiAgICBhY3RpdmF0ZUNvbmZpcm1CdG4sXG4gICAgcmVzZXRDb25maXJtQnRuLFxuICAgIHR5cGVXcml0ZXIsXG4gICAgc2hpcEljb25zLFxuICAgIHNoaXBOYW1lcyxcbiAgICBzaGlwcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcjtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9jb2RlL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9jb2RlL3NoaXAnO1xuaW1wb3J0IENvbWJhdFNldHVwIGZyb20gJy4vY29tYmF0U2V0dXAnO1xuXG5jb25zdCBQbGFjZVNoaXBzID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgbGV0IGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IHNoaXBzUGxhY2VkID0gMDtcbiAgdmFyIGNsb25lZEdyaWQ7XG5cbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoKCkgPT4ge1xuICAgIGxldCBwbGFjZW1lbnRJc1ZhbGlkID0gdHJ1ZTsgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRQbGFjZW1lbnRWYWxpZDogKGlzVmFsaWQpID0+IHtcbiAgICAgICAgICAgIHBsYWNlbWVudElzVmFsaWQgPSBpc1ZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICBpc1BsYWNlbWVudFZhbGlkOiAoKSA9PiBwbGFjZW1lbnRJc1ZhbGlkLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRTaGlwID0ge1xuICAgIDA6IGZhbHNlLFxuICAgIDE6IGZhbHNlLFxuICAgIDI6IGZhbHNlLFxuICAgIDM6IGZhbHNlLFxuICAgIDQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwc1BsYWNlZCA9PT0gNTtcbiAgfTtcblxuICBjb25zdCByZXNldFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHNoaXBzUGxhY2VkID0gMDsgXG4gIH07XG5cbiAgY29uc3QgcmVzZXRTZWxlY3RlZFNoaXAgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICBzZWxlY3RlZFNoaXBba2V5XSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1NoaXBTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxlY3RlZFNoaXApIHtcbiAgICAgIGlmIChzZWxlY3RlZFNoaXBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IHdoZW4gYSBzZWxlY3RlZCBzaGlwIGlzIGZvdW5kXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgLy8gUmV0dXJuIGZhbHNlIGlmIG5vIHNlbGVjdGVkIHNoaXAgaXMgZm91bmRcbiAgfTtcblxuICBjb25zdCBnZXRTZWxlY3RlZFNoaXBJRCA9ICgpID0+IHtcbiAgICBsZXQgaWQgPSAnMCc7IFxuICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdGVkU2hpcCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlkID0ga2V5O1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXR1cm4gaWQudG9TdHJpbmcoKTsgXG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0U2hpcCA9IChzaGlwSWQpID0+IHtcbiAgICByZXNldFNoaXBCb3hlcygpO1xuICAgIHJlc2V0U2VsZWN0ZWRTaGlwKCk7XG4gICAgaWYgKHBsYXllckJvYXJkLnNoaXBQbGFjZWQocGFyc2VJbnQoc2hpcElkKSArIDEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZWN0ZWRTaGlwW3NoaXBJZF0gPSB0cnVlOyAvLyBBc3N1bWluZyBzZWxlY3RlZFNoaXAgaXMgYWNjZXNzaWJsZSBhdCB0aGlzIHNjb3BlXG4gIFxuICAgIC8vIFVwZGF0ZSBVSSB0byByZWZsZWN0IHRoZSBzZWxlY3RlZCBzaGlwXG4gICAgY29uc3Qgc2hpcEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBJZCk7XG4gICAgc2hpcEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveC1oaWdobGlnaHQnKTtcbiAgICBzaGlwQm94Lmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdzaGlwLXRleHQtaGlnaGxpZ2h0Jyk7XG4gIFxuICAgIC8vIFVwZGF0ZSBncmlkIGhpZ2hsaWdodHMgYmFzZWQgb24gdGhlIG5ld2x5IHNlbGVjdGVkIHNoaXBcbiAgICB1cGRhdGVHcmlkSGlnaGxpZ2h0cygpO1xuICB9O1xuICBcbiAgY29uc3QgdXBkYXRlR3JpZEhpZ2hsaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1NoaXBTZWxlY3RlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNoaXBJZCA9IGdldFNlbGVjdGVkU2hpcElEKCk7IC8vIEVuc3VyZSB0aGlzIHJldHVybnMgdGhlIElEIGFzIGEgc3RyaW5nLCB3aGljaCBpcyBrZXkgaW4gaGVscGVyLnNoaXBzXG4gICAgbGV0IHNoaXBMZW5ndGggPSBoZWxwZXIuc2hpcHNbc2hpcElkXS5sZW5ndGg7XG4gICAgbGlnaHRHcmlkU3F1YXJlcyhzaGlwTGVuZ3RoLCBDb21iYXRTZXR1cC5nZXRBY3RpdmVBeGlzKCkpO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBCb3hTZWxlY3RvciA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1ib3gnKTtcbiAgICBzaGlwQm94ZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBldmVudCBidWJibGluZ1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmlkKTtcbiAgICAgICAgc2VsZWN0U2hpcChzaGlwLmlkKTsgLy8gUGFzcyB0aGUgSUQgb2YgdGhlIGNsaWNrZWQgc2hpcCB0byBzZWxlY3RTaGlwXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vc2V0IHBsYWNlbWVudFZhbGlkIHRvIHRydWUgZXZlcnl0aW1lIG1vdXNlIGlzIG5vdCBvdmVyIGdyaWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzZ3JpZENsaWNrZWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNldHVwLWdyaWQnKTtcbiAgICAgICAgaWYgKCFpc2dyaWRDbGlja2VkKSB7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50LnNldFBsYWNlbWVudFZhbGlkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQgb3IgYW55IG9mIGl0cyBwYXJlbnRzIG1hdGNoIHRoZSAnLnNoaXAtYm94JyBzZWxlY3RvclxuICAgICAgICBjb25zdCBpc1NoaXBCb3hDbGljayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2hpcC1ib3gnKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCdzIElEIGlzICd4QXhpc0J0bicgb3IgJ3lBeGlzQnRuJ1xuICAgICAgICBjb25zdCBpc0F4aXNCdXR0b25DbGljayA9IGV2ZW50LnRhcmdldC5pZCA9PT0gJ3hBeGlzLWJ0bicgfHwgZXZlbnQudGFyZ2V0LmlkID09PSAneUF4aXMtYnRuJztcblxuICAgICAgICAvLyBJZiB0aGUgY2xpY2sgaXMgbm90IG9uIGEgc2hpcCBib3ggYW5kIG5vdCBvbiB0aGUgYXhpcyBidXR0b25zLCBhbmQgdGhlIHBsYWNlbWVudCBpcyB2YWxpZFxuICAgICAgICBpZiAoIWlzU2hpcEJveENsaWNrICYmICFpc0F4aXNCdXR0b25DbGljayAmJiBzaGlwUGxhY2VtZW50LmlzUGxhY2VtZW50VmFsaWQoKSkge1xuICAgICAgICAgIHJlc2V0U2VsZWN0ZWRTaGlwKCk7XG4gICAgICAgICAgcmVzZXRTaGlwQm94ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTaGlwQm94ZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWJveCcpO1xuXG4gICAgc2hpcEJveC5mb3JFYWNoKChvdGhlclNoaXApID0+IHtcbiAgICAgIG90aGVyU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWJveC1oaWdobGlnaHQnKTtcbiAgICAgIG90aGVyU2hpcC5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC10ZXh0LWhpZ2hsaWdodCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBncmlkU3F1YXJlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdtb3VzZW92ZXInLFxuICAgICAgICBjdXJyZW50TW91c2VPdmVySGFuZGxlcnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ21vdXNlb3V0JyxcbiAgICAgICAgY3VycmVudE1vdXNlT3V0SGFuZGxlcnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwQm94Q29udGVudCA9IChzaGlwSWQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzaGlwSWR9YCk7XG4gICAgc2VsZWN0ZWRTaGlwQm94LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnc2hpcC1pY29uLXBsYWNlZCcpO1xuICAgIHNlbGVjdGVkU2hpcEJveC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnc2hpcC10ZXh0LXBsYWNlZCcpO1xuICAgIHNlbGVjdGVkU2hpcEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveC1wbGFjZWQnKTtcbiAgfTtcblxuICBjb25zdCBsaWdodEdyaWRTcXVhcmVzID0gKHNoaXBMZW5ndGgsIGF4aXMpID0+IHtcbiAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuICAgIGNvbnN0IGdyaWRXaWR0aCA9IDEwOyAvLyBBc3N1bWluZyBhIGdyaWQgd2lkdGggb2YgMTAgZm9yIHRoaXMgZXhhbXBsZVxuICBcbiAgICBncmlkU3F1YXJlcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycyBpZiB0aGV5IGV4aXN0XG4gICAgICBpZiAoY3VycmVudE1vdXNlT3ZlckhhbmRsZXJzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycy5nZXQoZWxlbWVudCkpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY3VycmVudE1vdXNlT3V0SGFuZGxlcnMuZ2V0KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBEZWZpbmUgbmV3IGhhbmRsZXJzXG4gICAgICBjb25zdCBtb3VzZU92ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgZW5kSW5kZXggPSBpbmRleCArIChheGlzID09PSAneCcgPyBzaGlwTGVuZ3RoIC0gMSA6IChzaGlwTGVuZ3RoIC0gMSkgKiBncmlkV2lkdGgpO1xuICAgICAgICBsZXQgcGxhY2VtZW50SXNWYWxpZCA9IHRydWU7IFxuICAgICAgICBzaGlwUGxhY2VtZW50LnNldFBsYWNlbWVudFZhbGlkKHBsYWNlbWVudElzVmFsaWQpOyAvLyBBc3N1bWUgdmFsaWQgdW50aWwgcHJvdmVuIG90aGVyd2lzZVxuICBcbiAgICAgICAgLy8gRmlyc3QgcGFzczogQ2hlY2sgaWYgYW55IHBhcnQgb2YgdGhlIHBsYWNlbWVudCBpcyBpbnZhbGlkXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8PSBlbmRJbmRleCAmJiBwbGFjZW1lbnRJc1ZhbGlkOyBpICs9IChheGlzID09PSAneCcgPyAxIDogZ3JpZFdpZHRoKSkge1xuICAgICAgICAgIGlmIChpID49IGdyaWRTcXVhcmVzLmxlbmd0aCB8fCAoYXhpcyA9PT0gJ3gnICYmIE1hdGguZmxvb3IoaSAvIGdyaWRXaWR0aCkgIT09IE1hdGguZmxvb3IoaW5kZXggLyBncmlkV2lkdGgpKSkge1xuICAgICAgICAgICAgcGxhY2VtZW50SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZChwbGFjZW1lbnRJc1ZhbGlkKTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBTdG9wIGNoZWNraW5nIGlmIHdlIGFscmVhZHkga25vdyB0aGUgcGxhY2VtZW50IGlzIGludmFsaWRcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGxldCBbeCwgeV0gPSBncmlkU3F1YXJlc1tpXS5pZC5zcGxpdCgnJykubWFwKE51bWJlcik7IC8vIFVzaW5nIE51bWJlciBhcyBhIHNob3J0aGFuZFxuICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5pc09jY3VwaWVkKHgsIHkpKSB7XG4gICAgICAgICAgICBwbGFjZW1lbnRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50LnNldFBsYWNlbWVudFZhbGlkKHBsYWNlbWVudElzVmFsaWQpO1xuICAgICAgICAgICAgYnJlYWs7IC8vIFN0b3AgY2hlY2tpbmcgaWYgd2UgZmluZCBhbnkgc3F1YXJlIGlzIG9jY3VwaWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBTZWNvbmQgcGFzczogQXBwbHkgY2xhc3NlcyBiYXNlZCBvbiBwbGFjZW1lbnQgdmFsaWRpdHlcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDw9IGVuZEluZGV4ICYmIGkgPCBncmlkU3F1YXJlcy5sZW5ndGg7IGkgKz0gKGF4aXMgPT09ICd4JyA/IDEgOiBncmlkV2lkdGgpKSB7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JyAmJiBNYXRoLmZsb29yKGkgLyBncmlkV2lkdGgpICE9PSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZFdpZHRoKSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vIEFkZGl0aW9uYWwgc2FmZWd1YXJkIGZvciBob3Jpem9udGFsIGF4aXNcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGdyaWRTcXVhcmVzW2ldO1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRJc1ZhbGlkKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1oaWdobGlnaHQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtc3F1YXJlLWludmFsaWQnLCAnZ3JpZC1oaWdobGlnaHQtaW52YWxpZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgICBjb25zdCBtb3VzZU91dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGdyaWRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1oaWdobGlnaHQnLCAnZ3JpZC1oaWdobGlnaHQtaW52YWxpZCcsICdncmlkLXNxdWFyZS1pbnZhbGlkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgXG4gICAgICAvLyBVcGRhdGUgdGhlIG1hcCB3aXRoIG5ldyBoYW5kbGVyc1xuICAgICAgY3VycmVudE1vdXNlT3ZlckhhbmRsZXJzLnNldChlbGVtZW50LCBtb3VzZU92ZXJIYW5kbGVyKTtcbiAgICAgIGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzLnNldChlbGVtZW50LCBtb3VzZU91dEhhbmRsZXIpO1xuICBcbiAgICAgIC8vIEF0dGFjaCB0aGUgbmV3IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZU91dEhhbmRsZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR1cC1ncmlkJyk7XG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBncmlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFpc1NoaXBTZWxlY3RlZCgpIHx8ICFzaGlwUGxhY2VtZW50LmlzUGxhY2VtZW50VmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVtb3ZlIGhpZ2hsaWdodCBvbiBncmlkc3F1YXJlc1xuICAgICAgICBoZWxwZXIucmVzZXRHcmlkU3F1YXJlcygpO1xuICAgICAgICAvL2ZpbmQgc2VsZWN0ZWQgc2hpcFxuICAgICAgICBsZXQgc2VsZWN0ZWRTaGlwSWQgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpZCBpbiBzZWxlY3RlZFNoaXApIHtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwW2lkXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTaGlwSWQgPSBwYXJzZUludChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vc2hpcCBkYXRhIFxuICAgICAgICBsZXQgcm90YXRpb25BeGlzID0gQ29tYmF0U2V0dXAuZ2V0QWN0aXZlQXhpcygpO1xuICAgICAgICBsZXQgeEF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDApLCAxMCk7XG4gICAgICAgIGxldCB5QXhpcyA9IHBhcnNlSW50KHNxdWFyZS5pZC5jaGFyQXQoMSksIDEwKTtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBoZWxwZXIuc2hpcHNbc2VsZWN0ZWRTaGlwSWRdLmxlbmd0aDtcbiAgICAgICAgbGV0IHNoaXBOYW1lID0gaGVscGVyLnNoaXBzW3NlbGVjdGVkU2hpcElkXS5uYW1lO1xuICAgICAgICAvL3JvdGF0ZSBzaGlwIGlmIG5lZWRlZFxuICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCwgc2VsZWN0ZWRTaGlwSWQpO1xuICAgICAgICBpZiAocm90YXRpb25BeGlzID09PSAneScpIHtcbiAgICAgICAgICAgIHNoaXAucm90YXRlU2hpcCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCwgeEF4aXMsIHlBeGlzKTtcbiAgICAgICAgc2hpcHNQbGFjZWQgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcHNQbGFjZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5nZXRCb2FyZCgpKTsgXG5cbiAgICAgICAgaGVscGVyLnBsYWNlU2hpcEljb24oYm9hcmQsIHNxdWFyZSwgc2hpcE5hbWUsIHJvdGF0aW9uQXhpcywgc2hpcExlbmd0aCk7XG5cbiAgICAgICAgcmVtb3ZlU2hpcEJveENvbnRlbnQoc2VsZWN0ZWRTaGlwSWQpO1xuICAgICAgICByZXNldFNlbGVjdGVkU2hpcCgpO1xuXG4gICAgICAgIGlmIChhbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgaGVscGVyLmFjdGl2YXRlQ29uZmlybUJ0bigpO1xuICAgICAgICAgIHZhciBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLWdyaWQtY29udGFpbmVyJyk7XG4gICAgICAgICAgY2xvbmVkR3JpZCA9IGdyaWQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAgIGNvbnN0IGdldENsb25lZEdyaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsb25lZEdyaWQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzaGlwQm94U2VsZWN0b3IsXG4gICAgcGxhY2VTaGlwLFxuICAgIHVwZGF0ZUdyaWRIaWdobGlnaHRzLFxuICAgIGdldFBsYXllckJvYXJkLFxuICAgIGFsbFNoaXBzUGxhY2VkLFxuICAgIHJlc2V0U2hpcHNQbGFjZWQsXG4gICAgZ2V0Q2xvbmVkR3JpZFxuICB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQbGFjZVNoaXBzO1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgQ29tYmF0U2V0dXAgZnJvbSAnLi9jb21iYXRTZXR1cCc7XG5cbmNvbnN0IHByZWdhbWUgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyTmFtZTsgXG5cbiAgY29uc3Qgc2V0UGxheWVyTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgICBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICAgICAgbGV0IGZpcnN0Q2hhciA9IHBsYXllck5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZXQgcmVzdE9mTmFtZSA9IHBsYXllck5hbWUuc2xpY2UoMSk7XG5cbiAgICAgIHJldHVybiBmaXJzdENoYXIgKyByZXN0T2ZOYW1lOyBcbiAgfTtcblxuICBjb25zdCBsb2FkQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZVByZWdhbWVDYXJkKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByZWdhbWVDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlKCdzZWN0aW9uJywgeyBjbGFzc05hbWU6ICdwcmVnYW1lLWNhcmQnIH0pO1xuXG4gICAgc2VjdGlvbi5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZVRleHRJbnB1dCgpLCBjcmVhdGVTdGFydEJ1dHRvbigpKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlKCdoMScsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3ByZWdhbWUtaGVhZGVyJyxcbiAgICAgIHRleHRDb250ZW50OiAnQkFUVExFU0hJUCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUZXh0SW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dElucHV0ID0gaGVscGVyLmNyZWF0ZSgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBjbGFzc05hbWU6ICduYW1lLWlucHV0JyxcbiAgICAgIGlkOiAndXNlcm5hbWUnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdDYXB0YWluIG5hbWUuLi4nLFxuICAgICAgbWluTGVuZ3RoOiAwLCBcbiAgICAgIG1heExlbmd0aDogMTVcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRCb3ggPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2lucHV0LWJveCdcbiAgICB9KTtcblxuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcblxuICAgIHJldHVybiB0ZXh0Qm94O1xuICB9O1xuXG4gIGNvbnN0IHNldFVzZXJuYW1lID0gKCkgPT4ge1xuICAgIGxldCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcbiAgICBzZXRQbGF5ZXJOYW1lKHVzZXJJbnB1dC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU3RhcnRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7IFxuICAgICAgY2xhc3NOYW1lOiAnc3RhcnQtYnV0dG9uJyxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgaWQ6ICdwbGF5LW5vdy1idXR0b24nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dCA9IGhlbHBlci5jcmVhdGUoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0YXJ0LWJ1dHRvbi10ZXh0JyxcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdFTlRFUiBDT01CQVQnXG4gICAgfSk7XG5cbiAgICBzdGFydEJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VXNlcm5hbWUoKTtcbiAgICAgIENvbWJhdFNldHVwLmxvYWRTZXR1cENvbnRlbnQoKTtcbiAgICB9KTsgXG5cbiAgICByZXR1cm4gc3RhcnRCdXR0b247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkQ2FyZCxcbiAgICBnZXRQbGF5ZXJOYW1lXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmVnYW1lO1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgcHJlZ2FtZSBmcm9tICcuL3ByZWdhbWUnO1xuXG5jb25zdCBTZXR1cE1vZGFsID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZFNldHVwTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3NldHVwLW1vZGFsJyB9KTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGxvYWRNb2RhbENvbnRlbnQoKSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cC1tb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1vZGFsQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZXR1cC1tb2RhbC1jb250ZW50JyxcbiAgICB9KTtcbiAgICBjb25zdCBtc2dCb3ggPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ21vZGFsLW1lc3NhZ2UnIH0pO1xuICAgIG1zZ0JveC5hcHBlbmQoaGVscGVyLmxvYWRDb21tYW5kZXJJY29uKCksIGxvYWRUZXh0KCkpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtc2dCb3gpO1xuXG4gICAgcmV0dXJuIG1vZGFsQ29udGVudDtcbiAgfTtcblxuICBjb25zdCBsb2FkVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBpZDogJ3dlbGNvbWUtdGV4dCcgfSk7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICBjb25zdCBpbml0VHlwaW5nRWZmZWN0U2V0dXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBXZWxjb21lIENhcHRhaW4gJHtwcmVnYW1lLmdldFBsYXllck5hbWUoKX0hYDtcbiAgICBjb25zdCBzZWNvbmRNZXNzYWdlID1cbiAgICAgICdQbGFuIG91ciBmb3JtYXRpb24gYnkgc2VsZWN0aW5nIHRoZSBheGlzIGFuZCBzaGlwIGFuZCBkcm9wIGl0IG9uIHRoZSBtYXAuJztcblxuICAgIGNvbnN0IGFkZENsb3NlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgICBpZDogJ2Nsb3NlLW1vZGFsLWJ0bicsXG4gICAgICAgIHRleHRDb250ZW50OiAnWWVzIFNpciEnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtbW9kYWwtY29udGVudCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgODAwKTtcbiAgICB9O1xuXG4gICAgaGVscGVyLnR5cGVXcml0ZXIobWVzc2FnZSwgJ3dlbGNvbWUtdGV4dCcsIDMwLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS10ZXh0Jyk7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGhlbHBlci50eXBlV3JpdGVyKHNlY29uZE1lc3NhZ2UsICd3ZWxjb21lLXRleHQnLCAyMCwgYWRkQ2xvc2VCdXR0b24pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkU2V0dXBNb2RhbCxcbiAgICBpbml0VHlwaW5nRWZmZWN0U2V0dXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTZXR1cE1vZGFsO1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb2RlL2dhbWUnO1xuXG5jb25zdCB3aW5uZXJNb2RhbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRXaW5uZXJNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLW1vZGFsJyB9KTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGxvYWRNb2RhbENvbnRlbnQoKSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItbW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnd2lubmVyLW1vZGFsLWNvbnRlbnQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbXNnQm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICd3aW5uZXItbW9kYWwtbWVzc2FnZScgfSk7XG4gICAgY29uc3Qgd2lubmVyTWVzc2FnZSA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3dpbm5lci1tZXNzYWdlJyxcbiAgICAgIHRleHRDb250ZW50OiBgJHtHYW1lLmdhbWVXaW5uZXIoKX0gV0lOIWAsXG4gICAgfSk7XG4gICAgbXNnQm94LmFwcGVuZCh3aW5uZXJNZXNzYWdlLCBoZWxwZXIubG9hZENvbW1hbmRlckljb24oKSwgbG9hZFRleHQoKSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1zZ0JveCk7XG5cbiAgICByZXR1cm4gbW9kYWxDb250ZW50O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGlkOiAnd2lubmVyLXRleHQnIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgY29uc3QgaW5pdFR5cGluZ0VmZmVjdFdpbm5lciA9ICgpID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9XG4gICAgICBHYW1lLmdhbWVXaW5uZXIoKSA9PT0gJ0NPTVBVVEVSJ1xuICAgICAgICA/ICdUaGUgZW5lbXkgZmxlZXQgaGFzIG91dG1hbmV1dmVyZWQgeW91LCBDYXB0YWluLiBCZXR0ZXIgbHVjayBuZXh0IHRpbWUhJ1xuICAgICAgICA6ICdNaXNzaW9uIGFjY29tcGxpc2hlZCwgQ2FwdGFpbiEgWW91IHRydWx5IGFyZSB0aGUgbWFzdGVyIG9mIHRoZSBzZWFzLic7XG5cbiAgICBjb25zdCBhZGRDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgaWQ6ICdjbG9zZS13aW5uZXItbW9kYWwtYnRuJyxcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdOZXcgQmF0dGxlJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1tb2RhbC1jb250ZW50Jyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgODAwKTtcbiAgICB9O1xuXG4gICAgaGVscGVyLnR5cGVXcml0ZXIobWVzc2FnZSwgJ3dpbm5lci10ZXh0JywgMzAsICgpID0+IHtcbiAgICAgIC8vIENhbGwgYWRkQ2xvc2VCdXR0b24gYWZ0ZXIgdHlwZVdyaXRlciBpcyBkb25lIHR5cGluZ1xuICAgICAgYWRkQ2xvc2VCdXR0b24oKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkV2lubmVyTW9kYWwsIGluaXRUeXBpbmdFZmZlY3RXaW5uZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5lck1vZGFsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHByZWdhbWUgZnJvbSAnLi9kb20vcHJlZ2FtZSc7XG5cbnByZWdhbWUubG9hZENhcmQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==