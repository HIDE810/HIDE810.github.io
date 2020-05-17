$.get('https://api.ipify.org?format=jsonp&callback=?', function(response) {
    document.getElementById("view_ip").innerHTML = response.ip;
}, "jsonp");