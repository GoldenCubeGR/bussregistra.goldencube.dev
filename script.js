document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("doavCheck").addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission
                gettlds();
            });

            function gettlds(){

                try {
                    const proxyUrl = 'https://d6e77dfa-4c3a-40f2-b491-76e249d65b88-00-3qnnznwis8aoo.janeway.replit.dev/proxy?url=';
                    const targetUrl = 'https://adb43735-75a8-47aa-b925-34b708f28417-00-9ctzp3r03jmx.spock.replit.dev/tlds';
                    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), {
                      method: 'GET',
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
            
                    if (response.ok) {
                      const data = await response.json();
                      console.log(data.join(', '));
                    } else {
                      const errorData = await response.json();
                      console.log(`Error: ${errorData.message}`);
                    }
                  } catch (error) {
                    console.log(`Error: ${error.message}`);
                  }

            }
        

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
        

