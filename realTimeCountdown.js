var countDownDate = new Date("Jun 21, 2022 00:00:00").getTime();
var now = new Date().getTime();
var timeleft = countDownDate - now;

setTimeout(() => {
  setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
}, 1000);

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const [seconds, setSeconds] = useState(
  Math.floor((timeleft % (1000 * 60)) / 1000)
);
