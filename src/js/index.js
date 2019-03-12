import html from '@/html/index.html'
import css from '@/css/index.css'


export default ({
    template: html,
    data() {
        return {

        }
    },
    created() {
        this.css = css
    },
    computed: {

    },
    methods: {
        increate() {
            //debugger
            this.$store.dispatch('increment')
        }
    }
})