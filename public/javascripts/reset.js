
$(document).ready(function(e) {
    $("#reset").on("click", function(e){
        let message = "";
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        
        if(!validatePassword(password, confirmPassword)){
            message = "Passwords do not match";
            e.preventDefault();
        }
        $("#errorMessage").html(message);
      });
});

function validatePassword(password, confirmPassword){
    return password === confirmPassword;
}