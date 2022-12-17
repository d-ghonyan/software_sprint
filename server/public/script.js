const form = document.querySelector('form'),
	title = document.querySelector('#title'),
	events = document.querySelector('#events');

const createDiv = (data) => {
	let div = document.createElement('div');
	let title1 = document.createElement('div');
	let description = document.createElement('div');
	let date = document.createElement('div');
	let student_info = document.createElement('div');
	let update = document.createElement('button');

	div.classList.add("event_container");
	title1.textContent = `title: ${data.title}`;
	description.textContent = `description: ${data.description}`;
	date.textContent = `date: ${data.date}`;
	student_info.textContent = `student_info: ${data.username} ${data.email}`;
	update.innerText = "Accept event";
	div.append(title1, description, date, student_info, update);
	return (div);
}

// form.addEventListener('submit', (e) => {
	// e.preventDefault()

fetch('/events').then((response) => {
	response.json().then((data) => {
		console.log(data);
		if (data.error) {
			title.textContent = data.error;
		} else {
			values = Object.values(data);
			for (let i = 0; i < values.length; i++)
			{
				console.log(values[i]);
				events.append(createDiv(values[i]));
			}
		}
	})
})
// })



