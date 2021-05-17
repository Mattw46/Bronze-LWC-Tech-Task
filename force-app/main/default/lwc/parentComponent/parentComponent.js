import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   input=null
   selected=false
   list=[]
   newInput=null;

   addInputToList() {
      console.log("button clicked");
      
      this.newInput = this.template.querySelector("lightning-input").value;
      this.list.push({Key: this.newInput, Value: this.newInput});

      for (var current in this.list) {
         console.log(this.list[current]);
      }
   }

   handleSelect(event) {
      // handle child event
      console.log('handle select called: ' + event.detail);
      this.input = event.detail;
      this.selected = true;
   }
}

// https://www.sfdcblogs.com/post/how-to-fetch-inputs-in-lightning-web-components

// https://developer.salesforce.com/docs/component-library/documentation/en/lwc/events