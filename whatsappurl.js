function whatsapp(){
    var name=document.getElementById('name').value;
    var number=document.getElementById('phonenumber').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    var whatsappurl="https://wa.me/+256726721362?text="
    +"Name of agent:"+name +"%0a"
    +"mobile number:"+number +"%0a"
    +"email:"+email +"%0a"
    +"Order:"+message;

    window.open(whatsappurl,"_blank")
}