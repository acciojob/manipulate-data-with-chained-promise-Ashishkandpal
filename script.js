//your JS code here. If required.

const output = document.querySelector("#output");
const arr = [1, 2, 3, 4];
let odd;
const mul = [];

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
          mul.push(val * 2);
        }
		  else {
			  mul.push(val);
		  }
      });
      console.log(mul);
      output.innerText = [...mul];
      resolve(even);
    }, 2000);
  });
};

func();
