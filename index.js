function ex2() {
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  var day = 0;
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day = 31;
        break;
      case 2:
        day = 29;
        break;
      default:
        day = 30;
    }
    document.getElementById(
      "bt1-result"
    ).innerHTML = `Tháng ${month} năm ${year} có ${day} ngày`;
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day = 31;
        break;
      case 2:
        day = 28;
        break;
      default:
        month = 30;
    }
    document.getElementById(
      "bt1-result"
    ).innerHTML = `Tháng ${month} năm ${year} có ${day} ngày`;
  }
}
