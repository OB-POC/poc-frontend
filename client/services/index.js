import config from '../config.js'
module.exports = {
 logincall: function(queryData,successCb,errorCb){
   console.log(JSON.stringify({username:queryData.username,password:queryData.password}));
   console.log(config.loginUrl+"/login");
   $.ajax({
     type: "POST",
<<<<<<< HEAD
   url: config.loginUrl+"/login",
=======
   url: "http://127.0.0.1:3000/login",
>>>>>>> 4d328c39f702778afa92c919430589a6d3b85666
   datatype: "json",
   data : queryData,
    success:successCb,
    error:errorCb
  })
},
debitCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
<<<<<<< HEAD
    url : config.accountUrl+"/debit",
=======
    url : "http://127.0.0.1:3001/debit",
>>>>>>> 4d328c39f702778afa92c919430589a6d3b85666
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
creditCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
<<<<<<< HEAD
    url : config.accountUrl+"/credit",
=======
    url : "http://127.0.0.1:3001/credit",
>>>>>>> 4d328c39f702778afa92c919430589a6d3b85666
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
}
}
