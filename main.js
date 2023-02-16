if(window.location.href !== "https://creator.douyin.com/creator-micro/data/following/following"){alert("请先前往 抖音创作服务平台\n(https://creator.douyin.com/creator-micro/data/following/following)\n再执行此脚本");};

SafeListUser= ["常青","周杰伦F.M首播(正版专辑/周边)","三融在东帝汶"]//Example



function NextPage(pages){
    for(let p=0; p<pages;p++){
        document.getElementsByClassName("semi-icons semi-icons-chevron_right semi-icons-default")[0].parentNode.click() 
    }
}
function Unfllow_ThisPage(){
    var Content = document.getElementsByClassName("semi-table-tbody");
    for(let n of Content[0].childNodes){
        function _cli(){
            usr_name = n.firstChild.childNodes[1].innerHTML;
            unfllow_btn = n.childNodes[2].firstChild;
            if(SafeListUser.indexOf(usr_name) !=-1){
                console.log(`跳过   ${usr_name}`);
            }else{
                console.log(`正在取关   ${usr_name}`)
                unfllow_btn.click();
                document.getElementsByClassName("buttons--wuLtP")[0].childNodes[1].click()
                //确认取消
            }
        }
        setTimeout(_cli,500)//0.5秒点击取关
    }
}

//NextPage(1)
Unfllow_ThisPage()
