let count = 0

const num = document.querySelector('#value')

function calcCount(n) {
    if (n > 0) 
    {
        count++
    }
    else if (n < 0) 
    {
        count--
    }
    else
        count = 0

    if (count > 0)
    {
        num.style.color = 'white'
    }
    else if (count < 0)
    {
        num.style.color = 'red'
    }
    else
        num.style.color = 'gray'

    num.textContent = count
}
