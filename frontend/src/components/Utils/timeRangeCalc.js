import moment from "moment";

const getTimeRange = (array) => {
  var arr = [];

  array.forEach((element) => {
    if (moment(element?.time, ["h:mm A"]).format("H") === "0") {
      arr.push(
        parseInt(
          moment(element?.time, ["h:mm A"]).format("H:mm").replace(":", ".")
        ) + 24
      );
    } else if (
      !arr.includes(
        parseInt(
          moment(element?.time, ["h:mm A"]).format("H:mm").replace(":", ".")
        )
      )
    ) {
      arr.push(
        parseInt(
          moment(element?.time, ["h:mm A"]).format("H:mm").replace(":", ".")
        )
      );
    }
  });
  // Calculating the difference between the dates
  // sorting the array
  arr = arr.sort((a, b) => a - b);
  // const difference = arr[arr.length - 1] - arr[0];
  return arr;
};

export default getTimeRange;
