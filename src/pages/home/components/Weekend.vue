<template>
    <div>
        <div class="recommend-title">周末去哪儿</div> 
   <ul>
       <li class="item border-bottom" v-for="item in list" :key="item.id">
            <div class="item-img-wrap">
                <img :src="item.imgUrl" class="item-img">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
       </li>
   </ul>
    </div>
   
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/iconfont/mixins.styl'
    .recommend-title
        line-height : .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrap   
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
            padding: .1rem
    .item-info
        xflex: 1
        padding: .1rem
        xmin-width: 0
        .item-title
            line-hight: .54rem
            font-size: .32rem
            ellipsis()
            margin-top: .1rem
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
            margin-top: .16rem


</style>


