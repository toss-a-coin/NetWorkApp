import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        devices: undefined,
        currentDevice: undefined
      }
    },
    getters: {
        getDevices(state) {
          return state.devices;
        },

    },

    mutations: {        
        setDevices(state, data) {
          if(Object.keys(data).length === 0)
            return;
          state.devices = [];
          for(let key in data) {
            const device = data[key];
            const hostname = device.hostname;
            const ssh = device.ssh;
            let interfaces = [];
            for(let int in device.interfaces) 
              interfaces.push({interface: int, ip: device.interfaces[int]});
            state.devices.push({hostname, interfaces, ssh});
          }
        },

        setCurrentDevice(state, device) {
          state.currentDevice = device;
        },
    },

    
  });

export default store;