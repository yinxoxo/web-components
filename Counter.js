//繼承HTMLElement 建立一個新的類別
class Counter extends HTMLElement {
  constructor() {
    super();
    this.value = 0;

    /* TO DO */
    // 創建 Shadow Root，封裝樣式和結構

    /* TO DO */
    // 定義template

    /* TO DO */
    // 將模板內容clone後插入到 Shadow DOM
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

/* TO DO */
//註冊自定義的HTML element
