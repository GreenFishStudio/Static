/* 禁用调试以及右键并提醒觅知博客www.98dou.cn */
document.onkeydown=function(){if(event.ctrlKey&&window.event.keyCode==85){new Vue({data:function(){this.$notify({title:"嘿！别瞎按",message:"老弟，在干嘛呢？好好看电影吧~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if(window.event&&window.event.keyCode==123){event.keyCode=0;event.returnValue=false;new Vue({data:function(){this.$notify({title:"嘿！好好看电影吧~",message:"你非要调试的话试试 Alt+Shift+Fn+F4",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if(event.ctrlKey&&window.event.keyCode==83){new Vue({data:function(){this.$notify({title:"嘿！你瞧瞧你",message:"看电影网页不需要保存哦~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if((event.ctrlKey)&&(event.shiftKey)&&(event.keyCode==73)){new Vue({data:function(){this.$notify({title:"嘿！哈哈哈",message:"老弟，好好看电影吧不要瞎调试换哟~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if(window.event&&window.event.keyCode==117){event.keyCode=0;event.returnValue=false;new Vue({data:function(){this.$notify({title:"嘿！喂喂喂",message:"建议首页浏览器自带刷新按钮不香吗？",position:'bottom-right',offset:50,showClose:true,type:"warning"});return{visible:false}}})
return false;}}
document.oncontextmenu = function (){new Vue({data:function(){this.$notify({title:"嘿！没有右键菜单",message:"复制请用键盘快捷键 Ctrl+C",position:'bottom-right',offset:50,showClose:true,type:"warning"});return{visible:false}}})
return false;}