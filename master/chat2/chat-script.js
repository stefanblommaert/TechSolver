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