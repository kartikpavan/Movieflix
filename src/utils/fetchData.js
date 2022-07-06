const key = "520868e220728d24ddeec8604eea6850";

export const fetchData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
