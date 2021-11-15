// Promises are used to handle asynchronous operation in javascript.
// Promises are advancement of callback functions.
// Promises has three states resolve,reject and pending

function f1() {
  return new Promise((resolve, reject) => {
    resolve(
      new Promise((resolve, reject) => {
        resolve(
          setTimeout(() => {
            console.log("Inner Promises");
          }, 2000)
        );
      })
    );
  });
}
f1()
  .then((res) => {
    res.then();
  })
  .catch((e) => {
    console.log(e);
  });
