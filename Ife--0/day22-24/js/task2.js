var btn = document.getElementById("btn");
var result = document.getElementById("result");
var ra = document.getElementById("radio-a");
var rb = document.getElementById("radio-b");
var numa = document.getElementById("num-a");
var numb = document.getElementById("num-b");
btn.addEventListener('click', function(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLocaleLowerCase() == 'button') {
        switch (target.id) {
            case "1":
                c1();
                break;
            case "2":
                c2();;
                break;
            case "3":
                c3();;
                break;
            case "4":
                c4();
                break;
            case "5":
                c5();;
                break;
            case "6":
                c6();;
                break;
            case "7":
                c7();;
                break;
            case "8":
                c8();;
                break;
            case "9":
                c9();
                break;
            case "10":
                c10();
                break;
            case "11":
                c11();
                break;
            case "12":
                c12();
                break;

        }

    }
})

function getStringa() {
    return document.querySelector("#str-a").value;
    // return document.getElementById("str-a").value;
}

function getStringb() {
    return document.querySelector("#str-b").value;
    // return document.getElementById("str-a").value;
}

function getNuma() {
    return document.querySelector("#num-a");
}

function getNumb() {
    return document.querySelector("#num-b");
}


function c1() {
    if (ra.checked) {
        result.innerHTML = getStringa().length;
    } else if (rb.checked) {
        result.innerHTML = getStringb().length;
    }
}

function c2() {
    if (ra.checked) {
        result.innerHTML = getStringa().charAt(2);
    } else if (rb.checked) {
        result.innerHTML = getStringb().charAt(2);
    }
}

function c3() {
    result.innerHTML = getStringa().concat(getStringb());
}

function c4() {
    result.innerHTML = getStringa().indexOf(getStringb());
}

function c5() {
    result.innerHTML = getStringa().lastIndexOf(getStringb());
}

function c6() {
    // var test1 = document.getElementById("num-a").value;
    // var test2 = numa.value;
    var num1 = getStringa().slice(0, numa.value);
    var num2 = getStringb().slice(0, numb.value);
    // console.log(num1, num2)
    result.innerHTML = num1 + num2
}

function c7() {
    if (ra.checked) {
        var lines = getStringa().split(/\r*\n/);
        var count = lines.length - (navigator.userAgent.indexOf('MSIE') !== -1);
        result.innerHTML = count;
    } else if (rb.checked) {
        var lines = getStringb().split(/\r*\n/);
        var count = lines.length - (navigator.userAgent.indexOf('MSIE') !== -1);
        result.innerHTML = count;
    }
}

function c8() {
    var str1 = getStringa().substr(0, numa.value);
    var str2 = getStringb().substr(0, numb.value);
    result.innerHTML = str1 + str2;
}

function c9() {
    if (ra.checked) {
        result.innerHTML = getStringa().toLocaleUpperCase();
    } else if (rb.checked) {
        result.innerHTML = getStringb().toLocaleUpperCase();
    }
}

function c10() {
    if (ra.checked) {
        result.innerHTML = getStringa().toLocaleLowerCase();
    } else if (rb.checked) {
        result.innerHTML = getStringb().toLocaleLowerCase();
    }
}

function c11() {
    if (ra.checked) {
        // var re = getStringa().replace(/ /g, "");
        // console.log(re);
        result.innerHTML = getStringa().replace(/ /g, "");
    } else if (rb.checked) {
        result.innerHTML = getStringb().replace(/ /g, "");
    }
}

function c12() {
    if (ra.checked) {
        result.innerHTML = getStringa().replace(/a+/g, getStringb());
    } else if (rb.checked) {
        result.innerHTML = getStringb().replace(/a+/g, getStringa());
    }
}