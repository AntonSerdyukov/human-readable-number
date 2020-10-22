module.exports = function toReadable (number) {
    let digitsInStr = number.toString();
    let digits = Array.from(digitsInStr, Number);
    let res = '';
    for (let i = 0; i < digits.length; i++) {

        if (i === digits.length - 3) {
            switch (digits[i]) {
                case 1: res += "one"; break;
                case 2: res += "two"; break;
                case 3: res += "three"; break;
                case 4: res += "four"; break;
                case 5: res += "five"; break;
                case 6: res += "six"; break;
                case 7: res += "seven"; break;
                case 8: res += "eight"; break;
                case 9: res += "nine"; break;
            }
            if (digits[i + 1] !== 0 || digits[i + 2] !== 0) res += " hundred ";
            else res += " hundred";
        }
        if (i === digits.length - 2 && digits[i] === 1) {
            switch (digits[i + 1]) {
                case 0: res += "ten"; break;
                case 1: res += "eleven"; break;
                case 2: res += "twelve"; break;
                case 3: res += "thirteen"; break;
                case 4: res += "fourteen"; break;
                case 5: res += "fifteen"; break;
                case 6: res += "sixteen"; break;
                case 7: res += "seventeen"; break;
                case 8: res += "eighteen"; break;
                case 9: res += "nineteen"; break;
            }
            break;
        }
        else {
            if (i === digits.length - 2) {
                switch (digits[i]) {

                    case 2: res += "twenty"; break;
                    case 3: res += "thirty"; break;
                    case 4: res += "forty"; break;
                    case 5: res += "fifty"; break;
                    case 6: res += "sixty"; break;
                    case 7: res += "seventy"; break;
                    case 8: res += "eighty"; break;
                    case 9: res += "ninety"; break;
                }
                if (digits[i + 1] !== 0 && digits[i]!==0) res += " ";
            }
        }

        if (i === digits.length - 1) {
            switch (digits[i]) {
                case 0: if (digits.length === 1) res += "zero"; break;
                case 1: res += "one"; break;
                case 2: res += "two"; break;
                case 3: res += "three"; break;
                case 4: res += "four"; break;
                case 5: res += "five"; break;
                case 6: res += "six"; break;
                case 7: res += "seven"; break;
                case 8: res += "eight"; break;
                case 9: res += "nine"; break;
            }
        }
    }

    return res;
  
}
