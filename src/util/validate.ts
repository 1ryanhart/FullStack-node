interface ReturnObject {
  width: number;
  height: number;
}

const validate = (
  width: string | number | null,
  height: string | number | null
): ReturnObject => {
  if (height == null) {
    height = 200;
  } else {
    height = parseInt(height as string);
  }

  if (width == null) {
    width = 200;
  } else {
    width = parseInt(width as string);
  }
  return { width, height };
};

export default validate;
