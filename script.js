 function appendValue(value) {
 document.getElementById('display').value += value;
 }
function clearDisplay() {
document.getElementById('display').value = '';
 }
 function deleteLast() { display.value = display.value.slice(0, -1); 
}
  function calcutateResult() {
 try { document.getElementById('display').value = eval(document.getElementById('display').value); 

 } catch { document.getElementById('display').value = 'Error';
 }
 }
 document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
            appendValue(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key.toLowerCase() === 'c' || key === 'Escape') {
            clearDisplay();
        }
    });