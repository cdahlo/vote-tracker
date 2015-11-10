
var imgs = ['bmw.jpg', 'bugatti.jpg', 'classic.jpg', 'concept.jpg', 'corvette.jpg', 'dino.jpg', 'lambo.jpg', 'mcclaren.jpg', 'p1.jpg', 'porsche.jpg', 'rally.jpg', 'audi.jpg']
var imgs_count = {'bmw.jpg': 0, 'bugatti.jpg': 0, 'classic.jpg': 0, 'concept.jpg': 0, 'corvette.jpg': 0, 'dino.jpg': 0, 'lambo.jpg': 0, 'mcclaren.jpg': 0, 'p1.jpg': 0, 'porsche.jpg': 0,'rally.jpg': 0, 'audi.jpg':0}
var path = 'cars/';
var done = false;

function getRandomImage() {
  var idx1 = Math.floor(Math.random()*imgs.length);
  var img1 = imgs[idx1];
  var idx2 = idx1
  while (idx2 == idx1) {
    idx2 = Math.floor(Math.random()*imgs.length);
  }
  var img2 = imgs[idx2];
  document.getElementById('choice1').setAttribute('src', path + img1);
  document.getElementById('choice2').setAttribute('src', path + img2);
}

function setOnClicks(id) {
  document.getElementById(id).onclick = function() {
    var img = document.getElementById(id).getAttribute('src');
    var img = img.slice(5,img.length);
    imgs_count[img] += 1;

    for (var key in imgs_count) {
      if (imgs_count[key] == 6) {
        console.log(imgs_count);
        done = true;
      }
    }

    if (!done)
      getRandomImage();
  }
}



getRandomImage();
setOnClicks('choice1');
setOnClicks('choice2');













