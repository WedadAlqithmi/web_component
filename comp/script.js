const template = document.createElement('template');
template.innerHTML = `
        <style></style>
        <div class= "blog-post">
        <h2>My Post Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis lorem diam, at aliquet justo ullamcorper ut. Vivamus commodo nec metus sed pharetra. Nulla facilisi. Sed nisl dolor, vestibulum a facilisis vel, lacinia at lectus. </p>
        <a href> learn more </a>
        </div>
`;


class BlogPost extends HTMLElement {
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

class MyButton extends HTMLElement {
    
}

window.customElements.define('blog-post',BlogPost)