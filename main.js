// Initialize Firebase 
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
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name,  email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }