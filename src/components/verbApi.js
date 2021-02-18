class Verbs {
    constructor(){
        this.Verbs = []
        this.adapter = new VerbsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadVerbs()
    }

    initBindingsAndEventListeners() {

        this.VerbsNode = document.getElementById('verbs-container')

    }

    fetchAndLoadVerbs() {
        this.adapter
        .getVerbs()
        .then(VerbsJSON => 
            VerbsJSON.forEach(verb => this.Verbs.push(new Verb(verb)))
        )
        .then(this.render.bind(this))
        .catch(error => console.log(error))
    }

    VerbsHTML(){
        return this.tenses.map(tense => tense.render()).join('')
    }

    render() {
        this.tensesNode.innerHTML = `<ul>${this.tensesHTML()}</ul>`
    }

} 