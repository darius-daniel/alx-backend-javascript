export default function getListStudentIds(array) {
  let result;

  if (!Array.isArray(array)) {
    result = [];
  } else {
    result = array.map((item) => item.id);
  }

  return result;
}
