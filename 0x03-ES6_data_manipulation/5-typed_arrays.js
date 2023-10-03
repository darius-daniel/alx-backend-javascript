export default function createInt8TypedArray(length, position, value) {
  let dataView;

  if (position >= length) {
    throw new Error('Position outside range');
  } else {
    dataView = new DataView(new ArrayBuffer(length));
    dataView.setInt8(position, value);
  }

  return dataView;
}
