import { HasHtmlFormat } from "./HasHTMLFormat.js";

export interface HasRender{
    render(docObj:HasHtmlFormat, docType:string):void
}