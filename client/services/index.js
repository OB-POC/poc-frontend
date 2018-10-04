module.exports = {
 logincall: function(queryData,successCb,errorCb){
   console.log(JSON.stringify({username:queryData.username,password:queryData.password}));
   $.ajax({
     type: "POST",
   url: "http://127.0.0.1:3000/authService/login",
   datatype: "json",
   data : queryData,
    success:successCb,
    error:errorCb
  })
 }
}
