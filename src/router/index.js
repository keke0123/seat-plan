import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue'
import TestPage from '@/pages/testpage/TestPage';
import SeatPlan from '@/pages/seat-plan/SeatPlan';

Vue.use(VueRouter);

const router = new VueRouter({
    // 이상하게 mode history 지정 안해주면 '#' 이 붙는다.
    mode:'history',
    routes:[
        { path: '*', redirect:'/'},
        { path: '/test', component: TestPage },
        { path: '/hello', component: HelloWorld },
        { path: '/seat-plan', component: SeatPlan },
    ]
});

export default router;
