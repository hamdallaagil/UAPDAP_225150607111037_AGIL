
function message() {
  var text = document.getElementById('text')
  const success = document.getElementById('success')
  const danger = document.getElementById('danger')

  if (text.value === '') {
    danger.style.display = 'block';
  } else {
    setTimeout(() => {
      text.value = '';
    }, 2000)
    
    success.style.display = 'block'
    
  }
  
  setTimeout(() => {
    success.style.display = 'block'
    danger.style.display = 'block';
  }, 4000)

}

function myFunction() {
  alert("Thank you for send a message!");
}