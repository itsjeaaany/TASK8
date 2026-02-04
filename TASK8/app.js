function display(val){
    document.getElementById('result') .value += val;
  }
  function solve(){
    let x = document.getElementById('result').value;

    try {
        document.getElementById("result").value=eval(x)
    } catch {
        document.getElementById("result").value = "Error";
    }
    document.getElementById('result').value = y
  }
  function clearScreen(){
    document.getElementById('result').value = ''
  }
  