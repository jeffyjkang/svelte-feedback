<script lang="ts">
  //import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from'../stores.js'
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './FeedbackItem.svelte'
  //let feedback = []
  //let subscription
  //onMount(() => {
  //  subscription = FeedbackStore.subscribe((data) =>feedback = data);
  //})
  //onDestroy(() => {
  //  subscription()
  //})
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div 
    in:scale
    out:fade='{{duration: 500}}'
  >
    <FeedbackItem item={fb} />
  </div>
{/each}

