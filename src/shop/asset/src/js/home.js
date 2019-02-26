import html from '@/shop/asset/src/html/home.html'
import css from '@/shop/asset/src/css/home.css'

import bun1 from '@/images/img01.jpg'
import bun2 from '@/images/img02.jpg'
import bun3 from '@/images/img03.jpg'
import bun4 from '@/images/img04.jpg'


export default ({
    template: html,
    data() {
        return {
            css: css,
            mylocate: '',
            abcs: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            cityNameCan: ['安徽', '河北', '合肥'],
            now: "",
            i: "0",
            pic: [bun1, bun2, bun3, bun4],

        }

    },
    created() {
        //设置自适应不同手机屏幕
        var doc = document.documentElement.clientWidth;
        console.log(doc);
        document.documentElement.style.fontSize = 980 + 'px';

        this.mylocate = "成都";
    },
    methods: {
        getMsg: function() {
            //alert(this.navigation)
        },
        //关闭最上面一栏
        close_ui() {
            //debugger;
            var x = document.getElementById("open_app");
            x.style.display = 'none';

            var header = document.getElementById("header");
            header.style.top = 0;

        },
        //现实定位页面
        locateNowShow() {
            document.getElementById("locate_select").style.display = 'block';
        },
        //定位函数
        locateNow(cityName) {
            debugger;
            var _this = this;
            //this.chageLocate(cityName);
            switch (cityName) {
                case 'cq':
                    _this.mylocate = "重庆";
                    break;

                case 'sh':
                    this.mylocate = "上海";
                    break;

                case 'gd':
                    this.mylocate = "广东";
                    break;

                case 'sz':
                    this.mylocate = "深圳";
                    break;

                case 'cd':
                    this.mylocate = "成都";
                    break;

                case 'bj':
                    this.mylocate = "北京";
                    break;

            }
            if (this.mylocate !== "" && this.mylocate.length > 0) {
                document.getElementById("locate_select").style.display = 'none';
            } else {
                this.mylocate = "成都"
            }

        },
        //selectCityEnter 鼠标在定位上悬停函数
        selectCityEnter() {

        }

    },
    mounted() {
        //定义一个存放照片位置的数组，可以放任意个，在这里放3个
        this.getMsg();
        this.now = this.pic[0];
        var _this = this;
        setInterval(function() {
            _this.i++;
            _this.now = _this.pic[_this.i];
            if (_this.i >= _this.pic.length - 1) {
                _this.i = 0;
            }
        }, 3000)


    },


})