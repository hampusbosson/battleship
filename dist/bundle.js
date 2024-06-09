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
    const iconContainer = helper.create('div', {
      className: 'commander-icon-box',
    });
    const commanderIcon = helper.create('img', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK01BQW9GO0FBQ2hJLDRDQUE0Qyw2TEFBMkU7QUFDdkgsNENBQTRDLCtMQUE0RTtBQUN4SCw0Q0FBNEMsaU1BQTZFO0FBQ3pILDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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VUFBVSx3QkFBd0IscUJBQXFCLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEseUJBQXlCLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIsYUFBYSx5QkFBeUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFB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QUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTs7QUFFcEMsb0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29kZS9nYW1lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvZGUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvZGUvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvZGUvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vY29tYmF0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9jb21iYXRTZXR1cC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb20vaGVscGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9wcmVnYW1lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS9zZXR1cE1vZGFsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbS93aW5uZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlLFJvYm90by9CZWJhc19OZXVlL0JlYmFzTmV1ZS1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWUsUm9ib3RvL1JvYm90by9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZSxSb2JvdG8vUm9ib3RvL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZSxSb2JvdG8vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2JlYmFzJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjU5OCksIC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgKi9cbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjMyMSlcbiAgICApLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIHdob2xlIGVsZW1lbnQgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBQcmV2ZW50IHRoZSBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0Jztcbn1cblxuYm9keSwgXG5oMSwgXG5wIHtcbiAgICBtYXJnaW46IDA7IFxufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIHByZWdhbWUgcGFnZSAqL1xuXG4ucHJlZ2FtZS1jYXJkIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtOyBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXG59XG5cbi5wcmVnYW1lLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBmb250LXNpemU6IDVyZW07ICBcbiAgICBmb250LWZhbWlseTogJ2JlYmFzJztcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4uaW5wdXQtYm94IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7IFxufVxuXG4ubmFtZS1pbnB1dCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxM3JlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhcnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDEzcmVtOyBcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTsgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDY2LCA2Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogYm9hcmQtc2V0dXAgcGFnZSAqL1xuXG4uc2V0dXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MHJlbTtcbiAgICBoZWlnaHQ6IDQ1cmVtO1xuICAgIG1pbi13aWR0aDogNTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBcbn1cblxuLnNldHVwLWJvYXJkIHtcbiAgICB3aWR0aDogMzEuMjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjJyZW07IFxufVxuXG4uc2V0dXAtZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjsgXG4gICAgZ2FwOiAwOyBcbn1cblxuLnNldHVwLWdyaWQge1xuICAgIGhlaWdodDogMzEuMjVyZW07IC8qIEFkanVzdGVkIGZvciAxMCBzcXVhcmVzIGluY2x1ZGluZyBib3JkZXJzICovXG4gICAgd2lkdGg6IDMxLjI1cmVtOyAvKiBBZGp1c3RlZCBmb3IgMTAgc3F1YXJlcyBpbmNsdWRpbmcgYm9yZGVycyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyOyAvKiBTcGFucyBmcm9tIHRoZSBzZWNvbmQgdG8gdGhlIHRoaXJkIGNvbHVtbiAqL1xuICAgIGdyaWQtcm93OiAyOyAvKiBTZWNvbmQgcm93ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjEyMyk7XG59XG5cbi5zZXR1cC1ncmlkOmhvdmVyIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmxldHRlcnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbiAgICBncmlkLXJvdzogMTsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCAxLjJyZW0gMC40cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcbn1cblxuLmxldHRlciB7XG4gICAgd2lkdGg6IDEwcHg7IFxufVxuXG4ubnVtYmVycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBncmlkLWNvbHVtbjogMTsgLyogRmlyc3QgY29sdW1uICovXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7IC8qIFNwYW5zIHNlY29uZCByb3cgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcbn1cblxuLm51bWJlciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uZ3JpZC1zcXVhcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjI2Nyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjUwMyk7ICAgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7IFxufVxuXG4uZ3JpZC1zcXVhcmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjU2Mik7XG59XG5cblxuLmdyaWQtc3F1YXJlLWludmFsaWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM5OSk7IFxufVxuXG4uZ3JpZC1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjU2Mik7XG59XG5cbi5ncmlkLWhpZ2hsaWdodC1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zOTkpOyBcbiAgfVxuXG4uc2V0dXAtdG9wLWJ0bnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtOyBcbiAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zZXR1cC1ib3R0b20tYnRucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07IFxuICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gICAgbWFyZ2luLXRvcDogMC40cmVtOyBcbn1cblxuLnNldHVwLWJ0biwgLmNvbmZpcm0tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDlyZW07XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xufVxuXG4uc2V0dXAtYnRuOmhvdmVyLCAuc2hpcC1ib3g6aG92ZXIsICNjbG9zZS13aW5uZXItbW9kYWwtYnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Jlc2V0LWJ0biwgLmNvbmZpcm0tYnRuIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDExcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY29uZmlybS1idG4ge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5jb25maXJtLWJ0bi1hY3RpdmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uY29uZmlybS1idG4tYWN0aXZlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuI3Jlc2V0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzcxKTtcbn1cblxuLmZsZWV0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS41cmVtOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgXG59XG5cbi5zaGlwLWJveCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3Nyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07IFxuICAgIGhlaWdodDogNi41cmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaGlwLWJveC1oaWdobGlnaHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzM1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDYuN3JlbTtcbiAgICB3aWR0aDogOC4ycmVtO1xufVxuXG4uc2hpcC1ib3gtcGxhY2VkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaGlwLWJveC1wbGFjZWQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zaGlwLWljb24ge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogMi41cmVtOyBcbn1cblxuLnNoaXAtaWNvbi1wbGFjZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwLXRleHQge1xuICAgIGNvbG9yOiBncmF5OyBcbn1cblxuLnNoaXAtdGV4dC1oaWdobGlnaHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNoaXAtdGV4dC1wbGFjZWQge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmF4aXMtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNzaGlwLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaGlwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIHNldHVwLW1vZGFsOiAqL1xuLnNldHVwLW1vZGFsLCAud2lubmVyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMjsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyMSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cbiAgXG4uc2V0dXAtbW9kYWwtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgbWluLWhlaWdodDogNXJlbTtcbiAgICBtYXgtd2lkdGg6IDMzcmVtOyBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubW9kYWwtbWVzc2FnZSB7XG4gICAgbWluLXdpZHRoOiAzMHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLndpbm5lci1tb2RhbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDE7XG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDIycmVtO1xuICAgIG1pbi13aWR0aDogMzVyZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cblxuLndpbm5lci1tb2RhbC1tZXNzYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cblxuI2Nsb3NlLXdpbm5lci1tb2RhbC1idG4ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTNyZW07IFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lOyBcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ud2lubmVyLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiN3aW5uZXItdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlci1hbGlnbiB0aGUgdGV4dCAqL1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBPcHRpb25hbDogQ2VudGVyIHRoZSBjb250YWluZXIgaXRzZWxmICovXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbGlnaHQnO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG4gIFxuLnR5cGluZy1jdXJzb3Ige1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcC1zdGFydCAwcyBpbmZpbml0ZTtcbn1cblxuI3dlbGNvbWUtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtdmFyaWFudDogdW5kZXJsaW5lO1xuICAgIGhlaWdodDogMjJweDtcbn1cblxuLmNvbW1hbmRlci1pY29uIHtcbiAgICB3aWR0aDogMTEwcHg7XG59XG5cbiNjbG9zZS1tb2RhbC1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcbiAgICBtYXJnaW4tbGVmdDogMjVyZW07XG4gICAgbWFyZ2luLXRvcDogLTEuN3JlbTtcbiAgICB3aWR0aDogNS41cmVtO1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIHBhZGRpbmc6IDA7IFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1OSk7XG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbiNjbG9zZS1tb2RhbC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEJhdHRsZS1wYWdlICovIFxuXG4uYmF0dGxlLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgbWluLXdpZHRoOiA3OHJlbTtcbiAgICBoZWlnaHQ6IDQzcmVtOyBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcbn1cblxuLnBsYXllci1zaWRlLCAuY29tcHV0ZXItc2lkZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uY29tcHV0ZXItZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjg3KTtcbn1cblxuLnBsYXllci1oZWFkZXIsIC5jb21wdXRlci1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5wbGF5ZXItaGVhZGVyIHtcbiAgICBjb2xvcjogbGlnaHRibHVlO1xufVxuXG4uY29tcHV0ZXItaGVhZGVyIHtcbiAgICBjb2xvcjojZjNhNjQwO1xufVxuXG4ubWlzc2VkLXNxdWFyZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cbiAgICBoZWlnaHQ6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2VzIHRoZSBzaGFwZSBhIGNpcmNsZSAqL1xuICAgIC8qIENlbnRlciB0aGUgY2lyY2xlICovXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXR0YWNrZWQtc3F1YXJlOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xuICAgIGhlaWdodDogMThweDsgLyogU2l6ZSBvZiB0aGUgY2lyY2xlICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIHNoYXBlIGEgY2lyY2xlICovXG4gICAgLyogQ2VudGVyIHRoZSBjaXJjbGUgKi9cbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5taXNzZWQtc3F1YXJlOmhvdmVyLCAuYXR0YWNrZWQtc3F1YXJlOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cblxuICBcblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQThFO0FBQ2xGOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUFxRTtBQUN6RTs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBc0U7QUFDMUU7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNENBQXVFO0FBQzNFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWjs7OzhDQUd5QztJQUN6QyxzQkFBc0IsRUFBRSw4Q0FBOEM7SUFDdEUsNEJBQTRCLEVBQUUscUNBQXFDO0lBQ25FLDJCQUEyQjtBQUMvQjs7QUFFQTs7O0lBR0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJ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O1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQmViYXNfTmV1ZVxcXFwsUm9ib3RvL0JlYmFzX05ldWUvQmViYXNOZXVlLXJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1saWdodCc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlXFxcXCxSb2JvdG8vUm9ib3RvL1JvYm90by1MaWdodC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bSc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CZWJhc19OZXVlXFxcXCxSb2JvdG8vUm9ib3RvL1JvYm90by1NZWRpdW0udHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JlYmFzX05ldWVcXFxcLFJvYm90by9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7IFxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNTk4KSwgLyogU2VtaS10cmFuc3BhcmVudCBibGFjayAqL1xcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjMyMSlcXG4gICAgKSwgdXJsKCcuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC53ZWJwJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIEVuc3VyZSB0aGUgaW1hZ2UgY292ZXJzIHRoZSB3aG9sZSBlbGVtZW50ICovXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIFByZXZlbnQgdGhlIGltYWdlIGZyb20gcmVwZWF0aW5nICovXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcXG59XFxuXFxuYm9keSwgXFxuaDEsIFxcbnAge1xcbiAgICBtYXJnaW46IDA7IFxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBwcmVnYW1lIHBhZ2UgKi9cXG5cXG4ucHJlZ2FtZS1jYXJkIHtcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXFxufVxcblxcbi5wcmVnYW1lLWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogNXJlbTsgIFxcbiAgICBmb250LWZhbWlseTogJ2JlYmFzJztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLmlucHV0LWJveCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgXFxufVxcblxcbi5uYW1lLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxM3JlbTsgXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NiwgNjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGJvYXJkLXNldHVwIHBhZ2UgKi9cXG5cXG4uc2V0dXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwcmVtO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbiAgICBtaW4td2lkdGg6IDUwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBcXG59XFxuXFxuLnNldHVwLWJvYXJkIHtcXG4gICAgd2lkdGg6IDMxLjI1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTsgXFxufVxcblxcbi5zZXR1cC1ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyOyBcXG4gICAgZ2FwOiAwOyBcXG59XFxuXFxuLnNldHVwLWdyaWQge1xcbiAgICBoZWlnaHQ6IDMxLjI1cmVtOyAvKiBBZGp1c3RlZCBmb3IgMTAgc3F1YXJlcyBpbmNsdWRpbmcgYm9yZGVycyAqL1xcbiAgICB3aWR0aDogMzEuMjVyZW07IC8qIEFkanVzdGVkIGZvciAxMCBzcXVhcmVzIGluY2x1ZGluZyBib3JkZXJzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7IC8qIFNwYW5zIGZyb20gdGhlIHNlY29uZCB0byB0aGUgdGhpcmQgY29sdW1uICovXFxuICAgIGdyaWQtcm93OiAyOyAvKiBTZWNvbmQgcm93ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC4xMjMpO1xcbn1cXG5cXG4uc2V0dXAtZ3JpZDpob3ZlciB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ubGV0dGVycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAxOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAgMS4ycmVtIDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcXG59XFxuXFxuLmxldHRlciB7XFxuICAgIHdpZHRoOiAxMHB4OyBcXG59XFxuXFxuLm51bWJlcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDE7IC8qIEZpcnN0IGNvbHVtbiAqL1xcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTsgLyogU3BhbnMgc2Vjb25kIHJvdyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcXG59XFxuXFxuLm51bWJlciB7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTEwLCAxMjgsIDAuMjY3KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjUwMyk7ICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgXFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjU2Mik7XFxufVxcblxcblxcbi5ncmlkLXNxdWFyZS1pbnZhbGlkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk5KTsgXFxufVxcblxcbi5ncmlkLWhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDExMCwgMTI4LCAwLjU2Mik7XFxufVxcblxcbi5ncmlkLWhpZ2hsaWdodC1pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk5KTsgXFxuICB9XFxuXFxuLnNldHVwLXRvcC1idG5zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07IFxcbiAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc2V0dXAtYm90dG9tLWJ0bnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTsgXFxuICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNHJlbTsgXFxufVxcblxcbi5zZXR1cC1idG4sIC5jb25maXJtLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcXG59XFxuXFxuLnNldHVwLWJ0bjpob3ZlciwgLnNoaXAtYm94OmhvdmVyLCAjY2xvc2Utd2lubmVyLW1vZGFsLWJ0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Jlc2V0LWJ0biwgLmNvbmZpcm0tYnRuIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29uZmlybS1idG4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmNvbmZpcm0tYnRuLWFjdGl2ZSB7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNvbmZpcm0tYnRuLWFjdGl2ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuI3Jlc2V0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM3MSk7XFxufVxcblxcbi5mbGVldC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgXFxufVxcblxcbi5zaGlwLWJveCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07IFxcbiAgICBoZWlnaHQ6IDYuNXJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnNoaXAtYm94LWhpZ2hsaWdodCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDYuN3JlbTtcXG4gICAgd2lkdGg6IDguMnJlbTtcXG59XFxuXFxuLnNoaXAtYm94LXBsYWNlZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgaGVpZ2h0OiA2LjVyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5zaGlwLWJveC1wbGFjZWQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNoaXAtaWNvbiB7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTsgXFxufVxcblxcbi5zaGlwLWljb24tcGxhY2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAtdGV4dCB7XFxuICAgIGNvbG9yOiBncmF5OyBcXG59XFxuXFxuLnNoaXAtdGV4dC1oaWdobGlnaHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwLXRleHQtcGxhY2VkIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYXhpcy1oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2hpcC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBzZXR1cC1tb2RhbDogKi9cXG4uc2V0dXAtbW9kYWwsIC53aW5uZXItbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDI7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjEpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuLnNldHVwLW1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAzM3JlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1tZXNzYWdlIHtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDE7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIG1pbi1oZWlnaHQ6IDIycmVtO1xcbiAgICBtaW4td2lkdGg6IDM1cmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcblxcbi53aW5uZXItbW9kYWwtbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG4jY2xvc2Utd2lubmVyLW1vZGFsLWJ0biB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEzcmVtOyBcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ud2lubmVyLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jd2lubmVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIHRoZSB0ZXh0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBPcHRpb25hbDogQ2VudGVyIHRoZSBjb250YWluZXIgaXRzZWxmICovXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIDUwJSB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG4gIFxcbi50eXBpbmctY3Vyc29yIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcC1zdGFydCAwcyBpbmZpbml0ZTtcXG59XFxuXFxuI3dlbGNvbWUtdGV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtdmFyaWFudDogdW5kZXJsaW5lO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi5jb21tYW5kZXItaWNvbiB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG59XFxuXFxuI2Nsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWxpZ2h0JztcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMS43cmVtO1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNTkpO1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBCYXR0bGUtcGFnZSAqLyBcXG5cXG4uYmF0dGxlLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBtaW4td2lkdGg6IDc4cmVtO1xcbiAgICBoZWlnaHQ6IDQzcmVtOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXFxufVxcblxcbi5wbGF5ZXItc2lkZSwgLmNvbXB1dGVyLXNpZGUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jb21wdXRlci1ncmlkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yODcpO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciwgLmNvbXB1dGVyLWhlYWRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnBsYXllci1oZWFkZXIge1xcbiAgICBjb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uY29tcHV0ZXItaGVhZGVyIHtcXG4gICAgY29sb3I6I2YzYTY0MDtcXG59XFxuXFxuLm1pc3NlZC1zcXVhcmU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xcbiAgICBoZWlnaHQ6IDE4cHg7IC8qIFNpemUgb2YgdGhlIGNpcmNsZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIHNoYXBlIGEgY2lyY2xlICovXFxuICAgIC8qIENlbnRlciB0aGUgY2lyY2xlICovXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYXR0YWNrZWQtc3F1YXJlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cXG4gICAgaGVpZ2h0OiAxOHB4OyAvKiBTaXplIG9mIHRoZSBjaXJjbGUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2VzIHRoZSBzaGFwZSBhIGNpcmNsZSAqL1xcbiAgICAvKiBDZW50ZXIgdGhlIGNpcmNsZSAqL1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1pc3NlZC1zcXVhcmU6aG92ZXIsIC5hdHRhY2tlZC1zcXVhcmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcblxcbiAgXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYWNlU2hpcHMgZnJvbSAnLi4vZG9tL3BsYWNlU2hpcHMnO1xuaW1wb3J0IHByZWdhbWUgZnJvbSAnLi4vZG9tL3ByZWdhbWUnO1xuXG5jb25zdCBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBQbGFjZVNoaXBzLmdldFBsYXllckJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKHBsYXllckJvYXJkKTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkgfHwgY29tcHV0ZXJCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKTtcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyQm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbiAgfTtcblxuICBjb25zdCBpbml0Q29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2FtZVdpbm5lciA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkpIHtcbiAgICAgIHJldHVybiAnQ09NUFVURVInO1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSkge1xuICAgICAgcmV0dXJuIHByZWdhbWUuZ2V0UGxheWVyTmFtZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5VHVybiA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKCFnYW1lT3ZlcigpKSB7XG4gICAgICBuZXdQbGF5ZXIuYXR0YWNrKGNvbXB1dGVyQm9hcmQsIHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgR2FtZSBvdmVyISBXaW5uZXIgaXMgJHtnYW1lV2lubmVyKCl9YCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0Qm9hcmRzID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBjb21wdXRlckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYXlUdXJuLFxuICAgIGdhbWVXaW5uZXIsXG4gICAgcmVzZXRCb2FyZHMsXG4gICAgaW5pdENvbXB1dGVyQm9hcmQsXG4gICAgZ2V0UGxheWVyQm9hcmQsXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZCxcbiAgICBnYW1lT3ZlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcbiAgbGV0IHNoaXBzID0ge307IC8vIG9iamVjdCB0byB0cmFjayBzaGlwcyBieSBJRFxuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCBnZXRTaGlwQnlJRCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBzaGlwc1tpZF07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAob3V0c2lkZUJvYXJkKHNoaXAsIHgsIHkpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW50IHBsYWNlIHNoaXAgb3V0c2lkZSBvZiAxMHgxMCBib2FyZCEnKTtcblxuICAgIGlmIChzcXVhcmVPY2N1cGllZChzaGlwLCB4LCB5KSkgdGhyb3cgbmV3IEVycm9yKCdzcXVhcmUgYWxyZWFkeSBvY2N1cGllZCEnKTtcblxuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCAmJiBzaGlwLmdldExlbmd0aCgpID09PSAxKSBib2FyZFt4XVt5XSA9IHNoaXAuZ2V0SUQoKTtcblxuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCAmJiBzaGlwLmdldExlbmd0aCgpID4gMSkge1xuICAgICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeCArIGldW3ldID0gc2hpcC5nZXRJRCgpO1xuICAgICAgICB9XG4gICAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd5JylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBzaGlwLmdldElEKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hpcHNbc2hpcC5nZXRJRCgpXSA9IHNoaXA7XG4gICAgXG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7XG4gICAgY29uc29sZS5sb2coc3F1YXJlKTtcbiAgICBzaGlwLnNldFN0YXJ0U3F1YXJlKHNxdWFyZSk7XG4gIH07XG5cbiAgY29uc3Qgc2hpcFBsYWNlZCA9IChzaGlwSWQpID0+IHtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSBzaGlwSWQpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2VsbCBjb250YWlucyB0aGUgc2hpcElkXG4gICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhazsgLy8gU3RvcCBzZWFyY2hpbmcgb25jZSBzaGlwSWQgaXMgZm91bmRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBsYWNlZCkge1xuICAgICAgICBicmVhazsgLy8gQnJlYWsgdGhlIG91dGVyIGxvb3AgaWYgc2hpcElkIGlzIGZvdW5kXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlZDtcbiAgfTtcblxuICBjb25zdCBpc09jY3VwaWVkID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV0gIT09IDA7XG4gIH07XG5cbiAgY29uc3Qgb3V0c2lkZUJvYXJkID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSAxMCB8fCB5IDwgMCB8fCB5ID49IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd4JyAmJiB4ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09ICd5JyAmJiB5ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzcXVhcmVPY2N1cGllZCA9IChzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneCcpIHtcbiAgICAgIGlmICh4ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4ICsgaV1beV0gIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gU3F1YXJlIGlzIG9jY3VwaWVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0QXhpcygpID09PSAneScpIHtcbiAgICAgIGlmICh5ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5ICsgaV0gIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gU3F1YXJlIGlzIG9jY3VwaWVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBzcXVhcmVzIGFyZSBvY2N1cGllZFxuICB9O1xuXG4gIGNvbnN0IHNxdWFyZUNvbnRhaW5zU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldICE9PSAneCcgJiYgYm9hcmRbeF1beV0gIT09IDA7XG4gIH07XG5cbiAgY29uc3Qgc3F1YXJlQXR0YWNrZWQgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSA9PT0gJ2hpdCc7XG4gIH07XG5cbiAgY29uc3QgbWlzc2VkQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4gYm9hcmRbeF1beV0gPT09ICd4JztcbiAgfTtcblxuICBjb25zdCBpc0VtcHR5RmllbGQgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSAhPT0gJ3gnICYmIGJvYXJkW3hdW3ldICE9PSAnaGl0JztcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSAxMCB8fCB5IDwgMCB8fCB5ID49IDEwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYXR0YWNrIG91dHNpZGUgb2YgMTB4MTAgYm9hcmQhJyk7XG5cbiAgICBpZiAoc3F1YXJlQXR0YWNrZWQoeCwgeSkpIHRocm93IG5ldyBFcnJvcignU3F1YXJlIGlzIGFscmVhZHkgYXR0YWNrZWQhJyk7XG5cbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IDApIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ3gnOyAvLyBNYXJrIGFzIG1pc3NlZCBhdHRhY2tcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQXNzdW1pbmcgYm9hcmRbeF1beV0gY29udGFpbnMgYSBzaGlwIElEIGZvciBhIGhpdFxuICAgIGNvbnN0IHNoaXBJRCA9IGJvYXJkW3hdW3ldO1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwQnlJRChzaGlwSUQpO1xuICAgIHNoaXAuaGl0KCk7XG4gICAgYm9hcmRbeF1beV0gPSAnaGl0JzsgLy8gTWFyayBhcyBhdHRhY2tlZFxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzQXJlU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IHtcbiAgICAgIDA6IFNoaXAoNSwgMCksXG4gICAgICAxOiBTaGlwKDQsIDEpLFxuICAgICAgMjogU2hpcCg0LCAyKSxcbiAgICAgIDM6IFNoaXAoMywgMyksXG4gICAgICA0OiBTaGlwKDIsIDQpLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzaGlwcykge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW2tleV07XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGlmIChyYW5kb21OdW0gPT0gMSkge1xuICAgICAgICBzaGlwLnJvdGF0ZVNoaXAoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGdlbmVyYXRlQ29tcHV0ZXJTaGlwcygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNba2V5XTtcbiAgICAgIGxldCByYW5kb21YLCByYW5kb21ZO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKFxuICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoc2hpcC5nZXRBeGlzKCkgPT09ICd4JyA/IDEwIC0gc2hpcC5nZXRMZW5ndGgoKSA6IDEwKSxcbiAgICAgICAgKTtcbiAgICAgICAgcmFuZG9tWSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIChzaGlwLmdldEF4aXMoKSA9PT0gJ3knID8gMTAgLSBzaGlwLmdldExlbmd0aCgpIDogMTApLFxuICAgICAgICApO1xuICAgICAgfSB3aGlsZSAoc3F1YXJlT2NjdXBpZWQoc2hpcCwgcmFuZG9tWCwgcmFuZG9tWSkpO1xuXG4gICAgICBwbGFjZVNoaXAoc2hpcCwgcmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBBcnJheSgxMClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpO1xuXG4gICAgc2hpcHMgPSB7fTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBpc09jY3VwaWVkLFxuICAgIGlzRW1wdHlGaWVsZCxcbiAgICBnZXRCb2FyZCxcbiAgICBnZXRTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzQXJlU3VuayxcbiAgICByZXNldEJvYXJkLFxuICAgIHNxdWFyZUF0dGFja2VkLFxuICAgIG1pc3NlZEF0dGFjayxcbiAgICBzaGlwUGxhY2VkLFxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyxcbiAgICBzcXVhcmVDb250YWluc1NoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGxldCBjb21wdXRlckhpdHMgPSBbXTtcblxuICBjb25zdCBhdHRhY2sgPSAoZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZiAoIWVuZW15Qm9hcmQuc3F1YXJlQXR0YWNrZWQoeCwgeSkpIHtcbiAgICAgIGNvbXB1dGVyQXR0YWNrKGdhbWVib2FyZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgbGV0IGludmFsaWRDb29yZGluYXRlID0gdHJ1ZTtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcblxuICAgIHdoaWxlIChpbnZhbGlkQ29vcmRpbmF0ZSkge1xuICAgICAgaWYgKGNvbXB1dGVySGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIFt4LCB5XSA9IGdldFJhbmRvbUFuZFJlbW92ZShjb21wdXRlckhpdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgeSA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5pc0VtcHR5RmllbGQoeCwgeSkpIHtcbiAgICAgICAgaW52YWxpZENvb3JkaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmdldEJvYXJkKClbeF1beV0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIGhpdFxuICAgICAgICAgIGNvbXB1dGVyQXR0YWNrKHBsYXllckJvYXJkKTsgLy8gUmVjdXJzaXZlbHkgYXR0YWNrIGFnYWluIGlmIGl0IHdhcyBhIGhpdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcHV0ZXJBdHRhY2socGxheWVyQm9hcmQsIHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZENvbXB1dGVyQXR0YWNrID0gKHBsYXllckJvYXJkLCB4LCB5KSA9PiB7XG4gICAgaWYgKGNvbXB1dGVySGl0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXB1dGVySGl0cyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5nZXRCb2FyZCgpW3hdW3ldID09PSAneCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9yaWdpbiA9IGZhbHNlO1xuICAgIGlmIChjb21wdXRlckhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb21wdXRlckhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgb3JpZ2luID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHggPiAwICYmIHggPD0gOSkge1xuICAgICAgY29tcHV0ZXJIaXRzLnB1c2goW3ggLSAxLCB5XSk7IC8vIHRvcFxuICAgIH1cbiAgICBpZiAoeCA+PSAwICYmIHggPCA5KSB7XG4gICAgICBjb21wdXRlckhpdHMucHVzaChbeCArIDEsIHldKTsgLy8gdG9wXG4gICAgfVxuICAgIGlmICh5ID4gMCAmJiB5IDw9IDkpIHtcbiAgICAgIGNvbXB1dGVySGl0cy5wdXNoKFt4LCB5IC0gMV0pOyAvLyB0b3BcbiAgICB9XG4gICAgaWYgKHkgPj0gMCAmJiB5IDwgOSkge1xuICAgICAgY29tcHV0ZXJIaXRzLnB1c2goW3gsIHkgKyAxXSk7IC8vIHRvcFxuICAgIH1cblxuICAgIGlmIChjb21wdXRlckhpdHMubGVuZ3RoID4gMSAmJiAhb3JpZ2luKSB7XG4gICAgICBpZiAoeCA9PT0gY29tcHV0ZXJIaXRzWzBdWzBdKSB7XG4gICAgICAgIGNvbXB1dGVySGl0cyA9IFtcbiAgICAgICAgICAuLi5jb21wdXRlckhpdHMuc2xpY2UoMCwgMSksXG4gICAgICAgICAgLi4uY29tcHV0ZXJIaXRzLnNsaWNlKDEpLmZpbHRlcigoc3ViQXJyKSA9PiBzdWJBcnJbMF0gPT09IHgpLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIGlmICh5ID09PSBjb21wdXRlckhpdHNbMF1bMV0pIHtcbiAgICAgICAgY29tcHV0ZXJIaXRzID0gW1xuICAgICAgICAgIC4uLmNvbXB1dGVySGl0cy5zbGljZSgwLCAxKSxcbiAgICAgICAgICAuLi5jb21wdXRlckhpdHMuc2xpY2UoMSkuZmlsdGVyKChzdWJBcnIpID0+IHN1YkFyclsxXSA9PT0geSksXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21BbmRSZW1vdmUoYXJyYXkpIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnJheS5sZW5ndGggLSAxKSkgKyAxO1xuICAgIGNvbnN0IHJhbmRvbUVsZW1lbnQgPSBhcnJheVtyYW5kb21JbmRleF07XG4gICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICByZXR1cm4gcmFuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrLFxuICAgIGNvbXB1dGVyQXR0YWNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIGlkKSA9PiB7XG4gIGlmIChsZW5ndGggPiA1IHx8IGxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGg6IExlbmd0aCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNS4nKTtcbiAgfVxuXG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBzdW5rOiBmYWxzZSxcbiAgICBheGlzOiAneScsXG4gICAgaWQ6IGlkICsgMSxcbiAgICBzdGFydFNxdWFyZTogMFxuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHNoaXAubGVuZ3RoO1xuXG4gIGNvbnN0IGdldEF4aXMgPSAoKSA9PiBzaGlwLmF4aXM7XG5cbiAgY29uc3QgZ2V0SUQgPSAoKSA9PiBzaGlwLmlkO1xuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBzaGlwLmhpdHM7XG5cbiAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoc2hpcC5heGlzID09PSAneCcpIHtcbiAgICAgIHNoaXAuYXhpcyA9ICd5JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC5heGlzID0gJ3gnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgc2hpcC5oaXRzKys7XG4gICAgaWYgKHNoaXAuaGl0cyA9PT0gc2hpcC5sZW5ndGgpIHNoaXAuc3VuayA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwLnN1bms7XG4gIH07XG5cbiAgY29uc3Qgc2V0U3RhcnRTcXVhcmUgPSAoc3RhcnRTcXVhcmUpID0+IHtcbiAgICBzaGlwLnN0YXJ0U3F1YXJlID0gc3RhcnRTcXVhcmU7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RhcnRTcXVhcmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXAuc3RhcnRTcXVhcmU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TGVuZ3RoLCBnZXRBeGlzLCBnZXRJRCwgZ2V0SGl0cywgaGl0LCBpc1N1bmssIHJvdGF0ZVNoaXAsIHNldFN0YXJ0U3F1YXJlLCBnZXRTdGFydFNxdWFyZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IFBsYWNlU2hpcHMgZnJvbSAnLi9wbGFjZVNoaXBzJztcbmltcG9ydCBHYW1lIGZyb20gJy4uL2NvZGUvZ2FtZSc7XG5pbXBvcnQgd2lubmVyTW9kYWwgZnJvbSAnLi93aW5uZXJNb2RhbCc7XG5cbmNvbnN0IENvbWJhdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldFBsYXllckdyaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFBsYWNlU2hpcHMuZ2V0Q2xvbmVkR3JpZCgpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDb21iYXRDb250ZW50ID0gKCkgPT4ge1xuICAgIGhlbHBlci5yZXN0b3JlUGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudC5hcHBlbmQobG9hZEJhdHRsZUNhcmQoKSk7XG4gICAgR2FtZS5pbml0Q29tcHV0ZXJCb2FyZCgpO1xuXG4gICAgY29uc3QgY29tcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyU3F1YXJlcyA9IGNvbXBHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuICAgIGNvbXB1dGVyU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQtc3F1YXJlJykgJiZcbiAgICAgICAgICAhc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnYXR0YWNrZWQtc3F1YXJlJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXR0YWNrU3F1YXJlKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWUuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2lubmVyTW9kYWwubG9hZFdpbm5lck1vZGFsKCkpO1xuICAgICAgICAgIHdpbm5lck1vZGFsLmluaXRUeXBpbmdFZmZlY3RXaW5uZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZEJhdHRsZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmF0dGxlU2VjdGlvbiA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7XG4gICAgICBjbGFzc05hbWU6ICdiYXR0bGUtY2FyZCcsXG4gICAgfSk7XG5cbiAgICBiYXR0bGVTZWN0aW9uLmFwcGVuZChsb2FkUGxheWVyU2lkZSgpLCBsb2FkQ29tcHV0ZXJTaWRlKCkpO1xuXG4gICAgcmV0dXJuIGJhdHRsZVNlY3Rpb247XG4gIH07XG5cbiAgY29uc3QgbG9hZFBsYXllclNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyU2lkZSA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7IGNsYXNzTmFtZTogJ3BsYXllci1zaWRlJyB9KTtcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdwbGF5ZXItaGVhZGVyJyxcbiAgICAgIHRleHRDb250ZW50OiAnRlJJRU5ETFkgV0FURVJTJyxcbiAgICB9KTtcbiAgICBwbGF5ZXJTaWRlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaWRlJyk7XG5cbiAgICBwbGF5ZXJTaWRlLmFwcGVuZChwbGF5ZXJIZWFkZXIsIGdldFBsYXllckdyaWQoKSk7XG4gICAgcmV0dXJuIHBsYXllclNpZGU7XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbXB1dGVyU2lkZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wdXRlclNpZGUgPSBoZWxwZXIuY3JlYXRlKCdzZWN0aW9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnY29tcHV0ZXItc2lkZScsXG4gICAgfSk7XG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdjb21wdXRlci1oZWFkZXInLFxuICAgICAgdGV4dENvbnRlbnQ6ICdFTkVNWSBXQVRFUlMnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGhlbHBlci5sb2FkR3JpZFNxdWFyZSgpO1xuICAgIGNvbXB1dGVyR3JpZC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItZ3JpZCcpO1xuICAgIGNvbXB1dGVyR3JpZC5sYXN0Q2hpbGQuaWQgPSAnY29tcHV0ZXItZ3JpZCc7XG4gICAgY29tcHV0ZXJTaWRlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNpZGUnKTtcblxuICAgIGNvbXB1dGVyU2lkZS5hcHBlbmQoY29tcHV0ZXJIZWFkZXIsIGNvbXB1dGVyR3JpZCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZXJTaWRlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NxdWFyZSA9IChzcXVhcmUpID0+IHtcbiAgICBsZXQgeEF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDApLCAxMCk7XG4gICAgbGV0IHlBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgxKSwgMTApO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lLmdldENvbXB1dGVyQm9hcmQoKTtcblxuICAgIC8vIFBsYXkgdGhlIHR1cm4gYmVmb3JlIGNoZWNraW5nIHRoZSByZXN1bHRzXG4gICAgR2FtZS5wbGF5VHVybih4QXhpcywgeUF4aXMpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbiAgICAvLyBOb3cgY2hlY2sgaWYgdGhlIGF0dGFjayB3YXMgYSBoaXQgb3IgbWlzc1xuICAgIGlmIChjb21wdXRlckJvYXJkLnNxdWFyZUF0dGFja2VkKHhBeGlzLCB5QXhpcykpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZC1zcXVhcmUnKTtcbiAgICAgIGRpc3BsYXlTdW5rZW5FbmVteVNoaXBzKGNvbXB1dGVyQm9hcmQpO1xuICAgIH1cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2soeEF4aXMsIHlBeGlzKSkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1zcXVhcmUnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29tcHV0ZXJBdHRhY2soKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Q29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGdldFBsYXllckdyaWQoKTtcbiAgICBjb25zdCBwbGF5ZXJTcXVhcmVzID0gcGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWUuZ2V0UGxheWVyQm9hcmQoKTtcblxuICAgIHBsYXllclNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBsZXQgeEF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDApLCAxMCk7XG4gICAgICBsZXQgeUF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDEpLCAxMCk7XG5cbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5zcXVhcmVBdHRhY2tlZCh4QXhpcywgeUF4aXMpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZC1zcXVhcmUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2soeEF4aXMsIHlBeGlzKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXNxdWFyZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlTdW5rZW5FbmVteVNoaXBzID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBsZXQgZW5lbXlTaGlwcyA9IGVuZW15Qm9hcmQuZ2V0U2hpcHMoKTtcbiAgICBPYmplY3QudmFsdWVzKGVuZW15U2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGxldCBzdGFydFNxdWFyZSA9IHNoaXAuZ2V0U3RhcnRTcXVhcmUoKTtcbiAgICAgICAgbGV0IHNoaXBOYW1lID0gaGVscGVyLnNoaXBzW3NoaXAuZ2V0SUQoKSAtIDFdLm5hbWU7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gaGVscGVyLnNoaXBzW3NoaXAuZ2V0SUQoKSAtIDFdLmxlbmd0aDtcbiAgICAgICAgbGV0IHNoaXBBeGlzID0gc2hpcC5nZXRBeGlzKCk7XG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgc2hpcEF4aXMgPSAneSc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgIHNoaXBBeGlzID0gJ3gnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuXG4gICAgICAgIGhlbHBlci5wbGFjZVNoaXBJY29uKFxuICAgICAgICAgIGNvbXB1dGVyR3JpZCxcbiAgICAgICAgICBzdGFydFNxdWFyZSxcbiAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICBzaGlwQXhpcyxcbiAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWRDb21iYXRDb250ZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21iYXQ7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBQbGFjZVNoaXBzIGZyb20gJy4vcGxhY2VTaGlwcyc7XG5pbXBvcnQgU2V0dXBNb2RhbCBmcm9tICcuL3NldHVwTW9kYWwnO1xuaW1wb3J0IENvbWJhdCBmcm9tICcuL2NvbWJhdCc7XG5cbmNvbnN0IENvbWJhdFNldHVwID0gKCgpID0+IHtcbiAgbGV0IGFjdGl2ZUF4aXMgPSAneCc7XG5cbiAgY29uc3QgZ2V0QWN0aXZlQXhpcyA9ICgpID0+IGFjdGl2ZUF4aXM7XG5cbiAgY29uc3QgbG9hZFNldHVwQ29udGVudCA9ICgpID0+IHtcbiAgICBoZWxwZXIucmVzdG9yZVBhZ2UoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZChTZXR1cE1vZGFsLmxvYWRTZXR1cE1vZGFsKCksIGxvYWRHYW1lYm9hcmQoKSk7XG4gICAgU2V0dXBNb2RhbC5pbml0VHlwaW5nRWZmZWN0U2V0dXAoKTtcblxuICAgIFBsYWNlU2hpcHMuc2hpcEJveFNlbGVjdG9yKCk7XG4gICAgUGxhY2VTaGlwcy5wbGFjZVNoaXAoKTtcbiAgfTtcblxuICBjb25zdCBsb2FkR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldHVwQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtY29udGFpbmVyJyxcbiAgICB9KTtcbiAgICBjb25zdCBzZXR1cEJvYXJkID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdzZXR1cC1ib2FyZCcgfSk7XG5cbiAgICBzZXR1cEJvYXJkLmFwcGVuZChcbiAgICAgIGxvYWRUb3BCdXR0b25zKCksXG4gICAgICBoZWxwZXIubG9hZEdyaWRTcXVhcmUoKSxcbiAgICAgIGxvYWRCb3R0b21CdXR0b25zKCksXG4gICAgKTtcbiAgICBzZXR1cENvbnRhaW5lci5hcHBlbmQoc2V0dXBCb2FyZCwgbG9hZEZsZWV0KCkpO1xuXG4gICAgcmV0dXJuIHNldHVwQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRUb3BCdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkJveCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnc2V0dXAtdG9wLWJ0bnMnIH0pO1xuXG4gICAgYnV0dG9uQm94LmFwcGVuZChidXR0b25zLnhBeGlzQnRuLCBidXR0b25zLnlBeGlzQnRuKTtcblxuICAgIGJ1dHRvbnMueEF4aXNCdG4uY2xhc3NMaXN0LmFkZCgnYXhpcy1oaWdobGlnaHQnKTtcblxuICAgIGNvbnN0IHJlbW92ZUhpZ2hsaWdodEZyb21BbGxCdXR0b25zID0gKCkgPT4ge1xuICAgICAgYnV0dG9ucy54QXhpc0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdheGlzLWhpZ2hsaWdodCcpO1xuICAgICAgYnV0dG9ucy55QXhpc0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdheGlzLWhpZ2hsaWdodCcpO1xuICAgIH07XG5cbiAgICBidXR0b25zLnhBeGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0RnJvbUFsbEJ1dHRvbnMoKTtcbiAgICAgIGJ1dHRvbnMueEF4aXNCdG4uY2xhc3NMaXN0LmFkZCgnYXhpcy1oaWdobGlnaHQnKTtcbiAgICAgIGFjdGl2ZUF4aXMgPSAneCc7XG4gICAgICBQbGFjZVNoaXBzLnVwZGF0ZUdyaWRIaWdobGlnaHRzKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25zLnlBeGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0RnJvbUFsbEJ1dHRvbnMoKTtcbiAgICAgIGJ1dHRvbnMueUF4aXNCdG4uY2xhc3NMaXN0LmFkZCgnYXhpcy1oaWdobGlnaHQnKTtcbiAgICAgIGFjdGl2ZUF4aXMgPSAneSc7XG4gICAgICBQbGFjZVNoaXBzLnVwZGF0ZUdyaWRIaWdobGlnaHRzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0dG9uQm94O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBmbGVldENvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2ZsZWV0LWNvbnRhaW5lcicsXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgbGV0IHNoaXBCb3ggPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NoaXAtYm94JyxcbiAgICAgICAgaWQ6IGksXG4gICAgICB9KTtcbiAgICAgIGxldCBzaGlwVGV4dCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IGhlbHBlci5zaGlwTmFtZXNbaV0sXG4gICAgICAgIGNsYXNzTmFtZTogJ3NoaXAtdGV4dCcsXG4gICAgICB9KTtcbiAgICAgIGxldCBzaGlwSWNvbiA9IGhlbHBlci5jcmVhdGUoJ2ltZycsIHtcbiAgICAgICAgc3JjOiBoZWxwZXIuc2hpcEljb25zW2ldLFxuICAgICAgICBjbGFzc05hbWU6ICdzaGlwLWljb24nLFxuICAgICAgfSk7XG4gICAgICBzaGlwQm94LmFwcGVuZChzaGlwSWNvbiwgc2hpcFRleHQpO1xuICAgICAgZmxlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEJveCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZsZWV0Q29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRCb3R0b21CdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkJveCA9IGhlbHBlci5jcmVhdGUoJ2RpYycsIHsgY2xhc3NOYW1lOiAnc2V0dXAtYm90dG9tLWJ0bnMnIH0pO1xuXG4gICAgYnV0dG9uQm94LmFwcGVuZChidXR0b25zLnJlc2V0QnRuLCBidXR0b25zLmNvbmZpcm1CdG4pO1xuXG4gICAgYnV0dG9ucy5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc2V0UGFnZSgpO1xuICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBQbGFjZVNoaXBzLmdldFBsYXllckJvYXJkKCk7XG4gICAgICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICBsb2FkRmxlZXQoKTtcbiAgICAgIFBsYWNlU2hpcHMucmVzZXRTaGlwc1BsYWNlZCgpO1xuICAgICAgaGVscGVyLnJlc2V0Q29uZmlybUJ0bigpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9ucy5jb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKFBsYWNlU2hpcHMuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICBDb21iYXQubG9hZENvbWJhdENvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBidXR0b25Cb3g7XG4gIH07XG5cbiAgY29uc3QgYnV0dG9ucyA9IHtcbiAgICB4QXhpc0J0bjogaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtYnRuJyxcbiAgICAgIGlkOiAneEF4aXMtYnRuJyxcbiAgICAgIHRleHRDb250ZW50OiAnWCBheGlzJyxcbiAgICB9KSxcbiAgICB5QXhpc0J0bjogaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtYnRuJyxcbiAgICAgIGlkOiAneUF4aXMtYnRuJyxcbiAgICAgIHRleHRDb250ZW50OiAnWSBheGlzJyxcbiAgICB9KSxcbiAgICByZXNldEJ0bjogaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtYnRuJyxcbiAgICAgIGlkOiAncmVzZXQtYnRuJyxcbiAgICAgIHRleHRDb250ZW50OiAnUmVzZXQnLFxuICAgIH0pLFxuICAgIGNvbmZpcm1CdG46IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NvbmZpcm0tYnRuJyxcbiAgICAgIHRleHRDb250ZW50OiAnQ29uZmlybScsXG4gICAgfSksXG4gIH07XG5cbiAgY29uc3QgcmVzZXRQYWdlID0gKCkgPT4ge1xuICAgIGhlbHBlci5yZXNldEdhbWVib2FyZEdyaWQoKTtcbiAgICBhY3RpdmVBeGlzID0gJ3gnO1xuICAgIGNvbnN0IHlBeGlzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lBeGlzLWJ0bicpO1xuICAgIGNvbnN0IHhBeGlzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3hBeGlzLWJ0bicpO1xuICAgIHlBeGlzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2F4aXMtaGlnaGxpZ2h0Jyk7XG4gICAgeEF4aXNCdG4uY2xhc3NMaXN0LmFkZCgnYXhpcy1oaWdobGlnaHQnKTtcblxuICAgIGNvbnN0IHNoaXBCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWJveCcpO1xuICAgIHNoaXBCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtaWNvbi1wbGFjZWQnKTtcbiAgICAgIGJveC5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC10ZXh0LXBsYWNlZCcpO1xuICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtYm94LXBsYWNlZCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZFNldHVwQ29udGVudCxcbiAgICBnZXRBY3RpdmVBeGlzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tYmF0U2V0dXA7XG4iLCJpbXBvcnQgY29tbWFuZGVySWNvblBhdGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NvbW1hbmRlci5wbmcnO1xuaW1wb3J0IGNhcnJpZXJJY29uUGF0aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2Fycmllci5zdmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJY29uUGF0aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvYmF0dGxlc2hpcC5zdmcnO1xuaW1wb3J0IGNydWlzZXJJY29uUGF0aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY3J1aXNlci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUljb25QYXRoIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9zdWJtYXJpbmUuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJJY29uUGF0aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGVzdHJveWVyLnN2Zyc7XG5cbmNvbnN0IGhlbHBlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc3RvcmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlID0gKHR5cGUsIGRhdGEpID0+IHtcbiAgICBpZiAoIXR5cGUpIGNvbnNvbGUubG9nKCdtaXNzaW5nIHR5cGUnKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBBcnJheSgxMClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoKSk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCBsb2FkR3JpZFNxdWFyZSA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtZ3JpZC1jb250YWluZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSk7XG4gICAgY29uc3QgZ3JpZFNxdWFyZSA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3NldHVwLWdyaWQnLFxuICAgICAgaWQ6ICdzZXR1cC1ncmlkJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIH0pO1xuICAgIGdyaWRTcXVhcmUuc3R5bGUuekluZGV4ID0gJzEnO1xuXG4gICAgbG9hZEdyaWQoKS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdncmlkLXNxdWFyZScsXG4gICAgICAgICAgaWQ6IGAke3Jvd0luZGV4fSR7Y29sdW1uSW5kZXh9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmQobG9hZExldHRlclNlY3Rpb24oKSwgbG9hZE51bWJlclNlY3Rpb24oKSwgZ3JpZFNxdWFyZSk7XG5cbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBsb2FkTnVtYmVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBjb25zdCBudW1iZXJzQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ251bWJlcnMtY29udGFpbmVyJyB9KTtcblxuICAgIG51bWJlcnMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBjcmVhdGUoJ2RpdicsIHsgY2xhc3NMaXN0OiAnbnVtYmVyJywgdGV4dENvbnRlbnQ6IG51bSB9KTtcbiAgICAgIG51bWJlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBudW1iZXJzQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRMZXR0ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBsZXR0ZXJzQ29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCB7IGNsYXNzTGlzdDogJ2xldHRlcnMtY29udGFpbmVyJyB9KTtcblxuICAgIGxldHRlcnMuZm9yRWFjaCgobHRyKSA9PiB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSBjcmVhdGUoJ2RpdicsIHsgY2xhc3NMaXN0OiAnbGV0dGVyJywgdGV4dENvbnRlbnQ6IGx0ciB9KTtcbiAgICAgIGxldHRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobGV0dGVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZXR0ZXJzQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDb21tYW5kZXJJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdjb21tYW5kZXItaWNvbi1ib3gnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbW1hbmRlckljb24gPSBoZWxwZXIuY3JlYXRlKCdpbWcnLCB7XG4gICAgICBzcmM6IGNvbW1hbmRlckljb25QYXRoLFxuICAgICAgY2xhc3NOYW1lOiAnY29tbWFuZGVyLWljb24nLFxuICAgIH0pO1xuXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tYW5kZXJJY29uKTtcblxuICAgIHJldHVybiBpY29uQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBJY29ucyA9IFtcbiAgICBjYXJyaWVySWNvblBhdGgsXG4gICAgYmF0dGxlc2hpcEljb25QYXRoLFxuICAgIGNydWlzZXJJY29uUGF0aCxcbiAgICBzdWJtYXJpbmVJY29uUGF0aCxcbiAgICBkZXN0cm95ZXJJY29uUGF0aCxcbiAgXTtcblxuICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgJ0NhcnJpZXIgKDVmKScsXG4gICAgJ0JhdHRsZXNoaXAgKDRmKScsXG4gICAgJ0NydWlzZXIgKDRmKScsXG4gICAgJ1N1Ym1hcmluZSAoM2YpJyxcbiAgICAnRGVzdHJveWVyICgyZiknLFxuICBdO1xuXG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIDA6IHsgbGVuZ3RoOiA1LCBuYW1lOiAnQ2FycmllcicgfSxcbiAgICAxOiB7IGxlbmd0aDogNCwgbmFtZTogJ0JhdHRsZXNoaXAnIH0sXG4gICAgMjogeyBsZW5ndGg6IDQsIG5hbWU6ICdDcnVpc2VyJyB9LFxuICAgIDM6IHsgbGVuZ3RoOiAzLCBuYW1lOiAnU3VibWFyaW5lJyB9LFxuICAgIDQ6IHsgbGVuZ3RoOiAyLCBuYW1lOiAnRGVzdHJveWVyJyB9LFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0R3JpZFNxdWFyZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcblxuICAgIGdyaWRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtaGlnaGxpZ2h0Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwSWNvbiA9IChcbiAgICBwYXJlbnRDb250YWluZXIsXG4gICAgc3RhcnRTcXVhcmUsXG4gICAgc2hpcFR5cGUsXG4gICAgYXhpcyxcbiAgICBzaGlwTGVuZ3RoLFxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGFydFNxdWFyZSk7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGNyZWF0ZSgnZGl2JywgeyBpZDogJ3NoaXAtY29udGFpbmVyJyB9KTtcbiAgICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7c2hpcFR5cGV9LSR7YXhpc31gKTtcblxuICAgIGlmIChheGlzID09PSAneScpIHtcbiAgICAgIHNoaXBDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7c2hpcExlbmd0aCAqIDN9cmVtYDtcbiAgICAgIHNoaXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnM3JlbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBDb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtzaGlwTGVuZ3RoICogM31yZW1gO1xuICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnM3JlbSc7XG4gICAgfVxuXG4gICAgbGV0IGljb25VUkwgPSBgLi4vYXNzZXRzL2ljb25zLyR7c2hpcFR5cGV9LSR7YXhpc30uc3ZnYDtcbiAgICBsZXQgaWNvbiA9IGNyZWF0ZSgnaW1nJywgeyBzcmM6IGljb25VUkwsIGNsYXNzTmFtZTogJ3NoaXAnIH0pO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICctMSc7XG5cbiAgICBsZXQgc3F1YXJlU2VsZWN0b3IgPSBgIyR7Q1NTLmVzY2FwZShzdGFydFNxdWFyZS5pZCl9YDtcbiAgICBsZXQgc3F1YXJlID0gcGFyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc3F1YXJlU2VsZWN0b3IpO1xuICAgIGlmIChzcXVhcmUpIHtcbiAgICAgIHNxdWFyZS5wcmVwZW5kKHNoaXBDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBTcXVhcmUgd2l0aCBzZWxlY3RvciAke3NxdWFyZVNlbGVjdG9yfSBub3QgZm91bmQuYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZWJvYXJkR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXNxdWFyZScpO1xuXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICB3aGlsZSAoc3F1YXJlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUNoaWxkKHNxdWFyZS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWJ0bicpO1xuXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLWJ0bi1hY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCByZXNldENvbmZpcm1CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWJ0bicpO1xuXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjb25maXJtLWJ0bi1hY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0eXBlV3JpdGVyID0gKHRleHQsIGVsZW1lbnRJZCwgdHlwaW5nU3BlZWQsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHlwaW5nLWN1cnNvcicpO1xuXG4gICAgY29uc3QgdHlwaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgICAgICBzZXRUaW1lb3V0KHR5cGluZywgdHlwaW5nU3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0eXBpbmctY3Vyc29yJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHR5cGluZygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIHJlc3RvcmVQYWdlLFxuICAgIGxvYWRHcmlkU3F1YXJlLFxuICAgIGxvYWRMZXR0ZXJTZWN0aW9uLFxuICAgIGxvYWROdW1iZXJTZWN0aW9uLFxuICAgIGxvYWRDb21tYW5kZXJJY29uLFxuICAgIHBsYWNlU2hpcEljb24sXG4gICAgcmVzZXRHcmlkU3F1YXJlcyxcbiAgICByZXNldEdhbWVib2FyZEdyaWQsXG4gICAgYWN0aXZhdGVDb25maXJtQnRuLFxuICAgIHJlc2V0Q29uZmlybUJ0bixcbiAgICB0eXBlV3JpdGVyLFxuICAgIHNoaXBJY29ucyxcbiAgICBzaGlwTmFtZXMsXG4gICAgc2hpcHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXI7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vY29kZS9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vY29kZS9zaGlwJztcbmltcG9ydCBDb21iYXRTZXR1cCBmcm9tICcuL2NvbWJhdFNldHVwJztcblxuY29uc3QgUGxhY2VTaGlwcyA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50TW91c2VPdmVySGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIGxldCBjdXJyZW50TW91c2VPdXRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgbGV0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBzaGlwc1BsYWNlZCA9IDA7XG4gIHZhciBjbG9uZWRHcmlkO1xuXG4gIGNvbnN0IGdldFBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgfTtcblxuICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKCgpID0+IHtcbiAgICBsZXQgcGxhY2VtZW50SXNWYWxpZCA9IHRydWU7IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UGxhY2VtZW50VmFsaWQ6IChpc1ZhbGlkKSA9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnRJc1ZhbGlkID0gaXNWYWxpZDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNQbGFjZW1lbnRWYWxpZDogKCkgPT4gcGxhY2VtZW50SXNWYWxpZCxcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNlbGVjdGVkU2hpcCA9IHtcbiAgICAwOiBmYWxzZSxcbiAgICAxOiBmYWxzZSxcbiAgICAyOiBmYWxzZSxcbiAgICAzOiBmYWxzZSxcbiAgICA0OiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHNQbGFjZWQgPT09IDU7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICBzaGlwc1BsYWNlZCA9IDA7IFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2VsZWN0ZWRTaGlwID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdGVkU2hpcCkge1xuICAgICAgc2VsZWN0ZWRTaGlwW2tleV0gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRTaGlwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIFJldHVybiBpbW1lZGlhdGVseSB3aGVuIGEgc2VsZWN0ZWQgc2hpcCBpcyBmb3VuZFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7IC8vIFJldHVybiBmYWxzZSBpZiBubyBzZWxlY3RlZCBzaGlwIGlzIGZvdW5kXG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWRTaGlwSUQgPSAoKSA9PiB7XG4gICAgbGV0IGlkID0gJzAnOyBcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxlY3RlZFNoaXApIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZCA9IGtleTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmV0dXJuIGlkLnRvU3RyaW5nKCk7IFxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNoaXAgPSAoc2hpcElkKSA9PiB7XG4gICAgcmVzZXRTaGlwQm94ZXMoKTtcbiAgICByZXNldFNlbGVjdGVkU2hpcCgpO1xuICAgIGlmIChwbGF5ZXJCb2FyZC5zaGlwUGxhY2VkKHBhcnNlSW50KHNoaXBJZCkgKyAxKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGVjdGVkU2hpcFtzaGlwSWRdID0gdHJ1ZTsgLy8gQXNzdW1pbmcgc2VsZWN0ZWRTaGlwIGlzIGFjY2Vzc2libGUgYXQgdGhpcyBzY29wZVxuICBcbiAgICAvLyBVcGRhdGUgVUkgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgc2hpcFxuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICAgIHNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gtaGlnaGxpZ2h0Jyk7XG4gICAgc2hpcEJveC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnc2hpcC10ZXh0LWhpZ2hsaWdodCcpO1xuICBcbiAgICAvLyBVcGRhdGUgZ3JpZCBoaWdobGlnaHRzIGJhc2VkIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBzaGlwXG4gICAgdXBkYXRlR3JpZEhpZ2hsaWdodHMoKTtcbiAgfTtcbiAgXG4gIGNvbnN0IHVwZGF0ZUdyaWRIaWdobGlnaHRzID0gKCkgPT4ge1xuICAgIGlmICghaXNTaGlwU2VsZWN0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzaGlwSWQgPSBnZXRTZWxlY3RlZFNoaXBJRCgpOyAvLyBFbnN1cmUgdGhpcyByZXR1cm5zIHRoZSBJRCBhcyBhIHN0cmluZywgd2hpY2ggaXMga2V5IGluIGhlbHBlci5zaGlwc1xuICAgIGxldCBzaGlwTGVuZ3RoID0gaGVscGVyLnNoaXBzW3NoaXBJZF0ubGVuZ3RoO1xuICAgIGxpZ2h0R3JpZFNxdWFyZXMoc2hpcExlbmd0aCwgQ29tYmF0U2V0dXAuZ2V0QWN0aXZlQXhpcygpKTtcbiAgfTtcblxuICBjb25zdCBzaGlwQm94U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94Jyk7XG4gICAgc2hpcEJveGVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgZXZlbnQgYnViYmxpbmdcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5pZCk7XG4gICAgICAgIHNlbGVjdFNoaXAoc2hpcC5pZCk7IC8vIFBhc3MgdGhlIElEIG9mIHRoZSBjbGlja2VkIHNoaXAgdG8gc2VsZWN0U2hpcFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL3NldCBwbGFjZW1lbnRWYWxpZCB0byB0cnVlIGV2ZXJ5dGltZSBtb3VzZSBpcyBub3Qgb3ZlciBncmlkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpc2dyaWRDbGlja2VkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZXR1cC1ncmlkJyk7XG4gICAgICAgIGlmICghaXNncmlkQ2xpY2tlZCkge1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IG9yIGFueSBvZiBpdHMgcGFyZW50cyBtYXRjaCB0aGUgJy5zaGlwLWJveCcgc2VsZWN0b3JcbiAgICAgICAgY29uc3QgaXNTaGlwQm94Q2xpY2sgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNoaXAtYm94Jyk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQncyBJRCBpcyAneEF4aXNCdG4nIG9yICd5QXhpc0J0bidcbiAgICAgICAgY29uc3QgaXNBeGlzQnV0dG9uQ2xpY2sgPSBldmVudC50YXJnZXQuaWQgPT09ICd4QXhpcy1idG4nIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gJ3lBeGlzLWJ0bic7XG5cbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIGlzIG5vdCBvbiBhIHNoaXAgYm94IGFuZCBub3Qgb24gdGhlIGF4aXMgYnV0dG9ucywgYW5kIHRoZSBwbGFjZW1lbnQgaXMgdmFsaWRcbiAgICAgICAgaWYgKCFpc1NoaXBCb3hDbGljayAmJiAhaXNBeGlzQnV0dG9uQ2xpY2sgJiYgc2hpcFBsYWNlbWVudC5pc1BsYWNlbWVudFZhbGlkKCkpIHtcbiAgICAgICAgICByZXNldFNlbGVjdGVkU2hpcCgpO1xuICAgICAgICAgIHJlc2V0U2hpcEJveGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2hpcEJveGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1ib3gnKTtcblxuICAgIHNoaXBCb3guZm9yRWFjaCgob3RoZXJTaGlwKSA9PiB7XG4gICAgICBvdGhlclNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1ib3gtaGlnaGxpZ2h0Jyk7XG4gICAgICBvdGhlclNoaXAubGFzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtdGV4dC1oaWdobGlnaHQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAnbW91c2VvdmVyJyxcbiAgICAgICAgY3VycmVudE1vdXNlT3ZlckhhbmRsZXJzLmdldChlbGVtZW50KSxcbiAgICAgICk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdtb3VzZW91dCcsXG4gICAgICAgIGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzLmdldChlbGVtZW50KSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcEJveENvbnRlbnQgPSAoc2hpcElkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2hpcElkfWApO1xuICAgIHNlbGVjdGVkU2hpcEJveC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaWNvbi1wbGFjZWQnKTtcbiAgICBzZWxlY3RlZFNoaXBCb3gubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtdGV4dC1wbGFjZWQnKTtcbiAgICBzZWxlY3RlZFNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gtcGxhY2VkJyk7XG4gIH07XG5cbiAgY29uc3QgbGlnaHRHcmlkU3F1YXJlcyA9IChzaGlwTGVuZ3RoLCBheGlzKSA9PiB7XG4gICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1zcXVhcmUnKTtcbiAgICBjb25zdCBncmlkV2lkdGggPSAxMDsgLy8gQXNzdW1pbmcgYSBncmlkIHdpZHRoIG9mIDEwIGZvciB0aGlzIGV4YW1wbGVcbiAgXG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMgaWYgdGhleSBleGlzdFxuICAgICAgaWYgKGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBjdXJyZW50TW91c2VPdmVySGFuZGxlcnMuZ2V0KGVsZW1lbnQpKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGN1cnJlbnRNb3VzZU91dEhhbmRsZXJzLmdldChlbGVtZW50KSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gRGVmaW5lIG5ldyBoYW5kbGVyc1xuICAgICAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gaW5kZXggKyAoYXhpcyA9PT0gJ3gnID8gc2hpcExlbmd0aCAtIDEgOiAoc2hpcExlbmd0aCAtIDEpICogZ3JpZFdpZHRoKTtcbiAgICAgICAgbGV0IHBsYWNlbWVudElzVmFsaWQgPSB0cnVlOyBcbiAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZChwbGFjZW1lbnRJc1ZhbGlkKTsgLy8gQXNzdW1lIHZhbGlkIHVudGlsIHByb3ZlbiBvdGhlcndpc2VcbiAgXG4gICAgICAgIC8vIEZpcnN0IHBhc3M6IENoZWNrIGlmIGFueSBwYXJ0IG9mIHRoZSBwbGFjZW1lbnQgaXMgaW52YWxpZFxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPD0gZW5kSW5kZXggJiYgcGxhY2VtZW50SXNWYWxpZDsgaSArPSAoYXhpcyA9PT0gJ3gnID8gMSA6IGdyaWRXaWR0aCkpIHtcbiAgICAgICAgICBpZiAoaSA+PSBncmlkU3F1YXJlcy5sZW5ndGggfHwgKGF4aXMgPT09ICd4JyAmJiBNYXRoLmZsb29yKGkgLyBncmlkV2lkdGgpICE9PSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHBsYWNlbWVudElzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQuc2V0UGxhY2VtZW50VmFsaWQocGxhY2VtZW50SXNWYWxpZCk7XG4gICAgICAgICAgICBicmVhazsgLy8gU3RvcCBjaGVja2luZyBpZiB3ZSBhbHJlYWR5IGtub3cgdGhlIHBsYWNlbWVudCBpcyBpbnZhbGlkXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBsZXQgW3gsIHldID0gZ3JpZFNxdWFyZXNbaV0uaWQuc3BsaXQoJycpLm1hcChOdW1iZXIpOyAvLyBVc2luZyBOdW1iZXIgYXMgYSBzaG9ydGhhbmRcbiAgICAgICAgICBpZiAocGxheWVyQm9hcmQuaXNPY2N1cGllZCh4LCB5KSkge1xuICAgICAgICAgICAgcGxhY2VtZW50SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zZXRQbGFjZW1lbnRWYWxpZChwbGFjZW1lbnRJc1ZhbGlkKTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBTdG9wIGNoZWNraW5nIGlmIHdlIGZpbmQgYW55IHNxdWFyZSBpcyBvY2N1cGllZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gU2Vjb25kIHBhc3M6IEFwcGx5IGNsYXNzZXMgYmFzZWQgb24gcGxhY2VtZW50IHZhbGlkaXR5XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8PSBlbmRJbmRleCAmJiBpIDwgZ3JpZFNxdWFyZXMubGVuZ3RoOyBpICs9IChheGlzID09PSAneCcgPyAxIDogZ3JpZFdpZHRoKSkge1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcgJiYgTWF0aC5mbG9vcihpIC8gZ3JpZFdpZHRoKSAhPT0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRXaWR0aCkpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBBZGRpdGlvbmFsIHNhZmVndWFyZCBmb3IgaG9yaXpvbnRhbCBheGlzXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBjb25zdCBzcXVhcmUgPSBncmlkU3F1YXJlc1tpXTtcbiAgICAgICAgICBpZiAocGxhY2VtZW50SXNWYWxpZCkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkLXNxdWFyZS1pbnZhbGlkJywgJ2dyaWQtaGlnaGxpZ2h0LWludmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgY29uc3QgbW91c2VPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBncmlkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtaGlnaGxpZ2h0JywgJ2dyaWQtaGlnaGxpZ2h0LWludmFsaWQnLCAnZ3JpZC1zcXVhcmUtaW52YWxpZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gIFxuICAgICAgLy8gVXBkYXRlIHRoZSBtYXAgd2l0aCBuZXcgaGFuZGxlcnNcbiAgICAgIGN1cnJlbnRNb3VzZU92ZXJIYW5kbGVycy5zZXQoZWxlbWVudCwgbW91c2VPdmVySGFuZGxlcik7XG4gICAgICBjdXJyZW50TW91c2VPdXRIYW5kbGVycy5zZXQoZWxlbWVudCwgbW91c2VPdXRIYW5kbGVyKTtcbiAgXG4gICAgICAvLyBBdHRhY2ggdGhlIG5ldyBldmVudCBsaXN0ZW5lcnNcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlcik7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VPdXRIYW5kbGVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dXAtZ3JpZCcpO1xuICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtc3F1YXJlJyk7XG4gICAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaXNTaGlwU2VsZWN0ZWQoKSB8fCAhc2hpcFBsYWNlbWVudC5pc1BsYWNlbWVudFZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBoaWdobGlnaHQgb24gZ3JpZHNxdWFyZXNcbiAgICAgICAgaGVscGVyLnJlc2V0R3JpZFNxdWFyZXMoKTtcbiAgICAgICAgLy9maW5kIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgbGV0IHNlbGVjdGVkU2hpcElkID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcFtpZF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkU2hpcElkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3NoaXAgZGF0YSBcbiAgICAgICAgbGV0IHJvdGF0aW9uQXhpcyA9IENvbWJhdFNldHVwLmdldEFjdGl2ZUF4aXMoKTtcbiAgICAgICAgbGV0IHhBeGlzID0gcGFyc2VJbnQoc3F1YXJlLmlkLmNoYXJBdCgwKSwgMTApO1xuICAgICAgICBsZXQgeUF4aXMgPSBwYXJzZUludChzcXVhcmUuaWQuY2hhckF0KDEpLCAxMCk7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gaGVscGVyLnNoaXBzW3NlbGVjdGVkU2hpcElkXS5sZW5ndGg7XG4gICAgICAgIGxldCBzaGlwTmFtZSA9IGhlbHBlci5zaGlwc1tzZWxlY3RlZFNoaXBJZF0ubmFtZTtcbiAgICAgICAgLy9yb3RhdGUgc2hpcCBpZiBuZWVkZWRcbiAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgsIHNlbGVjdGVkU2hpcElkKTtcbiAgICAgICAgaWYgKHJvdGF0aW9uQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBzaGlwLnJvdGF0ZVNoaXAoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHhBeGlzLCB5QXhpcyk7XG4gICAgICAgIHNoaXBzUGxhY2VkICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBzUGxhY2VkKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSk7IFxuXG4gICAgICAgIGhlbHBlci5wbGFjZVNoaXBJY29uKGJvYXJkLCBzcXVhcmUsIHNoaXBOYW1lLCByb3RhdGlvbkF4aXMsIHNoaXBMZW5ndGgpO1xuXG4gICAgICAgIHJlbW92ZVNoaXBCb3hDb250ZW50KHNlbGVjdGVkU2hpcElkKTtcbiAgICAgICAgcmVzZXRTZWxlY3RlZFNoaXAoKTtcblxuICAgICAgICBpZiAoYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgIGhlbHBlci5hY3RpdmF0ZUNvbmZpcm1CdG4oKTtcbiAgICAgICAgICB2YXIgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cC1ncmlkLWNvbnRhaW5lcicpO1xuICAgICAgICAgIGNsb25lZEdyaWQgPSBncmlkLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgICBjb25zdCBnZXRDbG9uZWRHcmlkID0gKCkgPT4ge1xuICAgIHJldHVybiBjbG9uZWRHcmlkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2hpcEJveFNlbGVjdG9yLFxuICAgIHBsYWNlU2hpcCxcbiAgICB1cGRhdGVHcmlkSGlnaGxpZ2h0cyxcbiAgICBnZXRQbGF5ZXJCb2FyZCxcbiAgICBhbGxTaGlwc1BsYWNlZCxcbiAgICByZXNldFNoaXBzUGxhY2VkLFxuICAgIGdldENsb25lZEdyaWRcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VTaGlwcztcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IENvbWJhdFNldHVwIGZyb20gJy4vY29tYmF0U2V0dXAnO1xuXG5jb25zdCBwcmVnYW1lID0gKCgpID0+IHtcbiAgbGV0IHBsYXllck5hbWU7IFxuXG4gIGNvbnN0IHNldFBsYXllck5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgcGxheWVyTmFtZSA9IG5hbWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICAgIGxldCBmaXJzdENoYXIgPSBwbGF5ZXJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGV0IHJlc3RPZk5hbWUgPSBwbGF5ZXJOYW1lLnNsaWNlKDEpO1xuXG4gICAgICByZXR1cm4gZmlyc3RDaGFyICsgcmVzdE9mTmFtZTsgXG4gIH07XG5cbiAgY29uc3QgbG9hZENhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVQcmVnYW1lQ2FyZCgpKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmVnYW1lQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHsgY2xhc3NOYW1lOiAncHJlZ2FtZS1jYXJkJyB9KTtcblxuICAgIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjcmVhdGVUZXh0SW5wdXQoKSwgY3JlYXRlU3RhcnRCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gaGVscGVyLmNyZWF0ZSgnaDEnLCB7XG4gICAgICBjbGFzc05hbWU6ICdwcmVnYW1lLWhlYWRlcicsXG4gICAgICB0ZXh0Q29udGVudDogJ0JBVFRMRVNISVAnLFxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGV4dElucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGhlbHBlci5jcmVhdGUoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiAnbmFtZS1pbnB1dCcsXG4gICAgICBpZDogJ3VzZXJuYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2FwdGFpbiBuYW1lLi4uJyxcbiAgICAgIG1pbkxlbmd0aDogMCwgXG4gICAgICBtYXhMZW5ndGg6IDE1XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0Qm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICdpbnB1dC1ib3gnXG4gICAgfSk7XG5cbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG5cbiAgICByZXR1cm4gdGV4dEJveDtcbiAgfTtcblxuICBjb25zdCBzZXRVc2VybmFtZSA9ICgpID0+IHtcbiAgICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gICAgc2V0UGxheWVyTmFtZSh1c2VySW5wdXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gaGVscGVyLmNyZWF0ZSgnYnV0dG9uJywgeyBcbiAgICAgIGNsYXNzTmFtZTogJ3N0YXJ0LWJ1dHRvbicsXG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGlkOiAncGxheS1ub3ctYnV0dG9uJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBoZWxwZXIuY3JlYXRlKCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6ICdzdGFydC1idXR0b24tdGV4dCcsXG4gICAgICAgIHRleHRDb250ZW50OiAnRU5URVIgQ09NQkFUJ1xuICAgIH0pO1xuXG4gICAgc3RhcnRCdXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHNldFVzZXJuYW1lKCk7XG4gICAgICBDb21iYXRTZXR1cC5sb2FkU2V0dXBDb250ZW50KCk7XG4gICAgfSk7IFxuXG4gICAgcmV0dXJuIHN0YXJ0QnV0dG9uO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZENhcmQsXG4gICAgZ2V0UGxheWVyTmFtZVxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlZ2FtZTtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHByZWdhbWUgZnJvbSAnLi9wcmVnYW1lJztcblxuY29uc3QgU2V0dXBNb2RhbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRTZXR1cE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdzZXR1cC1tb2RhbCcgfSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChsb2FkTW9kYWxDb250ZW50KCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtbW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gaGVscGVyLmNyZWF0ZSgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc2V0dXAtbW9kYWwtY29udGVudCcsXG4gICAgfSk7XG4gICAgY29uc3QgbXNnQm94ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdtb2RhbC1tZXNzYWdlJyB9KTtcbiAgICBtc2dCb3guYXBwZW5kKGhlbHBlci5sb2FkQ29tbWFuZGVySWNvbigpLCBsb2FkVGV4dCgpKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobXNnQm94KTtcblxuICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZFRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgaWQ6ICd3ZWxjb21lLXRleHQnIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgY29uc3QgaW5pdFR5cGluZ0VmZmVjdFNldHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgV2VsY29tZSBDYXB0YWluICR7cHJlZ2FtZS5nZXRQbGF5ZXJOYW1lKCl9IWA7XG4gICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9XG4gICAgICAnUGxhbiBvdXIgZm9ybWF0aW9uIGJ5IHNlbGVjdGluZyB0aGUgYXhpcyBhbmQgc2hpcCBhbmQgZHJvcCBpdCBvbiB0aGUgbWFwLic7XG5cbiAgICBjb25zdCBhZGRDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgaWQ6ICdjbG9zZS1tb2RhbC1idG4nLFxuICAgICAgICB0ZXh0Q29udGVudDogJ1llcyBTaXIhJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLW1vZGFsLWNvbnRlbnQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDgwMCk7XG4gICAgfTtcblxuICAgIGhlbHBlci50eXBlV3JpdGVyKG1lc3NhZ2UsICd3ZWxjb21lLXRleHQnLCAzMCwgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUtdGV4dCcpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBoZWxwZXIudHlwZVdyaXRlcihzZWNvbmRNZXNzYWdlLCAnd2VsY29tZS10ZXh0JywgMjAsIGFkZENsb3NlQnV0dG9uKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZFNldHVwTW9kYWwsXG4gICAgaW5pdFR5cGluZ0VmZmVjdFNldHVwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dXBNb2RhbDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vY29kZS9nYW1lJztcblxuY29uc3Qgd2lubmVyTW9kYWwgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkV2lubmVyTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3dpbm5lci1tb2RhbCcgfSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChsb2FkTW9kYWxDb250ZW50KCkpO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLW1vZGFsJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBsb2FkTW9kYWxDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3dpbm5lci1tb2RhbC1jb250ZW50JyxcbiAgICB9KTtcblxuICAgIGNvbnN0IG1zZ0JveCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLW1vZGFsLW1lc3NhZ2UnIH0pO1xuICAgIGNvbnN0IHdpbm5lck1lc3NhZ2UgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd3aW5uZXItbWVzc2FnZScsXG4gICAgICB0ZXh0Q29udGVudDogYCR7R2FtZS5nYW1lV2lubmVyKCl9IFdJTiFgLFxuICAgIH0pO1xuICAgIG1zZ0JveC5hcHBlbmQod2lubmVyTWVzc2FnZSwgaGVscGVyLmxvYWRDb21tYW5kZXJJY29uKCksIGxvYWRUZXh0KCkpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtc2dCb3gpO1xuXG4gICAgcmV0dXJuIG1vZGFsQ29udGVudDtcbiAgfTtcblxuICBjb25zdCBsb2FkVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBpZDogJ3dpbm5lci10ZXh0JyB9KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGNvbnN0IGluaXRUeXBpbmdFZmZlY3RXaW5uZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgR2FtZS5nYW1lV2lubmVyKCkgPT09ICdDT01QVVRFUidcbiAgICAgICAgPyAnVGhlIGVuZW15IGZsZWV0IGhhcyBvdXRtYW5ldXZlcmVkIHlvdSwgQ2FwdGFpbi4gQmV0dGVyIGx1Y2sgbmV4dCB0aW1lISdcbiAgICAgICAgOiAnTWlzc2lvbiBhY2NvbXBsaXNoZWQsIENhcHRhaW4hIFlvdSB0cnVseSBhcmUgdGhlIG1hc3RlciBvZiB0aGUgc2Vhcy4nO1xuXG4gICAgY29uc3QgYWRkQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b24gPSBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICAgIGlkOiAnY2xvc2Utd2lubmVyLW1vZGFsLWJ0bicsXG4gICAgICAgIHRleHRDb250ZW50OiAnTmV3IEJhdHRsZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItbW9kYWwtY29udGVudCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDgwMCk7XG4gICAgfTtcblxuICAgIGhlbHBlci50eXBlV3JpdGVyKG1lc3NhZ2UsICd3aW5uZXItdGV4dCcsIDMwLCAoKSA9PiB7XG4gICAgICAvLyBDYWxsIGFkZENsb3NlQnV0dG9uIGFmdGVyIHR5cGVXcml0ZXIgaXMgZG9uZSB0eXBpbmdcbiAgICAgIGFkZENsb3NlQnV0dG9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZFdpbm5lck1vZGFsLCBpbml0VHlwaW5nRWZmZWN0V2lubmVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3aW5uZXJNb2RhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwcmVnYW1lIGZyb20gJy4vZG9tL3ByZWdhbWUnO1xuXG5wcmVnYW1lLmxvYWRDYXJkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=