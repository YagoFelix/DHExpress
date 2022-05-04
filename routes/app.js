//const http = require('http');
const express = require('express'); // importando o express
const app = express(); // criando a variável para deixar o express armazenado
//console.log(app);

app.get('/', (req, res)=>res.send("Olá mundo!"));
app.get('/contatos', (req, res)=>res.send(["Contato1","COntato2"]));
app.get('/sobremim', (req, res)=>res.send({nome:"Yago", sobrenome:"Felix da Silva", idade: 28, email:"y.felixdasilva@gmail.com", signo:"Leão"}));

//criando um servidor
app.listen(3000, ()=>console.log('Servidor rodando'));

/*http.createServer((req, res)=>{ // para subir o servidor
    res.writeHead(200, {"Content-type":"text/plain"})
    
    switch(req.url){
        case "/":
            res.end("Você está na página home!")
            break;
        case "/contato":
            res.end("Você está na página contato!")
            break;
        default:
            res.end("Você está no nosso servidor!")
    }*

    //res.end("Meu primeiro servidor!")
    //console.log("Servidor está rodando...")

    
}).listen(3000); // porta para executar o servidor*/