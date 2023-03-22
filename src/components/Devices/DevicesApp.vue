<template>
    <section id="devices-app">
      <div id="devices-app-body">
        <section id="devices-app-bar">     
          <span style="text-align: center; color: white; font-weight: bolder;">DevicesList</span> 
          <div id="bar__buttons">      
            <button class="bar__button">&#9472;</button>                
            <button class="bar__button">&#9723;</button>      
            <button class="bar__button" id="bar__button--exit">&#10005;</button>           
          </div>    
        </section>  
        <DevicesList />
      </div>    
    </section>
</template>

<script>
import DevicesList from './DevicesList.vue';
export default {
    name: 'DevicesApp',
    components: {DevicesList}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono'); 
#devices-app {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh;
} 
#devices-app-body {  
  width: 70vw;  
  height: 65vh;  
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  background-color: #3E3E3E;
} 
#devices-app-bar {  
  display: flex;  
  width: 100%;  
  height: 30px;  
  align-items: center;  
  justify-content: space-between;
  padding: 0 8px;  
  box-sizing: border-box;  
  border-top-left-radius: 5px;  
  border-top-right-radius: 5px;  
  /* background: linear-gradient(#504b45 0%,#3c3b37 100%); */
  background-color: #2B2B2B;
} 
#bar__buttons {  
  display: flex;  
  align-items: center;
} 
.bar__button {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  padding: 0;  
  margin-right: 5px;  
  font-size: 8px;  
  height: 12px;  
  width: 12px;  
  box-sizing: border-box;  
  border: none;  
  border-radius: 100%;  
  background: linear-gradient(#7d7871 0%, #595953 100%);  
  text-shadow: 0px 1px 0px rgba(255,255,255,0.2);  
  box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
}
.bar__button:hover {  
  cursor: pointer;
}
.bar__button:focus {  
  outline: none;
}
#bar__button--exit {  
  background: linear-gradient(#f37458 0%, #de4c12 100%);    
  background-clip: padding-box;
} 


</style>