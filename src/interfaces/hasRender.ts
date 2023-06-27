import { HasHtmlFormat } from "./HasHTMLFormat";

export interface HasRender{
    render(docObj:HasHtmlFormat, docType:string):void
}