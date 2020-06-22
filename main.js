gsap.from('nav', {duration:1.2, opacity:0, y:-100,ease:"power2.out"});

gsap.from('.hero--right', {duration:1.2, x:'-1050px', });
gsap.from('.hero--right-content', {duration:0.6, opacity: 0, y:50, delay:1.1});

gsap.from('.hero--left', {duration:1.2, x:0, width:0, delay:0.2, ease:"power1.out"});