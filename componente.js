class SimpleBookComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.classList.add("card", "product-card");

        div.innerHTML = `
            <img src="${this.getAttribute('imagem')}" class="card-img-top product-img product-img-margin" alt="Produto">
            <div class="card-body">
                <h5 class="card-title">${this.getAttribute('titulo')}</h5>
                <p class="card-text">${this.getAttribute('autor')}</p>
                <p class="card-text">${this.getAttribute('preco')}</p>
                <a href="${this.getAttribute('link')}" class="btn btn-dark">Comprar</a>
            </div>
        `;

        this.appendChild(div);
    }
}

customElements.define('simple-book-component', SimpleBookComponent);

