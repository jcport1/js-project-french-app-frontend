class Tenses {
    constructor(){
        this.tenses = []
        this.adapter = new TensesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadTenses()
    }

    fetchAndLoadTenses() {
        this.adapter
        .getTenses()
        .then(tenses=> {
            tenses["data"].forEach(tense => this.tenses.push(new Tense(tense)))
            console.log(this.tenses)
        })

        .then(() => {
            this.render()
        })
        .catch(e => {
            console.log(e);
        }) 
     }
    


    render() { 
        const tensesContainer = document.querySelector("#tenses-container")
        tensesContainer.innerHTML = 'my tenses'
    }
} 