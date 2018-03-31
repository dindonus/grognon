export const getDimensions = file => {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = event => {
      resolve({ width: image.width, height: image.height });
    };
    image.src = file;
  });
};
