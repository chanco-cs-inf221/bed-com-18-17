const projename= document.getElementById("projename");

const projedescri= document.getElementById("projedescri");

const compdate= document.getElementById("compdate");

const button=document.getElementById("button");

const IsOutup=document.getElementById("IsOutup");


button.onclick=function (){

    const myList=projename.value;
    const myval=projedescri.value;
    const date=compdate.value;

    

    console.log(myList);
    console.log(myval);
    console.log(date);

    if(myList&&myval){

        localStorage.setItem(myList,myval);
    
        location.reload();
    }
    

    
};
for(let i=0; i<localStorage.length; i++){
    const myList=localStorage.key(i);
    const myval=localStorage.getItem(myList);
    function display(){
        IsOutup.innerHTML+=`${myval}`;
    }
    myList.onclick=display();

    IsOutup.innerHTML +=`${myList}: ${myval}<br>`;
}