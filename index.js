const inputVal = document.getElementById('inputVal');
const subVal = document.getElementById('subVal');
const historyDiv = document.getElementById('historyDiv');

function getValue(val)
{
    if(inputVal.value === '0')
        inputVal.value = val;
    else
        inputVal.value += val;
}

function clearAll()
{
    inputVal.value=0;
    subVal.value="";
}

function solve()
{
    var equation = inputVal.value;//5-2
    console.log(equation);
    subVal.value = equation + "=";//5-2 =
    var ans = eval(equation)
    inputVal.value = ans;

    showHistory(equation, ans);
}

function removeLastDigit()
{
    if(inputVal.value.length > 1)
        inputVal.value = inputVal.value.slice(0, -1);
    else
        inputVal.value = 0;
}




// function showHistory()
// {
//     var equation = subVal.value;
//     var ans = inputVal.value;
//     console.log(equation, ans);
//     historyDiv.innerHTML += `<div class="his">
//                                 <p>${equation}</p>
//                                 <p>${ans}</p>
//                             </div>`;
// }


function showHistory(equation, ans)
{
    console.log(equation, ans);
    historyDiv.innerHTML += `<div class="his">
                                <p>${equation}</p>
                                <p>${ans}</p>
                            </div>`;
}


function clearHistory()
{
    var choice = confirm("are u sure you want to clear history ?");
    if(choice)
        historyDiv.innerHTML = ""; 
}

