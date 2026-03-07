/* ===== NÚT KHÔNG CHẠY ===== */
    const noBtn=document.getElementById("noBtn");

    noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*(window.innerWidth-100);
    const y=Math.random()*(window.innerHeight-50);

    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
});

  /* ===== SAO ===== */
    for(let i=0;i<120;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    document.body.appendChild(star);
    }

  /* ===== TIM + CHỮ BAY ===== */
    const texts=["Love U 💕","My Princess🌹","Đáng iu💞"];

    function spawnText(){
    const t=document.createElement("div");
    t.className="floating-text";
    t.innerText=texts[Math.floor(Math.random()*texts.length)];

    t.style.left=Math.random()*100+"vw";
    t.style.top=Math.random()*80+"vh";

    const x=(Math.random()-0.5)*400;
    const y=(Math.random()-0.5)*800;
    const d=5+Math.random()*6;

    t.animate([
        {transform:"translate(0,0)",opacity:1},
        {transform:`translate(${x}px,${y}px)`,opacity:0}
    ],{duration:d*1000});

    document.body.appendChild(t);
    setTimeout(()=>t.remove(),d*1000);
    }
    setInterval(spawnText,1500);

    function spawnHeart(){
    const heart=document.createElement("div");
    heart.className="heart";

    const size=15+Math.random()*30;
    heart.style.width=size+"px";
    heart.style.height=size+"px";

    heart.style.left=Math.random()*100+"vw";
    heart.style.top=Math.random()*80+"vh";

    const x=(Math.random()-0.5)*400;
    const y=(Math.random()-0.5)*800;
    const d=5+Math.random()*6;

    heart.animate([
        {transform:"translate(0,0) rotate(45deg)",opacity:1},
        {transform:`translate(${x}px,${y}px) rotate(45deg)`,opacity:0}
    ],{duration:d*1000});

    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),d*1000);
    }
    setInterval(spawnHeart,300);

  /* ===== TYPEWRITER ===== */
    const textContent=`Chúc mừng ngày 8/3 
      Chúc em có một ngày
      thật ngọt ngào và bình yên.
      Hy vọng hôm nay 
      em sẽ nhận được thật nhiều niềm vui,
      những điều nhỏ bé 
      nhưng đủ để làm em mỉm cười cả ngày.

      Anh thấy bản thân thật may mắn
      vì có em đến bên cạnh. 
      Em mang lại cho anh 
      một cảm giác rất dễ chịu.
      nhẹ nhàng nhưng cũng rất đặc biệt.

      Từ hôm nay trở đi, 
      mỗi ngày của em, đều sẽ có anh!
      mình cùng cố gắng em nhé,
      để cùng nhau đi qua thật nhiều ngày bình thường,
      những ngày bình thường thật hạnh phúc.

      Mỗi khi buồn hay mệt mỏi,
      nhớ là luôn có anh ở đây.
      Tuy là hai nơi khác nhau
      nhưng anh cảm thấy là 
      em đang ở ngay cạnh anh vậy.

      Anh sẽ cố gắng hơn
      để chúng mình có thể sớm
      cùng nhau đón những ngày như thế này,
      em nhé!

      Chúc em luôn vui vẻ, rạng rỡ và hạnh phúc,
      không chỉ riêng ngày hôm nay. 
      Chúc em một ngày thật đẹp,
      giống như chính nụ cười của em vậy. 🌷
      
      Cảm ơn em
      Vì đã xuất hiện trong cuộc đời của anh💞`;

    let i=0;

    function typeWriter(){
    if(i<textContent.length){
        document.getElementById("letterText").innerHTML
        += textContent.charAt(i).replace("\n","<br>");
        i++;
        setTimeout(typeWriter,35);
    }
    }

  /* ===== CLICK ===== */
    function yesClick(){

    document.getElementById("bgMusic").play();

    document.getElementById("loveLetter")
    .classList.add("show");

    typeWriter();
    }

    function closeLetter(){
    document.getElementById("loveLetter")
        .classList.remove("show");
    }