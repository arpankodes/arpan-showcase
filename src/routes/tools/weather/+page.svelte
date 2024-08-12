<script>
    let weather="";

    async function getWeather(){
        return alert("Coming soon!")
        weather="";
        const city = document.getElementById('city');
        try {
            const response = await fetch(`/tools/weather?city=${city}`)
            const data = response.json()
            weather= data
        } catch(e) {
            alert("Now working!")
        }
    }
</script>

<div class="input">
    <label for="city" class="form-label">Enter city</label>
    <div class="d-flex gap-2">
        <input type="text" class="form-control" id="city" placeholder="London">
        <button class="btn btn-primary" on:click={getWeather}>
            Search
        </button>
    </div>
</div>
<div class="output">
</div>