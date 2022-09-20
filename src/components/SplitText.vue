<template>
  <div class="split-text" ref="spText">
    {{ str }}
  </div>
</template>

<script>
// import gsap from "gsap";
export default {
  name: 'SplitText',
  data() {
    return {
      str: "jksdljflksjdkfjlskjdfkljsdf lksjdfk jskldjfklsdj fljlks jdfkj skdjlf",
    }
  },
  mounted() {
    this.doSplitText();
  },
  methods: {
    doSplitText() {
      //   gsap.to(".split-text", {
      //     duration: 2,
      //     delay: 1,
      //   });
    }
  }
}
</script>

<style>
.split-text {
}
</style>