var nome;
var sobrenome;
var idade;

function entrar(){
    var area = document.getElementById('area');
    nome = prompt('Digite seu nome: ');

    if(nome == '' || nome == null){
        alert('O campo precisa ser preenchido!');
        nome.innerHTML = 'Bem vindo...';

    }else{
        area.innerHTML = 'Bem vindo, ' + nome;

    }

}

function entrar2(nome){
    var area2 = document.getElementById('area2');
    sobrenome = prompt('Digite seu sobrenome: ');

    area.innerHTML = nome + " " + sobrenome;

}

function entrar3(nome, sobrenome){
    var area3 = document.getElementById('area3');
    var idade = prompt('Digite sua idade');

    area.innerHTML = nome + " " + sobrenome + ", " + idade + " anos.";
}