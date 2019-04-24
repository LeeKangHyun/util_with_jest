export default {
  $: function(elem) {
    return document.querySelector(elem)
  },
  hasClass: function(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
  },
  addClass: function(el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else {
      el.className += ' ' + className
    }
  },
  removeClass: function(el, className) {
    if (el.classList) {
      el.classList.remove(className)
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
  }
}
