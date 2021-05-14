import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   input=null
   list=[]

   handleChange(event) {
      this.input = event.target.value;
   }
   addInputToList() {
      console.log("button clicked");
      console.log("text is: " + this.input);
      this.list.push(input);
   }

   handleSelect() {
      // handle child event
   }
}