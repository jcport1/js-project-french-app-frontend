document.addEventListener('DOMContentLoaded', () => {

    const app = new App(); 
    app.attachEventListeners(); 
    const endPoint = 'http://localhost:3000/verbs';
    fetch(endPoint)
      .then(res => res.json())
      .then(json => {
        
        json["data"].forEach(verb => {
          const newVerb = new Verb({id: verb.id, ...verb.attributes});
          document.querySelector('#flash-container').innerHTML += newVerb.renderVerb();
          
        });
      });
  });