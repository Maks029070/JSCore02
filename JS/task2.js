var login = prompt("Введіть ваш логін");

if (login == "Admin") {
	var password = prompt("Введіть ваш пароль");

	if (password == "TheMaster") {
		alert("Welcome!");
	}
	else if (password == null) {
		alert("Canceled");
	}
	else {
		alert("Wrong password");
	}
}

else if (login == null) {
	alert("Canceled");
}

else {
	alert("I don`t know you");
}