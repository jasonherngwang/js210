function selectEntries({start=0, end=-1, step=1} = {}) {
  return {start, end, step};
}
console.log(selectEntries({ start: 0, end: 10, step: 2 }));
console.log(selectEntries({}));
console.log(selectEntries());