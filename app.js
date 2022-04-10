document.getElementById("selectbox").addEventListener("click", () => {
     const inputs = document.getElementById("inputs");
     inputs.innerHTML = '';

  console.log('test');

  const select = document.getElementById('selectbox').value;
  console.log(select);
  const res = select.split('*');
  const result = res[0];
  console.log(result);

 
  for(let i = 1; i <= result*result; i++){
      inputs.style.gridTemplateColumns = `repeat(${result},1fr)`;
    const input = document.createElement('input');
    input.setAttribute('id',i);
    inputs.appendChild(input);
  }
});

document.getElementById('btn').addEventListener('click',()=>{
    const select = document.getElementById("selectbox").value;
    const xValue = document.getElementById('x').value;
    const x = parseInt(xValue);
    const res = select.split("*");
    const result = res[0];


    const table = document.getElementById('table');
    for(let i = 1; i <= result*result; i++){
        let indexValue = document.getElementById(i).value;
        const evalResult = eval(indexValue);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${evalResult}</td>
        `;

        table.appendChild(tr);

        // console.log(eval(indexValue));
        
        console.log(evalResult);
    }

})