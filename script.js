document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("doavCheck").addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission
                getdomains();
            });


        

            function getdomains() {
                axios.get('https://corsproxy.io/?https%3A%2F%2Fapi.buss.lol%2Fdomains')
                    .then(function(response) {
                        // Handle success
                        console.log(response.data);
                        displayData(response.data);
                    })
                    .catch(function(error) {
                        // Handle error
                        console.error('Error fetching data:', error);
                    });
            }

            function displayData(data) {
                var resultDiv = document.getElementById("result");
                resultDiv.innerHTML = ""; // Clear previous results
                
                // Loop through each domain object and display name and tld
                data.forEach(function(domain) {
                    var domainInfo = document.createElement("p");
                    domainInfo.textContent = "Name: " + domain.name + domain.tld;
                    resultDiv.appendChild(domainInfo);
                });
            }
        });

        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("newDom").addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission
                newdom();
            });

            function newdom() {
                const data = {
                    tld: "dev",
                    ip: "https://goldencube.dev",
                    name: "goldencube"
                };

                axios.put('https://corsproxy.io/?https%3A%2F%2Fapi.buss.lol%2Fdomain', data)
                    .then(function(response) {
                        // Handle success
                        console.log(response.data);
                    })
                    .catch(function(error) {
                        // Handle error
                        console.error('Error fetching data:', error);
                    });
            }

        });
