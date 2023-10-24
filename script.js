// coding implementation
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

function commentForm(f)
{
    if(f.email.value.length == 0) {
        alert("Email không có");
        f.email.focus();
        return ;
    }
    if(check_email.test(f.email.value) == false) {
        alert("Email không có");
        f.email.focus();
        return;
    }
    if(f.com.value.length == 0 ) {
        alert("Không có bình luận");
        f.com.focus();
        return;
    }
    if(f.rate.value.length == 0) {
        alert("Không có đánh giá");
        f.rate.focus();
        return;
    }
    if(isNaN(f.rate.value)) {
        alert("Đánh giá phải là số");
        f.rate.focus();
        return;
    }
    alert("Success"); 
}
// end coding implementation