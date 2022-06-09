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
  
  if (Image_Id.src.match !== ("image1.jpeg")) {
      Image_Id.src = "image1.jpeg";
      Image_Id2.src = "image2.jpeg";
      Image_Id3.src = "image3.jpeg";
      Image_Id4.src = "image4.jpeg";
      Image_Id5.src = "image5.jpeg";
  }
  else {
      Image_Id.src = "image1.jpeg";
  }
}

function image2Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("image1.jpeg")) {
      Image_Id.src = "image2.jpeg";
  }
  else {
      Image_Id.src = "image1.jpeg";
  }
  
  var Image_Id2 = document.getElementById('image2');
  if (Image_Id2.src.match("image2.jpeg")) {
      Image_Id2.src = "image1.jpeg";
  }
  else {
      Image_Id2.src = "image2.jpeg";
  }

  var Image_Id3 = document.getElementById('image3');
  var Image_Id4 = document.getElementById('image4');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match("image1.jpeg")) {
    Image_Id2.src = "image2.jpeg";
    Image_Id3.src = "image3.jpeg";
    Image_Id4.src = "image4.jpeg";
    Image_Id5.src = "image5.jpeg";
  }
}

function image3Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("image1.jpeg")) {
      Image_Id.src = "image3.jpeg";
  }
  else {
      Image_Id.src = "image1.jpeg";
  }
  
  var Image_Id3 = document.getElementById('image3');
  if (Image_Id3.src.match("image3.jpeg")) {
      Image_Id3.src = "image1.jpeg";
  }
  else {
      Image_Id3.src = "image3.jpeg";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id4 = document.getElementById('image4');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match("image1.jpeg")) {
    Image_Id2.src = "image2.jpeg";
    Image_Id3.src = "image3.jpeg";
    Image_Id4.src = "image4.jpeg";
    Image_Id5.src = "image5.jpeg";
  }
}

function image4Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("image1.jpeg")) {
      Image_Id.src = "image4.jpeg";
  }
  else {
      Image_Id.src = "image1.jpeg";
  }
  
  var Image_Id4 = document.getElementById('image4');
  if (Image_Id4.src.match("image4.jpeg")) {
      Image_Id4.src = "image1.jpeg";
  }
  else {
      Image_Id4.src = "image4.jpeg";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id3 = document.getElementById('image3');
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id.src.match ("image1.jpeg")) {
    Image_Id2.src = "image2.jpeg";
    Image_Id3.src = "image3.jpeg";
    Image_Id4.src = "image4.jpeg";
    Image_Id5.src = "image5.jpeg";
  }
}

function image5Swap() {
  var Image_Id = document.getElementById('image1');
  if (Image_Id.src.match("image1.jpeg")) {
      Image_Id.src = "image5.jpeg";
  }
  else {
      Image_Id.src = "image1.jpeg";
  }
  
  var Image_Id5 = document.getElementById('image5');
  if (Image_Id5.src.match("image5.jpeg")) {
      Image_Id5.src = "image1.jpeg";
  }
  else {
      Image_Id5.src = "image5.jpeg";
  }

  var Image_Id2 = document.getElementById('image2');
  var Image_Id3 = document.getElementById('image3');
  var Image_Id4 = document.getElementById('image4');
  if (Image_Id.src.match("image1.jpeg")) {
    Image_Id2.src = "image2.jpeg";
    Image_Id3.src = "image3.jpeg";
    Image_Id4.src = "image4.jpeg";
    Image_Id5.src = "image5.jpeg";
  }
}