
class Miheader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            header {
                background-color: #000;
                color: white;
                padding: 15px;
                text-align: center;
            }
            a {
                color: white;
                margin: 0 10px;
                text-decoration: none;
                font-weight: bold;
            }
            nav a:hover {
                text-decoration: underline;
            }
        </style>    

        <header>
            <h1>Aplicacion De Galería</h1>
            <nav>
                <a href="#/">Inicio</a>
                <a href="#/galeria">Galeria</a>
                <a href="#/direccion">Direccion</a>
                <a href="#/contacto">Contacto</a>
                <a href="#/sobre">Sobre nosotros</a>
            </nav>
        </header>     
    `;
    }
}

// Verifica que el nombre sea exacto al que usas en el index.html
if (!customElements.get('mi-header')) {
    customElements.define('mi-header', Miheader);
}