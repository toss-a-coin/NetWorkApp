<template>
    <section id="device__card" style="color:white;">
        <div class="bar__buttons">
            <button id="cancel__button" @click="handleCancel">Cancel</button>
            <span style="color: white;">Details</span>
            <button id="connect__button" ref="connect__button" @click="connectToDevice">Connect</button>
            <!-- <button id="connect__button" ref="connect__button">Connect</button> -->
        </div>

        <div v-show="!isConnecting">
            <div id="devices__interfaces" >
            <span style="width: 30%; font-size: 22px;"> <strong>Interfaces</strong></span>
            <div class="interfaces__table">
                <label v-for="(int, index) in device.interfaces" :key="index" class="interface"> 
                    <input type="radio" class="radiobox " name="interface" :id="index" >
                    <p >{{ int.interface }}</p> 
                    <!-- <span class="checkmark"></span> -->
                </label>
            </div>
        </div>

            <div v-if="ip_address">
                <h1><strong>IP ADDRESS</strong></h1>
                <span>{{ ip_address }}</span>
            </div>
        </div>

        <div style="height: 85%; display: flex; align-items: center; justify-content: center;" v-show="isConnecting">
            <Loader v-show="isConnecting"/>
        </div>


    </section>
</template>

<script>
import Loader from '../Loaders/Loader.vue';
export default {
    name: 'DeviceCard',
    el: 'DeviceCard',
    components: {Loader},
    props: {
        device: {
            type: Object, 
        }
    },
    data() {
        return {
            interfaces: undefined,
            ip_address: undefined,
            isConnecting: false
        }
    },
    methods: {
        handleCancel() {
            this.$emit('unpopCard');
        },

        handleInterface(e) {
            const index = e.target.id;
            this.ip_address = this.interfaces[index];
            this.$refs.connect__button.style.cursor = "pointer";
            this.$refs.connect__button.style.backgroundColor = "#39B14B";
        },

        setInterfaces() {
            let interfaces = [];
            this.device.interfaces.forEach(i => interfaces.push(i.ip));
            this.interfaces = interfaces;
        },

        connectToDevice() {
            if(!this.ip_address) return;
            this.isConnecting = true;
            const xhr = new XMLHttpRequest();
                xhr.open("GET", `http://${this.$store.state.serverIp}:8000/startConnection?ip=${this.ip_address}&user=admin&password=pass&enablep=\n`);
                xhr.send();
                xhr.responseType = "json";
                xhr.onload = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        const res = xhr.response.msg;
                        console.log(this.device)
                        if(res) {
                            this.$store.commit('setCurrentDevice', this.device);
                            this.isConnecting = false;
                            this.$router.push({name: 'Terminal'});
                        }
                    } 
                    else {
                        console.log(`Error: ${xhr.status}`);
                        this.loading = false;
                    }
                };
                this.inputValue = "";
        }
    },

    mounted() {
        document.querySelectorAll(".radiobox").forEach(box => 
            box.addEventListener("click", (e) => this.handleInterface(e)));
        this.setInterfaces();
    },

    watch: {
        radios() {
            console.log(this.radios);
        }
    }
}
</script>

<style scoped>
#device__card {
    box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
    width: 20%;
    height: 50%;
    position: absolute;
    background-color: #3E3E3E;
    border-radius: 4px;
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    overflow: auto;
}

.bar__buttons {
  background-color: #2B2B2B;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  height: 10%;
}

.bar__buttons button {
    background-color: #4A4745;
    color: white;
    border-color: #2B2B2B;
    border-radius: 2px;
    height: 90%;
    margin: 5px;
}

#connect__button {
    cursor: not-allowed;
}

#devices__interfaces {
    align-items:center;

}

.interfaces__table {
    justify-content: center;
    align-items: center;
    width: 70%;
}
.interface {
    display: flex;
    align-items: center;
    margin: 5px;
}

input[type=radio] {
    height: 15px;
    width: 15px;
    background-color: #eee;
}

.loader {
}

</style>