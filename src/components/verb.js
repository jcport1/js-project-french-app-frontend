class Verb {

    static all = [];

    static container = document.getElementById('flash-container')

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
        this.tenseId = data.tense_id 

        this.element = document.createElement("p")
        this.element.dataset["id"] = data.id 
        this.element.id = `verb-${data.id}`
        this.element.addEventListener("click", this.handleClick) 

        Verb.all.push(this);
    }

    renderVerb(){
       this.element.innerHTML = `
        <h2>${this.name}</h2>
        <h4>${this.translation}</h4>
        <ul>
        <li>Je ${this.je}</li>
        <li>Tu ${this.tu}</li>
        <li>Il/Elle/On ${this.il}</li>
        <li>Nous ${this.nous}</li>
        <li>Vous ${this.vous}</li>
        <li>Ils/Elles ${this.ils}</li>
        </ul>
        <button data-id=${this.id}>delete</button><br><br>
       `
       return this.element 
    }

    static findById(id) {
        return this.all.find(verb => verb.id == id); 
       
    }

    static filterByTense(filteredTense){


        if(filteredTense) {
            for(const verb of Verb.all){
                if(verb.tenseId === parseInt(filteredTense.id)){
                    verb.element.style.display = "";
                } else {
                    verb.element.style.display = "none";
             }
            }
        } else {
            for (const verb of Verb.all){
                verb.element.style.display = ""
            }
        }
    }

    renderUpdateForm(){
        return `
        <form data-id=${this.id}>
        <input type="text" value="${this.name}" />
        <button type='submit'>Save Verb</button>
        </form>
       `;
    }

    handleClick = (e) => {
        if (e.target.innerText === "delete"){
            this.deleteVerb(e)
        }
    }

    deleteVerb = (e) => {
        this.element.remove()
        new Adapter().deleteVerb(this.id)
    }

  

    attachToDom(){
      Verb.container.appendChild(this.renderVerb())
    }

   
}

