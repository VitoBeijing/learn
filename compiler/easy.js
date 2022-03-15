const {parse} = require('@babel/parser');
// 实现一个简单编译器

const parsing = input => {
    // 指针
    let current = 0;
    // 存储token
    let tokens = [];
    while (current < input.length) {
        let char = input[current];
        const WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        const NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value
            });
            continue;
        }

        if (char === '"') {
            let value = '';
            let char = input[++current];
            while (char !== '"') {
                value += char;
                char = input[++current];
            }
            char = input[++current];
            tokens.push({
                type: 'string',
                value
            });
            continue;
        }
        const LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
        }
    }
};
let code = `let a = "1";
let b = 123;
`;
console.log(parse(code));
// parsing()
