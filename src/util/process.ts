import sharp from 'sharp';

const process = async (
  width: number,
  height: number,
  inPath: string,
  outPath: string
) => {
  try {
    await sharp(inPath).resize(width, height).toFile(outPath);
  } catch (err) {
    console.log('error processing file', err);
  }

  return outPath;
};

export default process;
