import html from '@/html/fomta.html'
import css from '@/css/fomta.css'
import Vue from 'vue'


export default {
    template: html,
    components: {

    },
    data() {
        return {
            css: css,
            myData: [
                { name: 'hj', age: 19 },
                { name: 'kiddle', age: 23 },
                { name: 'tom', age: 29 },
                { name: 'zh', age: 33 },
            ],
            isshowlocate: false,
            username: '',
            issure: false,
            issureMsg: '确认删除么？',
            userage: '',
            isshowback: false,
            nowIndex: -1,
            deleteBoth: false,
            isload: {},

            delete: false,
            deleteall: false,
            successMsg: false,
            myGrow: [1, 2, 3],

            cities: ['北京', '成都', '上海', '...'],
            city_1: ['密云', '顺义', '怀柔', '...'],
            city_2: ['密云小区', '顺义小区', '怀柔北房', '...'],
            tag333: 0,
        }
    },
    mounted() {
        // this.$refs.mask.style.height = document.getElementById('app').clientHeight + 'px'
        this.growFunc();
        //this.addEvent();

    },
    computed: {

    },
    watch: {

    },
    methods: {


        growFunc: function() {
            var box = document.getElementById("growbox");
            var ul1 = document.getElementById("growboxul1");
            var ul2 = document.getElementById("growboxul2");

            ul2.innerHTML = ul1.innerHTML;

            function scrollUp() {
                if (box.scrollTop >= ul1.offsetHeight) {
                    box.scrollTop = 0;
                } else {
                    box.scrollTop += 10;
                    //alert(box.scrollTop + '/' + ul1.offsetHeight);
                }

            }
            var time = 500;
            var mytimer = setInterval(scrollUp, time);
        },
        addInfo: function() {
            //alert(1)
            //debugger;
            if ((this.username === "" || this.username === null) || isNaN(Number(this.userage)) ||
                (this.userage === "" || this.userage === null)) {
                throw new Error('javaScript:0');
            } else {
                var obj_arr = {
                    name: this.username,
                    age: this.userage
                }
                this.myData.push(obj_arr);
                this.username = "";
                this.userage = "";
            }

        },
        deleteAll: function() {
            //this.issureMsg = "确认删除全部么？";
            this.isshowback = true;
            this.issure = true;
            this.deleteBoth = true;
            //this.myData = [];
        },

        btndelete: function(index) {
            //debugger;
            //this.issureMsg = "确认删除么？";
            this.delete = true;
            this.nowIndex = index;
            this.isshowback = true;
            this.issure = true;
        },
        deletesure: function() {
            if (this.deleteBoth === true) {
                this.myData = [];
            } else {
                this.myData.splice(this.nowIndex, 1);
            }

            this.isshowback = false;
            this.issure = false;
        },
        cancelsure: function() {
            this.isshowback = false;
            this.issure = false;
            this.isshowlocate = false;
        },

        //定位js

        locateinite: function() {
            //全屏遮罩，定位页面显示
            this.isshowback = true;
            this.isshowlocate = true;
        },



    }
}