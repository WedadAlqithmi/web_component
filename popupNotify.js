const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="popup.css">
    <style>
    .tooltip-container{
        display: inline-inlineblock;
        position: relative;
        z-index: 2;
    }
    .cancel {
        display: none;
    }
    .alert{
    
    }
    svg {
        width: 1em;
        cursor: Pointer;
    }
    .notify-container{
        position: absolute;
        bottom: 125%;
        z-index:9;
        width: 300px;
        background: white;
        box-shadow: 5px 5px 10px rgba(0,0,0,.1);
        font-size: .8em;
        border-raduis: 20px;
        padding: 1em;
        transform: scale(0);
        transform-origin: bottom right;
        transition: transform .5s cubic-bezier(0.25, 0.1, 0.25, 1);

    }
    </style>
        <div class="tooltip-container">
            <svg class="alert" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="alert">
                    <circle cx="9.5" cy="9.5" r="9.5" fill="#0E2DD0"/>
                    <circle cx="9.5" cy="14.5" r="1.5" fill="#D9D9D9"/>
                    <path d="M8 2H11L10.25 12H8.75L8 2Z" fill="#D9D9D9"/>
            </g>
            </svg>
            <svg class="cancel" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="cancel">
                    <circle cx="9.5" cy="9.5" r="9.5" fill="#D00E31"/>
                    <path d="M5 6.47993L6.34528 4.99999L14.485 12.399L13.1397 13.879L5 6.47993Z" fill="#D9D9D9"/>
                    <path d="M12.9884 5L14.3633 6.45244L6.37493 14.0145L5 12.5621L12.9884 5Z" fill="#D9D9D9"/>
                </g>
            </svg>
            <div class="notify-container">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </div>
        </div>
    `;



class PopupNotify extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    tooltip(expandState){
        const tooltip = this.shadowRoot.querySelector('.notify-container')
        const alert = this.shadowRoot.querySelector('.alert')
        const cancel = this.shadowRoot.querySelector('.cancel')

        if (expandState == true){
            tooltip.style.transform = 'scale(1)';
            alert.style.display = 'none';
            cancel.style.display = 'block';
            expandState = false;
        }else{
            tooltip.style.transform = 'scale(0)';
            cancel.style.display = 'none';
            alert.style.display = 'block';
        }

    }
    connectedCallback(){
        this.shadowRoot.querySelector('.alert').addEventListener('click', () =>{
            this.tooltip(true)
            
        })
        this.shadowRoot.querySelector('.cancel').addEventListener('click', () =>{
            this.tooltip(false)
            
        })
    }
}



window.customElements.define('popup-notify',PopupNotify)