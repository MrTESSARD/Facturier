/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Datas: function() { return /* binding */ Datas; }\n/* harmony export */ });\nclass Datas {\n    documentType;\n    firstName;\n    lastName;\n    address;\n    country;\n    town;\n    zip;\n    product;\n    price;\n    quantity;\n    tva;\n    date;\n    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {\n        this.documentType = documentType;\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.address = address;\n        this.country = country;\n        this.town = town;\n        this.zip = zip;\n        this.product = product;\n        this.price = price;\n        this.quantity = quantity;\n        this.tva = tva;\n        this.date = date;\n    }\n    subTotal(price, quantity, tva) {\n        const tvaPercent = tva / 100;\n        const totalTva = price * tvaPercent;\n        return (price + totalTva) * quantity;\n    }\n    htmlFormat() {\n        //cacluler le sous total TTC\n        const totalPrice = this.subTotal(this.price, this.quantity, this.tva);\n        return `\r\n        <div class=\"row p-5\">\r\n    <div class=\"col-md-6\">\r\n        <h2 class=\"text-left\">LOGO</h2>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\">\r\n        <p class=\"font-weight-bold mb-1\"> ${this.documentType === \"invoice\" ? \"Facture\" : \"Devis\"}<span class=\"font-weight-normal\">N° ${Math.floor(Math.random() * 100)}</span></p>\r\n        <p class=\"font-weight-bold mb-1\">Date <span class=\"font-weight-normal\">${this.date.toLocaleDateString()}</span></p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row pb-5 p-5\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <p class=\"font-weight-bold\">Entreprise de Toto</p>\r\n        <p class=\"mb-1\">22 boulevard Moe Szyslak</p>\r\n        <p>75008 - Paris</p>\r\n        <p class=\"mb-1\">Tél: 00.00.00.00.00</p>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6 text-right\">\r\n        <p class=\"font-weight-bold\">Informations du client</p>\r\n        <p class=\"mb-1\">Mr/Mme ${this.firstName} ${this.lastName}</p>\r\n        <p class=\"mb-1\">${this.address}</p>\r\n        <p>${this.zip}</p>\r\n        <p>${this.town}</p>\r\n        <p>${this.country}</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row p-5\">\r\n    <div class=\"col-md-12\">\r\n        <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n            <th class=\"border-0 text-uppercase small font-weight-bold\">Produit/Service</th>\r\n            <th class=\"border-0 text-uppercase small font-weight-bold\">Prix unitaire HT</th>\r\n            <th class=\"border-0 text-uppercase small font-weight-bold\">Quantité</th>\r\n            <th class=\"border-0 text-uppercase small font-weight-bold\">Total HT</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n            <td>${this.product}</td>\r\n            <td>${this.price} € HT</td>\r\n            <td>${this.quantity}</td>\r\n            <td>${this.price * this.quantity} € HT</td>\r\n            </tr>\r\n        </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"d-flex flex-row-reverse bg-light p-4\">\r\n    <div class=\"py-3 px-5\">\r\n        <div class=\"mb-2\">TOTAL TTC</div>\r\n        <div class=\"h2 font-weight-light\">${totalPrice.toFixed(2)} €</div>\r\n    </div>\r\n</div>`;\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Datas.ts?");

/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: function() { return /* binding */ Display; }\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/classes/Storage.ts\");\n\nclass Display {\n    container;\n    hiddenDiv;\n    btnPrint;\n    formContainer;\n    constructor(container, hiddenDiv, btnPrint) {\n        this.container = container;\n        this.hiddenDiv = hiddenDiv;\n        this.btnPrint = btnPrint;\n        this.formContainer = document.getElementById(\"form-container\");\n    }\n    render(docObj, docType) {\n        const htmlString = docObj.htmlFormat();\n        this.container.innerHTML = htmlString;\n        new _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlString);\n        if (docType === 'invoice') {\n            this.btnPrint.innerHTML = \"Imprimer la facture\";\n        }\n        else {\n            this.btnPrint.innerHTML = \"Imprimer le devis\";\n        }\n        this.hiddenDiv.classList.remove(\"invisible\");\n        this.formContainer.innerHTML = \"\";\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Display.ts?");

/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormInput: function() { return /* binding */ FormInput; }\n/* harmony export */ });\n/* harmony import */ var _decorators_Bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/Bind */ \"./src/decorators/Bind.ts\");\n/* harmony import */ var _Datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datas */ \"./src/classes/Datas.ts\");\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ \"./src/classes/Display.ts\");\n/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Print */ \"./src/classes/Print.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\nclass FormInput {\n    form;\n    type;\n    firstName;\n    lastName;\n    address;\n    country;\n    town;\n    zip;\n    product;\n    price;\n    quantity;\n    tva;\n    docContainer;\n    hiddenDiv;\n    btnPrint;\n    btnReload;\n    btnStoredInvoices;\n    btnStoredEstimates;\n    storedEl;\n    constructor() {\n        this.form = document.getElementById(\"form\");\n        this.type = document.getElementById(\"type\");\n        this.firstName = document.getElementById(\"firstName\");\n        this.lastName = document.getElementById(\"lastName\");\n        this.address = document.getElementById(\"address\");\n        this.country = document.getElementById(\"country\");\n        this.town = document.getElementById(\"town\");\n        this.zip = document.getElementById(\"zip\");\n        this.product = document.getElementById(\"product\");\n        this.price = document.getElementById(\"price\");\n        this.quantity = document.getElementById(\"quantity\");\n        this.tva = document.getElementById(\"tva\");\n        this.docContainer = document.getElementById(\"document-container\");\n        this.hiddenDiv = document.getElementById(\"hiddenDiv\");\n        this.storedEl = document.getElementById(\"stored-data\");\n        this.btnPrint = document.getElementById(\"print\");\n        this.btnReload = document.getElementById(\"reload\");\n        this.btnStoredInvoices = document.getElementById(\"stored-invoices\");\n        this.btnStoredEstimates = document.getElementById(\"stored-estimates\");\n        //Listener\n        this.submitFormListener();\n        this.printListener(this.btnPrint, this.docContainer);\n        this.deleteListener(this.btnReload);\n        this.getStoredDocsListener();\n    }\n    //Listeners\n    submitFormListener() {\n        //   this.form.addEventListener(\"submit\", this.handleFormSubmit.bind(this))//pour avoir  console.log(this);//FormInput\n        this.form.addEventListener(\"submit\", this.handleFormSubmit); //pour retourner le formulaire\n    }\n    printListener(btn, docContainer) {\n        btn.addEventListener(\"click\", () => {\n            let avalableDoc;\n            avalableDoc = new _Print__WEBPACK_IMPORTED_MODULE_3__.Print(docContainer);\n            avalableDoc.print();\n        });\n    }\n    deleteListener(btn) {\n        btn.addEventListener(\"click\", () => {\n            document.location.reload();\n            window.scrollTo(0, 0);\n        });\n    }\n    /**\n     * Ajoute les gestionnaires d'événements pour les boutons \"Stored Invoices\" et \"Stored Estimates\".\n     * Lorsque l'un des boutons est cliqué, la méthode getItems est appelée avec le type de document correspondant.\n     */\n    getStoredDocsListener() {\n        // this.btnStoredInvoices.addEventListener(\"click\", this.getItems.bind(this, \"invoice\"));\n        // this.btnStoredEstimates.addEventListener(\"click\", this.getItems.bind(this, \"estimate\"));\n        this.btnStoredInvoices.addEventListener(\"click\", () => this.getItems(\"invoice\"));\n        this.btnStoredEstimates.addEventListener(\"click\", () => this.getItems(\"estimate\"));\n    }\n    /**\n     * Récupère les éléments correspondant au type de document spécifié et affiche l'objet courant dans la console.\n     * @param docType Le type de document (invoices ou estimates).\n     */\n    getItems(docType) {\n        // console.log(this);//FormInput\n        if (this.storedEl.hasChildNodes()) {\n            this.storedEl.innerHTML = \"\";\n        }\n        if (localStorage.getItem(docType)) {\n            let array;\n            array = localStorage.getItem(docType);\n            if (array !== null && array.length > 2) {\n                let arrayData;\n                arrayData = JSON.parse(array);\n                arrayData.map((doc) => {\n                    let card = document.createElement('div');\n                    let cardBody = document.createElement('div');\n                    let cardClasses = [\"card\", \"mt-5\"];\n                    let cardBodyClasses = \"card-body\";\n                    card.classList.add(...cardClasses);\n                    cardBody.classList.add(cardBodyClasses);\n                    cardBody.innerHTML = doc;\n                    card.append(cardBody);\n                    this.storedEl.append(card);\n                });\n            }\n            else {\n                this.storedEl.innerHTML = '<div class=\"p-5\">Aucune data disponible !</div>';\n            }\n        }\n    }\n    handleFormSubmit(e) {\n        e.preventDefault();\n        console.log(this); //FormInput\n        const inputs = this.inputDatas(); //Array , Undefined\n        if (Array.isArray(inputs)) {\n            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;\n            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);\n            let docData;\n            let date = new Date();\n            docData = new _Datas__WEBPACK_IMPORTED_MODULE_1__.Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);\n            // console.log(docData.htmlFormat());\n            let template;\n            template = new _Display__WEBPACK_IMPORTED_MODULE_2__.Display(this.docContainer, this.hiddenDiv, this.btnPrint);\n            template.render(docData, type);\n        }\n    }\n    inputDatas() {\n        const type = this.type.value;\n        const firstName = this.firstName.value;\n        const lastName = this.lastName.value;\n        const address = this.address.value;\n        const country = this.country.value;\n        const town = this.town.value;\n        const zip = this.zip.valueAsNumber;\n        const product = this.product.value;\n        const price = this.price.valueAsNumber;\n        const quantity = this.quantity.valueAsNumber;\n        const tva = this.tva.valueAsNumber;\n        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {\n            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];\n        }\n        else {\n            alert(\"Les valeurs numériques doivent être suppérieur à 0\");\n            return;\n        }\n    }\n}\n__decorate([\n    _decorators_Bind__WEBPACK_IMPORTED_MODULE_0__.bind\n], FormInput.prototype, \"handleFormSubmit\", null);\n\n\n//# sourceURL=webpack://facturier/./src/classes/FormInputs.ts?");

/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Print: function() { return /* binding */ Print; }\n/* harmony export */ });\nclass Print {\n    el;\n    constructor(el) {\n        this.el = el;\n    }\n    print() {\n        document.body.innerHTML = this.el.innerHTML;\n        window.print();\n        document.location.reload();\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Print.ts?");

/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Storage: function() { return /* binding */ Storage; }\n/* harmony export */ });\nclass Storage {\n    oldData = [];\n    constructor(typeVal, htmlString) {\n        this.setitem(typeVal, htmlString);\n    }\n    static checkLocalStorage() {\n        if (localStorage.getItem(\"invoice\") === null) {\n            localStorage.setItem(\"invoice\", '[]');\n        }\n        if (localStorage.getItem(\"estimate\") === null) {\n            localStorage.setItem(\"estimate\", '[]');\n        }\n    }\n    setitem(typeVal, htmlString) {\n        let array;\n        array = localStorage.getItem(typeVal);\n        if (array !== null) {\n            this.oldData = JSON.parse(array);\n            this.oldData.push(htmlString);\n            localStorage.setItem(typeVal, JSON.stringify(this.oldData));\n        }\n        else {\n            document.location.reload();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Storage.ts?");

/***/ }),

/***/ "./src/decorators/Bind.ts":
/*!********************************!*\
  !*** ./src/decorators/Bind.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bind: function() { return /* binding */ bind; }\n/* harmony export */ });\n//Method decorator\nfunction bind(target, name, descriptor) {\n    const orgMethod = descriptor.value;\n    const newDescriptor = {\n        get() {\n            return orgMethod.bind(this);\n        }\n    };\n    return newDescriptor;\n}\n\n\n//# sourceURL=webpack://facturier/./src/decorators/Bind.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ \"./src/classes/FormInputs.ts\");\n/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ \"./src/classes/Storage.ts\");\n\n\nnew _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();\n// const storage = new Storage()\n_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkLocalStorage();\n\n\n//# sourceURL=webpack://facturier/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;