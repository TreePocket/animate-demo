<template>
  <!-- <div>{{ animatedNumber }}</div> -->
  <div>
    <button @click="changeXsq">点击</button>

    <div style="display: flex">
      <div
        class="ball"
        v-for="(item, index) in animatedNumber.list"
        :key="index"
      >
        <!-- <span style="font-size: 5vh; line-height: 5.5vh; font-weight: bold"> -->
        <div
          class="number-box"
          :style="{
            transform: `translate(-50%, -${
              Number(animatedNumber.list[index]) * 10
            }%)`,
          }"
        >
          0123456789
        </div>
        <!-- </span> -->
      </div>
    </div>
  </div>
</template>
<script>
import { animateNumber } from "../assets/js/animate"
export default {
  props: ['totalHj'],
  data() {
    return {
      animatedNumber: {
        tweenedNumber: 50,
        list: ['5', '0'],
      }

    }
  },
  computed: {

  },
  methods: {
    changeNumber(value) {
      animateNumber(this.animatedNumber, value, { duration: 1 });
    },
    changeXsq(value) {
      console.log(value);
      this.changeNumber(100)
    }
  },
  created() {
  },
  watch: {
    totalHj: function () {
    },
  }
}
</script>
<style>
.ball {
  height: 5.5vh;
  width: 4vh;
  border-radius: 1vh;
  background-color: #1d48c1;
  border: 1px solid;
  margin-right: 2vh;
  position: relative;
}
.ball .number-box {
  width: 40px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transition: transform 1.5s ease-in-out;
  letter-spacing: 10px;
  font-style: initial;
  /* color: #fff; */
  font-family: "AgencyFB";
  font-weight: 700;
  font-size: 40px;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
</style>