// Exemplo 1:


const user = {
    name: 'Renan',
    lastName: 'de Jesus Santana'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: '${user.name} ${user.lastName}'
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);


// Exemplo 2:

const students = [{
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);