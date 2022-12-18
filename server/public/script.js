const form = document.querySelector('form'),
	title_event = document.querySelector('#title_event'),
	title_question = document.querySelector('#title_question'),
	events = document.querySelector('#events'),
	questions = document.querySelector('#questions');

const createDivEvent = (data) => {
	let div = document.createElement('div');
	let title1 = document.createElement('span');
	let description = document.createElement('span');
	let date = document.createElement('span');
	let student_info = document.createElement('span');
	div.classList.add("event_container");
	title1.textContent = `title: ${data.title}`;
	description.textContent = `description: ${data.description}`;
	date.textContent = `date: ${data.date}`;
	student_info.textContent = `student_info: ${data.username} ${data.email}`;
	div.append(title1, description, date, student_info);
	if (!data.accepted)
	{
		let update = document.createElement('button');
		update.innerText = "Accept event";
		div.append(update);
	}
	return (div);
}

const createDivQuestion = (data) => {
	let div = document.createElement('div');
	let question = document.createElement('p');
	let student_info = document.createElement('p');
	let answer = document.createElement('button');

	div.classList.add("question_container");
	student_info.textContent = `student_info: ${data.email}`;
	question.textContent = `question: ${data.question}`;
	answer.textContent = `Answer the question`;
	div.append(question, student_info, answer);
	return (div);
}

fetch('/events').then((response) => {
	response.json().then((data) => {
		if (data.error) {
			title.textContent = data.error;
		} else {
			values = Object.values(data);
			for (let i = 0; i < values.length; i++)
			{
				events.append(createDivEvent(values[i]));
			}
		}
	})
})

fetch('/questions').then((response) => {
	response.json().then((data) => {
		if (data.error) {
			title.textContent = data.error;
		} else {
			values = Object.values(data);
			for (let i = 0; i < values.length; i++)
			{
				questions.append(createDivQuestion(values[i]));
			}
		}
	})
})


// })



