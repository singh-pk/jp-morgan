function getFolderMeta(data) {
  const { type, child } = data ?? {};

  const isFolder = type === 'folder';
  const isExpandable = isFolder && !!child?.length;

  return { isFolder, isExpandable, type, child };
}

function setKeyVal(obj, row, col, value) {
  obj[row][col] = { ...obj[row][col], value };
}

function createMatrix() {
  return Array.from(Array(9), () => new Array(5).fill({}));
}

export { getFolderMeta, setKeyVal, createMatrix };
