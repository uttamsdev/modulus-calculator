document.getElementById("selectbox").addEventListener("click", () => {
     const inputs = document.getElementById("inputs");
     inputs.innerHTML = '';
     document.getElementById('table').innerHTML = '';
     document.getElementById("result-text").innerText = '';

  console.log('test');

  const select = document.getElementById('selectbox').value;
  console.log(select);
  const res = select.split('*');
  const result = res[0];
  const result2 = res[1];
  // console.log(result);

 
  for(let i = 1; i <= result*result2; i++){
      inputs.style.gridTemplateColumns = `repeat(${result2},1fr)`;
    const input = document.createElement('input');
    input.setAttribute('id',i);
    inputs.appendChild(input);
  }
});

document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById("result-text").innerText = 'Result: '
    const select = document.getElementById("selectbox").value;
    const xValue = document.getElementById('x').value;
    const x = parseFloat(xValue);
    const res = select.split("*");
    const result = res[0];
    const result2 = res[1];

    const table = document.getElementById('table');
    table.style.backgroundColor = "rgba(255, 86, 56, 0.43)";
    table.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px';
    table.innerHTML = '';
    table.style.gridTemplateColumns = `repeat(${result2},100px)`
    for(let i = 1; i <= result*result2; i++){
        let indexValue = document.getElementById(i).value;
        if(indexValue === ''){
          alert('Enter all input filed to get full result.....');
          return;
        }
        const evalResult = eval(indexValue);
        // const xx = evalResult.toFixed(3)
        const tr = document.createElement('tr');
        tr.className = "table-row";
        tr.innerHTML = `
        <td style="border:0px solid yellow; padding:20px;border-radius:10px;margin:20px;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;background-color: rgba(255, 86, 56, 0.5);font-weight:550;">${evalResult}</td>
        `;

        table.appendChild(tr);
    }

})