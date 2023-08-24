// your code here


// HTML element variables
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
  messages.addPost();
});

class messageBoard {  
  constructor(currentBoard, message, poster){
    this.currentMessageBoard = currentBoard;
    this.message = message;
    this.poster = poster;
  }
 
  getCurrentBoard() {
    return currentMessageBoard;
  }
  setCurrentBoard(board) {
    this.board = board;
  }

  addPost() {

    var currentMessageBoard = document.getElementsByClassName('posts')[0];
    var poster = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    console.log("cMB: " + currentMessageBoard);
    console.log("poster: " + poster);
    console.log("message: " + message);

    switch(true){
      case poster:
        alert("Name input cannot be blank. Please enter a name.");
      case message:
        alert("Message cannot be blank.  Please enter a message to post.");
      default:
        var divPanel = document.createElement('div');
        var divBody = document.createElement('div');
        var divFooter = document.createElement('div');
        divPanel.className = "panel panel-default";
        divBody.className = "panel-body";
        divFooter.className = "panel-footer";
        divPanel.appendChild(divBody);
        divPanel.appendChild(divFooter);

        divBody.innerHTML = message;
        divFooter.innerHTML = "Posted By: " + poster;

        

        currentMessageBoard.append(divPanel);
        
    }
  }

}

var messages = new messageBoard();
