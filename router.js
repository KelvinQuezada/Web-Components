const router = () => {
    const app = document.getElementById("app");
    const path = window.location.hash;

    switch (path) {
        case "#/galeria":
            app.innerHTML = `<galeria-imagenes></galeria-imagenes>`;
            break;
        case "#/direccion":
            app.innerHTML = `<mi-direction></mi-direction>`;
            break;
        case "#/contacto":
            app.innerHTML = `<mi-contacto></mi-contacto>`;
            break;
        case "#/sobre":
            app.innerHTML = `<mi-sobre></mi-sobre>`;
            break;
        default:
            app.innerHTML = `<mi-home></mi-home>`;
    }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);