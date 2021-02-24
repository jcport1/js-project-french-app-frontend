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

        this.card = document.createElement("card")
        this.card.classList = 'card'
        this.card.dataset["id"] = data.id
        this.card.id = `verb-${data.id}`
        this.card.addEventListener("click", this.flipCard)

        this.front = document.createElement("div")
        // this.front.dataset["id"] = data.id 
        // this.front.id = `verb-${data.id}`
        this.front.classList = 'front'
        this.back = document.createElement("div")
        // this.back.dataset["id"] = data.id 
        // this.back.id = `verb-${data.id}`
        this.back.classList = 'back'

        this.back.addEventListener("click", this.handleClick) 

        Verb.all.push(this);
    }

    // flipCard = (e) => {

    //     console.log("I was clicked")
    //     debugger 

    //         e.target.classList = "flipCard"

    // }

    flipCard = () => {

        
        this.card.classList.toggle('flipCard')

    }

    renderVerb(){

       this.front.innerHTML = `
        <h2>${this.name}</h2>
        <h4>${this.translation}</h4>
        
       `

       this.back.innerHTML = `
       
       <h3>Je ${this.je}</h3>
       <h3>Tu ${this.tu}</h3>
       <h3>Il/Elle/On ${this.il}</h3>
       <h3>Nous ${this.nous}</h3>
       <h3>Vous ${this.vous}</h3>
       <h3>Ils/Elles ${this.ils}</h3>
       
       <button data-id=${this.id} class="deletebtn">remove</button><br><br>
       `
       this.card.append(this.front)
       this.card.append(this.back)

       console.log("this is my card", this.card)
       return this.card 
    
    }

    static findById(id) {
        return this.all.find(verb => verb.id == id); 
       
    }

    static filterByTense(filteredTense){


        if(filteredTense) {
            for(const verb of Verb.all){
                if(verb.tenseId === parseInt(filteredTense.id)){
                    verb.card.style.display = "";
                } else {
                    verb.card.style.display = "none";
             }
            }
        } else {
            for (const verb of Verb.all){
                verb.card.style.display = ""
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

        console.log("I was clicked")
    

        if (e.target.innerText === "remove"){
            this.deleteVerb(e)
        }
    }

    deleteVerb = (e) => {
        this.card.remove()
        new Adapter().deleteVerb(this.id)
    }

  

    attachToDom(){
       
      Verb.container.appendChild(this.renderVerb())
    }

   
}

