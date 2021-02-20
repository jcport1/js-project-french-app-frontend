class App {
    constructor() {
        this.adapter = new Adapter()
    }


   
    attachEventListeners() {

        // const verbInput = document.getElementById('verb-name') 

        // document.querySelector('#flash-container').addEventListener('click', e => { 
        //     const id = parseInt(e.target.dataset.id);
        //     const verb = Verb.findById(id);
        //     document.querySelector('#update').innerHTML = verb.renderUpdateForm();
        // });
        
        document.querySelector('#new-flashcard-form').addEventListener('submit', e => {
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

 

        // document.querySelector('#update').addEventListener('submit', e=> {
        //     e.preventDefault();
        //     const id = parseInt(e.target.dataset.id);
        //     const verb = Verb.findById(id);
        //     const name = e.target.querySelector('input').value;
        //     const bodyJSON = {name};
        //     this.adapter.updateVerb(verb.id, bodyJSON)
        
        // });

        // document.querySelector('#flash-container').addEventListener('delete', e=> {
        //     e.preventDefault();
        //     debugger 
        //     const id = parseInt(e.target.dataset.id)
        //     this.adapter.deleteVerb(id)
        // })

    } 
}