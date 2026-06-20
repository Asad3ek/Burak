console.log("Signup frontend javascript file");

$(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let fileName; 

    fileTarget.on("change", function () {
        if(window.FileReader) {
            const uploadFile = $(this)[0].files[0];
            const fileType = uploadFile["type"];
            const validImageType = ["image/jpg", "image/jpeg", "image/png"]
            if(!validImageType.includes(fileType)) {
                alert("Allowed only png, jpg, jpeg files, please upload requires!")
            } else {
                if(uploadFile) {
                    $(".upload-img-frame")
                    .attr("src", URL.createObjectURL(uploadFile))
                    .addClass("Success")
                }

                fileName = $(this)[0].files[0].name;
            }
            $(this).siblings(".upload-name").val(fileName);
        }
    })
})

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    console.log("memberPassword:", memberPassword);
    console.log("confirmPassword:", confirmPassword);
    console.log("equal:", memberPassword === confirmPassword);

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

    const memberImage = $(".member-image").get(0)?.files[0]?.name ?
        $(".member-image").get(0)?.files[0]?.name: null;
    if(!memberImage) {
        alert("Plase insert restaurant image");
        return false;
    }

}