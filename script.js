var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var sub = document.getElementById("submitBtn");
function submitMyForm(){
    document.infoForm.submit();
    document.infoForm.reset();
    modal.style.display = "block";
}
closeBtn.onclick = function(){
        modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target==modal){
        modal.style.display = "none";
    }
}