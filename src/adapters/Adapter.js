//allows frontend to take w/ backend api
//another name for adapter is service
//object w/ a constructor
//whenever we instantiate adapter it will set a base Url
//then we'll have the ability to call get Tenses -> which makes fetch request to our base url

class Adapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3000/verbs'
    }


    fetchVerbs(){

        return fetch(this.baseUrl).then(resp => resp.json())

    }

    createVerb(){
        const verbInfo = {
            
            verb: {
                name: nameInput.value 
            }
        }

        console.log(verbInfo)
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(verbInfo)
        }
    }

    updateVerb(id,body) {

        return fetch(`http://localhost:3000/verbs/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body)
            }) .then(res => res.json())
    }

    fetchTenses() {
        return fetch("http://localhost:3000/api/v1/tenses").then(resp => resp.json())
    }

}
