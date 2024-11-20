var posts=["开发/GOUI/","uncategorized/测试/","算法/递归/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };