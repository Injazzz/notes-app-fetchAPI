class PageHeader extends HTMLElement {
    constructor() {
        super(); 
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="page-header">
            <div class="left-content">
                <img src="./src/icon/sticky-notes.png">
                <h1>Notes app</h1>
            </div>
            <div class="right-content">
                <button class="btn-call" id="btnCallFormInput"><img src="./src/icon/plus-solid.svg"></button>
                <button class="btn-call btn-call-archived-notes"><a href="#archNotes"><img src="./src/icon/box-archive-solid.svg"></a></button>
                <button class="btn-call btn-call-unarchive-notes"><a href="#notes"><img src="./src/icon/folder-open-solid.svg"></a></button>
            </div>
        </div>
        `;
    }
}

customElements.define('page-header', PageHeader);