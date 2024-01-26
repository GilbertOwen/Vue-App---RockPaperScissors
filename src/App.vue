<template>
  <h1>
    Rock, Paper, Scissors
  </h1>
  <nav>
    <router-link :to="{name : 'home'}" :class="{active : this.$route.name === 'home'}">Home</router-link>
    <router-link :to="{name : 'history'}" :class="{active : this.$route.name === 'history'}">History</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
   width: 100%;
   background-color: rgba(0,0,0,0.1);
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-bottom: 20px;
}
nav a{
  display: block;
  padding: 2px;
  margin: 10px 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 25px;
  color: #41B883;
  position: relative;
}
nav a::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2c3e50;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}
nav a:hover::after{
  transform: scaleX(1);
  transform-origin: bottom left;
}

.active{
  color: #2c3e50;
}
</style>
