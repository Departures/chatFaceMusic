$("#friendList").height = $(window).height();






//
// $inputMessage = $(".inputMessage");
// $messages = $('.messages');
//
// $(function () {
//     var socket = io();
//     $inputMessage.keyup(function(e){
//         if (e.keyCode === 13) {
//             $(".inputMessage").trigger("enterKey");
//         }
//     });
//     $inputMessage.on("enterKey", function(){
//         console.log('sent');
//         var msg = $inputMessage.val();
//         socket.emit('chatMessage', msg);
//         $inputMessage.val('');
//         $inputMessage.focus();
//         $messages.append('<div class="right">'+msg+'</div>');
//         return false;
//     });
//     // socket.on('chatMessage', (msg) => {
//     //     console.log(msg);
//     //     $messages.append('<li>'+msg+'</li>');
//     // });
//     socket.on('display', (msg) => {
//         console.log(msg);
//         $messages.append('<div class="left">'+msg+'</div>');
//     });
//
// });
