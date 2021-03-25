export const popupWindow = (btn, form) => {
  const clickBtn = document.querySelector(btn)
  const openForm = document.querySelector(form)

  clickBtn.addEventListener('click', (e) => {
    e.preventDefault()
    openForm.classList.toggle('open')
    document.querySelector('body').classList.add('lock')
    if (!openForm.classList.contains('open')) {
      clickBtn.blur()
    }
    if (openForm.classList.contains('open')) {
      const close = openForm.querySelectorAll('[data-id="modal-close"]')
      
      close.forEach(btn => {
        btn.addEventListener('click', () => {
          openForm.classList.remove('open')
          openForm.classList.add('closable')
          setTimeout(() => {
            openForm.classList.remove('closable')
            document.querySelector('body').classList.remove('lock')
          }, 500);
        })
      })
    }
  })
}