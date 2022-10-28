import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  dispatch(element){
    element.target.form.requestSubmit();
  }
}
