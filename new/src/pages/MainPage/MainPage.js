import React from "react";

function MainPage({ user }) {
	return (
		<div>
			{user && (
				<div>Добро пожаловать {user.name} {user.lastname}, мы тебя ждали</div>
			)}
		</div>
	);
}

export default MainPage;