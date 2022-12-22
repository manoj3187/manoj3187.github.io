
function storeResponse() {
    const oldDataString = localStorage.getItem('responses')
    const data = JSON.parse(oldDataString || "[]") 
    var value = document.getElementById('response').value;
    data.push(value);
    localStorage.setItem('responses', JSON.stringify(data));
    window.location.href = "./responses.html";
}

function readResponse() {
    var value = localStorage.getItem('responses');
    document.getElementById('readResponse').textContent = value;
}