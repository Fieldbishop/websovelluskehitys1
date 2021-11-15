//console.log('page loaded');

console.log(document);

let div = document.getElementById("summary");
let children = div.children;

let anonymousInline = document.querySelector('#userForm input[type="email"]').onkeyup = function () {
    console.log('updating email');
    let email = document.querySelector('#userForm input[type="email"]').value;
    document.querySelector('#summary p').innerHTML = email;
    children[1].innerHTML=email;
};

let nameHandler = document.querySelector('#userForm input[type="text"]').onkeyup = function(){
    let name=document.querySelector('#userForm input[type="text"]');
    children[0].innerHTML=name.value;
};

let passwordHandler = document.querySelector('#userForm input[type="password"]').onkeyup = function (){
    let password=document.querySelector('#userForm input[type="password"]');
    children[2].innerHTML=password.value;
};
anonymousInline();
nameHandler();
passwordHandler();