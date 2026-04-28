// ===== CHANGE ONLY THESE =====
const CHAPTER = null //Enter Your Folder Name;
const TOTAL_PAGES = null //Enter Your No Of Pages;
// =============================

const viewer = document.getElementById("viewer");

// auto load images
for(let i=1;i<=TOTAL_PAGES;i++){
  const num = String(i).padStart(3,'0');
  const img = document.createElement("img");
  img.src = `${CHAPTER}/${num}.webp`;
  viewer.appendChild(img);
}

// show current page while scrolling
const counter = document.getElementById("counter");
const images = viewer.getElementsByTagName("img");

window.addEventListener("scroll",()=>{
  let page = 1;
  for(let i=0;i<images.length;i++){
    const rect = images[i].getBoundingClientRect();
    if(rect.top <= window.innerHeight/2){
      page = i+1;
    }
  }
  counter.textContent = `${page} / ${TOTAL_PAGES}`;
});
