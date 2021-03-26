const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let $tagCode = "";
    for (let i = 1; i <= 50; i++) {
        $tagCode += `<p> ${isPar(i)} </p>`;
    }
    res.send($tagCode);
});

function isPar(num) {   
    return num % 2 == 0 ?  num + ' Soy Par!' : num + ' Soy Impar!';
}

app.listen(3000, () => console.log('Listening on port 3000!'));