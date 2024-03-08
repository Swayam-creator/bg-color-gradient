let hexrandom="0123456789abcdef";
let button1=document.getElementById('mybutton1');
let button2=document.getElementById('button2');
let copycode=document.querySelector('.copycode');
let rgb1='#18913c';
let rgb2='#c9c30d';
// let result='#';
const hexvalues=()=>{
    let result='#';
    for(let i=0;i<6;i++){
   
        result+= hexrandom[Math.floor(Math.random()*16 )];
       
   }
   return result;
};
const handlebtn1=()=>{
     rgb1=hexvalues();
    console.log(rgb1);
    button1.textContent=`${rgb1}`;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1} 0%, ${rgb2} 100%)`;
    document.getElementById('mybutton1').style.boxShadow= `1px 10px  10px ${rgb1}`; 
    document.getElementById("mybutton1").onmouseover = function() 
    {
        this.style.backgroundColor = `${rgb1}`;
    }
    copycode.textContent=`linear-gradient(to right, ${rgb1} 0%, ${rgb2} 100%)`;
};
// console.log(" ")
const handlebtn2=()=>{
 rgb2=hexvalues();
    console.log(rgb2);
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1} 0%, ${rgb2} 100%)`;
    button2.textContent=`${rgb2}`;
    document.getElementById('button2').style.boxShadow= `1px 10px  10px ${rgb2}`;
    document.getElementById("button2").onmouseover = function() 
{
    this.style.backgroundColor = `${rgb2}`;
}
};



button1.addEventListener("click" ,handlebtn1);
button2.addEventListener('click',handlebtn2);
copycode.addEventListener('click',()=>{
// copycode.select();// select the input field
// copycode.setSelectionRange(0,99999);// for mobile
let value=navigator.clipboard.writeText(copycode.textContent);
alert(`Color copied succesfully!`);

});