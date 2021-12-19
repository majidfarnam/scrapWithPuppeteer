// const puppeteer = require('puppeteer_extra');

const main = () => {
    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        let random = Math.floor(Math.random() * (100000000 - 10000000) + 10000000);
        console.log(random);
    }
}

main();