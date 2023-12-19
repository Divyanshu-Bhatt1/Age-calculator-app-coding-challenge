
const date = new Date();
let d=date.getDate();
let y=date.getFullYear();
let m=(date.getMonth())+1;
console.log(d,m,y)
const months=[0,31,28,31,30,31,30,31,31,30,31,30,31]

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function check1(d1,m1,y1)
{
    let cnt=1;
       if(d1=='')
       {
        document.body.getElementsByClassName("war")[0].style.visibility = "visible";
        document.body.getElementsByClassName("er")[0].style.color = "hsl(0, 100%, 67%)";
        document.getElementsByTagName('input')[0].style.borderColor="hsl(0, 100%, 67%)"
        cnt=cnt-1;
       }

       if(m1=='')
       {
        document.body.getElementsByClassName("war")[1].style.visibility = "visible";
        document.body.getElementsByClassName("er")[1].style.color = "hsl(0, 100%, 67%)";
        document.getElementsByTagName('input')[1].style.borderColor="hsl(0, 100%, 67%)"
        cnt=cnt-1;
       }

       if(y1=='')
       {
        document.body.getElementsByClassName("war")[2].style.visibility = "visible";
        document.body.getElementsByClassName("er")[2].style.color = "hsl(0, 100%, 67%)";
        document.getElementsByTagName('input')[2].style.borderColor="hsl(0, 100%, 67%)"
        cnt=cnt-1;
       }
       
       if(cnt==1){
        return true;
       }else{
        return false;
       }
}

function check2(d1,m1,y1)
{
    let cnt=1;
   if(y1<=0 || y1>y)
   {
    document.body.getElementsByClassName("war")[2].style.visibility = "visible";
    document.body.getElementsByClassName("war")[2].innerHTML="Must be valid year";
    document.body.getElementsByClassName("er")[2].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName('input')[2].style.borderColor="hsl(0, 100%, 67%)"
    cnt=cnt-1;
   }

   if(m1<=0 || m1>12)
   {
    document.body.getElementsByClassName("war")[1].style.visibility = "visible";
    document.body.getElementsByClassName("war")[1].innerHTML="Must be valid year";
    document.body.getElementsByClassName("er")[1].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName('input')[1].style.borderColor="hsl(0, 100%, 67%)"
    cnt=cnt-1;
   }

   if(d1<=0 ||d1>months[m1])
   {
    if(m1==2)
    {
         if(isLeapYear(y1))
         {
            if(d1>29 || d1<=0)
            {
                document.body.getElementsByClassName("war")[0].style.visibility = "visible";
                document.body.getElementsByClassName("war")[0].innerHTML="Must be valid year";
                document.body.getElementsByClassName("er")[0].style.color = "hsl(0, 100%, 67%)";
                document.getElementsByTagName('input')[0].style.borderColor="hsl(0, 100%, 67%)"
                cnt=cnt-1;
                return false;
            }else{
                return true;
            }
         }else{
            if(d1>28 || d1<=0)
            {
                document.body.getElementsByClassName("war")[0].style.visibility = "visible";
                document.body.getElementsByClassName("war")[0].innerHTML="Must be valid year";
                document.body.getElementsByClassName("er")[0].style.color = "hsl(0, 100%, 67%)";
                document.getElementsByTagName('input')[0].style.borderColor="hsl(0, 100%, 67%)"
                cnt=cnt-1;
                return false;
            }else{
                return true;
            }
         }
    }
    document.body.getElementsByClassName("war")[0].style.visibility = "visible";
    document.body.getElementsByClassName("war")[0].innerHTML="Must be valid year";
    document.body.getElementsByClassName("er")[0].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName('input')[0].style.borderColor="hsl(0, 100%, 67%)"
    cnt=cnt-1;
   }

   if(cnt<=0)
   {
    return false;
   }else{
    return true;
   }
}

document.getElementById("d1").addEventListener("keydown",()=>
{
    document.body.getElementsByClassName("war")[0].style.visibility = "hidden";
    document.body.getElementsByClassName("er")[0].style.color = "hsl(0, 1%, 44%)";
    document.getElementsByTagName('input')[0].style.borderColor="hsl(0, 0%, 86%)"
})

document.getElementById("m1").addEventListener("keydown",()=>
{
    document.body.getElementsByClassName("war")[1].style.visibility = "hidden";
    document.body.getElementsByClassName("er")[1].style.color = "hsl(0, 1%, 44%)";
    document.getElementsByTagName('input')[1].style.borderColor="hsl(0, 0%, 86%)"
})

document.getElementById("y1").addEventListener("keydown",()=>
{
    document.body.getElementsByClassName("war")[2].style.visibility = "hidden";
    document.body.getElementsByClassName("er")[2].style.color = "hsl(0, 1%, 44%)";
    document.getElementsByTagName('input')[2].style.borderColor="hsl(0, 0%, 86%)"
})

document.getElementById("btn").addEventListener("click",()=>
{
    
    let d1=document.getElementById("d1").value;
    let m1=document.getElementById("m1").value;
    let y1=document.getElementById("y1").value;
    console.log(d1,m1,y1);
    let d2=0;
    let m2=0;
    let m3=0;

    if(check1(d1,m1,y1)&&check2(d1,m1,y1))
    {
    // for days
    if(d<d1)
    {
        if(m==2)
        {
              if(isLeapYear(y))
              {
                d=d+29;
              }else{
                d=d+28;
              }
        }else{
            d=d+months[m];
        }
        d2=d-d1;
        m=m-1;
    }else{
        d2=d-d1;
    }

    // for months
    if(m<m1)
    {
        m=m+12;
        y=y-1;
        m2=m-m1;
    }else{
        m2=m-m1;
    } 

    // for years
    y2=y-y1;
    console.log(d2,y2,m2)
    document.body.getElementsByClassName("d2")[0].innerHTML=d2;
    document.body.getElementsByClassName("m2")[0].innerHTML=m2;
    document.body.getElementsByClassName("y2")[0].innerHTML=y2;

    }else{
        //  reload mar page
    }
})
