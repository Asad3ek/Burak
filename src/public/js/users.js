
console.log("Users frontend javascript file");

$(function (){
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberStatus:", memberStatus);

      
        axios.post(`/admin/user/edit`, { 
             _Id: id, 
            memberStatus: memberStatus 
        }).then((response) => {
            console.log("response:", response);
            const result = response.data;
            console.log("result:", result);
            if(result.data) {
                console.log("User Updated!");
                $(".member-status").blur();
            } else 
                alert("User Update Failed!");

        }).catch((err)=> {
            console.log(err);
            alert("User Update Failed!");
        })





      
            
    })
})