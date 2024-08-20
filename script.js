var fifteenDays;

const WEATHER_API_TOKEN = "" // YOUR API KEY HERE (for some reason)

fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/270?token=${WEATHER_API_TOKEN}`)
    .then(responde => responde.json())
    .then(data => {
        
        fifteenDays = data.data.slice(0, 15);
        
    })
    .then(() => {

        const blocks = document.querySelectorAll('.block');

        blocks.forEach((block, index) => {

            //getting data, max and min
            const tempData = [fifteenDays[index].date, fifteenDays[index].temperature.max, fifteenDays[index].temperature.min];
            
            //changing image
            if(parseInt(tempData[1]) > 25) {
                block.getElementsByTagName('img')[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqX1y4reo4wVEMfu53871t0Sv7v-vb9A31Q&s";
            } else if(tempData[1] > 18) {
                block.getElementsByTagName('img')[0].src = "https://cdn-icons-png.flaticon.com/512/158/158420.png"
            } else {
                block.getElementsByTagName('img')[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilahueN_sF9N0AOquT4rFL1o_qcsttwB3Gg&s"
            }

            // adding hover animation
            block.addEventListener('mouseover', () => {
                block.style.backgroundColor = '#b2d4f0';
            });

            block.addEventListener('mouseout', () => {
                block.style.backgroundColor = (index % 2 === 0) ? '#d4e6f1' : '#e5e8e8';
            });

            // getting all p's
            const paragraphs = block.querySelectorAll('.text-content p');

            paragraphs.forEach((p, pIndex) => {
                
                //formating data
                if (tempData[pIndex].length > 10) {

                    let tempDate = new Date(Date.parse(tempData[pIndex].slice(0, 10).replaceAll("-", " ")));

                    tempDate = tempDate.toString().slice(0, 15);
                    
                    p.innerHTML = "<span class=\"material-symbols-outlined\">calendar_month</span>" + tempDate;

                } else {
                    p.innerHTML = tempData[pIndex] + "º";
                }
            
            });
        });
    }).then(() => {

        document.querySelectorAll('.block').forEach(block => {
            const paragraphs = block.querySelectorAll('.text-content p');

            // Check if there are at least 3 paragraphs
            if (paragraphs.length > 1) {
                paragraphs[1].innerHTML = "<span class=\"material-symbols-outlined\">thermometer_gain</span>" + paragraphs[1].innerHTML; // Update the second paragraph
            }
            if (paragraphs.length > 2) {
                paragraphs[2].innerHTML = "<span class=\"material-symbols-outlined\">thermometer_minus</span>" + paragraphs[2].innerHTML; // Update the third paragraph
            }
        });

    });