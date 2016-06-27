var tplDetail = require("../templates/detail.string");

SPA.defineView("detail",{
  html:tplDetail,

  plugins:['delegated',{
    name:'avalon',
    options:function (vm) {
      vm.imgsrc = "";
      vm.title1 = "";
      vm.title2 = "";
      vm.price = "";
      vm.isShowLoading = true;
    }
  }],


    bindActions:{
      'back.tab':function () {  //点击返回箭
        this.hide();
      }
    },
    bindEvents:{
      'show':function () {
      var vm =this.getVM();
      // console.log(this.param);  //拿到点击home中的图片时，传过来的数据(第一种方法)
      // console.log(this.param.data);      //(第二种方法)
      var d = this.param.data;
      // setTimeout(function () {
      //
      // },2000);
      vm.imgsrc = d.imgsrc;
      vm.title1 = d.title1;
      vm.title2 = d.title2;
      vm.price = d.price;
      }
    }
});
