function toggleInfo(element) {
    var infoContent = element.nextElementSibling;
    var arrowIcon = element.classList.contains('expanded') ? "\u25B2" : "\u25BC";

    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
        infoContent.classList.add('expanded');
        document.body.style.height = 'auto';
        element.classList.add('expanded');
    } else {
        infoContent.style.display = 'none';
        infoContent.classList.remove('expanded');
        document.body.style.height = '100%';
        element.classList.remove('expanded');
    }

    element.querySelector('.info-header::after').textContent = arrowIcon;
}
window.onscroll = function() {
  var top = document.querySelector('.top');
  if (window.scrollY > 50) {
    top.style.background = 'linear-gradient(to bottom right, rgba(55, 112, 201, 0.82), rgba(248, 164, 98, 0.7))'; /* Сделать блок top чуть менее прозрачным */
  } else {
    top.style.background = 'rgb(255, 255, 255, 0)'; /* Сделать блок top полностью непрозрачным */
  }
}