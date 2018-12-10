document.forms['registerForm']['btnSubmit'].onclick = function () {
    var phone = document.forms['registerForm']['phone'];
    alert(phone.value);

    // if(validateForm()){
    //  doRegister();
    // }
};

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
    } else if(txtName.value >50){
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Tối đa 50 kí tự!';
        isValidateName = false;
    }  else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Hợp lệ.';
        isValidateName = true;
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
    
    //kiem tra isvalidate
    isValidate = isValidateName && isValidateLastName && isValidatePassword && isValidateConfirmPassword && isValidateAddress && isValidatePhone && isValidateAvatar && isValidateEmail;
    return isValidate;
}

function doRegister() {
    var txtName = document.forms['registerForm']['name'].value;
    var txtEmail = document.forms['registerForm']['email'].value;
    var txtPhone = document.forms['registerForm']['phone'].value;
    var txtGender = document.forms['registerForm']['gender'].value;
    var txtLike = document.forms['registerForm']['like'];
    var txtIntroduction = document.forms['registerForm']['introduction'].value;
    var mainContent = document.getElementById('main-content');
    var htmlContent = '';
    htmlContent += '<p>Họ và tên: ' + txtName + '</p>';
    htmlContent += '<p>Email: '+ txtEmail + '</p>';
    htmlContent += '<p>Phone: '+ txtPhone + '</p>';
    htmlContent += '<p>Giới tính: '+ txtGender + '</p>';
    htmlContent += '<p>Sở thích: '+ txtLike + '</p>';
    htmlContent += '<p>Giới thiệu về bản thân: ' + txtIntroduction + '</p>';
    mainContent.innerHTML = htmlContent;
}