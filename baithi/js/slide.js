var images = [];
for (var i = 0; i < 5; i++) {
    images[i] = new Image();
    images[i].src = "images/anh" + i + ".png";
}

var arr = ['images/anh0.png',
    'images/anh1.png',
    'images/anh2.png',
    'images/anh3.png',
    'images/anh4.png',
];

var index = 0;


function slideShows() {
    document.getElementById('anh').src = arr[index];
    index++;
    document.getElementById("num").innerHTML = index;
    if (index >= arr.length) {
        index = 0;
    }

    setTimeout("slideShows()", 1500);
}
slideShows();


function next() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    var anh = document.getElementById('anh');
    anh.src = images[index].src;
    document.getElementById("num").innerHTML = index + 1;
}

function prev() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    document.getElementById("num").innerHTML = index + 1;
}
//