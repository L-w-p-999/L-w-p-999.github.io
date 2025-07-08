var posts=["2025/06/27/6.29分享/","2025/01/01/Ts的一点点介绍/","2024/11/01/hello-world/","2025/04/12/let和var的一些区别（持续更新）/","2025/04/22/useEffect钩子-1/","2024/11/01/原型链和this指向简单理解/","2025/04/22/用dify和cursor构建一个ai智能翻译助手/","2025/06/26/大一下学期学期小结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };