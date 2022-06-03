const alert = document.getElementById('button')
if (alert) {
  alert.addEventListener('mousedown', () => {
    alert('Você já foi logado', 'success')
  })
}