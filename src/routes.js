import newsList from "@/js/newslist"
import shop from "@/shop/asset/src/js/shop"
import home from "@/shop/asset/src/js/home"
import FOMTA from '@/js/fomta'
import INVITE from '@/js/invite'
import LOADING from "@/shop/asset/src/js/loading"

export default [
    { path: '/newslist', name: 'newslist', component: newsList },

    { path: '/home', name: 'home', component: home },

    {
        path: '/fomta',
        name: 'fomta',
        component: FOMTA,
        meta: {
            title: "轮播实现",
            keepAlive: true,
        }
    },

    {
        path: '/invite',
        name: 'invite',
        component: INVITE,
        meta: {
            title: "邀请好友赚钱",
            keepAlive: true,
        }
    },

    {
        path: '/shop',
        name: 'shop',
        component: shop,
        meta: {
            title: "未来首页",
            keepAlive: true,
        }
    },

    {
        path: '/loading',
        name: 'loading',
        component: LOADING,
        meta: {
            title: "加载中。。。",
            keepAlive: true,
        }
    },
]