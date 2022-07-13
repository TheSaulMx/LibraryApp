use ng_app_library;

create table Autores(
id_autor int primary key auto_increment,
autor_name varchar(30) not null,
born_date varchar(12) null,
photo varchar(150) null,
about VARCHAR(300) null
);
describe Autores;

insert into Autores(autor_name, born_date, photo, about)
values ('Paulo Cohelo', '24-09-1947', 'photo', 
'Paulo Coelho de Souza es un novelista, dramaturgo y letrista brasileño después de varios años dedicado a la poesía. Es uno de los escritores y novelistas más leídos del mundo con más de 320 millones de libros vendidos en más de 170 países, traducidos a 83 lenguas.');

delimiter $$
create procedure SP_SelectAutores()
begin
select * from Autores;
end $$

delimiter $$
create procedure SP_SelectAutor(in _autor_name varchar(20))
begin
select * from Autores where autor_name = _autor_name;
end $$

delimiter $$
create procedure SP_InsertAutor(in _autor_name varchar(30), in _born_date varchar(12), in _photo varchar(150), in _about varchar (300))
begin
insert into Autores(autor_name, born_date, photo, about)
values (_autor_name, _born_date, _photo, _about);
end $$

delimiter $$
create procedure SP_UpdateAutor(in _autor_name varchar(30), in _born_date varchar(12), in _photo varchar(150), _about varchar(300))
begin
update Autores set autor_name = _autor_name, born_date = _born_date, photo = _photo, about = _about
where autor_name = _autor_name;
end $$

delimiter $$
create procedure SP_DeleteAutor(in _autor_name varchar(30))
begin
delete from Autores where autor_name = _autor_name;
end $$