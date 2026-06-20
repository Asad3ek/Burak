console.log("Signup frontend javascript file");

$(function () {

})

function validateSignuoForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    console.log(memberPassword);
    const confirmPassword = $(".confirm-password").val();

    if (memberNick === "" ||
        memberPhone === "" ||
        memberPassword === "" ||
        confirmPassword === ""
    ) {
        alert("Please insert all required inputs!")
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Password confirmation does not match, please check");
        return false;
    }

}