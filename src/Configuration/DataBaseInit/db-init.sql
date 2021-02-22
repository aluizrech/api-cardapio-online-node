create database expressapp;
use expressapp;

create table pedido (
    id int auto_increment primary key,
    data_pedido datetime,
    valor decimal,
    nome text,
    numero_cartao text,
    mes text,
    ano text,
    codigo_seguranca text
);

create table produto_pedido (
    id int auto_increment primary key,
    pedido_id int,
    quantidade int,
    anotacao text
);