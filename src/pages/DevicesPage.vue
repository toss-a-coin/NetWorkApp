<template>
    <LoadingEffect v-show="!devices" />
    <div class="devices__list" v-show="devices">
        <DevicesApp />
    </div>
</template>

<script>
import LoadingEffect from '@/components/Loaders/LoadingEffect.vue';
import DevicesApp from '@/components/Devices/DevicesApp.vue';
import devices from '@/example';
export default {
    name: 'DevicesPage',
    components:{LoadingEffect, DevicesApp},
    data() {
        return {
            // devices: this.$store.state.devices
            devices: devices
        }
    },
}
</script>
