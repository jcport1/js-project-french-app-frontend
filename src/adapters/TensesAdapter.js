//allows frontend to take w/ backend api
//another name for adapter is service
//object w/ a constructor
//whenever we instantiate adapter it will set a base Url
//then we'll have the ability to call get Tenses -> which makes fetch request to our base url

class TensesAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3000/api/v1/tenses'
    }

    getTenses() {

        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}
