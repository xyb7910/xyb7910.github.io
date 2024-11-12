var posts=["2024/11/12/测试/","2024/11/12/递归/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };