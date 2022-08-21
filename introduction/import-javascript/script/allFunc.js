const buttonA = document.querySelector('#saveBtn');

buttonA.onclick = () => {
  const namevalue = document.getElementById('nameInput').value

  document.getElementById('name').textContent = namevalue
  
  console.log({ namevalue })
}

function getTypedName() {
  const namevalue = document.getElementById('nameInput').value

  document.getElementById('name').textContent = namevalue
  
  console.log({ namevalue })
}