class Verb {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.translation = data.translation 
        Verb.all.push(this);
    }

    renderVerb(){
        return `<ul><h3>${this.name} - ${this.translation}</h3></ul>`
    }
}

Verb.all = [];
