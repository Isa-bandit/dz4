import React from "react";

function ErrorPage({ user }) {
	return (
		<div>
			{user && (
				<div>Тебе сюда нельзя - {user.name} {user.lastname}</div>
			)}
		</div>
	);
}

export default ErrorPage;