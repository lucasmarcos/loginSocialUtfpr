export async function onRequestPost(context) {
	const json = await context.request.json();

	const { username, password } = json;

	const request = new Request(
		"https://sistemas2.utfpr.edu.br/utfpr-auth/api/v1",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Referer: "http://sistemas2.utfpr.edu.br",
			},
			body: JSON.stringify({ username, password }),
		},
	);

	const response = await fetch(request);
	return response;
}
