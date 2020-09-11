import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents ()
{  
    const students = [ 
        {name:"Lindsey", unit:"Python"},
        {name:"Ayesha", unit:"CSS"},
        {name:"Krisztina", unit:"React"},
    ];
    let counter = 0;

    const studentsList = students.map( student => <HelloStudent key={counter++} name={student.name} unit={student.unit} /> );

    console.log( studentsList );

    return (
        <section>
            <h2>Our Hello to Students</h2>
            {studentsList}
        </section>
    );

}

export default HelloStudents;
