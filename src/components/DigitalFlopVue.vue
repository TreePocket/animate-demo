<template>
  <div class="digital-flop" ref="digitalFlop">
    <div class="number-item" v-for="(item, index) in numberArr" :key="index">
      <div
        ref="numberItem"
        class="number-box"
        :style="{
          transform: `translate(-50%, -${Number(numberArr[index]) * 10}%)`,
          'font-size': `${slideHeight}px`,
        }"
      >
        0123456789
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalHj: {
      type: Number,
      default: 0
    },
    len: {
      typep: Number,
      default: 4
    }
  },
  data() {
    return {
      numberArr: new Array(this.len).fill(0),
      slideHeight: 0
    }
  },
  computed: {
  },
  mounted() {
    this.slideHeight = this.$refs.digitalFlop.offsetHeight;
    this.init();
  },
  methods: {
    init() {
      const str = String(this.totalHj).padStart(this.len, '0');
      this.numberArr = str.split('');
    },
  },
  created() {
  },
  watch: {
    totalHj: function () {
      this.init();
    },
  }
}
</script>
<style>
.digital-flop {
  width: 100%;
  height: 100%;
  display: flex;
}
.number-item {
  height: 100%;
  flex: 1;
  border-radius: 1vh;
  background-color: #1d48c1;
  border: 1px solid;
  margin-right: 2vh;
  position: relative;
  overflow: hidden;
}
.number-item .number-box {
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transition: transform 1.5s ease-in-out;
  font-style: initial;
  font-family: "AgencyFB";
  font-weight: 700;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
</style>