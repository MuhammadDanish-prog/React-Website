import firebase from 'firebase'




const set_data =()=>{
    return(dispatch)=>{
    console.log("Running")

         dispatch({type:"SETDATA",user:{name:"Muhammad Danish",email:"danishmughal@gmail.com"}})

    }
}

 const facebook_login=()=>{
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(user)
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
        console.log("RUnning")
    }
}

export{
    set_data,
    facebook_login
}