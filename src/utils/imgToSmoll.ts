export const imgToSmoll = (
  imgUrl: string,
  width: number,
  height: number = width
) => {
  return imgUrl + `?param=${width}y${height}`;
};
