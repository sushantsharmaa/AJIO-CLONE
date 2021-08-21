const arr = [
    'https://assets.ajio.com/medias/sys_master/root/h6b/h27/15300666032158/-1117Wx1400H-460556739-red-MODEL.jpg',
    'https://assets.ajio.com/medias/sys_master/root/h16/hd5/15300683530270/-1117Wx1400H-460556739-red-MODEL2.jpg',
    'https://assets.ajio.com/medias/sys_master/root/h1e/h77/15300678811678/-1117Wx1400H-460556739-red-MODEL3.jpg',
    'https://assets.ajio.com/medias/sys_master/root/hd9/h91/15300675731486/-1117Wx1400H-460556739-red-MODEL4.jpg',
    'https://assets.ajio.com/medias/sys_master/root/h08/h6d/15300654891038/-1117Wx1400H-460556739-red-MODEL6.jpg',
    'https://assets.ajio.com/medias/sys_master/root/h44/hcf/15300681236510/-1117Wx1400H-460556739-red-MODEL8.jpg'

];

if (localStorage.getItem('bag') == null) localStorage.setItem('bag', JSON.stringify(arr));

function slideShow() {
    var arr = JSON.parse(localStorage.getItem('bag'));

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    var slider = document.getElementById('slider');

    var div = document.getElementById('verticalSlider');
    var image1 = document.createElement('img');
    var i = 0;


    function setInt() {
        setInterval(function () {

            i = i % arr.length;
            image1.src = arr[i];

            slider.append(image1);
            i++;

        }, 3000)
    }


    setInt();


    function leftMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i--;
        if (i == -1) {
            i = arr.length - 1;
        }

        image1.src = arr[i];
        slider.append(image1);
    }


    function rightMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i++;
        if (i == arr.length) {
            i = 0;
        }

        image1.src = arr[i];
        div.append(image1);
    }

    left.addEventListener('click', leftMoveSlider)
    right.addEventListener('click', rightMoveSlider)


}

slideShow();

var btn = document.getElementById('B1');
btn.addEventListener('click', function () {




})



