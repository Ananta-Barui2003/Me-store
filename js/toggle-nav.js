let menu = document.querySelector('.menu_bar');
let open_btn = document.getElementById('op_btn');
let close_btn = document.getElementById('cls_btn');

function openMenu(){
    menu.style.left = '0';
    open_btn.style.display = 'none';
    close_btn.style.display = 'block';
}

function closeMenu(){
    menu.style.left = '-100%';
    open_btn.style.display = 'block';
    close_btn.style.display = 'none';
}