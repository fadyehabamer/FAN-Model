var style = document.createElement("ma");
style.type = "text/css";
var keyFrames =
  "\
@-webkit-keyframes spinIt {\
    100% {\
        -webkit-transform: rotate(10000deg);\
    }\
}";
style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
document.getElementsByTagName("head")[0].appendChild(style);

function me() {
  "use sterct";

  document.getElementById("r").style.background = "red";

  document.getElementById("r1").style.background = "#03A9F4";
  document.getElementById("r").style.boxShadow = "1px -2px 6px 1px red";
  document.getElementById("r1").style.boxShadow = "none";

  document.getElementById("r2").style.background = "#03A9F4";
  document.getElementById("r2").style.boxShadow = "none";

  document.getElementById("ma").animate(
    [
      // keyframes
      { transform: "rotate(1deg)" },
      { transform: "rotate(360deg)" },
    ],
    {
      // timing options
      duration: 1000,
      iterations: Infinity,
    }
  );
}

function mee() {
  "use sterct";

  document.getElementById("r1").style.background = "red";
  document.getElementById("r").style.boxShadow = "none";
  document.getElementById("r1").style.boxShadow = "1px -2px 6px 1px red";

  document.getElementById("r").style.background = "#03A9F4";

  document.getElementById("r2").style.background = "#03A9F4";
  document.getElementById("r2").style.boxShadow = "none";

  document.getElementById("ma").animate(
    [
      // keyframes
      { transform: "rotate(1deg)" },
      { transform: "rotate(360deg)" },
    ],
    {
      // timing options
      duration: 500,
      iterations: Infinity,
    }
  );
}

function meee() {
  "use sterct";

  document.getElementById("r2").style.background = "red";

  document.getElementById("r").style.boxShadow = "none";
  document.getElementById("r1").style.boxShadow = "none";
  document.getElementById("r1").style.background = "#03A9F4";

  document.getElementById("r").style.background = "#03A9F4";
  document.getElementById("r2").style.boxShadow = "1px -2px 6px 1px red";

  document.getElementById("ma").animate(
    [
      // keyframes
      { transform: "rotate(1deg)" },
      { transform: "rotate(360deg)" },
    ],
    {
      // timing options
      duration: 300,
      iterations: Infinity,
    }
  );
}

function meeee() {
  "use sterct";

  document.getElementById("r2").style.background = "#03A9F4";

  document.getElementById("r").style.boxShadow = "none";
  document.getElementById("r1").style.boxShadow = "none";
  document.getElementById("r1").style.background = "#03A9F4";

  document.getElementById("r").style.background = "#03A9F4";
  document.getElementById("r2").style.boxShadow = "none";

  document.getElementById("ma").animate(
    [
      // keyframes
      { transform: "rotate(1deg)" },
      { transform: "rotate(3deg)" },
    ],
    {
      // timing options
      duration: 2000,
      iterations: Infinity,
    }
  );
}

function me2() {
  "use sterct";

  var ome = document.getElementById("om2");

  ome.classList.remove("om2");
}
