/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var van=1,mahotro=0;
var a=[["",0,0],["",0,0],["",0,0],["",0,0]];
var a1= new Array();
var a2= new Array();
var a3=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var next=1;


function thebodyonload(){
    var obj=document.getElementById("div0_4");
    var obj1=document.getElementById("input10");
    var obj2=document.getElementById("div17");
    
    var restoreBtn=document.getElementById("restore");
    var resetBtn=document.getElementById("reset");
    const popup = document.querySelector('.conf-popup');
    window.onbeforeunload = function(){return "Are you sure you want to leave our website?"; };
    resetBtn.onclick=function (){
        //xử lý khi nhấn tạo mới
        xoadulieulocalstorage();
        popup.style.display = "none";
    }
    restoreBtn.onclick=function (){
        //xử lý khi nhấn khôi phục
        khoiphucdulieu();
        popup.style.display = "none";
    }
    obj.onclick=tinhdiem;
    obj1.onchange=hotro;
    obj2.onclick=huy_hotro;
    
    if (localStorage.getItem('DateTime') !== null)
    {
        playaudio("khoiphuchaykhong");
        var noidungthongbao= document.getElementById("conf-popup-noidungthongbao");
        noidungthongbao.innerHTML=noidungthongbao.innerHTML+localStorage.getItem('DateTime');
        popup.style.display = "block";
    }

}
function huy_hotro(){
    if(next==3)
    {var OBJ;
        OBJ=document.getElementById("input9");
        OBJ.removeAttribute("disabled");
        OBJ=document.getElementById("input10");
        OBJ.removeAttribute("disabled");
        document.getElementById("div17").style.visibility="hidden";
        document.getElementById("div0_0").innerHTML="Ván: "+van;
        next=2;bangdiem();
    }
}

function hotro(){
    var OBJ,mk="22102002";
    mahotro=0;
    OBJ=document.getElementById("input9");
    if(mk.localeCompare(OBJ.value) == 0)
    {OBJ.value="";
        OBJ=document.getElementById("input10");
        mahotro=parseInt(OBJ.value);OBJ.value="";
        if(Number.isNaN(mahotro) == true)
        {
            mahotro=0;
        }
        
        if(mahotro<1||mahotro>=van)
            thongbao("Lỗi ván! Không tồn tại điểm ván "+mahotro+" trong hệ thống.");
        else
        {
            OBJ=document.getElementById("input9");
            OBJ.setAttribute("disabled","disabled");
            OBJ=document.getElementById("input10");
            OBJ.setAttribute("disabled","disabled");
            document.getElementById("div17").style.visibility="visible";
            next=3;bangdiem_mahotro();
            document.getElementById("div0_0").innerHTML="Chỉnh sửa điểm ván: "+mahotro;
            thongbao("Chúng tôi đã sẵn sàng sửa điểm VÁN "+mahotro+" cho bạn.<br>Vui lòng nhập lại điểm VÁN "
                +mahotro+" và nhấn NEXT để tiếp tục.");
            
        }
    }
    else
    {
        OBJ=document.getElementById("input9");
        OBJ.value="";
        OBJ=document.getElementById("input10");
        OBJ.value="";
        thongbao("Password sai! vui lòng không truy cập nếu bạn không phải Admin");
    }
}
function bangxephang(){
    var OBJ;
    var max,kq,ikq=0;
    var akq=[-1,-1,-1,-1];
    while(true){
    for(var j=0;j<4;j++)
    {
        if(j!=akq[0]&&j!=akq[1]&&j!=akq[2]&&j!=akq[3])
        {
            max=a[j][2];kq=j;break;
        }
    }
    for(var i=0;i<4;i++)
    {
        if(a[i][2]>max&&akq[0]!=i&&akq[1]!=i&&akq[2]!=i&&akq[3]!=i)
        {
            max=a[i][2];kq=i;
        }
    }
    akq[ikq]=kq;ikq++;
    if(ikq==1)
    {
        OBJ=document.getElementById("div4_2");
        OBJ.innerHTML=a[kq][0];
        OBJ=document.getElementById("div4_3");
        OBJ.innerHTML=a[kq][2];
    }
    if(ikq==2)
    {
        OBJ=document.getElementById("div5_2");
        OBJ.innerHTML=a[kq][0];
        OBJ=document.getElementById("div5_3");
        OBJ.innerHTML=a[kq][2];
    }
    if(ikq==3)
    {
        OBJ=document.getElementById("div6_2");
        OBJ.innerHTML=a[kq][0];
        OBJ=document.getElementById("div6_3");
        OBJ.innerHTML=a[kq][2];
    }
    if(ikq==4)
    {
        OBJ=document.getElementById("div7_2");
        OBJ.innerHTML=a[kq][0];
        OBJ=document.getElementById("div7_3");
        OBJ.innerHTML=a[kq][2];
        break;
    }
    }
}

function tinhdiem(){
    var OBJ,input;
    
    if(next==1)
    {
        for(var i=1;i<5;i++)
        {input="input"+i;
            OBJ=document.getElementById(input);
            a[i-1][0]=OBJ.value;
        }
        for(var i=1;i<5;i++)
        {
            input="ten"+i;
            OBJ=document.getElementById(input);
            OBJ.innerHTML=a[i-1][0];
            input="div"+(i+8)+"_1";
            OBJ=document.getElementById(input);
            OBJ.innerHTML=a[i-1][0];
            input="div13_"+i;
            OBJ=document.getElementById(input);
            OBJ.innerHTML=a[i-1][0];
        }
        for(var i=1;i<5;i++)
        {input="input"+i;
            OBJ=document.getElementById(input);
            OBJ.setAttribute("type","number");
        }
        next=2;return;
    }
    if(next==3)
    {
        var nhat=3,nhi=2,ba=1,bet=0;
        var diemtru=[0,0,0,0];
        a[0][2]=a[0][2]-a2[mahotro-1][0];
        a[1][2]=a[1][2]-a2[mahotro-1][1];
        a[2][2]=a[2][2]-a2[mahotro-1][2];
        a[3][2]=a[3][2]-a2[mahotro-1][3];
        for(var i=0;i<4;i++)
        {
            if(a2[mahotro-1][i]-a1[mahotro-1][i]>=nhat)
            {
                a3[i][nhat]--;
            }
            if(a2[mahotro-1][i]-a1[mahotro-1][i]==nhi)
            {
                a3[i][nhi]--;
            }
            if(a2[mahotro-1][i]-a1[mahotro-1][i]==ba)
            {
                a3[i][ba]--;
            }
            if(a2[mahotro-1][i]-a1[mahotro-1][i]<=bet)
            {
                a3[i][bet]--;
            }
        }
        for(var i=1;i<9;i++)
        {input="input"+i;
            OBJ=document.getElementById(input);
            if(i<5)
            {
                a[i-1][1]=parseInt(OBJ.value);OBJ.value="";
                if(Number.isNaN(a[i-1][1]) == true)
                {
                    a[i-1][1]=0;
                }
            }
            else
            {
                diemtru[i-5]=parseInt(OBJ.value);OBJ.value="";
                if(Number.isNaN(diemtru[i-5]) == true)
                {
                    diemtru[i-5]=0;
                }
            }
        }
        a[0][2]=a[0][2]+a[0][1]+diemtru[0];
        a[1][2]=a[1][2]+a[1][1]+diemtru[1];
        a[2][2]=a[2][2]+a[2][1]+diemtru[2];
        a[3][2]=a[3][2]+a[3][1]+diemtru[3];
        a2[mahotro-1][0]=a[0][1]+diemtru[0];
        a2[mahotro-1][1]=a[1][1]+diemtru[1];
        a2[mahotro-1][2]=a[2][1]+diemtru[2];
        a2[mahotro-1][3]=a[3][1]+diemtru[3];
        a1[mahotro-1][0]=diemtru[0];
        a1[mahotro-1][1]=diemtru[1];
        a1[mahotro-1][2]=diemtru[2];
        a1[mahotro-1][3]=diemtru[3];
        bangxephang();bangthongke();bangdiem();
        localStorage.setItem('Van'+mahotro,a[0][1]+","+a[1][1]+","+a[2][1]+","+a[3][1]);
        localStorage.setItem('DiemTruVan'+mahotro,diemtru[0]+","+diemtru[1]+","+diemtru[2]+","+diemtru[3]);
        OBJ=document.getElementById("input9");
        OBJ.removeAttribute("disabled");
        OBJ=document.getElementById("input10");
        OBJ.removeAttribute("disabled");
        document.getElementById("div17").style.visibility="hidden";
        document.getElementById("div0_0").innerHTML="Ván: "+van;
        next=2;return;
    }
    if(next==2)
    {
        var diemtru=[0,0,0,0];
        for(var i=1;i<9;i++)
        {input="input"+i;
            OBJ=document.getElementById(input);
            if(i<5)
            {
                a[i-1][1]=parseInt(OBJ.value);OBJ.value="";
                if(Number.isNaN(a[i-1][1]) == true)
                {
                    a[i-1][1]=0;
                }
            }
            else
            {
                diemtru[i-5]=parseInt(OBJ.value);OBJ.value="";
                if(Number.isNaN(diemtru[i-5]) == true)
                {
                    diemtru[i-5]=0;
                }
            }
        }
        if(a[0][1]<0||a[1][1]<0||a[2][1]<0||a[3][1]<0||a[0][1]>3||a[1][1]>3||a[2][1]>3||a[3][1]>3||
                a[0][1]==a[1][1]||a[0][1]==a[2][1]||a[0][1]==a[3][1]||a[1][1]==a[2][1]||a[1][1]==a[3][1]||
                a[2][1]==a[3][1]||(diemtru[0]+diemtru[1]+diemtru[2]+diemtru[3])!=0)
        {
            //phát hiện điểm nhập có thể bị sai.
            playaudio("saidulieu");
            thongbao("Phát hiện dữ liệu bất thường. Vui lòng kiểm tra và nhập lại!");
            return;
        }
        a[0][2]=a[0][2]+a[0][1]+diemtru[0];
        a[1][2]=a[1][2]+a[1][1]+diemtru[1];
        a[2][2]=a[2][2]+a[2][1]+diemtru[2];
        a[3][2]=a[3][2]+a[3][1]+diemtru[3];
        a2[van-1]=[0,0,0,0];a1[van-1]=[0,0,0,0];
        a2[van-1][0]=a[0][1]+diemtru[0];
        a2[van-1][1]=a[1][1]+diemtru[1];
        a2[van-1][2]=a[2][1]+diemtru[2];
        a2[van-1][3]=a[3][1]+diemtru[3];
        a1[van-1][0]=diemtru[0];
        a1[van-1][1]=diemtru[1];
        a1[van-1][2]=diemtru[2];
        a1[van-1][3]=diemtru[3];
        van++;OBJ=document.getElementById("div0_0");OBJ.innerHTML="Ván: "+van;
        bangxephang();bangthongke();bangdiem();
        localStorage.setItem('TongSoVan', (van-1).toString());
        localStorage.setItem('Van'+(van-1),a[0][1]+","+a[1][1]+","+a[2][1]+","+a[3][1]);
        localStorage.setItem('DiemTruVan'+(van-1),diemtru[0]+","+diemtru[1]+","+diemtru[2]+","+diemtru[3]);
        if(van==2){
            var now=new Date();
            localStorage.setItem('DateTime',now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' - '+now.getHours()+':'+now.getMinutes());
            localStorage.setItem('Name1',a[0][0]);
            localStorage.setItem('Name2',a[1][0]);
            localStorage.setItem('Name3',a[2][0]);
            localStorage.setItem('Name4',a[3][0]);
        }
    }
    
}
function bangthongke(){
    var nhat=3,nhi=2,ba=1,bet=0;
    var OBJ;
    for(var i=0;i<4;i++)
    {
        if(a[i][1]>=nhat)
        {
            a3[i][nhat]++;
        }
        if(a[i][1]==nhi)
        {
            a3[i][nhi]++;
        }
        if(a[i][1]==ba)
        {
            a3[i][ba]++;
        }
        if(a[i][1]<=bet)
        {
            a3[i][bet]++;
        }
    }
    OBJ=document.getElementById("div9_2");
    a3[0][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_3");
    a3[0][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_4");
    a3[0][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_5");
    a3[0][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div10_2");
    a3[1][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_3");
    a3[1][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_4");
    a3[1][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_5");
    a3[1][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div11_2");
    a3[2][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_3");
    a3[2][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_4");
    a3[2][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_5");
    a3[2][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div12_2");
    a3[3][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_3");
    a3[3][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_4");
    a3[3][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_5");
    a3[3][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][0]*100/(van-1)).toFixed(1)+"%";
    
    
}
function bangdiem(){
    var OBJ=document.getElementById("tab1");
    var str="<tr><td style='width: 60px'>";
    for(var i=0;i<a2.length;i++)
    {
        if(i>0)
        {
            str+="<tr><td>";
            str+=(i+1)+"</td><td>";
            str+=a2[i][0]+"</td><td>";
            str+=a2[i][1]+"</td><td>";
            str+=a2[i][2]+"</td><td>";
            str+=a2[i][3]+"</td></tr>";
        }
        else
        {
            str="<tr><td style='width: 61px'>";
            str+=(i+1)+"</td><td style='width: 242px'>";
            str+=a2[i][0]+"</td><td style='width: 241px'>";
            str+=a2[i][1]+"</td><td style='width: 243px'>";
            str+=a2[i][2]+"</td><td>";
            str+=a2[i][3]+"</td></tr>";
        }
    }
    OBJ.innerHTML=str;
    OBJ=document.getElementById("div14");OBJ.scrollTop = OBJ.scrollHeight;
}
function bangdiem_mahotro(){
    var OBJ=document.getElementById("tab1");
    var str="<tr><td style='width: 60px'>";
    for(var i=0;i<a2.length;i++)
    {
        if(i>0)
        {
            if(mahotro==i+1)
            {
                str+="<tr id='tr_hotro' style='background-color:#66ff66'><td style='border-right:2px #0000cc solid'>";
                str+=(i+1)+"</td><td>";
                str+=(a2[i][0]-a1[i][0])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][0]+"</td><td>";
                str+=(a2[i][1]-a1[i][1])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][1]+"</td><td>";
                str+=(a2[i][2]-a1[i][2])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][2]+"</td><td>";
                str+=(a2[i][3]-a1[i][3])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][3]+"</td></tr>";
            }
            else
            {
                str+="<tr><td style='border-right:2px #0000cc solid'>";
                str+=(i+1)+"</td><td>";
                str+=(a2[i][0]-a1[i][0])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][0]+"</td><td>";
                str+=(a2[i][1]-a1[i][1])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][1]+"</td><td>";
                str+=(a2[i][2]-a1[i][2])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][2]+"</td><td>";
                str+=(a2[i][3]-a1[i][3])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][3]+"</td></tr>";
            }
        }
        else
        {
            if(mahotro==i+1)
            {
                str="<tr id='tr_hotro' style='background-color:#66ff66'><td style='width: 61px;border-right:2px #0000cc solid'>";
                str+=(i+1)+"</td><td style='width: 200px'>";
                str+=(a2[i][0]-a1[i][0])+"</td><td style='width: 38px;border-right:2px #0000cc solid'>";
                str+=a1[i][0]+"</td><td style='width: 200px'>";
                str+=(a2[i][1]-a1[i][1])+"</td><td style='width: 37px;border-right:2px #0000cc solid'>";
                str+=a1[i][1]+"</td><td style='width: 200px'>";
                str+=(a2[i][2]-a1[i][2])+"</td><td style='width: 39px;border-right:2px #0000cc solid'>";
                str+=a1[i][2]+"</td><td style='width: 200px'>";
                str+=(a2[i][3]-a1[i][3])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][3]+"</td></tr>";
            }
            else
            {
                str="<tr><td style='width: 61px;border-right:2px #0000cc solid'>";
                str+=(i+1)+"</td><td style='width: 200px'>";
                str+=(a2[i][0]-a1[i][0])+"</td><td style='width: 38px;border-right:2px #0000cc solid'>";
                str+=a1[i][0]+"</td><td style='width: 200px'>";
                str+=(a2[i][1]-a1[i][1])+"</td><td style='width: 37px;border-right:2px #0000cc solid'>";
                str+=a1[i][1]+"</td><td style='width: 200px'>";
                str+=(a2[i][2]-a1[i][2])+"</td><td style='width: 39px;border-right:2px #0000cc solid'>";
                str+=a1[i][2]+"</td><td style='width: 200px'>";
                str+=(a2[i][3]-a1[i][3])+"</td><td style='border-right:2px #0000cc solid'>";
                str+=a1[i][3]+"</td></tr>";
            }
        }
    }
    OBJ.innerHTML=str;
    OBJ=document.getElementById("tr_hotro");
    var scrollPos = OBJ.offsetTop - (document.getElementById("div14").offsetHeight - OBJ.offsetHeight) / 2;
    document.getElementById("div14").scrollTop = scrollPos;
}
function khoiphucdulieu(){
    van = parseInt(localStorage.getItem('TongSoVan'));
    var diemchinh,diemphu;
    for(var i=0;i<van;i++)
    {
        diemchinh=localStorage.getItem('Van'+(i+1)).toString().split(",");
        diemphu=localStorage.getItem('DiemTruVan'+(i+1)).toString().split(",");
        
        a[0][2]=a[0][2]+parseInt(diemchinh[0])+parseInt(diemphu[0]);
        a[1][2]=a[1][2]+parseInt(diemchinh[1])+parseInt(diemphu[1]);
        a[2][2]=a[2][2]+parseInt(diemchinh[2])+parseInt(diemphu[2]);
        a[3][2]=a[3][2]+parseInt(diemchinh[3])+parseInt(diemphu[3]);
        a2[i]=[0,0,0,0];a1[i]=[0,0,0,0];
        a2[i][0]=parseInt(diemchinh[0])+parseInt(diemphu[0]);
        a2[i][1]=parseInt(diemchinh[1])+parseInt(diemphu[1]);
        a2[i][2]=parseInt(diemchinh[2])+parseInt(diemphu[2]);
        a2[i][3]=parseInt(diemchinh[3])+parseInt(diemphu[3]);
        a1[i][0]=parseInt(diemphu[0]);
        a1[i][1]=parseInt(diemphu[1]);
        a1[i][2]=parseInt(diemphu[2]);
        a1[i][3]=parseInt(diemphu[3]);
    }next=2;van++;
    document.getElementById("div0_0").innerHTML="Ván: "+van;
    khoiphuctennguoichoi();khoiphucbangthongke();bangxephang();bangdiem();
}
function khoiphucbangthongke(){
    var nhat=3,nhi=2,ba=1,bet=0;
    var OBJ;
    for(var i=0;i<(van-1);i++)
    {
        for(var j=0;j<4;j++)
        {
            if(a2[i][j]-a1[i][j]>=nhat)
            {
                a3[j][nhat]++;
            }
            if(a2[i][j]-a1[i][j]==nhi)
            {
                a3[j][nhi]++;
            }
            if(a2[i][j]-a1[i][j]==ba)
            {
                a3[j][ba]++;
            }
            if(a2[i][j]-a1[i][j]<=bet)
            {
                a3[j][bet]++;
            }
        }
    }
    //hiển thị bảng thống kê lên màn hình:
    OBJ=document.getElementById("div9_2");
    a3[0][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_3");
    a3[0][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_4");
    a3[0][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div9_5");
    a3[0][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[0][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div10_2");
    a3[1][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_3");
    a3[1][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_4");
    a3[1][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div10_5");
    a3[1][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[1][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div11_2");
    a3[2][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_3");
    a3[2][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_4");
    a3[2][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div11_5");
    a3[2][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[2][0]*100/(van-1)).toFixed(1)+"%";
    
    OBJ=document.getElementById("div12_2");
    a3[3][3]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][3]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_3");
    a3[3][2]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][2]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_4");
    a3[3][1]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][1]*100/(van-1)).toFixed(1)+"%";
    OBJ=document.getElementById("div12_5");
    a3[3][0]==van-1?  OBJ.innerHTML="100%":OBJ.innerHTML=(a3[3][0]*100/(van-1)).toFixed(1)+"%";
}
function khoiphuctennguoichoi(){
    var OBJ,input;
    a[0][0]=localStorage.getItem('Name1');
    a[1][0]=localStorage.getItem('Name2');
    a[2][0]=localStorage.getItem('Name3');
    a[3][0]=localStorage.getItem('Name4');
    for(var i=1;i<5;i++)
    {
        input="ten"+i;
        OBJ=document.getElementById(input);
        OBJ.innerHTML=a[i-1][0];
        input="div"+(i+8)+"_1";
        OBJ=document.getElementById(input);
        OBJ.innerHTML=a[i-1][0];
        input="div13_"+i;
        OBJ=document.getElementById(input);
        OBJ.innerHTML=a[i-1][0];
    }
    for(var i=1;i<5;i++)
    {input="input"+i;
        OBJ=document.getElementById(input);
        OBJ.setAttribute("type","number");
    }
}
function xoadulieulocalstorage(){
    localStorage.clear();
}
/*
// Lưu dữ liệu vào local storage
localStorage.setItem('key', 'value');

// Lấy dữ liệu từ local storage
const data = localStorage.getItem('key');

// Xóa dữ liệu từ local storage
localStorage.removeItem('key');
 */
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
function thongbao(noidungthongbao){
    document.getElementById('noidungthongbao').innerHTML=noidungthongbao;
    showPopup();
}