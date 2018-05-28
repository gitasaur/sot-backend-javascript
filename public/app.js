const subjectsUrl = 'http://localhost:3000/api/subjects';
const resultsUrl = 'http://localhost:3000/api/results';

(function() {

    let searchElement = document.getElementById('searches');
    let resultsElement = document.getElementById('results');

    // Get Subjects
    fetch(subjectsUrl)
    .then((res) => res.json()
    .then((results) => {
        results.forEach(search => {
            let p = document.createElement('p');
            let t = document.createTextNode(search);    
            p.appendChild(t);
            searchElement.appendChild(p);
        });
    }));

    // Get Results
    fetch(resultsUrl)
    .then((res) => res.json()
    .then((results) => {
        if (results && results.statuses) {
            results.statuses.forEach(status => {
                let p = document.createElement('p');
                let t = document.createTextNode(status.text);    
                p.appendChild(t);
                resultsElement.appendChild(p);
            });
        }
    }));
})();