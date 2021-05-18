import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api inputItem=null

   fireSelectEvent(event) {
      const selectedEvent = new CustomEvent('selected', { detail: this.inputItem.Key});
      this.dispatchEvent(selectedEvent);
   }
}