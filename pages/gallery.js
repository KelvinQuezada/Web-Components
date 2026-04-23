class GaleriaImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const elementos = [
      {
        src: "https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg",
        titulo: "Cachorro Chihuahua",
        descripcion: "Perro color cafe claro"
      },
      {
        src: "https://images.ctfassets.net/m5ehn3s5t7ec/wp-image-197858/7746c729ddf5a2a730f17999268362de/Labrador-Retriever-Dog-Breed-Guide.jpg",
        titulo: "Labrador Retriever",
        descripcion: "Perro color cafe y blanco"
      },
      {
        src: "https://th.bing.com/th/id/R.486b146f2dc4fc16d93065af214694bd?rik=u38bCkaUzfXqEw&riu=http%3a%2f%2fwww.petpaw.com.au%2fwp-content%2fuploads%2f2014%2f05%2fGerman-Shepherd-Dog-1.jpg&ehk=cdMV9Vxd%2b5BM7Zi1Rp3Erk1XuHXIZFaEoQqCpOvUQbM%3d&risl=&pid=ImgRaw&r=0",
        titulo: "German Shepherd",
        descripcion: "Perro color Negro - Leyla"
      },
      {
        src: "https://www.publicdomainpictures.net/pictures/40000/velka/golden-retriever-dog.jpg",
        titulo: "Cachorro Golden Retriever",
        descripcion: "Perro color cafe claro"
      },
      {
        src: "https://media-be.chewy.com/wp-content/uploads/2021/06/02102805/Doberman-Pinscher_Featured-Image.jpg",
        titulo: "Cachorro Doberman",
        descripcion: "Perro color negro"
      }
    ];




    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        padding: 20px;
      }

      .galeria {
        display: grid;
       grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
       gap: 20px;
      }

      
    </style>
    <div class="galeria">
      ${elementos.map(elemento => `
        <mi-card 
          src="${elemento.src}" 
          titulo="${elemento.titulo}" 
          descripcion="${elemento.descripcion}">
        </mi-card>
      `).join('')}
    </div>
    `;
  }

}

customElements.define('galeria-imagenes', GaleriaImagenes);