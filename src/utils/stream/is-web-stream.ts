export function isWebStream(val: any) {
  return val instanceof ReadableStream || val instanceof WritableStream;
}
