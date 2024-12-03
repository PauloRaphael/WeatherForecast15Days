const WEATHER_API_TOKEN = "d751a05b1922fc19aacfb8d7faf78ea7" // YOUR API KEY HERE (for some reason)
const URI_270_DAYS = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/270?token=${WEATHER_API_TOKEN}`;

const HAPPINESS_THRESHOLD = 18;
const BEARABLE_THRESHOLD = 25;
const UNBERABLE_TRESHOLD = 32;

const THERMOMETER_GAIN_ICON =  "<span class=\"material-symbols-outlined\">thermometer_gain</span>";
const THERMOMETER_MINUS_ICON = "<span class=\"material-symbols-outlined\">thermometer_minus</span>";
const CALENDAR_ICON = "<span class=\"material-symbols-outlined\">calendar_month</span>"

const IMAGES = {
    death: "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/1024x1024/square-1497634598-eithe-981211-big.gif?resize=980:*",
    hot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqX1y4reo4wVEMfu53871t0Sv7v-vb9A31Q&s",
    warm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuetdRDiY-masFfSqJ6LNP9Qs-aoSOEO80w&s",
    cold: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilahueN_sF9N0AOquT4rFL1o_qcsttwB3Gg&s"
};

function update_date() {

    document.getElementById("refresh").type = "hidden";
    document.getElementById("toCelcius").type = "hidden";
    document.getElementById("toFarenheit").type = "hidden";

    const blocks = document.querySelectorAll('.block');

    blocks.forEach((block) => {

        const paragraphs = block.querySelectorAll('.text-content p');

        paragraphs[0].innerHTML = `Loading...`;
        paragraphs[1].innerHTML = `Loading...`; 
        paragraphs[2].innerHTML = `Loading...`;

        blockImage = block.getElementsByTagName('img')[0];

        blockImage.src = "https://via.placeholder.com/50"

    });

    fetch(URI_270_DAYS, {cache: "no-cache"})
    .then(response => response.json())
    .then(responseJson => {
        
        const fifteenDaysWeather = responseJson.data.slice(0, 15);
        document.getElementById("title").innerHTML = `Previsão do tempo para os proximos 15 dias em ${responseJson.name}!`; 

        blocks.forEach((block, index) => {
            
            const { date: DayDate, temperature: { max: DayMaxTemp, min: DayMinTemp } } = fifteenDaysWeather[index];

            const paragraphs = block.querySelectorAll('.text-content p');

            const date = new Date(Date.parse(DayDate.replace('-', ' '))).toDateString();

            paragraphs[0].innerHTML = `${CALENDAR_ICON} ${date}`;
            paragraphs[1].innerHTML = `${THERMOMETER_GAIN_ICON} Max: ${DayMaxTemp}º`; 
            paragraphs[2].innerHTML = `${THERMOMETER_MINUS_ICON} Min: ${DayMinTemp}º`;

            blockImage = block.getElementsByTagName('img')[0];

            blockImage.src = getWeatherImage(DayMaxTemp);

        }
        
    );

    document.getElementById("refresh").type = "button";

    document.getElementById("toFarenheit").type = "button";

    }).catch(error =>{
        console.error('Error fetching weather data:', error);
    });

const getWeatherImage = (temperature) => {
    if(temperature > UNBERABLE_TRESHOLD) {
        return IMAGES.death
    } else if (temperature > BEARABLE_THRESHOLD) {
        return IMAGES.hot;
    } else if (temperature > HAPPINESS_THRESHOLD) {
        return IMAGES.warm;
    } else {
        return IMAGES.cold;
    }
 }
}

function to_farenheit() {

    document.getElementById("toFarenheit").type = "hidden";
    document.getElementById("toCelcius").type = "button";

    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach((block) => {

        const paragraphs = block.querySelectorAll('.text-content p');

        max = parseInt(paragraphs[1].innerHTML.slice(-3).slice(0, 2));
        min = parseInt(paragraphs[2].innerHTML.slice(-3).slice(0, 2));
        
        max = parseInt((max * 1.8 + 32));
        min = parseInt((min * 1.8 + 32));

        paragraphs[1].innerHTML = `${THERMOMETER_GAIN_ICON} Max: ${max}º`; 
        paragraphs[2].innerHTML = `${THERMOMETER_MINUS_ICON} Min: ${min}º`;

    });
}

function to_celcius() {
    
    document.getElementById("toFarenheit").type = "button";
    document.getElementById("toCelcius").type = "hidden";

    const blocks = document.querySelectorAll('.block'); 

    blocks.forEach((block) => {

        const paragraphs = block.querySelectorAll('.text-content p');

        max = parseInt(paragraphs[1].innerHTML.slice(-3).slice(0, 2));
        min = parseInt(paragraphs[2].innerHTML.slice(-3).slice(0, 2));
        
        max = parseInt(Math.ceil((max - 32) * 5 / 9));
        min = parseInt(Math.ceil((min - 32) * 5 / 9));

        paragraphs[1].innerHTML = `${THERMOMETER_GAIN_ICON} Max: ${max}º`; 
        paragraphs[2].innerHTML = `${THERMOMETER_MINUS_ICON} Min: ${min}º`;

    });

}

function toggle_dark_mode() {

    document.body.classList.toggle("dark-mode");
    
}

const button = document.querySelector('.toggle-button');

button.addEventListener('click', () => {
    button.classList.toggle('active');
});


document.getElementById("refresh").onclick = update_date;

document.getElementById("toFarenheit").onclick = to_farenheit;

document.getElementById("toCelcius").onclick = to_celcius;

document.getElementById("toggle-button").onclick = toggle_dark_mode;


update_date();
