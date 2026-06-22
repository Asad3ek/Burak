console.log("Products frontend javascript file");

$(function () {
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
        if(selectedValue === "DRINK") {
            $("#product-volume").show();
            $("#product-collection").hide();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    })

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
    });

    $(".new-product-status").on("change", async function(e) {
        const id = e.target.id,
        productStatus = $(`#${id}.new-product-status`).val();
        console.log("productStatus:", productStatus);

        try{
            const response = await axios.post(`/admin/product/${ id }`, { productStatus: productStatus }); 
            console.log("response:", response);
            const result = response.data;
            if(result.data) {
                console.log("Product Updated!");
                $(".new-product-status").blur();
            } else 
                alert("Product Update Failed!");

        } catch(err) {
            console.log(err);
            alert("Product Update Failed!");
        }
    })
})


function validdateForm() {
    const productName = $(".product-name").val(),
     productDesc = $(".product-desc").val(),
     productPrice = $(".product-price").val(),
     productStatus = $(".product-status").val(),
     productLeftCount = $(".product-left-count").val(),
     productCollection = $(".product-collection").val();

    if(
        productName === "" ||
        productDesc === "" ||
        productPrice === "" ||
        productStatus === "" ||
        productLeftCount === "" ||
        productCollection === "" 
    ) {
        alert("Please insert all required detailes!")
        return false 
    } else {
        return true;
    }

}



function previewFileHandler(input, order) {
    const imgClassName = input.className;

    const file = $(`.${imgClassName}`).get(0).files[0],
     fileType = file['type'],
     validImageType = ["image/jpeg", "image/png", "image/jpg"]

    if(!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, png, jpg files")
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result)
            };
            reader.readAsDataURL(file);
        }
    }
}