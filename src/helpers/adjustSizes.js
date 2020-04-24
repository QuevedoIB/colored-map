export const adjustSizes = (sizes) => {
  const map = document.getElementsByClassName("jvectormap-container")[0];
  map.style.height = sizes.height + "px";
  map.style.width = sizes.width + "px";

  const map2 = document.getElementsByClassName("map")[0];
  map2.style.height = sizes.height + "px";
  map2.style.width = sizes.width + "px";

  const svg = document.querySelector("svg");
  svg.style.height = sizes.height + "px";
  svg.style.width = sizes.width + "px";

  const tip1 = document.getElementsByClassName("jvectormap-legend-cnt-h")[0];
  tip1.style.position = "absolute";
  tip1.style.top = 20 + "px";
  tip1.style.left = 20 + "px";

  const tip2 = document.getElementsByClassName("jvectormap-legend-cnt-v")[0];
  tip2.style.position = "absolute";
  tip2.style.top = 20 + "px";
  tip2.style.left = 20 + "px";

  // const tip = document.getElementsByClassName("jvectormap-tip")[0];

  // const tipContainer = document.createElement("div").appendChild(tip);
  // tipContainer.id = "block";
  // tipContainer.style.position = "absolute";
  // tipContainer.style.top = 20 + "px";
  // tipContainer.style.left = 20 + "px";
  // tipContainer.style.zIndex = 100;
};
