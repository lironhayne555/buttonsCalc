var elem= document.getElementById('calc-div');
// var grayBtnarr=["%","&#247","&#8730","X","-","+","="];
// var orgBtnarr=["CE","ON"];
// var button="<div>"+grayBtnarr[0]+"</div>";
// for(var i=1;i<21;i++)
// {
//     for(x=0;x<grayBtnarr.length;x++)
//     {
//     if(i%5===0 )
//     {
//         button+="<div  class='button'>"+grayBtnarr[x]+"</div>";
//         button+="<div  class='button'>"+grayBtnarr[x+1]+"</div>";
//         i++;
//         continue;
//     }
//     else break;
// }
//    button+="<div class='button'>"+i+"</div>";
    

// }
// calc.innerHTML+="<div class='num-wrap'>"+button+"</div>";
let alldivs;
for(var x=9;x>0;x--)
{
    if(x%3===0)
    {
elem.innerHTML+='<div class="inner-div"></div>';
    }
 alldivs=document.getElementsByClassName('inner-div');
let index=0;
if(x<=6 && x>3)
{
    index=1;

}
else if(x<=3 && x>0){
index=2;
}
else{
    index=0;
}
alldivs[index].innerHTML+="<div class='black'>"+x+"</div>";


}
let lastRow=["<div class='black'>0</div>","<div class='black'>.</div>","<div class='black'><sup>+</sup>/<sub>-</sub></div>"]
elem.innerHTML+='<div class="inner-div"></div>';

for(var i=0;i<lastRow.length;i++)
{
    alldivs[3].innerHTML+=lastRow[i];
}
let mydivs=document.getElementsByClassName('inner-div');