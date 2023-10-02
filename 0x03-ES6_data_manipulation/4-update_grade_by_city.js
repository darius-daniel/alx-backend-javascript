export default function updateStudentGradeByCity(array, city, newGrades) {
  const result = array.filter((item) => item.location === city);
  return result.map((item) => {
    if (!newGrades.filter((val) => val.grade).includes(item.grade)) {
      item['grade'] = 'N/A';
    }
    return item;
  });
}
