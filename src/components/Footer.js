class FooterComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = /*html*/`
<div
    class="bg:primary p:1rem|2rem grid place-items:center grid-template-cols:repeat(3,1fr) grid-template-cols:1fr@<sm gap:1rem">
    <div class="accordion">
        <div class="accordion-header">
            <span>Produtos</span>
            <img src="src/assets/svgs/arrow-up.svg" class="accordion-icon" />
        </div>
        <ul class="accordion-content accordion-collapsed list">
            <li><a href="/cafes/latte/">Latte</a></li>
            <li><a href="/cafes/cappuccino/">Cappucino</a></li>
            <li><a href="/cafes/mocha/">Mocha</a></li>
        </ul>
    </div>
    <div class="accordion">
        <div class="accordion-header">
            <span>Empresa</span>
            <img src="src/assets/svgs/arrow-up.svg" class="accordion-icon" />
        </div>
        <ul class="accordion-content accordion-collapsed list">
            <li><a href="#/">Sobre Nós</a></li>
            <li><a href="#/">Contatos</a></li>
            <li><a href="#/">Suporte</a></li>
        </ul>
    </div>
    <div class="accordion">
        <div class="accordion-header">
            <span>Redes Sociais</span>
            <img src="src/assets/svgs/arrow-up.svg" class="accordion-icon" />
        </div>
        <ul class="accordion-content accordion-collapsed list">
            <li><a href="https://github.com/trobukan/zhu-coffe">Github</a></li>
        </ul>
    </div>
</div>
`;
    };
}

customElements.define('app-footer', FooterComponent)