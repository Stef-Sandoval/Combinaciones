let btn_object = document.getElementById("b1");

btn_object.addEventListener("click", changeObjects);

let current_object = 0;

function changeObjects() {
  let img_object = document.getElementById("objects");

  current_object += 1;

  if (current_object == 3) {
    current_object = 0;
  }
  if (current_object == 1 && current_cat == 4) {
    changeCats();
  }

  img_object.src = `./imagenes/objects${current_object}.png`;
}

let btn_sofa = document.getElementById("b2");

btn_sofa.addEventListener("click", changeSofas);

let current_sofa = 1;

function changeSofas() {
  let img_object = document.getElementById("sofas");

  current_sofa += 1;

  if (current_sofa == 5) {
    current_sofa = 1;
  }
  img_object.src = `./imagenes/sillon${current_sofa}.png`;
}

let btn_girl = document.getElementById("b3");

btn_girl.addEventListener("click", changeGirls);

let current_girl = 1;

function changeGirls() {
  let img_object = document.getElementById("girls");

  current_girl += 1;

  if (current_girl == 6) {
    current_girl = 1;
  }
  img_object.src = `./imagenes/girl${current_girl}.png`;
}

let btn_cat = document.getElementById("b4");

btn_cat.addEventListener("click", changeCats);

let current_cat = 1;

function changeCats() {
  let img_object = document.getElementById("cats");

  current_cat += 1;

  if (current_object == 0) {
    if (current_cat >= 5) {
      current_cat = 1;
    }
  } else {
    if (current_cat >= 4) {
      current_cat = 1;
    }
  }

  img_object.src = `./imagenes/cat${current_cat}.png`;
}
