var tplClassify = require("../templates/classify.string");

SPA.defineView("classify",{
  html:tplClassify,

  //插件使用必须添加
  plugins:["delegated"], //实现点击事件

  init:{
    mySwiper:null
  },


  //点击事件
  bindActions:{
    'switch.tabs':function(e,data){    //在点击的元素上添加   action-type = "switch.tabs"
               //上面的  plugins:["delegated"],必加  //它返回的是一个对象  如 el:li
      var Num = 0;
      $(e.el).addClass("active").siblings().removeClass("active"); //高亮
      this.mySwiper.slideTo($(e.el).index());  //点击切换
    },
    //点击返回
    'back.tabs':function(e,data){
      this.hide();
    }
  },

  //滑动事件
  bindEvents:{
    'show':function () {
      //种类切换
      this.mySwiper = new Swiper ('#classify-swiper', {
           preventClicks : false,
          // effect:'fade',
          onSlideChangeStart: function(swiper){
            // console.log(swiper.activeIndex);
            var index = swiper.activeIndex;
            var $li = $(".m-classify .classify li");
            $li.eq(index).addClass("active").siblings().removeClass("active");
          }
      });
    }
  }
});
