document.addEventListener('DOMContentLoaded', () => {

    const app = new App();
    app.attachEventListeners();

    app.adapter.fetchVerbs().then(json => { 
        json["data"].forEach(verb => {
          const newVerb = new Verb({id: verb.id, ...verb.attributes});
          newVerb.attachToDom()
        //   document.querySelector('#flash-container').innerHTML += newVerb.renderVerb(); 
        });
    })

    app.adapter.fetchTenses().then(json => {
        json["data"].forEach(tense =>{ 
            const newTense = new Tense({id: tense.id, ...tense.attributes});
            document.querySelector('#tenses-container').innerHTML += newTense.renderTense(); 
        });
    })

});
