module.exports = {
 logincall: function(queryData,successCb,errorCb){
   console.log(JSON.stringify({username:queryData.username,password:queryData.password}));
   $.ajax({
     type: "POST",
   url: "http://127.0.0.1:3000/login",
   datatype: "json",
   data : queryData,
    success:successCb,
    error:errorCb
  })
},
debitCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : "http://127.0.0.1:3001/debit",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
creditCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : "http://127.0.0.1:3001/credit",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
}
}
