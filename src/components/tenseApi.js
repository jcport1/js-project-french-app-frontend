class Tenses {
    constructor(){
        this.tenses = []
        this.adapter = new TensesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTenses()
    }

    initBindingsAndEventListeners() {

        this.tensesNode = document.getElementById('tenses-container')

    }

    fetchAndLoadTenses() {
        this.adapter
        .getTenses()
        .then(tensesJSON => 
            tensesJSON.forEach(tense => this.tenses.push(new Tense(tense)))
        )
        .then(this.render.bind(this))
        .catch(error => console.log(error))
    }

    tensesHTML(){
        return this.tenses.map(tense => tense.render()).join('')
    }

    render() {
        this.tensesNode.innerHTML = `<ul>${this.tensesHTML()}</ul>`
    }

} 