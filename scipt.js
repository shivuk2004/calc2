let button = document.querySelectorAll('button');
let input = document.getElementById('inputType');

let ans = "";
let arr = Array.from(button);

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            ans = eval(ans);
            input.value = ans;
        }
        else if(e.target.innerHTML == 'AC'){
            ans = "";
            input.value = ans;
        }
        else if(e.target.innerHTML == 'DEL'){
            ans = ans.substring(0,ans.length-1);
            input.value = ans;
        }
        else{
            ans+=e.target.innerHTML;
            input.value = ans;
        }
    })
})