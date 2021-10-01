const binarySearch = (list, item) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = (low + high) / 2;
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};
