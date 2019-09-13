var firebaseConfig = {
    apiKey: "AIzaSyDoHO89lanbk1_OqG9oBPSRYkYhc5OpHlw",
    authDomain: "testproject-f89be.firebaseapp.com",
    databaseURL: "https://testproject-f89be.firebaseio.com",
    projectId: "testproject-f89be",
    storageBucket: "testproject-f89be.appspot.com",
    messagingSenderId: "282046642874",
    appId: "1:282046642874:web:c4de5e6851594a6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
////////////////////// function logout ////////////////////////

function test(){
  alert('สlllllllllllllll')
}
async function resetPassword(){
  let params = (new URL(document.location)).searchParams;
  let email = params.get("email");
  let password = document.getElementById('newPass').value;
  //console.log(email)
  let validate = await resetValidate(email,password)
  if(validate){
    // console.log('hhhhh')
   alert('สร้างรหัสผ่านใหม่เรียบร้อย')
  }else{
   
  }
}


async function resetValidate(email,password){

 
  let validate = false;
  let oldpassword = null;

  await db.collection("user").where("email", "==", email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      
       if(doc.data().email == email){
        oldpassword = doc.data().password;
        db.collection("user").doc(doc.id).update({password: `${password}`});
       
        validate = true;
        
       }
       console.log("come to check")

    });

  });

  if(validate == true){
  await increaseToFriebaseAuth(email,oldpassword,password);
  }
  return validate
}

async function increaseToFriebaseAuth(email,oldpassword,password){
  let user
  let loadFinish = false
  await firebase.auth().signInWithEmailAndPassword(email,oldpassword).then(function (data) {
   
    user = firebase.auth().currentUser;
    loadFinish = true;
 }).catch(function (error) {
   // Handle Errors here.
   
   var errorCode = error.code;
   var errorMessage = error.message;
   if (errorCode != 'auth/wrong-password') {
     alert('รหัสผ่านไม่ถูกต้อง');
   } else {
     alert(errorMessage);

   }

 });

 if(loadFinish){
  await user.updatePassword(password).then(function() {
  // Update successful.
  
  // alert("เปลี่ยนรหัสผ่านเรียบร้อย")
  }).catch(function(error) {
  // An error happened.
  console.log(error)
  });
  
  }
}