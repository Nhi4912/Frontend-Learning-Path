export const addBorder = (picture: string[]): string[] => {
  const pictureLength = picture[0].length;
  const border = "*".repeat(pictureLength + 2);
  const contentWithHorizontalBorder = picture.map((item) => `*${item}*`);

  return [border, ...contentWithHorizontalBorder, border];
};
