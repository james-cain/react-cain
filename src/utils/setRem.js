(function (psdw) {
  let dpr = 0;
  let rem = 0;
  let scale = 0;
  const htmlDOM = document.documentElement;
  dpr = window.devicePixelRatio;
  let currentWidth = htmlDOM.clientWidth;
  scale = currentWidth / psdw;
  rem = psdw / 10;
  rem = rem * scale;
  htmlDOM.style.fontSize = `${rem}px`;
  htmlDOM.setAttribute('data-dpr', dpr);
})(750)
