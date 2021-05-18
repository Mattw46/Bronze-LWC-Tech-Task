import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   input=null
   selected=false
   list=[]
   newInput=null;

   addInputToList() {
      this.newInput = this.template.querySelector("lightning-input").value;
      this.list.push({Key: this.newInput, Value: this.newInput});
   }

   handleSelect(event) {
      this.input = event.detail;
      this.selected = true;
   }

}
