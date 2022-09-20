<template>
  <div class="page-container">
    <div class="slide-box">
      <div class="slide-card brief-card">
        <h1>Vue</h1>
        <img src="../assets/logo.png" />
      </div>

      <div class="slide-card detail-card">
        <h1>渐进式 JavaScript 框架</h1>
        <p>易学易用，性能出色，适用场景丰富的 Web 前端框架。</p>
        <h4>易学易用</h4>
        <p>
          基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
          和一流的文档。
        </p>
        <h4>性能出色</h4>
        <p>经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。</p>
      </div>
    </div>

    <div class="slide-box">
      <div class="slide-card brief-card">
        <h1>Vue</h1>
        <img src="../assets/logo.png" />
      </div>

      <div class="slide-card detail-card">
        <p>易学易用，性能出色，适用场景丰富的 Web 前端框架。</p>
        <h4>易学易用</h4>
        <p>
          基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
          和一流的文档。
        </p>
        <h4>性能出色</h4>
        <p>经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。</p>
      </div>
    </div>

    <div class="slide-box">
      <div class="slide-card brief-card">
        <img src="../assets/logo.png" />
      </div>

      <div class="slide-card detail-card">
        <p>易学易用，性能出色，适用场景丰富的 Web 前端框架。</p>
        <h4>易学易用</h4>
        <p>
          基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
          和一流的文档。
        </p>
        <h4>性能出色</h4>
        <p>经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。</p>
      </div>
    </div>

    <div class="slide-box">
      <div class="slide-img brief-card">
        <img src="../assets/logo.png" />
      </div>

      <div class="slide-img detail-card">
        <img src="../assets/react.webp" />
      </div>
    </div>
  </div>
</template>

<script>
import { animateSlideCard } from "../assets/js/animate"
export default {
  name: 'SlideCard',
  data() {
    return {}
  },
  mounted() {
    animateSlideCard('.slide-box', '.detail-card');
  },
  methods: {

  }
}
</script>

<style>
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.slide-box {
  width: 300px;
  height: 500px;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 12px -1px black;
  overflow: hidden;
  position: relative;
  margin-right: 2vh;
}
.slide-card {
  width: 100%;
  height: 100%;
}
.slide-img {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide-img > img {
  width: 100px;
  height: 100px;
  background-size: 100% 100%;
}
.detail-card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: white;
}
</style>