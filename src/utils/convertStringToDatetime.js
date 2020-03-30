const convertTime = (str) => {
  const now = new Date(str);

  const date = `${now.getFullYear()}-${(now.getMonth() + 1)}-${now.getDate()}`;
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  return `${date} ${time}`;
};

export default convertTime;