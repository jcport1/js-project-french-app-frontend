class Verb {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.translation = data.translation 
        this.je = data.je
        this.tu = data.tu
        this.il = data.il
        this.nous = data.nous 
        this.vous = data.vous
        this.ils = data.ils 

        Verb.all.push(this);
    }

    renderVerb(){
       return `
        <h2>${this.name}</h2>
        <button data-id=${this.id}>edit</button>
        <h4>${this.translation}</h4>
        <li>Je ${this.je}</li>
        <li>Tu ${this.tu}</li>
        <li>Il/Elle/On ${this.il}</li>
        <li>Nous ${this.nous}</li>
        <li>Vous ${this.vous}</li>
        <li>Ils/Elles ${this.ils}</li>
       `

    }

    static findById(id) {
        return this.all.find(verb => verb.id == id); 
       
    }

    renderUpdateForm(){
        return `
        <form data-id=${this.id}>
        <input type="text" value="${this.name}" />
        <button type='submit'>Save Verb</button>
        </form>
       `;
    }
}

Verb.all = [];
