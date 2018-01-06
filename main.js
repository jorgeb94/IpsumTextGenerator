var data = {
  text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
}

function addText(){

    var con = document.getElementById('content');
    var num = document.getElementById('exampleSelect1').value;

    //if(con.innerText == 'Click to Generate Text!'){
      //changes the button form 'Generate Text' to 'Generate More Text'
      $('#btn').html('Generate Text ' + '<span class="badge badge-primary badge-pill" id="badge"></span>' );

      //takes out the 'Click to Generate Text!'
      $('#content').html('');

      //appends text to generate more text when button is clicked
      for(var i = 0; i < num; i++){
        $('#content').append( data.text );
      }

      //update badge to number of paragraphs
        $('#badge').html(num);

      //alert text to left align
      $('div').last().addClass('align-left');

      //remove successAlert if true
      removeAlert();


}

var btn = document.getElementById('btn');

//adds eventListener to the button and executes the addText function
btn.addEventListener('click', addText);

//clear text function
var clearBtn = document.getElementById('clearBtn');

function clearText() {
  //align text to center
  $('div').last().removeClass('align-left');

  //clears text
  $('#content').html('Click to Generate Text!');

  //clears paragraph count and set to 0
  $('#badge').html('');

  //changes btn back to 'Generate Text'
  $('#btn').html('Generate Text ' + '<span class="badge badge-primary badge-pill" id="badge"></span>' );

  //remove successAlert if true
  removeAlert();

}

//add eventListener to clearBtn to clear text from content
clearBtn.addEventListener('click', clearText);

//copytext
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  successAlert();
}

//remove copy Alert when the 'X' is clicked
function closeCopyAlert() {
  var successAlert = document.getElementById('visible');
  successAlert.style.display = "none";
}

var closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', closeCopyAlert);


//function to display copy
function successAlert() {
  var successAlert = document.getElementById('visible');
  successAlert.style.display = "block";
}

function removeAlert() {
  var successAlert = document.getElementById('visible');
  successAlert.style.display = "none";
}
