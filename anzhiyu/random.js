var posts=["2024/05/16/hello-world/","2024/05/20/随笔/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };