class NavComponent extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    this.innerHTML = /*html*/`
<!-- > Nav Principal -->
<nav class="nav--initial nav-transitions fixed top:0 left:0 w:100% z-index:10">
  <div class="flex jc:space-between ai:center p:.25rem|2rem">
    <a href="/">
      <svg class="nav-logo" viewBox="0 0 128 128">
        <path class="fill:primary"
          d="M14.03 185.166a.288.288 0 0 0-.33.33l1.404 8.658c.042.256-.282.402-.445.2l-1.343-1.668a.415.415 0 0 0-.735.2l-.345 2.376h-1.67c-.43 0-.703.46-.498.839l1.372 2.53-2.333 2.016a.341.341 0 0 0 .231.6l2.512-.059.947 5.054c-1.943 1.943-1.846 1.271-1.463 2.12l2.03 3.664c1.994.041 3.665.065 5.522.036 1.858.03 3.53.006 5.525-.036l2.029-3.664c.384-.849.48-.177-1.462-2.12l.947-5.054 2.51.06c.322.007.475-.39.232-.6l-2.333-2.016 1.373-2.531a.569.569 0 0 0-.5-.84h-1.669l-.345-2.375a.415.415 0 0 0-.735-.2l-1.343 1.668c-.162.202-.486.056-.445-.2l1.404-8.658c.046-.28-.301-.449-.494-.24l-1.661 1.801a.737.737 0 0 1-1.162-.1l-.132-.205c-.148-.23-.504-.123-.5.15l.118 6.842a.933.933 0 0 1-.937.95h-.838a.933.933 0 0 1-.937-.95l.117-6.842c.005-.273-.35-.38-.498-.15l-.132.204a.737.737 0 0 1-1.162.101l-1.662-1.801a.282.282 0 0 0-.165-.09zm1.27 18.326.331.015a.685.685 0 0 1 .62.464l.555 1.638a.402.402 0 0 1-.367.53l-.245.008a.376.376 0 0 1-.37-.258l-.311-.94h-.529l-.08.947a.32.32 0 0 1-.322.292l-.308-.004a.283.283 0 0 1-.266-.368l.576-1.823a.719.719 0 0 1 .716-.501zm7.174 0a.719.719 0 0 1 .717.501l.575 1.823a.283.283 0 0 1-.266.368l-.307.004a.32.32 0 0 1-.323-.292l-.08-.948h-.529l-.31.941a.376.376 0 0 1-.37.259l-.246-.009a.402.402 0 0 1-.367-.53l.556-1.638a.685.685 0 0 1 .62-.464z"
          style="opacity:1;fill-opacity:1;stroke:none;stroke-width:.929481;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill"
          transform="matrix(4.13671 0 0 4.13671 -14.13 -757.63)" />
      </svg>
    </a>

    <!-- Hamburguer Menu (Mobile) -->
    <svg class="open-nav w:36px h:36px fill:primary cursor:pointer display:none@>sm" viewBox="0 -960 960 960">
      <path d="M120-240v-80h720v80zm0-200v-80h720v80zm0-200v-80h720v80z" />
    </svg>

    <!-- Lista de Navegação Principal -->
    <ul
      class="nav-list-container nav-list flex align-items:center m:0 gap:20px list-style:none cursor:pointer {text-decoration:none;fg:inherit}_a display:none@<sm">
      <li>
        <a href="/">Início</a>
      </li>
      <li>
        <a href="/grupo/">Grupo</a>
      </li>
      <li class="nav-login display:block display:none.is-user">
        <a href="/entrar/">Entrar</a>
      </li>
      <li class="nav-signup display:block display:none.is-user">
        <a href="/cadastrar/">Cadastrar</a>
      </li>
      <li class="nav-logout display:none display:block.is-user">
        Sair
      </li>
    </ul>
  </div>
</nav>

<!-- Side Bar (Mobile) -->
<nav class="nav-mobile fixed w:100% h:100vh bg:primary z:199 hidden display:none@>sm">
  <div class="flex flex-col p:1rem">
    <div class="flex jc:end">
      <svg class="close-nav fill:white w:36px h:36px cursor:pointer" viewBox="0 -960 960 960">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
      </svg>
    </div>
    <div class="flex flex-col w:100% jc:start">
      <!-- Lista de Navegação Mobile -->
      <ul
        class="nav-list-container nav-list flex flex-col m:0 gap:20px list-style:none cursor:pointer {text-decoration:none;fg:white}_a {fg:white}_li">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/grupo/">Grupo</a>
        </li>
        <li class="nav-login display:block display:none.is-user">
          <a href="/entrar/">Entrar</a>
        </li>
        <li class="nav-signup display:block display:none.is-user">
          <a href="/cadastrar/">Cadastrar</a>
        </li>
        <li class="nav-logout display:none display:block.is-user">
          Sair
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
  }
}
customElements.define('app-nav', NavComponent);