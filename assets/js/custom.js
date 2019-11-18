$(function() {
    var $sendMessage = $(".sendMessage");
    var $messageForm = $(".messageForm");

    $sendMessage.on("click", function() {
        var mailto = "mailto:kim.3993+portfolio@gmail.com";

        var name = $messageForm.find("#name").val();
        var email = $messageForm.find("#email").val();
        var message = $messageForm.find("#message").val();

        mailto += `?subject=${name} <${email}> - Keep in touch`;
        mailto += `&body=${message}`

        window.location.href = mailto;
    })
})