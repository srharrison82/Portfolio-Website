//Nav

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", function () {
  links.classList.toggle("active");
});


//photoSwapper 

function image1Swap() {
  var Image_Id = document.getElementById('image1');
  var Image_Id2 = document.getElementById('image2');
  var Image_Id3 = document.getElementById('image3');
  var Image_Id4 = document.getElementById('image4');
  var Image_Id5 = document.getElementById('image5');
  
  if (Image_Id.src.match !== ("nav.png")) {
      Image_Id.src = "nav.png";
      Image_Id2.src = "toDo.png";
      Image_Id3.src = "counter.png";
      Image_Id4.src = "photoSwapper.png";
      Image_Id5.src = "switch.png";
  }
  else {
      Image_Id.src = "nav.png";
  }
}

function image2Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("nav.png")) {
      Image_Id.src = "toDo.png";
  }
  else {
      Image_Id.src = "nav.png";
  }
  
  var Image_Id2 = document.getElementById('image2');
  if (Image_Id2.src.match("toDo.png")) {
      Image_Id2.src = "nav.png";
  }
  else {
      Image_Id2.src = "toDo.png";
  }

  var Image_Id3 = document.getElementById('image3');
  var Image_Id4 = document.getElementById('image4');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match("nav.png")) {
    Image_Id2.src = "toDo.png";
    Image_Id3.src = "counter.png";
    Image_Id4.src = "photoSwapper.png";
    Image_Id5.src = "switch.png";
  }
}

function image3Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("nav.png")) {
      Image_Id.src = "counter.png";
  }
  else {
      Image_Id.src = "nav.png";
  }
  
  var Image_Id3 = document.getElementById('image3');
  if (Image_Id3.src.match("counter.png")) {
      Image_Id3.src = "nav.png";
  }
  else {
      Image_Id3.src = "counter.png";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id4 = document.getElementById('image4');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match("nav.png")) {
    Image_Id2.src = "toDo.png";
    Image_Id3.src = "counter.png";
    Image_Id4.src = "photoSwapper.png";
    Image_Id5.src = "switch.png";
  }
}

function image4Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("nav.png")) {
      Image_Id.src = "photoSwapper.png";
  }
  else {
      Image_Id.src = "nav.png";
  }
  
  var Image_Id4 = document.getElementById('image4');
  if (Image_Id4.src.match("photoSwapper.png")) {
      Image_Id4.src = "nav.png";
  }
  else {
      Image_Id4.src = "photoSwapper.png";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id3 = document.getElementById('image3');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match ("nav.png")) {
    Image_Id2.src = "toDo.png";
    Image_Id3.src = "counter.png";
    Image_Id4.src = "photoSwapper.png";
    Image_Id5.src = "switch.png";
  }
}

function image5Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("nav.png")) {
      Image_Id.src = "switch.png";
  }
  else {
      Image_Id.src = "nav.png";
  }
  
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id5.src.match("switch.png")) {
      Image_Id5.src = "nav.png";
  }
  else {
      Image_Id5.src = "switch.png";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id3 = document.getElementById('image3');
  var Image_Id4 = document.getElementById('image4');
  if (Image_Id.src.match("nav.png")) {
    Image_Id2.src = "toDo.png";
    Image_Id3.src = "counter.png";
    Image_Id4.src = "photoSwapper.png";
    Image_Id5.src = "switch.png";
  }
}