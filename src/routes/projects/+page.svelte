<script>
	import { onMount } from "svelte";

    onMount(()=>{
        handleRedirection();
    })

    function handleRedirection(){
        const currentUrl = window.location.href;
        if(currentUrl.endsWith('/')) {
            window.location.href= currentUrl + 'text-highlighter'
        } else {
            window.location.href= currentUrl + '/text-highlighter'
        }
    }
    
</script>