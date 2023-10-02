export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, current) => accumulator + current.id, 0);
}
