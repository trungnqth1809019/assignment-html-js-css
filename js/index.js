document.forms['registerForm']['btnSubmit'].onclick = function () {
    if (validateForm()) {
        doRegister();
    }
};

//ham kiem tra
function validateForm() {
    var isValidate = true, isValidateName = true;
    var isValidatePhone = true, isValidateEmail = true;

    //kiem tra name
    var txtName = document.forms['registerForm']['name'];
    var msgName = document.querySelector("[class*='msgName']");
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Không được để trống mục này!';
        isValidateName = false;
    } else if (txtName.value.length > 50) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Tối đa 50 kí tự!';
        isValidateName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Hợp lệ.';
        isValidateName = true;
    }

    //Kiem tra phone
    var txtPhone = document.forms['registerForm']['phone'];
    var msgPhone = document.querySelector("[class*='msgPhone']");
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Không được để trống mục này!';
        isValidatePhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Hợp lệ.';
        isValidatePhone = true;
    }

    //Kiem tra email
    var txtEmail = document.forms['registerForm']['email'];
    var msgEmail = document.querySelector("[class*='msgEmail']");
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Không được để trống mục này!';
        isValidateEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Hợp lệ.';
        isValidateEmail = true;
    }

    //kiem tra isvalidate
    isValidate = isValidateName && isValidatePhone && isValidateEmail;
    return isValidate;
}

//ham hien thi thong tin moi nhap
function doRegister() {
    alert('Đăng ký thông tin thành công');
    var name = document.forms['registerForm']['name'].value;
    var email = document.forms['registerForm']['email'].value;
    var phone = document.forms['registerForm']['phone'].value;
    var gender = document.forms['registerForm']['gender'].value;
    var txtHobby = document.forms['registerForm']['hobby'];
    var hobby = '';
    for(var i = 0; i < txtHobby.length; i++){
        if (txtHobby[i].checked){
            hobby = hobby + txtHobby[i].value + ', ';
        }
    }
    var introduction = document.forms['registerForm']['introduction'].value;
    var mainContent = document.getElementById('main-content');
    var htmlContent = '';
    htmlContent += '<h3> Thông tin vừa nhập</h3>';
    htmlContent += '<p>Họ và tên: ' + name + '</p>';
    htmlContent += '<p>Email: ' + email + '</p>';
    htmlContent += '<p>Phone: ' + phone + '</p>';
    htmlContent += '<p>Giới tính: ' + gender + '</p>';
    htmlContent += '<p>Sở thích: ' + hobby + '</p>';
    htmlContent += '<p>Giới thiệu về bản thân: ' + introduction + '</p>';
    mainContent.innerHTML = htmlContent;
}