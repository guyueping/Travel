<template>
    <div>
        <div class="recommend-title">热销推荐</div> 
   <ul>
       <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
            <img :src="item.imgUrl" class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
       </li>
   </ul>
    </div>
   
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                title: '北宫国家森林公园(AAAA景区)',
                desc: '烂漫大力蓝首站，浪漫的海洋馆主题乐园烂漫大力蓝首站，浪漫的海洋馆主题乐园'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                title: '杭州极地海洋世界',
                desc: '杭州野生动物园成人票（含小火车、动物表演、游乐设施 )'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                title: '印象西湖',
                desc: '【刷身份证直接入园】杭州野生动物世界大学生票'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
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
    .item   
        overflow: hidden
        height: 1.9rem
        display: flex
        xbackground: red
        .item-img
            height: 1.7rem
            width: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
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
            .item-button
                line-height: .44rem
                background: #ff9300
                border-radius: .06rem
                padding: 0 .2rem
                margin-top: .16rem
                color: #fff

</style>


