function validate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username == 'admin' && password == 'admin' ) {
    // window.alert("Login Successfully");
    window.location.assign('marketplace.html');
    return false;
  } else {
    document.getElementById('username').disable = true;
    document.getElementById('password').disable = true;
    document.getElementById('submit').disable = true;
    window.alert("Login Failed!");
    return false;
  }
}
