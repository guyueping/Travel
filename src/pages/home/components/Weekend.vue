<template>
    <div>
        <div class="recommend-title">周末去哪儿</div> 
   <ul>
       <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                title: '北宫国家森林公园(AAAA景区)',
                desc: '烂漫大力蓝首站，浪漫的海洋馆主题乐园烂漫大力蓝首站，浪漫的海洋馆主题乐园'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
                title: '杭州极地海洋世界',
                desc: '杭州野生动物园成人票（含小火车、动物表演、游乐设施 )'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
                title: '印象西湖',
                desc: '【刷身份证直接入园】杭州野生动物世界大学生票'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
                title: '杭州野生动物世界',
                desc: '【免预约】杭州野生动物世界1大1小（亲子票）含小火车'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/iconfont/mixins.styl'
    .recommend-title
        line-height : .8rem
        background: #eee
        text-indent: .2rem
        margin-top: .2rem
    .item-img-wrap   
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
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


