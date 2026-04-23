class Midirection extends HTMLElement {
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
          margin: auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        h2 {
          text-align: center;
          color: #333;
        }
        p {
          font-size: 16px;
          color: #555;
        }
      </style>

      <div class="container">
        <h2>Dirección</h2>
        <p><strong>Nombre:</strong> Kelvin Quezada</p>
        <p><strong>Ciudad:</strong> Santo Domingo</p>
        <p><strong>Dirección:</strong> Plan de Vivienda</p>
        <p><strong>Teléfono:</strong> 0997897362</p>
      </div>
    `;
    }
}
customElements.define('mi-direction', Midirection);