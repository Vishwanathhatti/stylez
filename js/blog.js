        // Function to get URL parameters
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Get product details from URL parameters
        var image = getUrlParameter('img');
        var title = getUrlParameter('title');
        var article = getUrlParameter('article');
        var tag = getUrlParameter('tag');

        // Set product details in HTML
        document.getElementById('blog-img').src = image;
        document.getElementById('title').textContent = title;
        document.getElementById('article').textContent = article;
        document.getElementById('tag').textContent = tag;
        
