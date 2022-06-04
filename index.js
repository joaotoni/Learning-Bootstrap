const alertPlace = document.getElementById('alertPlace');
 
const alert = (message, type) =>{
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    alertPlace.append(wrapper)
}
const alertButton = document.getElementById('button');
if (alertButton) {
  alertButton.addEventListener('click', () => {
    alert('Parabéns, você acabou de efetuar seu login!', 'success')
  })
}