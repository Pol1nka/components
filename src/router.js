import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/components/Login.vue";
import InteractiveMapPage from "@/components/InteractiveMapPage.vue";
import ChatPage from "@/components/ChatPage.vue";




export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/login',
            name: "login",
            component: Login,
            alias: '/'
        },
        {
            path: '/map',
            name: "map",
            component: InteractiveMapPage
        },
        {
            path: '/chat',
            name: "chat",
            component: ChatPage
        },
    ]
})