$(function(){
    $('#1aBtn').click(function(){
        $('#special').css('color','green');
    });

    $('#1bBtn').click(function(){
        $('.highlight').css('background-color', 'yellow');
    });

    $('#1cBtn').click(function(){
        $('p').each(function(){
            $(this).css('color', 'blue');
            $(this).css('font-size', '24pt');
            $(this).css('font-family', 'DMSerif');
        });
    });

    $('#1dBtn').click(function(){
        $('p').each(function(){
            alert($(this).html());
        });
    })

    $('#2aBtn').click(function(){
        $('#part2Img').hide();
    });
    $('#2bBtn').click(function(){
        $('#part2Img').show();
    });
    $('#2cBtn').click(function(){
        $('#part2Img').fadeOut(2000);
    });

    $('#3aBtn').click(function(){
        $("#part3Div").animate({
            left:'300px',
            opacity:'-=0.2',
            height: '+=200px',
            width: '+=100px'
        });
    })

    $("#username, #password").on("change", function() {
        var usernameVal = $("#username").val();
        var passwordVal = $("#password").val();
    
        if (usernameVal === "") {
            alert("Please enter a value for Username");
            $("#username").focus();
            $("#username").css("background-color", "yellow");
        } else if (passwordVal === "") {
            alert("Please enter a value for Password");
            $("#password").css("background-color", "yellow");
        } else {
            $("#username, #password").css("background-color", ""); // Reset background color
            $("#demo").html(usernameVal + " " + passwordVal);
        }
    });
    
});
