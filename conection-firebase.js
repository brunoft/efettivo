// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfcwfplRjbWhhx_dyxZiDZojJwMoxSwMU",
  authDomain: "clientes-9cc69.firebaseapp.com",
  databaseURL: "https://clientes-9cc69.firebaseio.com",
  projectId: "clientes-9cc69",
  storageBucket: "clientes-9cc69.appspot.com",
  messagingSenderId: "414237227516"
};
firebase.initializeApp(config);

var d = new Date();
var t = d.getTime();

var counter =t;

document.getElementById("form").addEventListener("submit",(e)=>{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  e.preventDefault();
  createTask(name,email);
  form.reset();


});

function createTask(name,email){
  console.log(counter);
  counter+=1;
  $.getJSON("https://jsonip.com?callback=?").then(function(data){
          var datetime = new Date();
          var task={
            id:counter,
            name: name,
            email: email,
            ip: data.ip,
            date: datetime.toLocaleDateString()+" "+datetime.toLocaleTimeString()
          }
          console.log(task);
          let db= firebase.database().ref("leads/"+counter);
          db.set(task);
        });
}


function getUserIP(){
  $.getJSON("https://jsonip.com?callback=?", function (data){
    // console.log(data.ip);
    return data;

  });

}
