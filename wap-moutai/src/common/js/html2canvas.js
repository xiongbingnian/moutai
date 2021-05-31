import html2canvas from 'html2canvas'

export function html2Canvas(dom,callback) {
  if(!dom){
    return;
  }
  html2canvas(document.querySelector(dom), {
      useCORS: true
    })
    .then(canvas => {
      // document.body.appendChild(canvas)
      let base64 = canvas.toDataURL();
      callback(base64)
    });
}
