import { Readable, Transform } from "stream";
import { signal } from "/signal";

export function createReadableStream(str) {
  const seen = new Set();

  const readable = new Readable({
    read(chunk) {
      console.log("reading", chunk.toString());
    },
  });

  for (const char of str) {
    if (seen.has(char)) {
      signal("duplicate", char);
    } else {
      signal("received", char);
      seen.add(char);
      readable.push(char);
    }
  }

  return readable;
}

export function createTransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const char = chunk.toString();

      if (/[a-zA-Z]/.test(char)) {
        const uppercaseChar = char.toUpperCase();
        signal("transform", uppercaseChar);
        this.push(uppercaseChar);
      } else {
        signal("invalid", char);
      }

      callback();
    },
  });
}

export function createStreamablePipeline(str) {
  const readableStream = createReadableStream(str);
  const transformStream = createTransformStream();

  readableStream.pipe(transformStream);

  return { readableStream, transformStream };
}
