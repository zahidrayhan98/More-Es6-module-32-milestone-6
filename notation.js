 const student ={
    name:'rupo',
    id:2018000000096,
    marks : {
        bangla:76,
        english :88,
        math:56,
    }
 }
 const mark = student.marks.math;
 const marking = student['marks']['english'];
  const subject ="bangla";
  const fullMarks =student.marks[subject];
//  console.log(marking);
//  console.log(mark);
console.log(fullMarks);