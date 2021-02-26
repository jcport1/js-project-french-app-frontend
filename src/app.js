class App {
    constructor() {
        this.adapter = new Adapter()
        
    }

    // addVerb = false;  

    // attachEventListeners() {

    //     document.getElementById("new-verb-btn").addEventListener('click', () => {

    //         console.log("i was clicked")

    //         this.addVerb = !this.addVerb 

    //         if (this.addVerb) { 
            
    //             document.getElementById("new-flash-container").style.display = "block"
    //             document.getElementById("new-verb-btn").innerText = "Hide Verb Form"
                
    //             document.querySelector('#new-flashcard-form').addEventListener('submit', e => { 
    //                 e.preventDefault();
    //                 const name = e.target.querySelector('#verb-name').value
    //                 const translation = e.target.querySelector('#verb-translation').value
    //                 const je = e.target.querySelector('#verb-je').value
    //                 const tu = e.target.querySelector('#verb-tu').value
    //                 const il = e.target.querySelector('#verb-il').value
    //                 const nous = e.target.querySelector('#verb-nous').value
    //                 const vous = e.target.querySelector('#verb-vous').value
    //                 const ils = e.target.querySelector('#verb-ils').value
    //                 const tense = e.target.querySelector('#tense-dropdown').value
    //                 const bodyJSON = {name, translation, je, tu, il, nous, vous, ils, tense };
    //                 this.adapter.createVerb(bodyJSON)
    //                 e.target.reset()
    //             })
    //          } else {

    //             document.getElementById("new-flash-container").style.display = "none";
    //             document.getElementById("new-verb-btn").innerText = "Add a Verb"
                
    //         }
    //     });

        // document.getElementById("fave-btn").addEventListener('click', () => {

        //     const container = document.getElementById('flash-container')
        //     container.innerHTML = ''
        //     Verb.favorites.forEach(verb => {
                
        //         console.log(verb)

        //         verb.attachToDomFaves()
        //     });
        
    
        // }) 

      

        // }
    } 
