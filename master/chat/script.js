(function (window, google, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map-canvas'),
        // map
        map = mapster.create(element, options);

    var geocoder = new google.maps.Geocoder();

    //chat gedeelte
    var myDataRef = new Firebase('https://resplendent-inferno-9134.firebaseio.com/');
    $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
            var name = $('#nameInput').val();
            var text = $('#messageInput').val();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var marker = map.addMarker({
                        id: 1,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        content: 'i want to help!',
                        event: {
                            name: 'click',
                            callback: function () {
                                alert('marker placed by: ' + $('#nameInput').val());
                            }
                        },
                        icon: 'https://firebasestorage.googleapis.com/v0/b/resplendent-inferno-9134.appspot.com/o/map_icons%2Finneedof_icon.png?alt=media&token=8a6c6b58-5fd6-4408-ab09-c7358322b292'
                    });
                    myDataRef.push({
                        name: name,
                        text: text,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude

                    });
                });
            } else {
                alert('allow your browser to use your location!');
            }


            $('#messageInput').val('');
        }
    });
    //checken wanneer nieuwe chat wordt toegevoegd
    myDataRef.on('child_added', function (snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
        var marker = map.addMarker({
            id: 1,
            lat: message.lat,
            lng: message.lng,
            content: message.text,
            event: {
                name: 'click',
                callback: function () {
                    alert('marker placed by: ' + message.name);
                }
            },
            icon: 'https://firebasestorage.googleapis.com/v0/b/resplendent-inferno-9134.appspot.com/o/map_icons%2Finneedof_icon.png?alt=media&token=8a6c6b58-5fd6-4408-ab09-c7358322b292'
        });
    });
    //message toevoegen aan chatdiv
    function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };
    $('#myForm input').on('change', function () {
        alert($('input[name=radioName]:checked', '#myForm').val());
    });

}(window, google, window.Mapster));