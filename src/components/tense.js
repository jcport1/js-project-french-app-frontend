class Tense {

    static all = []
    static container = document.getElementById('tenses-container')
    static dropdown = document.getElementById('tense-dropdown')  

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.active = false 

        this.element = document.createElement('button')
        Tense.all.push(this);
    }

    renderTense(){

        this.element.innerText = this.name 
        this.element.id = `tense-${this.id}`
        return this.element
    }

    attachToDom(){
        Tense.container.appendChild(this.renderTense())
        this.addListeners()
      }

      addToDropDown(){
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.name
        Tense.dropdown.append(option)
      }

      addListeners(){
          this.element.addEventListener('click', this.setActiveTense)
      }

      setActiveTense = (e) => {

        let filteredTense

        Tense.all.forEach(t => {
            if(t.element === this.element && !this.active){
                t.element.classList.add('activated')
                t.active = true
                filteredTense = t 
            } else {
                t.element.classList.remove('activated')
                t.active = false 
            }
            Verb.filterByTense(filteredTense)
        })
      }

}

