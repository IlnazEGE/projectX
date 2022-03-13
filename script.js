// const button = document.querySelector('.btn');
// const requestURL = "https://jsonplaceholder.typicode.com/users";

// button.addEventListener('click', getUsers)

// function getUsers() {
// 	console.log(123);
// }
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=94390dfce9b22714cfffb1f769325bc6

const weatherButton = document.querySelector('.weather button');
const weatherInput = document.querySelector('.weather input');

weatherInput.addEventListener('input', () => {
	if (weatherInput.value.length >= 1) {
		weatherButton.classList.remove('hold');
	} else {
		weatherButton.classList.add('hold');
	}
})

weatherButton.addEventListener('click', e => {
	e.preventDefault();
	let city = weatherInput.value;
	weatherButton.classList.add('hold');
	weatherInput.value = "";
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
	// if (data != "Urussu") button.classList.remove('hold');
}
goWeather();

//////////////////////////////////////////////////////////


const cryptoButton = document.querySelector('.crypto button');
const cryptoInput = document.querySelector('.crypto input');

cryptoInput.addEventListener('input', () => {
	if (cryptoInput.value.length >= 1) {
		cryptoButton.classList.remove('hold');
	} else {
		cryptoButton.classList.add('hold');
	}
})


cryptoButton.addEventListener('click', e => {
	e.preventDefault();
	let coin = cryptoInput.value;
	cryptoButton.classList.add('hold');
	cryptoInput.value = "";
	goСrypto(coin);
})


function goСrypto(data = "bitcoin") {
	const cryptoName = data;
	const cryptoAPI = `https://api.coingecko.com/api/v3/coins/${cryptoName}`;

	fetch(cryptoAPI)
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			console.log(data);
			document.querySelector('.crypto-name .crypto-name-full').innerHTML = data.name;
			document.querySelector('.crypto-name .crypto-name-ticker').innerHTML = data.tickers[0].base;
			document.querySelector('.crypto-price-current span').innerHTML = data.tickers[0].last;
		})
		.catch(function () {
		});
}

goСrypto();


