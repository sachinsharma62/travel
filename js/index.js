const animateOnScroll = function () {
  let elements = document.querySelectorAll('.animate')
  let windowHeight = 0
  
  const init = function () {
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  const _addEventHandlers = function () {
    _checkPosition()
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  const _checkPosition = function () {
    elements.forEach(element => {
      const posFromTop = element.getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        element.classList.add('active')
      }
    })
  }
  return {
    init: init
  }
}
animateOnScroll().init()