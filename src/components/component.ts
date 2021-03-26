/**
 * Encapsulate the HTML element creation
 */

export class BaseComponent<T extends HTMLElement> {
  protected readonly element: T; // only child element can read
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
