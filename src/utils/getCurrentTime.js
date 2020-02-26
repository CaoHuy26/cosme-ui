const now = new Date();

const date = `${now.getFullYear()}-${(now.getMonth() + 1)}-${now.getDate()}`;
const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

const currentTime = `${date} ${time}`;

export default currentTime;