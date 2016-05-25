      // chat gedeelte
      // variabele binden aan database
      var myDataRef = new Firebase('https://resplendent-inferno-9134.firebaseio.com/');
      $('#messageInput').keypress(function (e) {
          if (e.keyCode == 13) {
              var name = $('#nameInput').val();
              var text = $('#messageInput').val();
              myDataRef.push({
                  name: name,
                  text: text
              });
              $('#messageInput').val('');
          }
      });
      //checken wanneer nieuwe chat wordt toegevoegd
      myDataRef.on('child_added', function (snapshot) {
          var message = snapshot.val();
          displayChatMessage(message.name, message.text);
      });
      //message toevoegen aan chatdiv
      function displayChatMessage(name, text) {
          $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
          $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      }      


    //mapster gedeelte
      (function (window, google, mapster) {

          //map options
          var options = mapster.MAP_OPTIONS,
          element = document.getElementById('map-canvas'),
          
          //map
          map = new Mapster.create(element, options);
          //markers
          var marker = map.addMarker({
              lat: 37.79,
              lng: -122.43,
              icon: 'https://firebasestorage.googleapis.com/v0/b/resplendent-inferno-9134.appspot.com/o/map_icons%2Finneedof_icon.png?alt=media&token=8a6c6b58-5fd6-4408-ab09-c7358322b292',
              id: 1
              }
              
          });
      }(window, google, window.Mapster));


