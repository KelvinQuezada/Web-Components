class MiCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const src = this.getAttribute('src') || '';
    const titulo = this.getAttribute('titulo') || 'Sin título';
    const descripcion = this.getAttribute('descripcion') || '';

    this.shadowRoot.innerHTML = `
    <style>
      .card {
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15); 
        transition: all 0.3s ease;
        cursor: pointer;
        font-family: sans-serif;
      }

      .card:hover {
        transform: translateY(-8px) scale(1);
        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.25);
      }

      .card img {
        width: 100%;
        height: 180px;
        display: block;
        object-fit: cover;
      }
      
      .card div{
        padding:15px;
        
      
      
      }
    </style>

    <div class="card">
      <img src="${src}" alt="${titulo}">
      <div>
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
      </div>
    </div>
    `;
  }
}

customElements.define('mi-card', MiCard);