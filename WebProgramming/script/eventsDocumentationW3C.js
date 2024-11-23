function linkModifier(){
  const links=document.querySelectorAll("a");
  links.forEach(link => {
    if(!link.href.startsWith("https://www.w3schools.com/jsref/")){
      link.href="https://www.w3schools.com/jsref/"+link.getAttribute("href");
    }
    link.target="_blank";
  });
}

addEventListener("DOMContentLoaded",linkModifier());