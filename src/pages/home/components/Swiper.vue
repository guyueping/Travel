<template>
<div class='wrapper'>
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper> 
</div> 
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/fe/fd9c295c0e1a7602.jpg_750x200_11c8343f.jpg'
        }]
      }
    }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #eee
  .wrapper
    width: 100%
    padding-bottom: 26.7%
    height: 0
    overflow: hidden
    background: #eee  
    .swiper-img
      width: 100%
</style>
