document.addEventListener('DOMContentLoaded', () => {

    const app = new App();
    app.attachEventListeners();
    

    app.adapter.fetchVerbs().then(json => { 
        json["data"].forEach(verb => {
          const newVerb = new Verb({id: verb.id, ...verb.attributes});
          newVerb.attachToDom()
        });
    })

    app.adapter.fetchTenses().then(json => {
        json["data"].forEach(tense =>{ 
            const newTense = new Tense({id: tense.id, ...tense.attributes});
            newTense.attachToDom()
            newTense.addToDropDown()
        });
    })

    // app.adapter.fetchFavorites().then

});
