<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                            <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                            <div class="button">{{item.name}}</div>
                    </div>                  
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom"
                         v-for="city of item" 
                         :key="city.id"
                         @click="handleCityClick(city.name)"
                    >
                        {{city.name}}
                    </div>
                  
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    props: {
        cities: Object,
        hot: Array,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    watch: {
        letter () {
            if (this.letter) {
                // console.log(this.$refs)
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                // console.log(element)
            }
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
            
        },
        ...mapMutations(['changeCity'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/iconfont/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
            &:before
                border-color: #ccc
    .list
        position: absolute 
        top: 0
        bottom: 0
        left: 0
        right: 0
        xbackground: pink
        overflow: hidden
        top: 1.58rem
    .title
        line-height: .54rem
        background: #eee
        padding: left
        color: #666
        font-size: .26rem 
    .button-list
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .button-wrapper
            width: 33.33%
            float: left  
            .button
                text-align: center
                margin: .1rem
                border: .02rem solid #ccc
                color: #666
                padding: .1rem 0
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
        
</style>
