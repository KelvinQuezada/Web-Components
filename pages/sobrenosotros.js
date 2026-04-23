class MiSobreNosotros extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .container {
                padding: 30px;
                max-width: 700px;
                margin: 40px auto;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                font-family: Arial, sans-serif;
            }
            h2 {
                margin-top: 0;
                color: #222;
                text-align: center;
            }
            p {
                color: #444;
                line-height: 1.7;
            }
            ul {
                color: #444;
                margin: 20px 0 0 20px;
            }
        </style>

        <div class="container">
            <h2>Sobre Nosotros</h2>
            <p>Esta aplicación de galería muestra imágenes de mascotas junto con información útil para los visitantes.</p>
            <p>Estamos construyendo componentes web simples y modernos para que la navegación sea rápida y clara.</p>
            <ul>
                <li><strong>Inicio</strong>: Página principal de bienvenida.</li>
                <li><strong>Galería</strong>: Muestra una colección de perros con nombre y descripción.</li>
                <li><strong>Dirección</strong>: Información de contacto y ubicación.</li>
                <li><strong>Contacto</strong>: Datos para consultas y soporte.</li>
            </ul>
        </div>
        `;
    }
}
customElements.define('mi-sobre', MiSobreNosotros);
