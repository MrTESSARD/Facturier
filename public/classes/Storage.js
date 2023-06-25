export class Storage {
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
