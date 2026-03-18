/*
class AccordionItem {

    public id:number;
    public title:string;
    public text:string;

    public constructor(id:number, title:string, text:string) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

*/
// this implementation is exactly the same as above
export class AccordionItem {
    constructor(public id:number, public title:string, public text:string) {
    }
}