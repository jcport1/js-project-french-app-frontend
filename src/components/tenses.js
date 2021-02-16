class Tenses {
    constructor(){
        this.tenses = []
        this.adapter = new TensesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadTenses()
    }

    fetchAndLoadTenses() {
        this.adapter.getTenses()
        .then(tenses => {
            tenses.forEach(tense => this.tenses.push(tense))
        })

        .then(()=> {
            this.render()
        })
    }

    render(){
        const tensesContainer = document.querySelector("#tenses-container")
        tensesContainer.innerHTML = "My tenses will go here"
        
    }
}