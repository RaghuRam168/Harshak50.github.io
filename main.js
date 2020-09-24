var firebaseConfig = {
    apiKey: "AIzaSyCJHS46Cw5oZvURLgWskzV9aF3WR19Smg0",
    authDomain: "contactform-c0a0c.firebaseapp.com",
    databaseURL: "https://contactform-c0a0c.firebaseio.com",
    projectId: "contactform-c0a0c",
    storageBucket: "contactform-c0a0c.appspot.com",
    messagingSenderId: "846497232685",
    appId: "1:846497232685:web:d9fbe7b0137a66b3cf05a4",
    measurementId: "G-0F2RR4BBYD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages');



//LISTEN FOR FORM SUBMIT
document.getElementById('contactform').addEventListener('submit',submitForm);

//submit form
function submitForm(e){
  e.preventDefault();
   var name =getInputVal('name');  
   var name =getInputVal('email');  
   var name =getInputVal('phone');  
   var name =getInputVal('message');  
  


saveMessage(name,email,phone,message);
document.querySelector('.alert').getElementsByClassName.display='block';

setTimeout(function(){
    document.querySelector('.alert').getElementsByClassName.display='none';
},3000);

  document.getElementById('contactform').reset;
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save msg to firebase
function saveMessage(name,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:  name,
        email : email,
        phone: phone,
        message :message
    });
}