<template>
  <main class="main">
    <RouterView />
  </main>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono'); 
*{
  font-family: 'Ubuntu Mono';  
}

body {
  background-image: url('@/assets//img/ubuntu-wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.login {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>