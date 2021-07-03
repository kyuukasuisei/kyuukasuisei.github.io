(() =>{
  const $doc = document;
  const $textframe =$doc.getElementById("frame")
  const $text = $doc.getElementById("textCont")
  const $remaining = $doc.getElementById("remaining")
  const $start = $doc.getElementById("start")
  const $typing = $doc.getElementById("typing")
  const $Miss = $doc.getElementById("Miss")
  //spanの枠
  const $textAlpabet = $doc.getElementById("alpabetTxtCont")
  const $result = $doc.getElementById("result")
  const $resultScore = $doc.getElementById("resultScore")
  const $miss = $doc.getElementById("miss");
  //タイピング内容を定義
  const textCont = [
    "ジンベエザメはでかい",
    "穴から顔出すチンアナゴ",
    "ハンマーヘッドシャーク",
    "かわいい悪魔クリオネ",
    "泳ぎ続けるマグロ",
    "弱すぎマンボウ"
  ]
  const alpabetTextAll=[
  alpabetText0=[
    "j","i","n","b","e","i","z","a","m","e","h","a","d","e","k","a","i",
  ],
  alpabetText1=[
    "a","n","a","k","a","r","a","k","a","o","d","a","s","u","t","i","n","a","n","a","g","o"
  ],
  alpabetText2=["h","a","n","m","a","-","h","e","d","d","o","s","y","a","-","k","u"
  ],
  alpabetText3=["k","a","w","a","i","i","a","k","u","m","a","k","u","r","i","o","n","e"],
  alpabetText4=["o","y","o","g","i","t","u","d","u","k","e","r","u","m","a","g","u","r","o"],
  alpabetText5=["y","o","w","a","s","u","g","i","m","a","n","b","o","u"]
]
  const $textDisplay_alpabet = $textAlpabet.getElementsByTagName("span");
  ($textDisplay_alpabet[0]);
  //どのtextを処理するか
  let textIndexDisplay =0;
  //textの何番目を処理するか
  let displayAlpabet =0;
  //点数付け用
  let score =0;
  let miss =0;
  //バグ直し
  let cheker = 0;
  
    
  //text変更の処理
  const $remainingText = () => {
    let remain =alpabetTextAll.length-1-textIndexDisplay;
    const remainText ="あと"+ remain +"文";
    $remaining.textContent= remainText;
  }
  const $typeText = () => $text.textContent=textCont[textIndexDisplay];
  const $typeTextAlpa = () => displayAlpabet =0;
  while(displayAlpabet <= alpabetTextAll[textIndexDisplay].length){
    $textDisplay_alpabet[displayAlpabet].textContent=alpabetTextAll[textIndexDisplay][displayAlpabet];
    displayAlpabet++;
   }
  $remainingText();
  $typeText();
  $typeTextAlpa();

  //typing
  const type = () =>{
    window.addEventListener('DOMContentLoaded', () =>{
      window.addEventListener("keydown", (e) =>{
        e.preventDefault();
        $textframe.classList.remove("missed")
        const typed = (e.key);
        //typingが正解だったら次の文字へ進める
        if (typed === alpabetTextAll[textIndexDisplay][displayAlpabet] && cheker === 1){
          console.log("success")
          $textDisplay_alpabet[displayAlpabet].style.color="orange";
          displayAlpabet++;
          score++;
          $Miss.classList.remove("whenMiss");
          //一文終わっているか判定
          if(displayAlpabet === alpabetTextAll[textIndexDisplay].length && cheker === 1){
            displayAlpabet = 0;
            //textの内容を変える処理
            ($textDisplay_alpabet[textIndexDisplay])
            while(displayAlpabet <= alpabetTextAll[textIndexDisplay].length){
              $textDisplay_alpabet[displayAlpabet].style.display="none";
              $textDisplay_alpabet[displayAlpabet].style.color="black";
              displayAlpabet++;
            }
            displayAlpabet = 0;
            textIndexDisplay++;
            //textがすべて終わっているか判定
            if(textIndexDisplay === alpabetTextAll.length && cheker === 1){
              $textAlpabet.style.display="none"
              $text.style.display="none"
              $remaining.style.display="none"
              $result.style.display="block"
              $resultScore.textContent="点数は"+score+"点です";
              $miss.textContent="ミスタイプは"+miss+"回です";
            }
            const $typeTextAlpa = () => displayAlpabet =0;
            while(displayAlpabet <= alpabetTextAll[textIndexDisplay].length){
              $textDisplay_alpabet[displayAlpabet].textContent=alpabetTextAll[textIndexDisplay][displayAlpabet];
              $textDisplay_alpabet[displayAlpabet].style.display="inline";
              displayAlpabet++;
            }
            $remainingText();
            $typeTextAlpa();
            $typeText();
            console.log(textIndexDisplay);
          }
        }
      //missしたときの処理
      else{
        type(alpabetTextAll[textIndexDisplay] && cheker === 1);
        if (typed !== "n" && typed !== " "){
          $textframe.classList.add("missed");
          $Miss.classList.add("whenMiss");
          score=score-2;
          miss++;
          console.log("miss")
        }
        }
      }
      );
    });
  };
  const getstart = () => {
  window.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener("keydown", (e) =>{
      e.preventDefault();
      const typed = (e.key);
      if (typed ===" " && cheker === 0){
        $start.style.display="none";
        $typing.style.display="inline";
        cheker =1;
      }
      else{
        getstart();
      }
    });
      });
    }
    getstart();
    type();
})();
