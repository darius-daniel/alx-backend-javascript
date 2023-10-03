export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw 'Positon outside range';
  } else {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    
    dataView.setInt8(position, value);
    return dataView;
  }
}
