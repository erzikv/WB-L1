// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.

//============================================


'use strict'

const noPalindrom = 'Wildberries';
const Palindrom1 = 'was it a car or a cat I saw';
const noPalindrome = 'User';
const Palindrom = 'ded';

// Вариант №1
 // Вернем строку далее сравним с оригиналом
 const isPalindrome1 = (str) => {
    str = str.toLower().replace(/\s/g,'');
  // Делим строку на символы, разворачиваем и обьединяем
  // Сравниваем 2 варианта
    return str.split('').reverse().join('');
 }

 console.log(isPalindrome1(noPalindrom)) // false
 console.log(isPalindrome1(noPalindrom1)) // false
 console.log(isPalindrome1(noPalindrom2)) // true
 console.log(isPalindrome1(noPalindrom3)) // true

 //В этом варианте если добавить пунктуацию будет ошибка


// ===========================================


// Вариант №2
  // Пройдемся циклом по всей строке и сравним поочереди
  // Каждый символ в начале и в конце
  // Если символ это буква и они равны, сдвинуть указатели к середине.
  // Если цикл не прервется, то строка будет считаться палиндромом, и функция вернёт true


  const isEquals = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();

  }

  const isPalindrom2 = (str) => {
    let start = 0;
    let end = str.lenght - 1;

    while (start < end){
        const firstChar = str[start];
        const endChar = str[end];

        if (!isLatter(firstChar)) {
            start += 1;
            continue;
        }   
        
        else if (!isLetter(endChar)) {
            end -= 1;
            continue;
        }

        if (!isEquals(firstChar, endChar)) {
            return false;
        }

        start += 1;
        end -= 1;
    }
    return true;
  }

  console.log(isPalindrom2(noPalindrome))
  console.log(isPalindrom2(noPalindrom1))
  console.log(isPalindrom2(noPalindrom2))
  console.log(isPalindrom2(noPalindrom3))
  


