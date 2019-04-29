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
  $.getJSON("https://jsonip.com?callback=?").then(function(data){
          var datetime = new Date();
          var task={
            id:counter,
            task: taskName,
            description:description,
            ip: data.ip,
            date: datetime.toLocaleDateString()+" "+datetime.toLocaleTimeString()
          }
          console.log(task);
          let db= firebase.database().ref("teste/"+counter);
          db.set(task);
        });
}

// function DateTime()  {
//    var s = new Date();
//    showDateTime = s.toLocaleString()
//    window.status=showDateTime
//    document.title=showDateTime
//    document.getElementById("show").innerHTML="<font face='arial' color='black' size='3'>"+showDateTime+"</font>"
//    setTimeout("DateTime();", 1000)
// }


// var timestamp = new Date().getTime();
// myRootRef.set(timestamp);
//
// myRootRef.on('value', function(snapshot) {
//     var currDate = new Date();
//     var snapshotTimestamp = snapshot.val();
//
//     //you can operate on timestamps only...
//     console.log("Snapshot timestamp: " + snapshotTimestamp);
//
//     if(currDate.getTime() >= snapshotTimestamp) {
//         //do something
//     }
//
//     //...or easily create date object with it
//     console.log("Snapshot full date: " + new Date(snapshotTimestamp));
//
//     if (currDate >=  new Date(snapshotTimestamp)){
//         //do something
//     }
//
// });



function getUserIP(){
  $.getJSON("https://jsonip.com?callback=?", function (data){
    // console.log(data.ip);
    return data;

  });

}
