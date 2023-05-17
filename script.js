//your JS code here. If required.

const output = document.querySelector("#output");
const arr = [1, 2, 3, 4];
let odd;
const even = [];

const func = async () => {
  const first = await new Promise((resolve) => {
    setTimeout(() => {
      odd = arr.filter((val) => val % 2 !== 0);
      console.log(odd);
      output.innerText = [...odd];
      resolve(odd);
    }, 1000);
  });
  const second = await new Promise((resolve) => {
    setTimeout(() => {
      arr.forEach((val) => {
        if (val % 2 === 0) {
          even.push(val * 2);
        }
      });
      console.log(even);
      output.innerText = [...even];
      resolve(even);
    }, 2000);
  });
};

func();
