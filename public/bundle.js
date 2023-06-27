/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Datas: function() { return /* binding */ Datas; }
/* harmony export */ });
class Datas {
    documentType;
    firstName;
    lastName;
    address;
    country;
    town;
    zip;
    product;
    price;
    quantity;
    tva;
    date;
    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {
        this.documentType = documentType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.town = town;
        this.zip = zip;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.tva = tva;
        this.date = date;
    }
    subTotal(price, quantity, tva) {
        const tvaPercent = tva / 100;
        const totalTva = price * tvaPercent;
        return (price + totalTva) * quantity;
    }
    htmlFormat() {
        //cacluler le sous total TTC
        const totalPrice = this.subTotal(this.price, this.quantity, this.tva);
        return `
        <div class="row p-5">
    <div class="col-md-6">
        <h2 class="text-left">LOGO</h2>
    </div>
    <div class="col-md-6 text-right">
        <p class="font-weight-bold mb-1"> ${this.documentType === "invoice" ? "Facture" : "Devis"}<span class="font-weight-normal">N° ${Math.floor(Math.random() * 100)}</span></p>
        <p class="font-weight-bold mb-1">Date <span class="font-weight-normal">${this.date.toLocaleDateString()}</span></p>
    </div>
</div>

<div class="row pb-5 p-5">
    <div class="col-sm-6 text-left">
        <p class="font-weight-bold">Entreprise de Toto</p>
        <p class="mb-1">22 boulevard Moe Szyslak</p>
        <p>75008 - Paris</p>
        <p class="mb-1">Tél: 00.00.00.00.00</p>
    </div>

    <div class="col-sm-6 text-right">
        <p class="font-weight-bold">Informations du client</p>
        <p class="mb-1">Mr/Mme ${this.firstName} ${this.lastName}</p>
        <p class="mb-1">${this.address}</p>
        <p>${this.zip}</p>
        <p>${this.town}</p>
        <p>${this.country}</p>
    </div>
</div>

<div class="row p-5">
    <div class="col-md-12">
        <table class="table">
        <thead>
            <tr>
            <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>
            <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>
            <th class="border-0 text-uppercase small font-weight-bold">Quantité</th>
            <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${this.product}</td>
            <td>${this.price} € HT</td>
            <td>${this.quantity}</td>
            <td>${this.price * this.quantity} € HT</td>
            </tr>
        </tbody>
        </table>
    </div>
</div>

<div class="d-flex flex-row-reverse bg-light p-4">
    <div class="py-3 px-5">
        <div class="mb-2">TOTAL TTC</div>
        <div class="h2 font-weight-light">${totalPrice.toFixed(2)} €</div>
    </div>
</div>`;
    }
}


/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: function() { return /* binding */ Display; }
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/classes/Storage.ts");

class Display {
    container;
    hiddenDiv;
    btnPrint;
    formContainer;
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        this.formContainer = document.getElementById("form-container");
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        new _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlString);
        if (docType === 'invoice') {
            this.btnPrint.innerHTML = "Imprimer la facture";
        }
        else {
            this.btnPrint.innerHTML = "Imprimer le devis";
        }
        this.hiddenDiv.classList.remove("invisible");
        this.formContainer.innerHTML = "";
    }
}


/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormInput: function() { return /* binding */ FormInput; }
/* harmony export */ });
/* harmony import */ var _decorators_Bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/Bind */ "./src/decorators/Bind.ts");
/* harmony import */ var _Datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datas */ "./src/classes/Datas.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ "./src/classes/Display.ts");
/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Print */ "./src/classes/Print.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class FormInput {
    form;
    type;
    firstName;
    lastName;
    address;
    country;
    town;
    zip;
    product;
    price;
    quantity;
    tva;
    docContainer;
    hiddenDiv;
    btnPrint;
    btnReload;
    btnStoredInvoices;
    btnStoredEstimates;
    storedEl;
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.docContainer = document.getElementById("document-container");
        this.hiddenDiv = document.getElementById("hiddenDiv");
        this.storedEl = document.getElementById("stored-data");
        this.btnPrint = document.getElementById("print");
        this.btnReload = document.getElementById("reload");
        this.btnStoredInvoices = document.getElementById("stored-invoices");
        this.btnStoredEstimates = document.getElementById("stored-estimates");
        //Listener
        this.submitFormListener();
        this.printListener(this.btnPrint, this.docContainer);
        this.deleteListener(this.btnReload);
        this.getStoredDocsListener();
    }
    //Listeners
    submitFormListener() {
        //   this.form.addEventListener("submit", this.handleFormSubmit.bind(this))//pour avoir  console.log(this);//FormInput
        this.form.addEventListener("submit", this.handleFormSubmit); //pour retourner le formulaire
    }
    printListener(btn, docContainer) {
        btn.addEventListener("click", () => {
            let avalableDoc;
            avalableDoc = new _Print__WEBPACK_IMPORTED_MODULE_3__.Print(docContainer);
            avalableDoc.print();
        });
    }
    deleteListener(btn) {
        btn.addEventListener("click", () => {
            document.location.reload();
            window.scrollTo(0, 0);
        });
    }
    /**
     * Ajoute les gestionnaires d'événements pour les boutons "Stored Invoices" et "Stored Estimates".
     * Lorsque l'un des boutons est cliqué, la méthode getItems est appelée avec le type de document correspondant.
     */
    getStoredDocsListener() {
        // this.btnStoredInvoices.addEventListener("click", this.getItems.bind(this, "invoice"));
        // this.btnStoredEstimates.addEventListener("click", this.getItems.bind(this, "estimate"));
        this.btnStoredInvoices.addEventListener("click", () => this.getItems("invoice"));
        this.btnStoredEstimates.addEventListener("click", () => this.getItems("estimate"));
    }
    /**
     * Récupère les éléments correspondant au type de document spécifié et affiche l'objet courant dans la console.
     * @param docType Le type de document (invoices ou estimates).
     */
    getItems(docType) {
        // console.log(this);//FormInput
        if (this.storedEl.hasChildNodes()) {
            this.storedEl.innerHTML = "";
        }
        if (localStorage.getItem(docType)) {
            let array;
            array = localStorage.getItem(docType);
            if (array !== null && array.length > 2) {
                let arrayData;
                arrayData = JSON.parse(array);
                arrayData.map((doc) => {
                    let card = document.createElement('div');
                    let cardBody = document.createElement('div');
                    let cardClasses = ["card", "mt-5"];
                    let cardBodyClasses = "card-body";
                    card.classList.add(...cardClasses);
                    cardBody.classList.add(cardBodyClasses);
                    cardBody.innerHTML = doc;
                    card.append(cardBody);
                    this.storedEl.append(card);
                });
            }
            else {
                this.storedEl.innerHTML = '<div class="p-5">Aucune data disponible !</div>';
            }
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this); //FormInput
        const inputs = this.inputDatas(); //Array , Undefined
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
            let docData;
            let date = new Date();
            docData = new _Datas__WEBPACK_IMPORTED_MODULE_1__.Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            // console.log(docData.htmlFormat());
            let template;
            template = new _Display__WEBPACK_IMPORTED_MODULE_2__.Display(this.docContainer, this.hiddenDiv, this.btnPrint);
            template.render(docData, type);
        }
    }
    inputDatas() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("Les valeurs numériques doivent être suppérieur à 0");
            return;
        }
    }
}
__decorate([
    _decorators_Bind__WEBPACK_IMPORTED_MODULE_0__.bind
], FormInput.prototype, "handleFormSubmit", null);


/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Print: function() { return /* binding */ Print; }
/* harmony export */ });
class Print {
    el;
    constructor(el) {
        this.el = el;
    }
    print() {
        document.body.innerHTML = this.el.innerHTML;
        window.print();
        document.location.reload();
    }
}


/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Storage: function() { return /* binding */ Storage; }
/* harmony export */ });
class Storage {
    oldData = [];
    constructor(typeVal, htmlString) {
        this.setitem(typeVal, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem("invoice") === null) {
            localStorage.setItem("invoice", '[]');
        }
        if (localStorage.getItem("estimate") === null) {
            localStorage.setItem("estimate", '[]');
        }
    }
    setitem(typeVal, htmlString) {
        let array;
        array = localStorage.getItem(typeVal);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}


/***/ }),

/***/ "./src/decorators/Bind.ts":
/*!********************************!*\
  !*** ./src/decorators/Bind.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind: function() { return /* binding */ bind; }
/* harmony export */ });
//Method decorator
function bind(target, name, descriptor) {
    const orgMethod = descriptor.value;
    const newDescriptor = {
        get() {
            return orgMethod.bind(this);
        }
    };
    return newDescriptor;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ "./src/classes/FormInputs.ts");
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ "./src/classes/Storage.ts");


new _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();
// const storage = new Storage()
_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkLocalStorage();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ2hDRCxrQkFBa0I7QUFDWCxTQUFTLElBQUksQ0FBQyxNQUFVLEVBQUUsSUFBVyxFQUFFLFVBQTZCO0lBQ3ZFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLO0lBQ2xDLE1BQU0sYUFBYSxHQUFxQjtRQUNwQyxHQUFHO1lBQ0MsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixDQUFDO0tBRUo7SUFDRCxPQUFPLGFBQWE7QUFDeEIsQ0FBQzs7Ozs7OztVQ1ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDTDtBQUN4QyxJQUFJLDBEQUFTLEVBQUU7QUFDZixnQ0FBZ0M7QUFDaEMscURBQU8sQ0FBQyxpQkFBaUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhY3R1cmllci8uL3NyYy9jbGFzc2VzL0RhdGFzLnRzIiwid2VicGFjazovL2ZhY3R1cmllci8uL3NyYy9jbGFzc2VzL0Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyLy4vc3JjL2NsYXNzZXMvRm9ybUlucHV0cy50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvLi9zcmMvY2xhc3Nlcy9QcmludC50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvLi9zcmMvY2xhc3Nlcy9TdG9yYWdlLnRzIiwid2VicGFjazovL2ZhY3R1cmllci8uL3NyYy9kZWNvcmF0b3JzL0JpbmQudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhY3R1cmllci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc0h0bWxGb3JtYXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNIVE1MRm9ybWF0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YXMgaW1wbGVtZW50cyBIYXNIdG1sRm9ybWF0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZG9jdW1lbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIGNvdW50cnk6IHN0cmluZyxcclxuICAgIHByaXZhdGUgdG93bjogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSB6aXA6IG51bWJlcixcclxuICAgIHByaXZhdGUgcHJvZHVjdDogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBwcmljZTogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSBxdWFudGl0eTogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSB0dmE6IG51bWJlcixcclxuICAgIHByaXZhdGUgZGF0ZTogRGF0ZVxyXG4gICkge31cclxuICBwcml2YXRlIHN1YlRvdGFsKHByaWNlOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIsIHR2YTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHR2YVBlcmNlbnQgPSB0dmEgLyAxMDA7XHJcbiAgICBjb25zdCB0b3RhbFR2YSA9IHByaWNlICogdHZhUGVyY2VudDtcclxuICAgIHJldHVybiAocHJpY2UgKyB0b3RhbFR2YSkgKiBxdWFudGl0eTtcclxuICB9XHJcbiAgaHRtbEZvcm1hdCgpIHtcclxuICAgIC8vY2FjbHVsZXIgbGUgc291cyB0b3RhbCBUVENcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB0aGlzLnN1YlRvdGFsKHRoaXMucHJpY2UsIHRoaXMucXVhbnRpdHksIHRoaXMudHZhKTtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwLTVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGVmdFwiPkxPR088L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+ICR7XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50VHlwZSA9PT0gXCJpbnZvaWNlXCIgPyBcIkZhY3R1cmVcIiA6IFwiRGV2aXNcIlxyXG4gICAgICAgIH08c3BhbiBjbGFzcz1cImZvbnQtd2VpZ2h0LW5vcm1hbFwiPk7CsCAke01hdGguZmxvb3IoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAxMDBcclxuICAgICl9PC9zcGFuPjwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMVwiPkRhdGUgPHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ub3JtYWxcIj4ke3RoaXMuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInJvdyBwYi01IHAtNVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtbGVmdFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkVudHJlcHJpc2UgZGUgVG90bzwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj4yMiBib3VsZXZhcmQgTW9lIFN6eXNsYWs8L3A+XHJcbiAgICAgICAgPHA+NzUwMDggLSBQYXJpczwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5Uw6lsOiAwMC4wMC4wMC4wMC4wMDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+SW5mb3JtYXRpb25zIGR1IGNsaWVudDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5Nci9NbWUgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj4ke3RoaXMuYWRkcmVzc308L3A+XHJcbiAgICAgICAgPHA+JHt0aGlzLnppcH08L3A+XHJcbiAgICAgICAgPHA+JHt0aGlzLnRvd259PC9wPlxyXG4gICAgICAgIDxwPiR7dGhpcy5jb3VudHJ5fTwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJyb3cgcC01XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyLTAgdGV4dC11cHBlcmNhc2Ugc21hbGwgZm9udC13ZWlnaHQtYm9sZFwiPlByb2R1aXQvU2VydmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Qcml4IHVuaXRhaXJlIEhUPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyLTAgdGV4dC11cHBlcmNhc2Ugc21hbGwgZm9udC13ZWlnaHQtYm9sZFwiPlF1YW50aXTDqTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Ub3RhbCBIVDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPiR7dGhpcy5wcm9kdWN0fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4ke3RoaXMucHJpY2V9IOKCrCBIVDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4ke3RoaXMucXVhbnRpdHl9PC90ZD5cclxuICAgICAgICAgICAgPHRkPiR7dGhpcy5wcmljZSAqIHRoaXMucXVhbnRpdHl9IOKCrCBIVDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGJnLWxpZ2h0IHAtNFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInB5LTMgcHgtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi0yXCI+VE9UQUwgVFRDPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImgyIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+JHt0b3RhbFByaWNlLnRvRml4ZWQoMil9IOKCrDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEhhc0h0bWxGb3JtYXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNIVE1MRm9ybWF0XCI7XHJcbmltcG9ydCB7IEhhc1JlbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hhc1JlbmRlclwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkgaW1wbGVtZW50cyBIYXNSZW5kZXIge1xyXG4gICAgZm9ybUNvbnRhaW5lcjpIVE1MRGl2RWxlbWVudFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6SFRNTERpdkVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBoaWRkZW5EaXY6SFRNTERpdkVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBidG5QcmludDpIVE1MQnV0dG9uRWxlbWVudFxyXG5cclxuICAgICl7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpIGFzIEhUTUxEaXZFbGVtZW50XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoZG9jT2JqOkhhc0h0bWxGb3JtYXQsIGRvY1R5cGU6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBodG1sU3RyaW5nOnN0cmluZz1kb2NPYmouaHRtbEZvcm1hdCgpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MPWh0bWxTdHJpbmdcclxuXHJcbiAgICAgICAgbmV3IFN0b3JhZ2UoZG9jVHlwZSwgaHRtbFN0cmluZylcclxuICAgICAgICBpZiAoZG9jVHlwZT09PSdpbnZvaWNlJykge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blByaW50LmlubmVySFRNTD1cIkltcHJpbWVyIGxhIGZhY3R1cmVcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5idG5QcmludC5pbm5lckhUTUw9XCJJbXByaW1lciBsZSBkZXZpc1wiXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGRlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpXHJcbiAgICAgICAgdGhpcy5mb3JtQ29udGFpbmVyLmlubmVySFRNTD1cIlwiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBiaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvQmluZFwiXHJcbmltcG9ydCB7IEhhc0h0bWxGb3JtYXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNIVE1MRm9ybWF0XCJcclxuaW1wb3J0IHsgSGFzUmVuZGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaGFzUmVuZGVyXCJcclxuaW1wb3J0IHsgRGF0YXMgfSBmcm9tIFwiLi9EYXRhc1wiXHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9EaXNwbGF5XCJcclxuaW1wb3J0IHsgUHJpbnQgfSBmcm9tIFwiLi9QcmludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUlucHV0IHtcclxuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudFxyXG4gICAgdHlwZTpIVE1MU2VsZWN0RWxlbWVudFxyXG4gICAgZmlyc3ROYW1lOkhUTUxJbnB1dEVsZW1lbnQgXHJcbiAgICBsYXN0TmFtZTpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgYWRkcmVzczpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgY291bnRyeTpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgdG93bjpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgemlwOkhUTUxJbnB1dEVsZW1lbnQgXHJcbiAgICBwcm9kdWN0OkhUTUxJbnB1dEVsZW1lbnQgXHJcbiAgICBwcmljZTpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgcXVhbnRpdHk6SFRNTElucHV0RWxlbWVudCBcclxuICAgIHR2YTpIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgZG9jQ29udGFpbmVyOkhUTUxEaXZFbGVtZW50XHJcbiAgICBoaWRkZW5EaXY6SFRNTERpdkVsZW1lbnRcclxuICAgIGJ0blByaW50OkhUTUxCdXR0b25FbGVtZW50XHJcbiAgICBidG5SZWxvYWQ6SFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgIGJ0blN0b3JlZEludm9pY2VzOkhUTUxCdXR0b25FbGVtZW50XHJcbiAgICBidG5TdG9yZWRFc3RpbWF0ZXM6SFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgIHN0b3JlZEVsOkhUTUxEaXZFbGVtZW50XHJcbiAgICBcclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50XHJcbiAgICAgIHRoaXMudHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxyXG4gICAgICB0aGlzLmZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3ROYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgdGhpcy5sYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFzdE5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCBcclxuICAgICAgdGhpcy5hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRyZXNzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgXHJcbiAgICAgIHRoaXMuY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRyeVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgICB0aGlzLnRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvd25cIikgYXMgSFRNTElucHV0RWxlbWVudCBcclxuICAgICAgdGhpcy56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInppcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IFxyXG4gICAgICB0aGlzLnByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikgYXMgSFRNTElucHV0RWxlbWVudCBcclxuICAgICAgdGhpcy5wcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VcIikgYXMgSFRNTElucHV0RWxlbWVudCBcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbnRpdHlcIikgYXMgSFRNTElucHV0RWxlbWVudCBcclxuICAgICAgdGhpcy50dmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR2YVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IFxyXG5cclxuICAgICAgdGhpcy5kb2NDb250YWluZXI9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9jdW1lbnQtY29udGFpbmVyXCIpIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAgICAgIHRoaXMuaGlkZGVuRGl2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZGVuRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAgICAgIHRoaXMuc3RvcmVkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yZWQtZGF0YVwiKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5cclxuICAgICAgdGhpcy5idG5QcmludD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW50XCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgICAgdGhpcy5idG5SZWxvYWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWxvYWRcIilhcyBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICAgICB0aGlzLmJ0blN0b3JlZEludm9pY2VzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmVkLWludm9pY2VzXCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgICAgdGhpcy5idG5TdG9yZWRFc3RpbWF0ZXM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yZWQtZXN0aW1hdGVzXCIpYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuXHJcbiAgICAgIC8vTGlzdGVuZXJcclxuICAgICAgdGhpcy5zdWJtaXRGb3JtTGlzdGVuZXIoKVxyXG4gICAgICB0aGlzLnByaW50TGlzdGVuZXIodGhpcy5idG5QcmludCwgdGhpcy5kb2NDb250YWluZXIpXHJcbiAgICAgIHRoaXMuZGVsZXRlTGlzdGVuZXIodGhpcy5idG5SZWxvYWQpXHJcbiAgICAgIHRoaXMuZ2V0U3RvcmVkRG9jc0xpc3RlbmVyKClcclxuXHJcbiAgICAgIFxyXG4gIH1cclxuICAvL0xpc3RlbmVyc1xyXG4gIHByaXZhdGUgc3VibWl0Rm9ybUxpc3RlbmVyKCk6dm9pZHtcclxuICAgIC8vICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcykpLy9wb3VyIGF2b2lyICBjb25zb2xlLmxvZyh0aGlzKTsvL0Zvcm1JbnB1dFxyXG4gICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmhhbmRsZUZvcm1TdWJtaXQpLy9wb3VyIHJldG91cm5lciBsZSBmb3JtdWxhaXJlXHJcbiAgfVxyXG4gIHByaXZhdGUgcHJpbnRMaXN0ZW5lcihidG46SFRNTEJ1dHRvbkVsZW1lbnQsIGRvY0NvbnRhaW5lcjpIVE1MRGl2RWxlbWVudCl7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgbGV0IGF2YWxhYmxlRG9jOkhhc1ByaW50XHJcbiAgICAgICAgYXZhbGFibGVEb2MgPW5ldyBQcmludChkb2NDb250YWluZXIpXHJcbiAgICAgICAgYXZhbGFibGVEb2MucHJpbnQoKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcHJpdmF0ZSBkZWxldGVMaXN0ZW5lcihidG46SFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMClcclxuICAgIH0pXHJcbiAgfVxyXG4vKipcclxuICogQWpvdXRlIGxlcyBnZXN0aW9ubmFpcmVzIGQnw6l2w6luZW1lbnRzIHBvdXIgbGVzIGJvdXRvbnMgXCJTdG9yZWQgSW52b2ljZXNcIiBldCBcIlN0b3JlZCBFc3RpbWF0ZXNcIi5cclxuICogTG9yc3F1ZSBsJ3VuIGRlcyBib3V0b25zIGVzdCBjbGlxdcOpLCBsYSBtw6l0aG9kZSBnZXRJdGVtcyBlc3QgYXBwZWzDqWUgYXZlYyBsZSB0eXBlIGRlIGRvY3VtZW50IGNvcnJlc3BvbmRhbnQuXHJcbiAqL1xyXG5wcml2YXRlIGdldFN0b3JlZERvY3NMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuYnRuU3RvcmVkSW52b2ljZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0SXRlbXMuYmluZCh0aGlzLCBcImludm9pY2VcIikpO1xyXG4gICAgLy8gdGhpcy5idG5TdG9yZWRFc3RpbWF0ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0SXRlbXMuYmluZCh0aGlzLCBcImVzdGltYXRlXCIpKTtcclxuICAgIHRoaXMuYnRuU3RvcmVkSW52b2ljZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4gdGhpcy5nZXRJdGVtcyggXCJpbnZvaWNlXCIpKTtcclxuICAgIHRoaXMuYnRuU3RvcmVkRXN0aW1hdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHRoaXMuZ2V0SXRlbXMoIFwiZXN0aW1hdGVcIikpO1xyXG59XHJcblxyXG4vKipcclxuICogUsOpY3Vww6hyZSBsZXMgw6lsw6ltZW50cyBjb3JyZXNwb25kYW50IGF1IHR5cGUgZGUgZG9jdW1lbnQgc3DDqWNpZmnDqSBldCBhZmZpY2hlIGwnb2JqZXQgY291cmFudCBkYW5zIGxhIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSBkb2NUeXBlIExlIHR5cGUgZGUgZG9jdW1lbnQgKGludm9pY2VzIG91IGVzdGltYXRlcykuXHJcbiAqL1xyXG5wcml2YXRlIGdldEl0ZW1zKGRvY1R5cGU6IHN0cmluZykge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7Ly9Gb3JtSW5wdXRcclxuICAgIGlmICh0aGlzLnN0b3JlZEVsLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIHRoaXMuc3RvcmVkRWwuaW5uZXJIVE1MPVwiXCJcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkb2NUeXBlKSkge1xyXG4gICAgICAgIGxldCBhcnJheTpzdHJpbmd8bnVsbFxyXG4gICAgICAgIGFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZG9jVHlwZSlcclxuXHJcbiAgICAgICAgaWYgKGFycmF5IT09bnVsbCAmJiBhcnJheS5sZW5ndGggPiAyICkge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlEYXRhOnN0cmluZ1tdXHJcbiAgICAgICAgICAgIGFycmF5RGF0YSA9SlNPTi5wYXJzZShhcnJheSlcclxuXHJcbiAgICAgICAgICAgIGFycmF5RGF0YS5tYXAoKGRvYzpzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJkOkhUTUxEaXZFbGVtZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmRCb2R5OkhUTUxEaXZFbGVtZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmRDbGFzc2VzOnN0cmluZ1tdPVtcImNhcmRcIiwgXCJtdC01XCJdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyZEJvZHlDbGFzc2VzOnN0cmluZz1cImNhcmQtYm9keVwiXHJcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoLi4uY2FyZENsYXNzZXMpXHJcbiAgICAgICAgICAgICAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKGNhcmRCb2R5Q2xhc3NlcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYXJkQm9keS5pbm5lckhUTUw9ZG9jXHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZChjYXJkQm9keSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkRWwuYXBwZW5kKGNhcmQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkRWwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwicC01XCI+QXVjdW5lIGRhdGEgZGlzcG9uaWJsZSAhPC9kaXY+J1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5AYmluZFxyXG4gIHByaXZhdGUgaGFuZGxlRm9ybVN1Ym1pdChlOkV2ZW50KXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpOy8vRm9ybUlucHV0XHJcbiAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuaW5wdXREYXRhcygpLy9BcnJheSAsIFVuZGVmaW5lZFxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dHMpKSB7XHJcbiAgICAgICAgICBjb25zdFt0eXBlLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhZGRyZXNzLCBjb3VudHJ5LCB0b3duLCB6aXAsIHByb2R1Y3QscHJpY2UsIHF1YW50aXR5LHR2YV09aW5wdXRzXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhZGRyZXNzLCBjb3VudHJ5LCB0b3duLCB6aXAsIHByb2R1Y3QscHJpY2UsIHF1YW50aXR5LHR2YSk7XHJcbiAgICAgICAgICAgIGxldCBkb2NEYXRhOkhhc0h0bWxGb3JtYXRcclxuICAgICAgICAgICAgbGV0IGRhdGU6RGF0ZT1uZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGRvY0RhdGEgPW5ldyBEYXRhcyh0eXBlLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhZGRyZXNzLCBjb3VudHJ5LCB0b3duLCB6aXAsIHByb2R1Y3QscHJpY2UsIHF1YW50aXR5LHR2YSwgZGF0ZSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jRGF0YS5odG1sRm9ybWF0KCkpO1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGU6SGFzUmVuZGVyXHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gbmV3IERpc3BsYXkodGhpcy5kb2NDb250YWluZXIsIHRoaXMuaGlkZGVuRGl2LCB0aGlzLmJ0blByaW50KVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5yZW5kZXIoZG9jRGF0YSwgdHlwZSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICB9XHJcbiAgcHJpdmF0ZSBpbnB1dERhdGFzKCk6W3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIG51bWJlciwgc3RyaW5nLG51bWJlciwgbnVtYmVyLG51bWJlcl18dm9pZHtcclxuXHJcbiAgY29uc3QgdHlwZSA9IHRoaXMudHlwZS52YWx1ZVxyXG4gIGNvbnN0IGZpcnN0TmFtZSAgPXRoaXMuZmlyc3ROYW1lLnZhbHVlXHJcbiAgY29uc3QgICAgIGxhc3ROYW1lICA9dGhpcy5sYXN0TmFtZS52YWx1ZSBcclxuICBjb25zdCAgICAgYWRkcmVzcyA9dGhpcy5hZGRyZXNzLnZhbHVlICAgIFxyXG4gIGNvbnN0ICAgICBjb3VudHJ5ICA9dGhpcy5jb3VudHJ5IC52YWx1ZVxyXG4gIGNvbnN0ICAgICB0b3duICA9dGhpcy50b3duLnZhbHVlICBcclxuICBjb25zdCAgICAgemlwICA9dGhpcy56aXAudmFsdWVBc051bWJlciBcclxuICBjb25zdCAgICAgcHJvZHVjdCAgPXRoaXMucHJvZHVjdCAudmFsdWVcclxuICBjb25zdCAgICAgcHJpY2UgICA9dGhpcy5wcmljZS52YWx1ZUFzTnVtYmVyICAgIFxyXG4gIGNvbnN0ICAgICBxdWFudGl0eSA9dGhpcy5xdWFudGl0eS52YWx1ZUFzTnVtYmVyXHJcbiAgY29uc3QgICAgIHR2YSA9dGhpcy50dmEudmFsdWVBc051bWJlclxyXG4gIFxyXG4gIGlmICh6aXA+MCAmJnByaWNlPjAgJiYgcXVhbnRpdHk+MCAmJiB0dmE+MCkge1xyXG4gICAgICByZXR1cm4gW3R5cGUsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGFkZHJlc3MsIGNvdW50cnksIHRvd24sIHppcCwgcHJvZHVjdCxwcmljZSwgcXVhbnRpdHksdHZhXVxyXG4gICAgICBcclxuICB9ZWxzZXtcclxuICAgICAgYWxlcnQoXCJMZXMgdmFsZXVycyBudW3DqXJpcXVlcyBkb2l2ZW50IMOqdHJlIHN1cHDDqXJpZXVyIMOgIDBcIilcclxuICAgICAgcmV0dXJuXHJcbiAgfVxyXG4gIFxyXG59fVxyXG4iLCJleHBvcnQgY2xhc3MgUHJpbnQgaW1wbGVtZW50cyBIYXNQcmludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwcmludCgpe1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUxcclxuICAgICAgICB3aW5kb3cucHJpbnQoKVxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIYXNTZXRJdGVtIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzU2V0SXRlbVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIEhhc1NldEl0ZW17XHJcblxyXG4gICAgb2xkRGF0YTpzdHJpbmdbXT1bXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGVWYWw6IHN0cmluZywgaHRtbFN0cmluZzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0aXRlbSh0eXBlVmFsLCBodG1sU3RyaW5nKVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrTG9jYWxTdG9yYWdlKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW52b2ljZVwiKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImludm9pY2VcIiwgJ1tdJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVzdGltYXRlXCIpPT09bnVsbCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVzdGltYXRlXCIsICdbXScpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldGl0ZW0odHlwZVZhbDogc3RyaW5nLCBodG1sU3RyaW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYXJyYXkgOiBzdHJpbmd8bnVsbFxyXG4gICAgICAgIGFycmF5ID1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlVmFsKVxyXG4gICAgICAgIGlmIChhcnJheSE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2xkRGF0YT0gSlNPTi5wYXJzZShhcnJheSlcclxuICAgICAgICAgICAgdGhpcy5vbGREYXRhLnB1c2goaHRtbFN0cmluZylcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZVZhbCwgSlNPTi5zdHJpbmdpZnkodGhpcy5vbGREYXRhKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vTWV0aG9kIGRlY29yYXRvclxyXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQ6YW55LCBuYW1lOnN0cmluZywgZGVzY3JpcHRvcjpQcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgIGNvbnN0IG9yZ01ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWVcclxuICAgIGNvbnN0IG5ld0Rlc2NyaXB0b3I6UHJvcGVydHlEZXNjcmlwdG9yID17XHJcbiAgICAgICAgZ2V0KCl7XHJcbiAgICAgICAgICAgIHJldHVybiBvcmdNZXRob2QuYmluZCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdEZXNjcmlwdG9yXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBGb3JtSW5wdXQgfSBmcm9tIFwiLi9jbGFzc2VzL0Zvcm1JbnB1dHNcIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL2NsYXNzZXMvU3RvcmFnZVwiO1xyXG4gICAgbmV3IEZvcm1JbnB1dCgpXHJcbiAgICAvLyBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKVxyXG4gICAgU3RvcmFnZS5jaGVja0xvY2FsU3RvcmFnZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9