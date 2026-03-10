export class AccordionItem {

    public id:number;
    public title:string;
    public text:string;

    constructor(
        id:number, 
        title:string, 
        text: string) {
            
        this.id = id;
        this.title = title;
        this.text = text;
    }
}
