
class Mifooter extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  connectedCallback(){
    this.shadowRoot.innerHTML = `
    
    <style>
                footer {
                    background-color: #000;
                    color: white;
                    text-align:center;
                    margin-top: 20px;
                    padding: 15px;
                }
            </style>
            <footer>
            <p>Todos los derechos reservados - ESPE 2026 </p>
            </footer>
    `;



  }


}
customElements.define('mi-footer',Mifooter);
      
   
          
          
          
          
        
        
        
        
        
      