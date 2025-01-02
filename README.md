---

# Weather Forecast 15 Days 🌦️

I created this project because I was tired of having to open websites and search for the 15-day weather forecast. With this project, you can see the weather forecast for the next 15 days in a specific city.  

It's a simple project built using only **HTML**, **CSS**, and **JavaScript**. This project also helped me understand how to better use APIs, refactor code for maximum efficiency, and make the code easier to modify and maintain.

---

## Features ✨
- 🌙 Light/Dark Mode Toggle
- 📆 15-Day Weather Forecast
- 🌡️ Fahrenheit and Celsius Toggle
- 🔄 Refresh Function to update the forecast
- 🖼️ Customizable Images for weather conditions
- ✅ User-Friendly Interface

---

## How to Run 🚀

### 1. Clone the Project  
```bash
git clone https://github.com/PauloRaphael/WeatherForecast15Days
```

### 2. Open the App  
Open the **index.html** file in any modern browser to see the 15-day forecast.

---

## Customization 🛠️

### 1. Set Up Your API Key  
- Get an API key from [Climatempo Advisor](https://advisor.climatempo.com.br).  
- Insert the key into the `WEATHER_API_TOKEN` constant in **script.js**:  

```javascript
const WEATHER_API_TOKEN = ""; // YOUR API KEY HERE
```

### 2. Temperature Preferences 🌡️  
You can adapt these constants to suit your temperature preferences:  

```javascript
const HAPPINESS_THRESHOLD = 18; // Comfortable temperature
const BEARABLE_THRESHOLD = 25; // Warm but tolerable
const UNBEARABLE_THRESHOLD = 32; // Too hot to handle
```

### 3. Customize Weather Images 🖼️  
You can change the images used for different temperature ranges. The image settings define the image displayed on the forecast card:  

- ❄️ **Cold**: Below `HAPPINESS_THRESHOLD`  
- 🌤️ **Warm**: Below `BEARABLE_THRESHOLD`  
- 🔥 **Hot**: Below `UNBEARABLE_THRESHOLD`  
- ☀️ **Extreme Heat**: Above `UNBEARABLE_THRESHOLD`  

```javascript
const IMAGES = {
    death: "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/1024x1024/square-1497634598-eithe-981211-big.gif?resize=980:*",
    hot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqX1y4reo4wVEMfu53871t0Sv7v-vb9A31Q&s",
    warm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuetdRDiY-masFfSqJ6LNP9Qs-aoSOEO80w&s",
    cold: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilahueN_sF9N0AOquT4rFL1o_qcsttwB3Gg&s"
};
```

## Demo 🎥

Here's how the app looks:

![Screenshot of the Weather Forecast app interface showing a 15-day forecast in both Celsius and Fahrenheit.](https://github.com/PauloRaphael/WeatherForecast15Days/blob/master/Images/WeatherForecast15DaysDemo.png?raw=true)

## Contributing 🌍  
Contributions are welcome!  

To contribute:  
1. Fork the project.  
2. Create a new branch: `git checkout -b feature/YourFeature`.  
3. Make your changes and commit: `git commit -m 'Add your feature'`.  
4. Push to the branch: `git push origin feature/YourFeature`.  
5. Open a Pull Request.  

---

## License 📜

[MIT](https://choosealicense.com/licenses/mit/)

---
