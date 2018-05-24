
var result = `/*
*面试官你好，我叫宋萌
*只用文字作自我介绍太单调了
*那么我就用代码带自我介绍吧
*首先我需要一些样式
*/
*{
    transition: all 0.5s;
}
*{
    background-color:rgb(222,222,222);
}
#code{
    margin: 20px;
    padding: 20px;
    border:1px solid #aaa;
}
#code{
    position: fixed;
    left:0;
    width: 45%;
}
/*我觉得我的代码需要一点点的高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/*现在我们做个立体特效*/
#code{
    box-shadow : 0px 4px 10px 6px black;
}
/*我还会一点点特技*/
#code{
    transform: rotateZ(360deg)
}
/*好了，现在开始我来介绍一下我自己
 *我需要一张白纸*/


`
var result2 = `#paper{
    background-color:#fff;
    margin: 20px 20px 20px 100px;
    position: fixed;
    right:0;
    width: 45%;
    height: 100%;
    box-shadow : 0px 4px 10px 6px black;
}`
var md = `
#个人介绍
我叫XX
1995年12月生
XX学校毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍
熟悉Javascript、css

#项目介绍
1.个人简历
2.轮播
3.画板
#联系方式
xxxxxxx
xxxxxxxxx
xxxxxx



`

writeCode('',result,function(){
    createPaper(function(){
        writeCode(result,result2,function(){
            wirteMarkdown(md)
        })
    })
})


function writeCode(prefix,code,fn){   //prefix 代表着前缀   fn代表回调
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''            //相当于初始化
    let n = 0
    let id = setInterval( () => {
        n += 1
        domCode.innerHTML =  prefix + Prism.highlight(code.substring(0,n), Prism.languages.css);  //innerText会把额外添加标签也当作文本输入
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
            fn.call() //当第一次任务结束后回调函数
        }
    },0)
}

function wirteMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper')
    let n =0
    let id = setInterval(() => {
        n +=1
        domPaper.innerHTML = markdown.substring(0,n)
        if(n >= markdown.length){
            window.clearInterval(id)
            fn.call() //当第一次任务结束后回调函数
        }
    },0)
}


function createPaper(fn){
    var Paper = document.createElement('pre')
    Paper.id = 'paper'
    document.body.appendChild(Paper)
    fn.call()
}