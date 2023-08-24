// your code here


// HTML element variables
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
  messages.addPost();
});

class messageBoard {  
  constructor(currentBoard, message, user){
    this.currentMessageBoard = currentBoard;
    this.message = message;
    this.user = user;
  }

  addPost() {

    var currentMessageBoard = document.getElementsByClassName('posts')[0];
    var user = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    console.log("cMB: " + currentMessageBoard);
    console.log("user: " + user);
    console.log("message: " + message);

    switch(true){
      case (user === ""):
        alert("Name input cannot be blank. Please enter a name.");
        break;
      case (message === ""):
        alert("Message cannot be blank.  Please enter a message to post.");
        break;
      default:
        var divPanel = document.createElement('div');
        var divBody = document.createElement('div');
        var divBodyTextNode = document.createTextNode(message)
        var divFooter = document.createElement('div');
        var divFooterTextNode = document.createTextNode("Posted By: " + user);
      
        divPanel.className = "panel panel-default";
        divBody.className = "panel-body";
        divFooter.className = "panel-footer";
        divBody.append(divBodyTextNode);
        divFooter.append(divFooterTextNode);

        divPanel.appendChild(divBody);
        divPanel.appendChild(divFooter);

        currentMessageBoard.append(divPanel);  
    }
  }

}

var messages = new messageBoard();
