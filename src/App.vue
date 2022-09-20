<template>
  <div id="app">
    <div style="width: 800px; height: 100px">
      <!-- <button @click="changeNumber">改变数字</button> -->
      <!-- <DigitalFlopVue :total-hj="digitalShow" :len="5" /> -->
    </div>
    <!-- <SlideCard></SlideCard> -->
    <SplitText></SplitText>
  </div>
</template>

<script>
// import DigitalFlopVue from './components/DigitalFlopVue.vue'
// import SlideCard from "./components/SlideCard.vue"
import SplitText from "./components/SplitText.vue"
export default {
  name: 'App',
  components: {
    // DigitalFlopVue,
    // SlideCard
    SplitText
  },
  data() {
    return {
      digitalShow: 100
    }
  },
  mounted() {
    // setInterval(() => {
    //   const data = this.getRandomNumber(0, 1000);
    //   this.changeNumber(data);
    // }, 3000)
  },
  methods: {
    changeNumber() {
      const data = this.getRandomNumber(0, 10000)
      this.digitalShow = data;
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
