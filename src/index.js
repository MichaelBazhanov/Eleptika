import './styles/index.pcss'

import $ from 'jquery' //Если она не нужна то закоммить====
import 'slick-carousel'
$(document).ready(function () {
  $('.slider-wrapper').slick({
    vertical: false,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:false,
        },
      },
    ],
  })
})
// =========================================================

// const userStack = {
// 	language: 'JavaScript',
// 	framework: 'Angular',
// }
// const user = {
// 	name: 'Michael',
// 	age: '30',
// 	...userStack
// }

// console.log(user)
// =========================================================
// $('.jquery').html('jquery work!')

// ### #toggle-menu
window.onload = function () {
  let top_menu_info = document.querySelector('#top-menu-info')
  top_menu_info.addEventListener('click', (e) => {
    // if (e.eventPhase === 2) {
    // console.log('menu')
    // console.log(e.target)
    // }
    top_menu_info.classList.toggle('active')
  })

  //   let svg = document.querySelector('#svg')
  //   svg.addEventListener(
  //     'click',
  //     (e) => {
  //       console.log(e.eventPhase + 'svg')
  //       if (e.eventPhase === 2) {
  //         console.log('svg')
  //         console.log(e.target)
  //       }
  //     }
  //   )
}
