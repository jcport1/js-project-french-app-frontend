class Verb {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        Verb.all.push(this);
    }

    renderVerb(){
        return `<ul><h3>${this.name}</h3></ul>`
    }
}

Verb.all = [];
