import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api inputItem=null

   inputitemselect() {
      // propagate event to parent
      console.log('inputitemselect fired');
   }

   fireSelectEvent(event) {
      console.log('fireSelectEvent fired');
      //console.log(this.inputItem.Key);
      //this.dispatchEvent(new CustomEvent(this.inputItem.Key));
      console.log('Key is: ' + this.inputItem.Key);
      const selectedEvent = new CustomEvent('selected', { detail: this.inputItem.Key});
      this.dispatchEvent(selectedEvent);
   }
}