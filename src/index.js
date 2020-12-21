const api_key = "808d67d7b2bd95c69791f456b64b9e0e";

async function f() {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${ api_key }&units=metric`)
    const data = await response.json();

    let date = new Date(data.sys.sunrise * 1000)
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let formattedDate = `${hours}:${mins}:${secs}`;

    document.getElementById('id01').innerHTML = data.main.temp;



    // console.log(`Current temperature: ${data.main.temp}`)
    // console.log(`Location: ${data.name}`)
    // console.log(`Sunrise: ${data.sys.sunrise}`)
    // console.log(`Sunrise: ${formattedDate}`)
}

f();