<template>
  <div class="result-show" v-if="condition">
    <h2>Result</h2>
    <h2>{{ condition }}</h2>
    <h2>Player : {{ playerMove }} - {{ computerMove }} : Computer </h2>
  </div>
</template>
✋✌️✊
<script>
import { ref } from 'vue';
export default {
    props : ['computerMove', 'playerMove','condition', 'history'],
    setup(props){
        const showHistory = ref(false);

        const handleHistory = () =>{
            showHistory.value = !showHistory.value;
        }

        const latestHistory = ()=>{
            return props.history.slice().reverse();
        }
        return{showHistory, handleHistory, latestHistory}
    }
}
</script>

<style>
    .result-show{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h2{
        width: fit-content;
        margin: 10px auto;
    }
    @media (max-width: 769px){
        .result-show h2{
            font-size: 15px;
        }
    }
</style>