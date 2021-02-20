class App {
    constructor() {
        this.adapter = new Adapter()
    }

   
    attachEventListeners() {

        const verbInput = document.getElementById('verb-name') 

        document.querySelector('#flash-container').addEventListener('click', e => { 
            const id = parseInt(e.target.dataset.id);
            const verb = Verb.findById(id);
            document.querySelector('#update').innerHTML = verb.renderUpdateForm();
        });
        
        document.querySelector('#new-flashcard-form').addEventListener('submit', e => {
            e.preventDefault();
            const name = e.target.querySelector('#verb-name').value
            const bodyJSON = {name}; 
            this.adapter.createVerb(bodyJSON)
            // e.target.reset()

        })

        document.querySelector('#update').addEventListener('submit', e=> {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const verb = Verb.findById(id);
            const name = e.target.querySelector('input').value;
            const bodyJSON = {name};
            this.adapter.updateVerb(verb.id, bodyJSON)
        
        });

    }
}