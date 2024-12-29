<script>
    let weather=[];
    let busy= false;

    async function getWeather(){
        // return alert("Coming soon!")
        weather = [];
        // get user input from input id city
        const city = document.getElementById('city')?.value
        busy = true;
        try {
            const response = await fetch(`/projects/coordinates?city=${city}`)
            const data = await response.json()
            weather = data;
        } catch(e) {
            alert("Not working!")
        } 
        busy = false;
    }
</script>

<div class="input mb-5">
    <label for="city" class="form-label">Enter city</label>
    <div class="d-flex gap-2">
        <input type="text" class="form-control" id="city" placeholder="London">
        <button class="btn btn-primary" on:click={getWeather}>
            Search
        </button>
    </div>
</div>
{#if busy}
    <p>Searching...</p>
{/if}
{#if weather.length >0}
    <div class="output">
        <div class="container py-4">
            <h2 class="mb-4">Location Results</h2>
            
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <!-- Location Card -->
            {#each weather as location}
            <div class="col">
                <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">{location.name}</h5>
                    <span class="badge bg-primary">{location.country}</span>
                    </div>
                    
                    <p class="card-text text-muted mb-2">{location.state}</p>
                    
                    <div class="d-flex gap-3 text-muted small">
                    <div>
                        <i class="bi bi-geo-alt"></i>
                        Lat: {location.lat.toFixed(4)}
                    </div>
                    <div>
                        <i class="bi bi-geo-alt"></i>
                        Lon: {location.lon.toFixed(4)}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/each}
            </div>
        </div>
    </div>
{/if}