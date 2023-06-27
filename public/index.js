import { FormInput } from "./classes/FormInputs";
import { Storage } from "./classes/Storage";
import * as _ from 'lodash';
new FormInput();
// const storage = new Storage()
Storage.checkLocalStorage();
console.log("testikd");
const comics = ["superman", "Batman", "Spiderman"];
const firstComic = _.first(comics);
console.log(firstComic);
//# sourceMappingURL=index.js.map