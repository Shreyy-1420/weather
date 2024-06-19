const weatherdata = () => {
    const weather = {
        "apikey": "dbfb8205d10a0c13907768d20fac408d",
        fetchWeather: function (city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apikey
            ).then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
            const {name } = data;
            const {speed} = data.wind;
            const {feels_like, humidity, temp , pressure} = data.main;
            const {country} = data.sys;
            const {all} = data.clouds;
            const {description,  icon} = data.weather[0] ;

            
            document.getElementById('name').innerText = name;
            document.getElementById('sun').innerText = description;
            
            document.getElementById('con').innerText = country;
            document.getElementById('cel').innerHTML = Math.floor(temp)+'°'+`<span></span>
            <span>External</span>`;
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('feel').innerHTML = Math.floor(feels_like)+'°'+`<span></span>
            <span>Internal</span>`;
            document.getElementById('wind').innerText = speed;
            document.getElementById('cloud').innerText = all;
            document.getElementById('pre').innerText = pressure;
        }
    }
    weather.fetchWeather("Bhubaneswar");
    };
    setInterval(weatherdata,1000);
    weatherdata();
    
    // date start 
    function timeshow() {
        let ti = new Date();
        let ho = ti.getHours();
        let mi = ti.getMinutes();
        let se = ti.getSeconds();
        ampm = "AM"

        // am / pm Condition 
        if (ho > 12) {
            ho -= 12;
            ampm = "PM"
        }
        if (ho == 0) {
            tr = 12;
            ampm = "AM"
        }

        // 0 Condition
        ho = ho < 10 ? "0" + ho : ho;  
        mi = mi < 10 ? "0" + mi : mi;
        se = se < 10 ? "0" + se : se;
        
        
        let maintime = ho + ":" + mi + ":" + se;
 
        // Time 
        document.getElementById("time").innerHTML = maintime;
        // am / pm 
        document.getElementById("am_pm").innerHTML = ampm;
        

        // day 
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = weekday[ti.getDay()];

        // Month 
        var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month = mL[ti.getMonth()];

        // date 
        let date = ti.getDate();

        // year 
        let year  = ti.getFullYear();


        document.getElementById("day").innerHTML = day;
        document.getElementById("month").innerHTML = month;
        document.getElementById("date").innerHTML = date;
        document.getElementById("year").innerHTML = year;

    }
    
    setInterval(timeshow, 1000);
    timeshow();