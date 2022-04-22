document.querySelector('form').addEventListener('submit', singUpFn);

var usersData;
if(localStorage.getItem('UsersData') === null) {
    usersData = []
} else {
    usersData = JSON.parse(localStorage.getItem('UsersData'));
}
function singUpFn() {
    event.preventDefault();
    var userObj = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        userName: document.querySelector('#mobile_no').value
    }
    usersData.push(userObj);
    localStorage.setItem('UsersData', JSON.stringify(usersData));
    alert("signup Successfully Login Now");
    
}