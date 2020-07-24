let html = document.querySelector("#html"); //CSS选择器
let style = document.querySelector("#style");

let string = `
/*
 你好，我是一名前端新人
 接下来我要演示一下我的前端功底
 首先我要准备一个 div
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*
 接下来
 我要将 div 变成一个八卦
 首先，把 div 变成一个圆
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*
 八卦是阴阳形成的
 一黑一白
*/
#div1{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
  rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 加两个神秘的小球
*/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: white;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: black;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let string2 = ``;
// string = string.replace(/\n/g, "<br>");
let n = 0;

let step = () => {
  setTimeout(() => {
    n += 1;
    //如果是回车，就追加<br>;如果不是回车，就照搬string[n]
    //string2 += string[n] === "\n" ? "<br>" : string[n];
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    if (n < string.length - 1) {
      step();
    }
  }, 30);
};

step();
