class Tense {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        Tense.all.push(this);
    }

    renderTense(){
        return `<ul><h3>${this.name}</h3></ul>`
    }
}

Tense.all = [];

