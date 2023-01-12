let produtos =[
    {
        img:'assets/img/faca1.png',
        descricao:'Faca Artesanal - Churrasco',
        valor:'R$ 175,90'

    },
    {
        img:'assets/img/tempero1.png',
        descricao:'Tempero Le Gusta Premium - 500g',
        valor:'R$ 27,90'

    },
    {
        img:'assets/img/tempero2.png',
        descricao:'Tempero Bombay Premium - 500g',
        valor:'R$ 32,90'

    },
    {
        img:'assets/img/kitchurrasco.png',
        descricao:'Kit Churrasqueiro',
        valor:'R$ 149,90'

    },
    {
        img:'assets/img/tabua.png',
        descricao:'Tabua Artesanal - Churrasco',
        valor:'R$ 275,90'

    }
]

let body = document.querySelector('body');
let section = document.createElement('section');
let figure = document.createElement('figure');
let img_logo = document.createElement('img');
let ul = document.createElement('ul');

section.setAttribute('class','secao');
img_logo.setAttribute('class', 'logo');

img_logo.src = 'assets/img/chiefmonkey.png'
img_logo.alt = 'logo'

figure.appendChild(img_logo);
section.appendChild(figure);

function criarLista(lista){
    for(let i = 0; i < lista.length; i++){
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p_desc = document.createElement('p');
        let p_vlr = document.createElement('p');

        li.setAttribute('class', 'itens');
        img.setAttribute('class', 'imgProduto');
        p_desc.setAttribute('class', 'descricao');
        p_vlr.setAttribute('class', 'valor');

        img.src = lista[i].img;
        img.alt = lista[i].descricao;
        p_desc.innerText = lista[i].descricao;
        p_vlr.innerText = lista[i].valor;

        li.appendChild(img);
        li.appendChild(p_desc);
        li.appendChild(p_vlr);
        ul.appendChild(li)
    }
}
criarLista(produtos);

section.appendChild(ul);
body.appendChild(section);