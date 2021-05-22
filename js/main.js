let xValue = 0;
let yValue = 0;
let blur = 0;
let spread = 0;
let color = "#ffffff";

$("#x-range").mousedown(function () {
  $("#x-range").mousemove(function (e) {
    xValue = e.target.value;
    updateValue();
    $("#x-current-value").html(xValue);
    $(this).attr("value", e.target.value);
  });
});
$("#x-range").mouseup(function () {
  $("#x-range").off("mousemove");
});

// Y-Range
$("#y-range").mousedown(function () {
  $("#y-range").mousemove(function (e) {
    yValue = e.target.value;
    updateValue();
    $("#y-current-value").html(yValue);
    $(this).attr("value", e.target.value);
  });
});
$("#y-range").mouseup(function () {
  $("#y-range").off("mousemove");
});

// blur
$("#blur").mousedown(function () {
  $("#blur").mousemove(function (e) {
    blur = e.target.value;
    updateValue();
    $("#blur-current-value").html(blur);
    $(this).attr("value", e.target.value);
  });
});
$("#blur").mouseup(function () {
  $("#blur").off("mousemove");
});

//Spread
$("#spread").mousedown(function () {
  $("#spread").mousemove(function (e) {
    spread = e.target.value;
    updateValue();
    $("#spread-current-value").html(spread);
    $(this).attr("value", e.target.value);
  });
});
$("#spread").mouseup(function () {
  $("#spread").off("mousemove");
});

// Color
$("#color").change(function (e) {
  color = e.target.value;
  updateValue();
  $("#color-current-value").html(color);
  $(this).attr("value", e.target.value);
});

// copy Button
$(".main-container-button").click(() => {
  copy();
});

function copy() {
  $(".main-container-text").select();
  document.execCommand("copy");
}

function updateValue() {
  $(".shadow-container").css(
    "box-shadow",
    `${xValue}px ${yValue}px ${blur}px ${spread}px ` + color
  );
  $(".main-container-text").html(
    `box-shadow: ${xValue}px ${yValue}px ${blur}px ${spread}px ` + color
  );
}

