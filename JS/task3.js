var login = prompt("Введіть ваш логін");

switch (login) {
	case "Admin":
		var password = prompt("Введіть ваш пароль");

		switch (password) {
			case "TheMaster":
				alert("Welcome!");
				break;
			case null:
				alert("Canceled");
				break;
			default:
				alert("Wrong password");
				break;
		}
		break;

	case null:
		alert("Canceled");
		break;

	default:
		alert("I don`t know you");
		break;
}