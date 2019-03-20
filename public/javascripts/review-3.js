var next = document.getElementById('next');
var textarea = document.getElementById('textarea');
var remindword = document.getElementById('remindword');

next.addEventListener('click', function (e) {
    if (textarea.value.length > 200) {
        textarea.classList.add('redborder');
        remindword.classList.remove('blueword');
        remindword.classList.add('redword');
        // remindword.innerText = '請記得要小於 200 字呦 !';
    }
})

