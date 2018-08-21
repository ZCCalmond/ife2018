/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/

// 思路：做一个start，end，然后找到字符串的前面的最后一个空格和 后面的最前一个空格，然后取子字符串赋给result
function diyTrim(str) {
    var result = "";
    var start = 0;
    var end = str.length;
    // do something
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== "" && str[i] !== " ") {
            start = i;
            break;
        }
    }
    for (var i = end - 1; i >= 0; i--) {
        if (str[i] !== "" && str[i] == " ") {
            end = i;
            break;
        }
    }

    if (start < end) {
        result = str.slice(start, end);
    } else if (start === end && str[start] !== ' ' && str[start] !== '　' && str[start] !== '') {
        result = str[start];
    } else {
        result = '';
    }

    // if (start < end) {
    //     result = str.slice(start, end);
    // } else if (start == end) {
    //     if (str[start] != "" && str[start] != " ") {
    //         result = str[start];
    //     } else {
    //         result = '';
    //     }
    // }


    return result
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    // do something

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc