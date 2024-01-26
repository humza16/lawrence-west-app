const validFileExtensions = ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'];

export const isValidFileType = (filePath) => {
  if (filePath) {
    const fileExtension = filePath.split('.').pop().toLowerCase();
    return validFileExtensions.includes(fileExtension)
  }
  return false;
}