window.onload=function(){
    var Ofoot=document.getElementById('foot');
    var OWX=Ofoot.getElementsByTagName('a')[0];
    var box=document.getElementById('weixin-box');
    OWX.onmouseover=function(){
        box.style.display='block';
    }
    OWX.onmouseout=function(){
        box.style.display='none';
    } 

    var Odl=document.getElementById('dl1');
    var Add=Odl.getElementsByTagName('dd');
    var div=Odl.getElementsByTagName('div');
    var i=0;
    for (i = 0; i < Add.length; i++) {
        Add[i].index=i;
        // alert(Add[i].index=i);
        Add[i].onmouseover=function(){
            this.className='z-sider on';
            div[this.index].style.display='block';

        }
        Add[i].onmouseout=function(){
            this.className='z-sider';
            div[this.index].style.display='none';
        }
   }        
} 