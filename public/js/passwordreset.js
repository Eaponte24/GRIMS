function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var code = makeid(5);
(function () {
emailjs.init("5tEXcH9M_UCcOCHoY");
})();
function sendMail() {
const emailreset = document.querySelector('#reset-email').value.trim();
if(emailreset) {
var params = {
  name: 'GRIMS',
  send_to: emailreset,
  message: code
  };
  emailjs.send( 'service_uj04vo7', 'template_1ei4vj8', params).then(function (res) {});
  const checkEmail = document.querySelector('.checkEmail');
  checkEmail.innerHTML = 'Check your email';
} else {
  alert('Please enter a valid Email account')
}
};
document.querySelector("#resetemail").addEventListener("click", sendMail);

const resetPassword = async (event) => {
  event.preventDefault();
  const emailreset = document.querySelector('#reset-email').value.trim();
  const emailcode = document.querySelector('#emailcode').value.trim();
  const newPass = document.querySelector('#new-password').value.trim();
  const newPassConfirm = document.querySelector('#new-confirm').value.trim();
  const codeNotMatch = document.querySelector('.codeNotMatch');
  const passNotMatch = document.querySelector('.passNotMatch');
  codeNotMatch.innerHTML = '';
  passNotMatch.innerHTML = '';
   if (code !== emailcode) {    
    codeNotMatch.innerHTML = 'Code does not match';
   } else if (newPass !== newPassConfirm) {  
    passNotMatch.innerHTML = 'Password does not match';
   } else if (newPass.length < 8) {
    alert("Password must be at least 8 characters");
   } else {
    const response =  await fetch(`api/users/reset`, {
      method: 'PUT',
      body: JSON.stringify({
        email: emailreset,
        password: newPass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Success! Password reset");
      document.location.replace(`/`);
    } else {
      alert(`Failed to reset password` );
    }
  }
};

document.querySelector("#newpassConfirm").addEventListener("click", resetPassword);