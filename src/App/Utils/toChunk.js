const toChunk = (array, size = 3) => {
  let chunked = [];

  array.forEach((element) => {
    let lastElement = chunked[chunked.length - 1];

    if (!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  });

  return chunked;
};

export default toChunk;
