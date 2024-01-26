<template>
    <div class="score">
        <h2>
            Wins : {{ score.win }}
        </h2>
        <h2>
            Losses : {{ score.lose }}
        </h2>
        <h2>
            Ties : {{ score.tie }}
        </h2>
    </div>
      <div class="history-container" v-if="history">
        <div class="history" v-for="single in history" :key="single.id" :class="{ lose : single.result === 'Lose', win : single.result === 'Win',tie : single.result === 'Tie' }">
            <div class="move" v-if="single.playerMove === 'Rock'">
                <h2>{{ single.id }}</h2>
                <h2 v-if="single.computerMove === 'Rock'">
                    ✊{{ single.playerMove }} -- {{ single.computerMove }}✊ 
                </h2>
                <h2 v-if="single.computerMove === 'Paper'">
                    ✊{{ single.playerMove }} -- {{ single.computerMove }}✋ 
                </h2>
                <h2 v-if="single.computerMove === 'Scissor'">
                    ✊{{ single.playerMove }} -- {{ single.computerMove }}✌️ 
                </h2>
                <div class="move-condition">
                    <h2>
                        {{ single.result }}
                    </h2>
                </div>
            </div>
            <div class="move" v-if="single.playerMove === 'Paper'">
                <h2>{{ single.id }}</h2>
                <h2 v-if="single.computerMove === 'Rock'">
                    ✋{{ single.playerMove }} -- {{ single.computerMove }}✊ 
                </h2>
                <h2 v-if="single.computerMove === 'Paper'">
                    ✋{{ single.playerMove }} -- {{ single.computerMove }}✋ 
                </h2>
                <h2 v-if="single.computerMove === 'Scissor'">
                    ✋{{ single.playerMove }} -- {{ single.computerMove }}✌️ 
                </h2>
                <div class="move-condition">
                    <h2>
                        {{ single.result }}
                    </h2>
                </div>
            </div>
            <div class="move" v-if="single.playerMove === 'Scissor'">
                <h2>{{ single.id }}</h2>
                <h2 v-if="single.computerMove === 'Rock'">
                    ✌️{{ single.playerMove }} -- {{ single.computerMove }}✊ 
                </h2>
                <h2 v-if="single.computerMove === 'Paper'">
                    ✌️{{ single.playerMove }} -- {{ single.computerMove }}✋ 
                </h2>
                <h2 v-if="single.computerMove === 'Scissor'">
                    ✌️{{ single.playerMove }} -- {{ single.computerMove }}✌️ 
                </h2>
                <div class="move-condition">
                    <h2>
                        {{ single.result }}
                    </h2>
                </div>
            </div>
        </div> 
      </div>
</template>

<script>
import { onMounted } from 'vue';
import getData from '../composables/GetData.js';
export default {
    setup(){
        const {history, score, getScore, getHistory} = getData()
        onMounted(()=>{
            getScore();
            getHistory();
            // console.log(history.value);
        })
        return{score, history}
    }
}
</script>

<style scoped>
    .history-container{
        display: block;
        width: calc(100% - 100px); /* Adjust the width by subtracting the total margin (20px on each side) */
        min-width: 300px;
        height: 600px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        border: 5px solid rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        margin: 20px auto; /* Keep the margin property */
    }
    .history-container::-webkit-scrollbar {
        display: none;
    }
    .history{
        width: 100%;
        border-bottom: 1px solid white;
        padding: 20px 20px 10px;
        box-sizing: border-box;
    }
    .move{
        width: fit-content;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        margin: 0px auto;
    }
    .history.lose{
        background-color: rgba(255,0,0,0.6);
    }
    .history.win{
        background-color: rgba(0, 255, 0, 0.6);
    }
    .history.tie{
        background-color: rgba(0,0,0,0.6);
    }
</style>