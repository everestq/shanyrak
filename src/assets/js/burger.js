export const burgerBtn = (selector) => {
  const btn = document.querySelector(selector)
  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
  })
}
