let height = undefined;


let result = height ?? "Height is not defined";


function checkHeight(height) {
  return height ?? "Height is not defined";
}

let result = checkHeight(height);

console.log(result);
