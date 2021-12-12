<script>
  import {createEventDispatcher} from 'svelte';
  let ratingsArray = [1,2,3,4,5,6,7,8,9,10];
  let selected = 10;
  
  const dispatch = createEventDispatcher();

    const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch('rating-select', selected);
    }
</script>

<ul class='rating'>
  {#each ratingsArray as rating}
    <li>
      <input
        type='radio'
        id={`num${rating}`}
        name='rating'
        value={rating}
        on:change={onChange}
        checked={selected===rating}
      />
      <label for={`num${rating}`}>
        {rating}
      </label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }
  li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px solid #eee;
    transition: 0.3s;
  }
  label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: ponter;
  }
  li:hover {
    background: #ff6a95;
    color: #fff;
  }
  [type='radio'] {
    opacity: 0
  }
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }

</style>
