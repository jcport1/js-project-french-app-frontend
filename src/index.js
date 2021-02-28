document.addEventListener('DOMContentLoaded', () => {

    const app = new App();
    const newVerbBtn = document.getElementById("new-verb-btn")
    const newVerbFormContainer = document.getElementById("new-flash-container")
    const newVerbForm = document.querySelector('#new-flashcard-form')
    const container = document.getElementById('flash-container')
    const rulesContainer = document.getElementById('rules-container')
    const tenseContainer = document.getElementById('tenses-container') 
    const rulesBtn = document.getElementById('rule-btn')
    addVerb = false;
    addRules = false; 

    
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
                new Adapter().createVerb(bodyJSON)
                e.target.reset()
            })
         } else {

            newVerbFormContainer.style.display = "none";
            newVerbBtn.innerText = "Add a Verb"
            
        }
    });

    rulesBtn.addEventListener('click', () => {

        this.addRules = !this.addRules

        if (this.addRules){

            container.style.display = "block"
            tenseContainer.style.display = "block"
            rulesContainer.style.display = "block"
            rulesBtn.innerText = "Show Verbs"

            console.log("im in the rules Btn callback function")

        }
            else {

            container.style.display = "none";
            tenseContainer.style.display = "none"
            rulesBtn.innerText = "Conjugation Rules"

        } 

            })
    
        }); 