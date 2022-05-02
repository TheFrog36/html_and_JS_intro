const studente1 = {
    nome : 'Artiom',
    cognome : 'Sangiorgio',
    annoDiNascita : 1998,
    sesso : 'M',
    cittaDiNascita : 'San Pietroburgo',
}

const studente2 = {
    nome : 'Paolo',
    cognome : 'Foppiano',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente3 = {
    nome : 'Cinzia',
    cognome : 'Ariotti',
    annoDiNascita : 1996,
    sesso : 'F',
    cittaDiNascita : 'Genova',
}


const studente4 = {
    nome : 'Polina',
    cognome : 'Borect',
    annoDiNascita : 1994,
    sesso : 'F',
    cittaDiNascita : 'Chelyabinsk',
}


const studente5 = {
    nome : 'Giovanni',
    cognome : 'Cambiaso',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente6 = {
    nome : 'Mattia',
    cognome : 'Dalla Mutta',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente7 = {
    nome : 'Leslie',
    cognome : 'Fritas',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Lima',
}

const studente8 = {
    nome : 'Cristopher',
    cognome : 'Limone',
    annoDiNascita : 1994,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente9 = {
    nome : 'Jessica',
    cognome : 'Vitanza',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Palermo',
}

const studente10 = {
    nome : 'Mirco',
    cognome : 'Faro',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Santa Margherita',
}

const arrayStudenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];
//creare funzione che passi stringa alunni info
function create_student_string(student){
    const info_string = student.nome +  ' ' + student.cognome + ' ' + student.annoDiNascita
    return info_string
}

function createStudentList(array){
    const container = document.getElementById('student_container');
    container.innerHTML = ''
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const par = document.createElement('p');
        par.classList.add('list_element')
        const textNode = document.createTextNode(create_student_string(element));
        par.appendChild(textNode);
        container.appendChild(par);
    }
}
// createStudentList(arrayStudenti)
// createStudentList(arrayStudenti.filter((student) => student.sesso === 'M'))

function show_students(){
    createStudentList(arrayStudenti)
}

function show_students_by_age(){
    //creo un clone dell'array originale, e faccio sorting su di esso
    const sorted_array = arrayStudenti.filter((e) => true)
    createStudentList(sorted_array.sort((s1, s2) => s2.annoDiNascita - s1.annoDiNascita))
}

function show_only_females(){
    createStudentList(arrayStudenti.filter((student) => student.sesso === 'F'))
}
