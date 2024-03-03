    const loader = document.getElementById('loader');
        const pincodeInput = new URLSearchParams(window.location.search).get('pincodeInput');

        fetchPincodeDetails(pincodeInput);

        function fetchPincodeDetails(pincode) {
            fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                .then(response => response.json())
                .then(data => {
                    loader.style.display = 'none';
                    const details = data[0].PostOffice;
                    displayPincodeDetails(details);
                })
                
        }

        function displayPincodeDetails(details) {
            const pincodeDetailsElement = document.getElementById('pincodeDetails');
            pincodeDetailsElement.innerHTML = '';
            details.forEach(detail => {
                pincodeDetailsElement.innerHTML += `<p><strong>Post office name:</strong> ${detail.Name}</p>`;
            });
        }