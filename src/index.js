const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let sequence = "";
    let str = "";
    let res = "";
    let k;
    while(i <= expr.length-10) {
        sequence = expr.slice(i, i+10);
        k = 0;
        while(k <= 8) {
            if(sequence.substring(k, k+2) === "10")
                str += '.';
            else if(sequence.substring(k, k+2) === "11")
                    str += '-';  
            else if(sequence.substring(k, k+2) === "**") {
                    str +=' ';
                    break;
                }
            k+=2;  
        }
        str !== " " ? res += MORSE_TABLE[str] : res += " ";
        i+=10;
        str = "";
    }
    return res;
}

module.exports = {
    decode
}