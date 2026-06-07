const currentTemp = document.querySelector ('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.74859;
const lon = 6.63607;
const apiKey = 'f1bc926cadcb58bf1a382fa41fad77e4';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch () {
    try{
        const response = await fetch (url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            currentTemp.textContent = data.main.temp;
        }

        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }

}

apiFetch();