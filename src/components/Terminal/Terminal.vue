<template>
    <main id="container">
        <div id="terminal">
            <section id="terminal__bar">          
            <div id="bar__buttons">            
                <button class="bar__button" id="bar__button--exit">&#10005;</button>            
            </div>          
            </section>        
            <section id="terminal__body">          
            <div id="terminal__prompt">
                <div v-for="(data, index) in history" :key="index" >
                  <span class="terminal__prompt--user">{{device.hostname}}#</span>            
                    <span style="color:white; white-space: pre-wrap;"> {{ data }}</span>
                </div>      
                <div>
                    <span class="terminal__prompt--user">{{device.hostname}}#</span>            
                    <input id="terminal__input" ref="input" v-model="prompt"> 
                </div>      
            </div>  
            </section>      
        </div>    
    </main>
</template>

<script>
export default {
    name: 'TerminalComponent',
    el: '#terminal__prompt',
    data() {
        return {
            device: this.$store.state.currentDevice,
            prompt: "",
            history: []
        }
    },
    methods:{
        focusPrompt() {
            this.$refs.input.focus();
        },

        endConnection() {
          const xhr = new XMLHttpRequest();
            xhr.open("GET", `http://192.168.0.137:8000/endConnection\n`);
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
              const res = xhr.response.msg;
              if(res) {
                this.$store.state.currentDevice = undefined;
                this.$router.push({name: 'Devices'});
              }
            } 
            else 
              console.log(`Error: ${xhr.status}`);
            };
        },

        enterPrompt(e) {
            if(e.code == 'Enter') {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", `http://192.168.0.137:8000/sendCommand/`, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                const data = JSON.stringify({command: this.prompt})
                xhr.responseType = "json";
                xhr.onload = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                  const data = xhr.response;
                  console.log(data);
                  this.history.push(this.prompt + data.msg);
                } 
                else 
                  console.log(`Error: ${xhr.status}`);
                };
                xhr.send(data);
                this.scrollToElement();
                this.prompt = "";
            }
        },
        scrollToElement() {
            const el = this.$refs.scrollToMe;
            if (el) 
                el.scrollIntoView({behavior: 'smooth'});
        }
    },  
    mounted() {
        this.$el.querySelector("#terminal").addEventListener('click', () =>  this.focusPrompt());
        this.$el.querySelector("#terminal__input").addEventListener('keydown', (e) => this.enterPrompt(e))
        this.$refs.input.style.width = `${(this.prompt.length * 8)}px`;
    },
    unmounted() {
      const xhr = new XMLHttpRequest();
            xhr.open("GET", `http://148.239.110.73:8000/endConnection\n`);
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = xhr.response;
                console.log(data);
            } 
            else {
                console.log(`Error: ${xhr.status}`);
                }
            };
    },
    watch: {
        prompt(newValue) {
            this.$refs.input.style.width = `${(newValue.length * 8)}px`;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono'); 
body {  
  background: linear-gradient(45deg, #57003f 0%,#f57453 100%); 
  font-family: Ubuntu;
} 
#container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh;
} 
#terminal {  
  width: 70vw;  
  height: 65vh;  
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
} 
#terminal__bar {  
  display: flex;  
  width: 100%;  
  height: 30px;  
  align-items: center;  
  justify-content: flex-end;
  padding: 0 8px;  
  box-sizing: border-box;  
  border-top-left-radius: 5px;  
  border-top-right-radius: 5px;  
  background: linear-gradient(#504b45 0%,#3c3b37 100%);
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
#bar__user {   
  color: #d5d0ce;  
  margin-left: 6px;  
  font-size: 14px;  
  line-height: 15px;
} 
#terminal__body {  
  background: rgba(56, 4, 40, 0.9);  
  font-family: 'Ubuntu Mono';  
  height: calc(100% - 30px);  
  padding-top: 2px;  
  margin-top: -1px;
  overflow: auto;
} 
#terminal__prompt {  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.terminal__prompt--user {  
  color: #7eda28;
}
.terminal__prompt--location { 
  color: #4878c0;
}
.terminal__prompt--bling {  
  color: #dddddd;
}
#terminal__prompt--cursor {  
  display: block;  
  height: 17px;  
  width: 8px;  
  /* margin-left: 9px;   */
  animation: blink 1200ms linear infinite;
  /* border: 2px solid red; */

}
#terminal__input {
    background-color: #3C052D;
    border: 0; 
    outline: 0;
    color: white;
    font-family: Ubuntu;
    /* border: 2px solid red; */
}

#prompt__history {
    display: flex;
    flex-direction: column;
}

#terminal__input:focus {
    outline: none !important;
}
@keyframes blink {  
  0% {    
    background: #ffffff;  
  }  
  49% {    
    background: #ffffff;  
  }  
  60% {    
    background: transparent;  
  }  
  99% {    
    background: transparent;  
  }  100% {    
    background: #ffffff;  
  }
} 
@media (max-width: 600px) {  
  #terminal {    
    max-height: 90%;    
    width: 90%;  
  }
}
</style>