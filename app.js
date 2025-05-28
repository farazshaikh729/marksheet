
const totalSubjects = 5;
  const maxMarksPerSubject = 100;
  const maxTotalMarks = totalSubjects * maxMarksPerSubject;

  // Let variables for subject marks
  let math = 85;
  let english = 78;
  let science = 92;
  let history = 74;
  let computer = 88; 

  // Calculate total marks
  let totalMarks = math + english + science + history + computer;

  // Calculate percentage
  let percentage = (totalMarks / maxTotalMarks) * 100;

  // Determine grade
  let grade = (percentage >= 90) ? 'A+' :
            (percentage >= 80) ? 'A' :
            (percentage >= 70) ? 'B' :
            (percentage >= 60) ? 'C' :
            (percentage >= 50) ? 'D' : 'F';


  // Display result using template literals
  document.write(`
    <h1>Student Mark Sheet</h1>
    <p><strong>Math:</strong> ${math}</p>
    <p><strong>English:</strong> ${english}</p>
    <p><strong>Science:</strong> ${science}</p>
    <p><strong>History:</strong> ${history}</p>
    <p><strong>Computer:</strong> ${computer}</p>
    <hr>
    <p><strong>Total Marks:</strong> ${totalMarks} / ${maxTotalMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
  `);



