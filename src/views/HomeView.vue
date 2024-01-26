<template>
  <div class="backdrop" v-if="showModal" @click.self="handleModal">
    <div class="modal">
      <h1>The Rules for Rock Paper Scissors Game Is Simple</h1>
      <h3>✋(Paper) Beats (Rock)✊</h3>
      <h3>✊(Rock) Beats (Scissor)✌️</h3>
      <h3>✌️(Scissors) Beats (Paper)✋</h3>
      
    </div>
  </div>
  <div class="home">
      <div class="part-1">
        <button class="rule" @click="handleModal">Rules (Click to see the rules)</button>
        <Choice @start="handleGame"/>
      </div>
      <div class="part-2">
        <Result :condition="result" :computerMove="computerMove" :playerMove="playerMove"/>
      </div>
  </div>
</template>

<script>
import Choice from '@/components/Choice.vue'
import Result from '@/components/Result.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import getData from '../composables/GetData.js';

export default {
  name: 'HomeView',
  components:{ Choice, Result },
  setup(){
    let showModal = ref(false);
    const { getScore, score} = getData();
    
    onMounted(() => {
      getScore();
    });
    
    const handleModal = () => {
      showModal.value = !showModal.value;
    }


    // const score = ref(JSON.parse(localStorage.getItem('score')) || {
    //   win:0,
    //   lose:0,
    //   tie:0
    // });
    // const history = ref(JSON.parse(localStorage.getItem('history')) || []);
    
    const result = ref('');

    const playerMove = ref('')
    let computerMove = ref('')

    const handleGame = (guess)=> {
      const randomNumber = Math.random();
      let compMove = '';

      if(randomNumber <= 1/3){
        compMove = 'Rock';
      }else if(randomNumber > 1/3 && randomNumber <= 2/3){
        compMove = 'Scissor';
      }else if(randomNumber > 2/3 && randomNumber <= 3/3){
        compMove = 'Paper';
      }

      if(guess === 'Rock'){
        if(compMove === 'Rock'){
          result.value = 'Tie';
          score.value.tie+= 1;
        }else if(compMove === 'Paper'){
          result.value = 'Lose';
          score.value.lose+= 1;
        }else if(compMove === 'Scissor'){
          result.value = 'Win';
          score.value.win+= 1;
        }
      }else if(guess === 'Paper'){
        if(compMove === 'Rock'){
          result.value = 'Win';
          score.value.win+= 1;
        }else if(compMove === 'Paper'){
          result.value = 'Tie';
          score.value.tie+= 1;
        }else if(compMove === 'Scissor'){
          result.value = 'Lose';
          score.value.lose+= 1;
        }
      }else if(guess === 'Scissor'){
        if(compMove === 'Rock'){
          result.value = 'Lose';
          score.value.lose+= 1;
        }else if(compMove === 'Paper'){
          result.value = 'Win';
          score.value.win+= 1;
        }else if(compMove === 'Scissor'){
          result.value = 'Tie';
          score.value.tie+= 1;
        }
      }
      computerMove.value = compMove;
      playerMove.value = guess;




      // This is using localStorage to store data

      // history.value.push({
      //   computerMove : compMove,
      //   playerMove : playerMove.value,
      //   result : result.value
      // })







//     const postData = async (history, score) => {
//   try {
//     // POST request to http://localhost:3000/history
//     const historyResponse = await fetch("http://localhost:3000/history", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(history),
//     });

//     if (!historyResponse.ok) {
//       throw new Error("Failed to post history data.");
//     }

//     console.log("History Data Posted Successfully:", historyResponse);

//     // PATCH request to http://localhost:3000/score
//     const scoreResponse = await fetch("http://localhost:3000/score", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(score),
//     });

//     if (!scoreResponse.ok) {
//       throw new Error("Failed to patch score data.");
//     }

//     console.log("Score Data Patched Successfully:", scoreResponse);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };

// Panggil fungsi postData
// postData({
//         computerMove : compMove,
//         playerMove : playerMove.value,
//         result : result.value
//       }, score.value);

    const postData = async (history, score) => {
      try{
        const historyResponse = await axios.post('http://localhost:3000/history', history)
        const scoreResponse = await axios.patch('http://localhost:3000/score', score)
      }
      catch(err){
        console.error(err)
      }
    }
    postData({
        computerMove : compMove,
        playerMove : playerMove.value,
        result : result.value
      },score.value)

      // axios.post('http://localhost:3000/history', {
      //   computerMove : compMove,
      //   playerMove : playerMove.value,
      //   result : result.value
      // }).then(
      //     axios.patch('http://localhost:3000/score', {
      //     win : score.value.win,
      //     lose : score.value.lose,
      //     tie : score.value.tie
      //   })
      // );

      // localStorage.setItem('history', JSON.stringify(history.value));
      // localStorage.setItem('score', JSON.stringify(score.value));
    } 

    return{ showModal, handleModal, handleGame, result, computerMove, playerMove}
  },
}
</script>


<style>
  .home{
    display: flex;
    flex-direction: column;

  }
  .home .section-1{
    display: flex;
    flex-direction: row;
  }
  .home .section-1 .part-1,.home .part-2{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .backdrop{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
  }
  
  .modal{
    background-color: white;
    width: 40%;
    height: fit-content;
    min-width: 300px;
    min-height: 100px;
    border-radius: 15px;
    margin: 100px auto;
    padding: 15px 10px 10px;
    color: rgba(0,0,0,0.7);
    font-weight: 400;
  }
  .rule{
    padding: 15px 10px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.7);
    border: none;
    cursor: pointer;
    background-color: aquamarine;
    border-radius: 10px;
    width: fit-content;
    display: block;
    margin: 0px auto 20px;
  }
  @media (max-width: 769px){
        .modal{

        }
    }
</style>
