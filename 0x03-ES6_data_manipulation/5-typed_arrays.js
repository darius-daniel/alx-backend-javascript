export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Positon outside range');
  } else {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer, 0, length);

    dataView.setInt8(position, value);
    return dataView;
  }
}
