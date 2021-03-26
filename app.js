const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    let textCode = [];
    for (let i = 1; i <= 50; i++) {
        textCode.push(isPar(i));
    }
    res.render("index", { textCode: textCode });
});

function isPar(num) {   
    return num % 2 == 0 ?  num + ' Soy Par!' : num + ' Soy Impar!';
}

app.listen(3000, () => console.log('Listening on port 3000!'));