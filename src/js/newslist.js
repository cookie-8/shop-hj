import html from "@/html/newslist.html"
import css from '@/css/newslist.css'
import bun1 from '@/images/bun1.jpg'
import bun2 from '@/images/bun2.png'
import bun3 from '@/images/bun3.png'

export default {
    template: html,
    props: ['navigation'],
    // inject: ['reload'],
    data() {

        return {
            lanmu: "",
            bigmsg: ["中国军事", "各国科技", "房产", "情感触碰"],
            now: "",
            i: "0",
            pic: [bun1, bun2, bun3],
            items1: [
                { "title": "台媒：解放军若武统将会打点穴战 锁定'台独'分子", "id": "1-1" },
                { "title": "缅甸2架战机坠毁 致2名飞行员和1名女学生身亡(图)", "id": "1-2" },
                { "title": "美媒'中国间谍芯片'报道遭广泛质疑 多家美企驳斥", "id": "1-3" },
                { "title": "美军舰船停靠高雄港？台军先急了：只是科研船", "id": "1-4" }

            ],
            items2: [
                { "title": "我军飞行学院训练不再规避'死亡陷阱'此前中断30年", "id": "2-1" },
                { "title": "我军特种部队能否拯救国足 网友：还不如特种兵去踢", "id": "2-2" },
                { "title": "俄火箭发射失败影响空间站运行 三大教训值得中国借", "id": "2-3" },
                { "title": "美海军科研船停靠台湾 携带水下载具可测量水文资料", "id": "2-4" }
            ]
        }
    },
    methods: {
        getMsg: function() {
            alert(this.navigation)
        }
    },
    created() {
        this.css = css
            //debugger;

        //定义一个存放照片位置的数组，可以放任意个，在这里放3个

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


}