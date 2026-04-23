class MiContacto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .container {
                padding: 30px;
                max-width: 600px;
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
                line-height: 1.6;
            }
            strong {
                color: #000;
            }
        </style>

        <div class="container">
            <h2>Contacto</h2>
            <p><strong>Nombre:</strong> Equipo de Galería</p>
            <p><strong>Email:</strong> kelvin1ecua@gmail.com</p>
            <p><strong>Teléfono:</strong> 0997897362</p>
            <p><strong>Dirección:</strong> Coop.30 de junio, Calle patricia Pilar 704</p>
            <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
        </div>
        `;
    }
}
customElements.define('mi-contacto', MiContacto);
