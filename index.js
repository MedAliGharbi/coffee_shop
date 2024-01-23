
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}       
   

$('#log').click(function() {
    var username= $('#user').val()
    var password= $('#pass').val()
    console.log('test',username,password)
    if(username==='' || password===''){
        alert ('please fill all the blanks')
    }else if((password.length)<8){
        alert ('your password shoudld be 8 characteres')
    }
    alert ('you are now registred')
    
    })

