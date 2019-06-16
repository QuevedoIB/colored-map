export const adjustZoomButtons = () => {
  const inButton = document.getElementsByClassName("jvectormap-zoomin")[0]
  inButton.style.fontSize = "24px";
  inButton.style.width = "40px"
  inButton.style.height = "40px"
  inButton.style.display = "flex"
  inButton.style.alignItems = "center"
  inButton.style.justifyContent = "center"


  const outButton = document.getElementsByClassName("jvectormap-zoomout")[0]
  outButton.style.fontSize = "24px";
  outButton.style.top = "60px"
  outButton.style.width = "40px"
  outButton.style.height = "40px"
  outButton.style.display = "flex"
  outButton.style.alignItems = "center"
  outButton.style.justifyContent = "center"
}