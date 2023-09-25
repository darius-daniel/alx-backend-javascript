export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
<<<<<<< HEAD
    const task = true;
    const task2 = false;
=======
    let task = true;
    let task2 = false;
>>>>>>> 7a2ba4606b241207a7612bc211ebb7d2252f269f
  }

  return [task, task2];
}
