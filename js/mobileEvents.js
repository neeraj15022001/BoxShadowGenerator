// For Mobile Devices
$("#x-range").on('touchstart',function () {
  console.log("touchstart")
  $("#x-range").on('touchmove',function (e) {
    xValue = e.target.value;
    updateValue();
    $("#x-current-value").html(xValue);
    $(this).attr("value", e.target.value);
  });
});
$("#x-range").on('touchend',function () {
  $("#x-range").off("touchmove");
});

// Y-Range
$("#y-range").on('touchstart',function () {
  $("#y-range").on('touchmove',function (e) {
    yValue = e.target.value;
    updateValue();
    $("#y-current-value").html(yValue);
    $(this).attr("value", e.target.value);
  });
});
$("#y-range").on('touchend',function () {
  $("#y-range").off("touchmove");
});

// blur
$("#blur").on('touchstart',function () {
  $("#blur").on('touchmove',function (e) {
    blur = e.target.value;
    updateValue();
    $("#blur-current-value").html(blur);
    $(this).attr("value", e.target.value);
  });
});
$("#blur").on('touchend',function () {
  $("#blur").off("touchmove");
});

//Spread
$("#spread").on('touchstart',function () {
  $("#spread").on('touchmove',function (e) {
    spread = e.target.value;
    updateValue();
    $("#spread-current-value").html(spread);
    $(this).attr("value", e.target.value);
  });
});
$("#spread").on('touchend',function () {
  $("#spread").off("touchmove");
});

// Color
$("#color").change(function (e) {
  color = e.target.value;
  updateValue();
  $("#color-current-value").html(color);
  $(this).attr("value", e.target.value);
});
