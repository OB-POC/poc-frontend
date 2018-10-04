module.exports = {
 logincall: function(username,pass){
  const settings = {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body : JSON.stringify({username:username,password:pass})
  };
  // const response = await fetch(`http://localhost:8080/login` , settings)
  // const body = await response.json();
  return {authorised:true}
 }
}
