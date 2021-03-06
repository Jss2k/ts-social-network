import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: #fff;
	width: 50vw;
	margin: 5em auto;

.logo {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}

form {
	display: grid;
	grid-template-columns: 1fr;
}

input {
	color: rgb(38, 50, 56);
	font-weight: 600;
	font-size: 16px;
	letter-spacing: 1px;
	border-color: #55abee;
	padding: 10px 20px;
	border: none;
	border-radius: 20px;
	outline: none;
	box-sizing: border-box;
	border: 2px solid rgb(0, 0, 0, 0.2);
	text-align: center;
	margin-bottom: 27px;
}

form div {
  color: rgb(216 20 20)
}

h3 {
	font-weight: bold;
	font-size: 23px;
	text-align: center;
}

.signup-btn {
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	cursor: pointer;
	outline: none;
}

button,
button span {
	border-radius: 25px;
}

button {
	background-color: #55abee;
	border: 0;
	color: #fff;
	font-weight: bold;
}

button span {
	display: block;
	padding: 0.4em 0.2em;
	transition: all 0.1s linear;
	font-size: 15px;
}

button:hover {
	background: #228dccf;
}

button:active span {
	background-color: rgba(0, 0, 0, 0.2);
}

button span:focus {
	outline: 0;
}

button:disabled {
	opacity: 0.5;
}

a {
	text-decoration: none;
	color: #55abee;
}

.login {
	text-align: center;
}

.register {
	text-align: center;
}


`