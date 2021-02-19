class Tense {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        Tense.all.push(this);
    }

    renderTense(){
        return ` <strong>${this.name} |</strong>`
    }
}

Tense.all = [];

