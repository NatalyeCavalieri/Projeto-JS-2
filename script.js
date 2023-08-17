/*
criar uma lista de **estudantes** e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno 
obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students =[
  {
  name:"Natalye",
  note1: 8,
  note2: 7,
  },

  {
  name:"Luane",
  note1: 4,
  note2: 3,
  },

  {
  name:"Mycael",
  note1: 9,
  note2: 10,
}
]


let average=(note1,note2) => ((note1 + note2) /2)

for (studentNote of students){
 if(average(studentNote.note1, studentNote.note2) >= 7){
  alert(`${studentNote.name}, sua média foi de: ${average(studentNote.note1, studentNote.note2)} \nParabéns, você passou no concurso.`)
}else{
  alert(`${studentNote.name}, sua média foi de: ${average(studentNote.note1, studentNote.note2)} \nVoce não atingiu a média mínima, estude mais.`)
}
}
