<template>
    <LoadingEffect v-if="!sessionUp"/>
    <Terminal v-else />
</template>

<script>
import Terminal from '@/components/Terminal/Terminal.vue';
import LoadingEffect from '@/components/Loaders/LoadingEffect.vue';
export default {
    name: 'TerminalPage',
    components: {Terminal, LoadingEffect},
    props: {
        ip_address: {
            type: String
        }
    },
    data() {
        return {
            sessionUp: true
        }
    }
}
</script>