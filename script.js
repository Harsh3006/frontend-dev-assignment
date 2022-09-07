function copyToClipboard(element, tooltip) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(tooltip).addClass('active');
    setTimeout(function(){
        $(tooltip).removeClass('active');
    },5000);
  }
  