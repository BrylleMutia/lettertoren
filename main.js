let size = 50;
let flag = 0;
var lastScrollTop = 0;

const step = 50;
var letter = document.querySelectorAll(".letter")[0];

let scrolling = false;

// trigger opening animation once wrapper is clicked
var wrapper = document.querySelectorAll(".wrapper")[0];
var lidOne = document.querySelectorAll(".one")[0];
var lidTwo = document.querySelectorAll(".two")[0];

wrapper.addEventListener("click", () => {
  lidOne.style.transform = "rotateX(90deg)";
  lidOne.style.transitionDelay = "0s";
  lidTwo.style.transform = "rotateX(180deg)";
  lidTwo.style.transitionDelay = "0.25s";
  console.log("WRAPPER CLICKED!");
});

const changeHeight = () => {
  // console.log("changeHeight triggered!");
  // if (size >= window.innerHeight / 2 && flag === 0) {
  //   flag = 1;
  // } else if (size <= 0 && flag === 1) {
  //   flag = 0;
  // }

  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    console.log("changeHeight DOWN triggered!");
    // downscroll code
  } else {
    // upscroll code
    console.log("changeHeight UP triggered!");
    letter.style.transform = `translateY(-${(size += step)}px)`;
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

wrapper.addEventListener("click", changeHeight);

// event throttling
setInterval(() => {
  if (scrolling) {
    scrolling = false;
    // place the scroll handling logic here
    changeHeight();
  }
}, 100);
