document.getElementById("doavCheck").addEventListener("click", getdomains);
    // Use Axios to make a GET request to the API
function getdomains(){
    axios. get('https://api.buss.lol/domains')
        .then(function (response) {
            // Handle success
            console.log(response.data);
            // displayData(response.data);
        })
        .catch(function (error) {
            // Handle error
            console.error('Error fetching data:', error);
        });
};

function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Assuming data is an array of domains
    if (Array.isArray(data)) {
        data.forEach(domain => {
            const domainElement = document.createElement('p');
            domainElement.textContent = domain;
            resultDiv.appendChild(domainElement);
        });
    } else {
        resultDiv.textContent = 'Unexpected data format';
    }
}
