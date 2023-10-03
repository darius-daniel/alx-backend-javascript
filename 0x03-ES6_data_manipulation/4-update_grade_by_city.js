export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((item) => item.location === city).map((student) => {
    const grade = newGrades.filter((item) => student.id === item.studentId);
    const studentCopy = { ...student };

    if (grade.length > 0) studentCopy.grade = grade[0].grade;
    else studentCopy.grade = 'N/A';

    return studentCopy;
  });
}
