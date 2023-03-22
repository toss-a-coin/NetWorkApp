<template>
    <main class="devices">
        <Device v-for="device in devices" :class="checkAvailability(device)" :device="device" :key="device.id" @popCard="popCard" v-show="!isShowing"/>
        <DeviceCard class="no__blur" v-if="device" :device="device" @unpopCard="unpopCard"/>
    </main>
</template>

<script>
import Device from './Device.vue';
import DeviceCard from './DeviceCard.vue';
import devices from '@/example';
export default {
    name: 'DevicesLisg',
    components: {Device, DeviceCard},
    data() {
        return {
            // devices: this.$store.state.devices,
            devices: devices,
            device: undefined,
            isShowing: false
        }
    },
    methods: {
        checkAvailability(device) {
            return device.ssh ? "true" : "false";
        },
        popCard(device) {
            this.device = device;
            this.isShowing = true;
        },
        unpopCard() {
            this.device = undefined;
            this.isShowing = false;
        }
    },

    mounted() {
        console.log(this.devices);
    }
}
</script>

<style scoped>
.devices {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

</style>