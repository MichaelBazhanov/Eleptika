import './styles/index.pcss'

// import $ from 'jquery' //Если она не нужна то закоммить====
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
  // let navigation = document.querySelector('#navigation')
  // let main = document.querySelector('#main')
  top_menu_info.addEventListener('click', (e) => {
    // console.log(e.eventPhase + 'menu')
    // if (e.eventPhase === 2) {
    // console.log('menu')
    // console.log(e.target)
    // }
		top_menu_info.classList.toggle('active')
		// navigation.classList.toggle('active')
		// main.classList.toggle('active')
  })
  // menu.click() //test

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
