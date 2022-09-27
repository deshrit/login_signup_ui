function validate() {

	const fullname = document.getElementById("fullname").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const error_div = document.getElementById("error-div");
	error_div.style.color = "red";


	if(username == "" || password == "" || fullname == "") {
		error_div.innerText = "Fields cannot be empty";
		return false;
	}
	else if(!fullname.match(/^[a-zA-Z]+./)) {
		error_div.innerText = "Invalid name";
		return false;
	}
	else if(!username.match(/^[a-zA-Z]+./)) {
		error_div.innerText = "Invalid username";
		return false;
	}
	else if(password.length < 7) {
		error_div.innerText = "Password must at least 7 characters";
		return false;
	}
	return true;
}