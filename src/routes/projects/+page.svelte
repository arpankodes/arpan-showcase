<script>
	import { onMount } from "svelte";

    onMount(()=>{
        const currentUrl = window.location.href
        window.location.href= currentUrl + '/coordinates'
    })
</script>