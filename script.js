
let tabClass = 'info-tabcontent',
    btnsWrapperClass = 
function changeTab(num, tabs){
    for (let i = 0; i < tabs.length; i++){
        if (i == num) {
            tabs[i].classList.add('show');
            tabs[i].classList.remove('hide');
        }
        else {
            tabs[i].classList.add('hide');
            tabs[i].classList.remove('show');
        }
    }
}
let tabs = document.getElementsByClassName('info-tabcontent'),
    btnsWrapper = document.getElementsByClassName('info-header')[0],
    tabsToggleBtns = btnsWrapper.getElementsByClassName('info-header-tab');

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    changeTab(0, tabs);
    btnsWrapper.addEventListener('click', function(event){
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabsToggleBtns.length; i++){
                if (event.target == tabsToggleBtns[i]){
                    changeTab(i, tabs);
                }
            }
        }
    });
});