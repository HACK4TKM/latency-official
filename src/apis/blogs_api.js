const BASE_URL = 'https://backend.hestiatkmce.live';

export async function get_blogs() {
	const url = BASE_URL + '/blog/';
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	let data = null;
	let status = response.status;
	if (status === 200) data = await response.json();
	return { status: status, data: data };
}

export async function get_faqs() {
	const url = BASE_URL + '/sponsors/faq/';
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	let data = null;
	let status = response.status;
	if (status === 200) data = await response.json();

	return { status: status, data: data };
}

export async function get_sponsors() {
	const url = BASE_URL + '/sponsors/hestia/';
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	let data = null;
	let status = response.status;
	if (status === 200) data = await response.json();
	return { status: status, data: data };
}
