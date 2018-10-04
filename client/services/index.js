module.exports = {
 logincall: function(queryData,successCb,errorCb){
   $.ajax({
     type: "POST",
   url: "http://127.0.0.1:3000/authService/login",
   body : JSON.stringify({username:queryData.username,password:queryData.password}),
   contentType: "application/json;",
    success:successCb,
    error:errorCb
  })
 },

 debitcall: function(successCb,errorCb) {
   $.ajax({
     type :"GET",
     url : "http://localhost:3001/accounts/debit",
     contentType : "application/json",
     success : successCb,
     error : errorCb
   })
 }
}
