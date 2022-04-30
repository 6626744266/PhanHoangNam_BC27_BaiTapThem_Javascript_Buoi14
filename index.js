/*Bài 2: Tính ngày */
/* Mô hình 3 khối*/

/*INPUT: tháng và năm */

/*PROCESS
1. Lấy được input, var month, var year
2. Tạo biến var day để chứa giá trị ngày
3. nếu (year % 4 == 0 && year % 100 !== 0)||year % 400 == 0 => năm nhuận => switch case 2 thì day sẽ = 29
còn lại là năm không nhuận nên switch case 2 day sẽ = 28
dùng switch case với các tháng còn lại 
4. In kết quả ra màn hình

*/

/*OUTPUT: số ngày của tháng của năm mà người dùng đã nhập vào*/

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
