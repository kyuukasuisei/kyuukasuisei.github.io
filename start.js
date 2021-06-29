(() =>{
  const newWindow = () =>{
    window.open("type.html", null,"width=800,height=600,top=100px,left=400px");
  }
  const $doc = document;
  const $startButton = $doc.getElementById("js-button");

  $startButton.addEventListener("click",newWindow);
})();
