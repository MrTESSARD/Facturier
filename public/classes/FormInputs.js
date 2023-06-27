var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bind } from "../decorators/Bind";
import { Datas } from "./Datas";
import { Display } from "./Display";
import { Print } from "./Print";
export class FormInput {
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
            avalableDoc = new Print(docContainer);
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
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            // console.log(docData.htmlFormat());
            let template;
            template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint);
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
    bind
], FormInput.prototype, "handleFormSubmit", null);
//# sourceMappingURL=FormInputs.js.map