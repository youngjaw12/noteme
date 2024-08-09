import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mobileheader"
export default class extends Controller {
  static targets = [ "more" ]

  toggle() {
    this.moreTarget.classList.toggle("hidden")
  }
}