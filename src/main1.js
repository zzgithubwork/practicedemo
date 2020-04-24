 //导入jquery
 import $ from 'jquery'

 //导入css样式
 import './css/index.css'
 import './css/index.less'
 import './css/index.scss'

  $( ()=>{
      $('li:odd').css('backgroundColor','yellow');
      $('li:even').css('backgroundColor',function(){
          return '#'+'D97634'
      })
  })

  //es6 语法 要使用babel来处理 由高->低
    class person  {
        //静态属性 通过类名.属性名就可以访问
        //通过类的实例来访问的属性为实例属性
        static info = {name:'zz',age:18}
    }
    console.log(person.info)