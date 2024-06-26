        // Function to get URL parameters
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Get product details from URL parameters
        var img = getUrlParameter('img');
        var title = getUrlParameter('title');
        var desc = getUrlParameter('desc');
        var price = getUrlParameter('price');

        // Set product details in HTML
        document.getElementById('productImg').src = img;
        document.getElementById('productTitle').textContent = title;
        document.getElementById('productDesc').textContent = desc;
        document.getElementById('productPrice').textContent = price;
        document.getElementById('productDescription').textContent = desc;
