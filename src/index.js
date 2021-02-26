document.addEventListener('DOMContentLoaded', () => {

    const app = new App();
    const newVerbBtn = document.getElementById("new-verb-btn")
    const newVerbFormContainer = document.getElementById("new-flash-container")
    const newVerbForm = document.querySelector('#new-flashcard-form')
    addVerb = false;
    
    // app.attachEventListeners();
    
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


    newVerbBtn.addEventListener('click', () => {

        console.log("i was clicked")

        this.addVerb = !this.addVerb 

        if (this.addVerb) { 
        
            newVerbFormContainer.style.display = "block"
            newVerbBtn.innerText = "Hide Verb Form"
            
            newVerbForm.addEventListener('submit', e => { 
                e.preventDefault();
                const name = e.target.querySelector('#verb-name').value
                const translation = e.target.querySelector('#verb-translation').value
                const je = e.target.querySelector('#verb-je').value
                const tu = e.target.querySelector('#verb-tu').value
                const il = e.target.querySelector('#verb-il').value
                const nous = e.target.querySelector('#verb-nous').value
                const vous = e.target.querySelector('#verb-vous').value
                const ils = e.target.querySelector('#verb-ils').value
                const tense = e.target.querySelector('#tense-dropdown').value
                const bodyJSON = {name, translation, je, tu, il, nous, vous, ils, tense };
                this.adapter.createVerb(bodyJSON)
                e.target.reset()
            })
         } else {

            newVerbFormContainer.style.display = "none";
            newVerbBtn.innerText = "Add a Verb"
            
        }
    });

});
