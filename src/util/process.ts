import sharp from 'sharp';

const process = async (
  width: number,
  height: number,
  inPath: string,
  outPath: string
) => {
  await sharp(inPath).resize(width, height).toFile(outPath);

  return outPath;
};

export default process;
