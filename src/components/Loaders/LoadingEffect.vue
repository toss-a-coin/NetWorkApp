<template>
    <div class="center" ref="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<script>
export default {
  methods:{
        setTransition(increment, ref, opacity) {
          setTimeout(function() {
            ref.opacity = opacity;
          }, 300 * increment);
        }
    },
    mounted() {
        let opacity = 0.25;
        for(let i=0; i<=4; i++){
          this.setTransition(i, this.$refs.center.style, opacity);
            opacity += 0.25;
        }
    }
}
</script>

<style scoped>
.center {
  opacity: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
}
.wave {
  width: 5px;
  height: 100px;
  background: linear-gradient(45deg, #69115d, #fff);
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
}
.wave:nth-child(2) {
  animation-delay: 0.1s;
}
.wave:nth-child(3) {
  animation-delay: 0.2s;
}
.wave:nth-child(4) {
  animation-delay: 0.3s;
}
.wave:nth-child(5) {
  animation-delay: 0.4s;
}
.wave:nth-child(6) {
  animation-delay: 0.5s;
}
.wave:nth-child(7) {
  animation-delay: 0.6s;
}
.wave:nth-child(8) {
  animation-delay: 0.7s;
}
.wave:nth-child(9) {
  animation-delay: 0.8s;
}
.wave:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes wave {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>