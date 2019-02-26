import html from '@/shop/asset/src/html/shop.html'
import css from '@/shop/asset/src/css/shop.css'
import loading from '@/shop/asset/src/js/loading'

export default ({
    template: html,
    conponents: {
        loading,
    },
    data() {
        return {
            css: css,
            list: [],
            cur: 0,
            num: 0,
            myData: [
                { name: '恭喜美玲获得234元代金券', age: 19 },
                { name: '恭喜小虎获得100元电话加油卡', age: 23 },
                { name: '恭喜爱英获得234元代金券', age: 29 },
                { name: '恭喜贝塔获得234元代金券', age: 33 },
                { name: '恭喜小贝获得234元代金券', age: 33 },
                { name: '恭喜青青的我来了获得234元代金券', age: 33 },
                { name: '恭喜哈哈获得123元大礼包', age: 33 },
            ],
        }

    },

    created() {
        //设计手机适配 fontsize
        var clientWidth = document.documentElement.clientWidth;
        //var clienHeight = document.documentElement.clientHeight;
        var clientFont_w = (clientWidth / 6.4).toFixed(1);
        document.documentElement.style.fontSize = clientFont_w + 'px';
        console.log(clientWidth + " / " + " / " + clientFont_w);

        console.log(this.ayyaym);
        console.log(typeof this.ayyaym);


        // this.$axios.get("https://api.github.com/users", {})
        //     .then(res => {
        //         console.log(res.data)
        //         debugger
        //     })

        this.myAjax().then(data => {
            console.log(data);
            document.getElementById("pulldown_list").innerText = data.data;
        }).catch(e => {
            console.log(e.message)
        })



    }, //created
    mounted() {
        this.truenFunc();
    },
    methods: {
        truenFunc: function() {
            var icon = document.getElementById("right_icon");
            var ul = document.getElementById("turn_ul");
            var ul2 = document.getElementById("turn_ul2");
            ul2.innerHTML = ul.innerHTML;

            function scrollUp() {
                if (icon.scrollTop >= ul.offsetHeight) {
                    icon.scrollTop = 0;
                } else {
                    icon.scrollTop += 10;
                    //console.log(icon.scrollTop)
                }
            }
            var time = 500;
            var mytimer = setInterval(scrollUp, time);
        },

        loadMore(number, cur) {
            console.log(number + "/" + cur)
        },
        async myAjax() {
            let res = [];

            let { data } = await this.$axios.get("https://www.easy-mock.com/mock/5c1b3f38fce7023df569ba70/example_copy/shopMsg?flag=1");
            res = data;
            return res;
        }
    }



})