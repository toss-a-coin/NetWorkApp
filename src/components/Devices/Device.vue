<template>
    <section id="device" @click="handleClick" ref="device" disabled="true">
        <img src="@/assets/img/router2.png" alt="">
        <span> {{ device.hostname }} </span> 
    </section>
</template>

<script>
export default {
    name: 'DeviceComponent',
    props:{
        device: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            clickable: true
        }
    },
    methods: {
        handleClick() {
            if(this.clickable)
                this.$emit("popCard", this.device);
        }
    },

    mounted() {
        if(this.$refs.device.classList[0] == 'false')
            this.clickable = false;
    }
}
</script>

<style scoped>
#device {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 100px;
}

#device span {
    color: white;
    font-weight: bolder;
}

.true:hover {
    background-color: #585858;
    cursor: pointer;
}

.false {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>