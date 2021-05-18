import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api inputItem=null

   inputitemselect() {
      // propagate event to parent

   }

   fireSelectEvent(event) {
      const selectedEvent = new CustomEvent('selected', { detail: this.inputItem.Key});
      this.dispatchEvent(selectedEvent);
   }
}