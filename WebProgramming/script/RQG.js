fetch('https://api.allorigins.win/get?url=https://zenquotes.io/api/random')
  .then(response=>response.json())
  .then(data=>{
    const parsedData=JSON.parse(data.contents);
    console.log(parsedData);

    const author=parsedData[0].a; //the author is at the attribute a at index 0
    const quote=parsedData[0].q; //the quote is at index 0 of data at the attribute q

    document.getElementById("quote").textContent=quote;
    document.getElementById("author").textContent=author;
  })
  .catch(error =>{
    console.error("FETCHERR_FETCHERR_FETCHERR",error);
  });


  function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }