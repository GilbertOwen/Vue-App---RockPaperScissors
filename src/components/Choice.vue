<template>
  <div class="content">
    <button @click="startGame('Paper')">✋ <br>Paper</button>
    <button @click="startGame('Scissor')">✌️ <br>Scissor</button>
    <button @click="startGame('Rock')">✊ <br>Rock</button>
  </div>
</template>

<script>
export default {
    methods: { startGame(guess){ this.$emit('start', guess) } },
    setup(){
    }
}
</script>

<style>
    .content{
        display: flex;
        flex-direction: row;
        width: 600px;
        height: 200px;
        justify-content: space-between;
        gap: 20px;
        margin: 10px auto;
    }
    .content button{
        flex: 1;
        font-size: 30px;
    }
    @media (max-width: 769px){
        .content{
            width: 300px;
            height: 100px;
        }
        .content button{
            font-size: 15px;
        }
    }
</style>