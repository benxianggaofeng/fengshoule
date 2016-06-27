var tplMy = require("../templates/my.string");

SPA.defineView("my",{
  html:tplMy,


  plugins:['delegated'],

  bindActions:{
    'tap.info':function () {
      // console.log(2);
      SPA.open('logon');
    }
  }
});
