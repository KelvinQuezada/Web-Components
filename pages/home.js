class Mihome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .home {
                padding: 30px;
                max-width: 800px;
                margin: 40px auto;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                font-family: Arial, sans-serif;
                color: #333;
            }
            h2 {
                text-align: center;
                color: #1a3d6b;
            }
            p {
                line-height: 1.8;
                margin: 16px 0;
            }
            ul {
                margin: 16px 0 0 20px;
                color: #333;
            }
        </style>
        <div class="home">
            <h2>Bienvenido</h2>
            <p>En esta página encontrarás información sobre la protección de los animales y la importancia de cuidarlos con respeto y cariño.</p>
            <p>Proteger a los animales significa:</p>
            <ul>
                <li>Respetar su bienestar y su entorno.</li>
                <li>No abandonar mascotas.</li>
                <li>Apoyar la adopción responsable.</li>
                <li>Denunciar maltrato y promover la educación.</li>
            </ul>
            <p>Juntos podemos hacer una diferencia: cada acción cuenta para construir un mundo donde los animales vivan seguros y felices.</p>
        </div>
    `;
    }
}
customElements.define('mi-home', Mihome);