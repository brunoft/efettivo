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
  var task = document.getElementById("task").value;
  var description = document.getElementById("description").value;
  e.preventDefault();
  createTask(task,description);
  form.reset();


});

function createTask(taskName,description){
  console.log(counter);
  counter+=1;
  console.log(counter);
  var task={
    task: taskName,
    id:counter,
    description:description
  }
  let db= firebase.database().red("taks/"+counter);
  db.set(task);

}
