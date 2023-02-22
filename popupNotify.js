const template = document.createElement('template');
    template.innerHTML = 
        <link rel="stylesheet" href="popup.css">
            <div class="tooltip-container">
                <svg class="alert" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="alert">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#0E2DD0"/>
                        <circle cx="9.5" cy="14.5" r="1.5" fill="#D9D9D9"/>
                        <path d="M8 2H11L10.25 12H8.75L8 2Z" fill="#D9D9D9"/>
                </g>
                </svg>
                <svg class="cancel" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="delete">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#D00E31"/>
                        <path d="M5 6.47993L6.34528 4.99999L14.485 12.399L13.1397 13.879L5 6.47993Z" fill="#D9D9D9"/>
                        <path d="M12.9884 5L14.3633 6.45244L6.37493 14.0145L5 12.5621L12.9884 5Z" fill="#D9D9D9"/>
                    </g>
                </svg>
            </div>
        ;



class PopupNotify extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('popup-notify',PopupNotify)