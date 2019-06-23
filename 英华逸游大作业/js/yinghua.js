<script>
    window.onload=function(){
    let aaa  = document.getElementById('place');
    let bbb  = document.getElementById('service');
    let ccc  = document.getElementById('friend');
    let i=0,m;
    let x='韩国    日本    菲律宾    越南    老挝    柬埔寨    泰国    马来西亚    新加坡    印度尼西亚    印度    斯里兰卡    土耳其    阿联酋    西班牙    意大利    希腊    法国    比利时    荷兰    英国    瑞士    奥地利    德国    匈牙利    俄罗斯    捷克    芬兰    葡萄牙    冰岛    美国    加拿大    巴西    阿根廷    澳大利亚    新西兰';
    let y = x.split("    ");
    let xx = '海岛度假    历史文化    探索冒险    美食购物    都市生活    海外游学    邮轮度假    蜜月摄影    亲子乐园';
    let yy = xx.split("    ");
    let xxx = '马蜂窝    穷游    booking    苏州旅游局    驴友网    吾爱全球签证中心    酒店团购    携程旅游攻略    天巡职航在线    满天飞旅游网    中国旅游网    澳乐网    背包兔旅游行程    出境旅游      国际酒店    广州旅行社    出境旅游    517旅行    花生游    家园网     海外婚礼';
    let yyy = xxx.split("    ");
    for(i=0;i<36;i++){
        var a=document.createElement('a');
        a.innerText=y[i];
        a.className='place1';
        aaa.appendChild(a);
    }
    for(m=0;m<9;m++){
        var b=document.createElement('a');
        b.innerText=yy[m];
        b.className='place1';
        bbb.appendChild(b);
    }
    for(n=0;n<21;n++){
        var c=document.createElement('a');
        c.innerText=yyy[n];
        c.className='place1';
        ccc.appendChild(c);
    }
    }
</script>