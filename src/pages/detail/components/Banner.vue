<template>
    <div class="banner">
        <img src="http://img1.qunarzz.com/sight/p0/1603/ff/ff223ef32c48528f90.water.jpg_600x330_8054c9df.jpg" class="banner-img">
        <div class="banner-info">
            <div class="banner-tittle">
                大连生涯海洋世界(aaaa景区)
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692; 33</span>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 55%
        position: relative
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #eee
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                margin-top: .14rem
                padding: 0 .2rem
                line-height: .32rem
                height: .32rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>


