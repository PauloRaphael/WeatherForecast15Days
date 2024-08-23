let fifteenDays;

const WEATHER_API_TOKEN = "" // YOUR API KEY HERE (for some reason)
const URI = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/270?token=${WEATHER_API_TOKEN}`;

fetch(URI)
    .then(response => response.json())
    .then(respondeJson => {

        fifteenDays = respondeJson.data.slice(0, 15);

        const blocks = document.querySelectorAll('.block');

        blocks.forEach((block, index) => {

            //getting data, max and min
            const tempData = {
                DateTemp: fifteenDays[index].date,
                MaxTemp: fifteenDays[index].temperature.max,
                MinTemp: fifteenDays[index].temperature.min
            };

            const paragraphs = block.querySelectorAll('.text-content p');

            paragraphs.forEach((p) => {
                const { DateTemp, MaxTemp, MinTemp } = tempData;

                if (DateTemp.length > 10) {
                    const tempDate = new Date(Date.parse(DateTemp.slice(0, 10).replaceAll('-', ' ')));
                    p.innerHTML = `<span class="material-symbols-outlined">calendar_month</span>${tempDate.toString().slice(0, 15)}`;
                }

                paragraphs[1].textContent = `Max: ${MaxTemp}º`;
                paragraphs[2].textContent = `Min: ${MinTemp}º`;
                

                if (paragraphs.length > 1) {
                    paragraphs[1].innerHTML = "<span class=\"material-symbols-outlined\">thermometer_gain</span>" + paragraphs[1].innerHTML; // Update the second paragraph
                }
                if (paragraphs.length > 2) {
                    paragraphs[2].innerHTML = "<span class=\"material-symbols-outlined\">thermometer_minus</span>" + paragraphs[2].innerHTML; // Update the third paragraph
                }

            });

            //changing image
            if (parseInt(tempData.MaxTemp) > 25) {
                block.getElementsByTagName('img')[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqX1y4reo4wVEMfu53871t0Sv7v-vb9A31Q&s";
            } else if (parseInt(tempData.MaxTemp) > 18) {
                block.getElementsByTagName('img')[0].src = "https://cdn-icons-png.flaticon.com/512/158/158420.png"
            } else {
                block.getElementsByTagName('img')[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilahueN_sF9N0AOquT4rFL1o_qcsttwB3Gg&s"
            }
        });
    });
