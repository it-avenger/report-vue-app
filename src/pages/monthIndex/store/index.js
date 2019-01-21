import Vue from 'vue';
import Vuex from 'vuex';
import mainForm from './module/mainForm';
import scheduleForm from './module/scheduleForm';
import operatingForm from './module/operatingForm';
import missionList from './module/missionList';
import comData from './module/comData';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    comData,
    mainForm,
    scheduleForm,
    operatingForm,
    missionList,
  },
});
export default store;
