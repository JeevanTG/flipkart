$(document).ready(function (e) {
    var obj;
    var Name;
    var Email;
    var password;
    var username;
    var Mobile;
    var Desc;
    //function called when continue button is clicked
    $("#continue").click(function (e) {
        e.preventDefault()
        Name = $("#Name").val()
        Email = $("#Email").val()
        password = $("#password").val()
        Mobile = $("#Mobile").val()
        Address = $("#Addr").val()
        obj = {
            "name": Name,
            "email": Email,
            "password": password,
            "mobile": Mobile,
            "address": Addr
        }
        details = JSON.stringify(obj)
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/auth/register')
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
        xhr.send(details)
        xhr.onload = function () {
            if (xhr.status == 200) {
                var result = JSON.parse(xhr.response)
                console.log(result)
                if (result.error == true) {
                    alert(result.message)
                }
                else {
                    alert(result.message)
                    window.location.href = "landing.html";
                }

            }
            else {
                alert(result.message)
            }
        }
    })
})
