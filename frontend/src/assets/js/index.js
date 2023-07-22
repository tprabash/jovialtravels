import { preloadImages } from './utils';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const DOM = {
    sections: {
        columns: document.querySelector('.section--columns'),
        showcase: document.querySelector('.section--showcase'),
    },
    columns: document.querySelectorAll('.section--columns > .columns'),
    columnWraps: document.querySelectorAll('.section--columns .column-wrap'),
    itemsWrappers: document.querySelectorAll('.section--columns .column-wrap .column'),
    items: document.querySelectorAll('.section--columns .column__item'),
    images: document.querySelectorAll('.section--columns .column__item-img'),
};

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
	lenis = new Lenis({
		lerp: 0.2,
		smooth: true,
	});
	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
	requestAnimationFrame(scrollFn);
};

// GSAP Scroll Triggers
const scroll = () => {
    gsap.timeline({
        scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: true
        }
    })
    .addLabel('start', 0)
    .to(DOM.sections.columns, {
        ease: 'none',
        startAt: {scale: 1.1},
        scale: 1,
    }, 'start')
    .to(DOM.sections.columns, {
        scrollTrigger: {
            trigger: DOM.sections.showcase,
            start: 0,
            end: 'top top',
            scrub: true
        },
        ease: 'power4.inOut',
        startAt: {
            opacity: 0.2,
        },
        opacity: 1,
        // repeat once (go back to "startAt" values)
        yoyo: true,
        repeat: 1
    }, 'start')
    .to(DOM.columnWraps, {
        ease: 'none',
        yPercent: pos => pos%2 ? 3 : -3
    }, 'start')
};

// Preload images
preloadImages('.column__item-img').then(() => {
    document.body.classList.remove('loading');
    // Lenis (smooth scrolling)
    initSmoothScrolling();
    // GSAP Scroll Triggers
    scroll();
});



const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 4,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 4.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})


