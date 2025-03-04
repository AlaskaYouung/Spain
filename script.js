document.getElementById('open-modal-btn').addEventListener('click', function(){
	document.getElementById('my-modal').classList.add('open')
})

document.getElementById('close-my-modal-btn').addEventListener('click',function(){
	document.getElementById('my-modal').classList.remove('open')
})

document.querySelector('#my-modal .modal__box').addEventListener('click', event => {
	EventTarget._isClickWithinModal =true;
});

document.getElementById('my-modal').addEventListener('click',event =>{
	if (event._isClickWithinModal) return;
	event.currentTarget.classList.remove('open');
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
