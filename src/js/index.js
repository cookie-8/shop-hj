import html from '@/html/index.html'
import css from '@/css/index.css'


export default ({
    template: html,
    data() {
        return {
            css: css,
            count: 0,
        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increate() {
            //debugger
            this.$store.dispatch('increment')
        }
    }
})