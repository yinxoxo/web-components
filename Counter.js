// 建立 Counter 元件
class Counter extends HTMLElement {
  constructor() {
    super();

    this.value = 0;

    // 建立 Shadow DOM
    this.attachShadow({ mode: 'open' });

    // 定義模板
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 150px;
          background-color: white;
          border-radius: 4px;
          padding: 16px;
          border: 1px solid #dddddd;
          user-select: none;
          text-align: center;
        }
        .value {
          font-size: 48px;
          font-family: sans-serif;
          margin: 16px 0;
        }
        .buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        button {
          flex-grow: 1;
          font-size: 24px;
          padding: 8px;
          background: #dddddd;
          color: #333333;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:active {
          background: #cccccc;
        }
      </style>

      <div class="value">${this.value}</div>
      <div class="buttons">
        <button type="button" class="button--increment">
          <slot name="increment"></slot>
        </button>
        <button type="button" class="button--decrement">
          <slot name="decrement"></slot>
        </button>
      </div>
    `;

    // 將模板內容添加到 Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot
      .querySelector('.button--increment')
      .addEventListener('click', this.increment.bind(this));

    this.shadowRoot
      .querySelector('.button--decrement')
      .addEventListener('click', this.decrement.bind(this));
  }

  increment() {
    this.value++;
    this.updateValue();
  }

  decrement() {
    this.value = Math.max(0, this.value - 1);
    this.updateValue();
  }

  updateValue() {
    this.shadowRoot.querySelector('.value').textContent = this.value;
  }
}

customElements.define('my-counter', Counter);
