<template>
    <div class="login">
        <div class="user-img">
            <svg width="" height="" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M16 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="white"/>
                <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="white" stroke-width="2"/>
                <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        <h1 style="color: white;">Admin</h1>
        <div class="user-ip" v-if="!loading">
            <span style="color: #A29B9A; margin-bottom: 10px;">IP ADDRESS:</span> 
            <input type="text" id="input" v-model="inputValue" style="width: 100%;">
        </div>
        <div v-else style="display: flex; justify-content: center;">
            <Loader />
        </div>
    </div>
</template>

<script>
// import router from '@/router';
import Loader from '@/components/Loaders/Loader.vue';
export default {
    name: 'LoginPage',
    components:{Loader},
    data() {
        return {
            inputValue: "",
            loading: false
        }
    },
    methods: {
        startConnection(e) {
            if(e.code == 'Enter') {
                this.loading = true;
                const xhr = new XMLHttpRequest();
                // xhr.open("GET", `http://148.239.114.111:8000/startConnection?ip=${this.inputValue}&user=admin&password=pass&enablep=\n`);
                xhr.open("GET", `http://192.168.0.137:8000/updateDevicesList?initialRouter=${this.inputValue}&user=admin&password=pass&enablep=\n`);
                xhr.send();
                xhr.responseType = "json";
                xhr.onload = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        const devices = xhr.response.msg;
                        console.log(devices);
                        if(devices) {
                            this.$store.commit('setDevices', devices);
                            this.$router.push({name: 'Devices'});
                        }
                    } 
                    else {
                        console.log(`Error: ${xhr.status}`);
                        this.loading = false;
                    }
                };
                this.inputValue = "";
            }
        }
    },
    mounted() {
        document.querySelector('#input').addEventListener('keydown', (e) => this.startConnection(e));
        // console.log(this.$router);
    }
}
</script>

<style scoped>
.user-img {
    width: 150px;
    height: 150px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

svg {
    width: 80%;
    width: 80%;
    text-align: center;
}

.user-ip {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

</style>