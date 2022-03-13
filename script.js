// const button = document.querySelector('.btn');
// const requestURL = "https://jsonplaceholder.typicode.com/users";

// button.addEventListener('click', getUsers)

// function getUsers() {
// 	console.log(123);
// }
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=94390dfce9b22714cfffb1f769325bc6

const button = document.querySelector('button');
const input = document.querySelector('input');

input.addEventListener('input', () => {
	if (input.value >= 1) { button.classList.remove('hold') }
	else button.classList.add('hold');
})

button.addEventListener('click', () => {
	let city = input.value;
	button.classList.add('hold');
	input.value = "";
	goWeather(city);
})

function goWeather(data = "Urussu") {
	let city = data;
	let appid = '94390dfce9b22714cfffb1f769325bc6'

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&lang=ru`)
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			document.querySelector('.city span').innerHTML = data.name;
			document.querySelector('.temp span').innerHTML = Math.round(data.main.temp - 273);
			document.querySelector('.temp-feels span').innerHTML = Math.round(data.main.feels_like - 273);
			document.querySelector('.speed span').innerHTML = Math.round(data.wind.speed);
			document.querySelector('.speed .gust').innerHTML = Math.round(data.wind.gust);
			document.querySelector('.humidity span').innerHTML = Math.round(data.main.humidity);
			document.querySelector('.pressure span').innerHTML = Math.round(data.main.pressure * 7.50062 * 0.1);
			document.querySelector('.descr').innerHTML = data.weather[0].description;
		})
		.catch(function () {
		});
	if (data != "Urussu") button.classList.remove('hold');
}
goWeather();
