class App {
    // constructor() {
    //     this.verbs = new Verbs()
    // }
    attachEventListeners() {
        document.querySelector('#flash-container').addEventListener('click', e => { 
            const id = parseInt(e.target.dataset.id);
            const verb = Verb.findById(id);
            document.querySelector('#update').innerHTML = verb.renderUpdateForm();
        });    

        document.querySelector('#update').addEventListener('submit', e=> {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const verb = Verb.findById(id); 
            const name = e.target.querySelector('input').value;

            const bodyJSON = {name};

            fetch(`http://localhost:3000/verbs/${verb.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(bodyJSON)
            })

            .then(res => res.json())
            .then(updatedVerb => console.log(updatedVerb));
        })
    }
}