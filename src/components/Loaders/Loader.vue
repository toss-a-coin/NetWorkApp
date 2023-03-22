<template>
     <div class="loader"></div> 
</template>

<script>
export default {
    name: 'LoaderComponent',
}
</script>

<style scoped>
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #69115d; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>