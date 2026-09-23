const menu=document.querySelector('.menu');const links=document.querySelector('.navlinks');if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'))}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.pub').forEach(p=>p.classList.toggle('hide',f!=='all'&&!p.dataset.cat.includes(f))) }));
document.querySelectorAll('.brand span small').forEach(el=>{if(el.textContent.trim()==='Experimental Epigenomics × AI'){el.textContent='Epigenomics · Disease Biology · AI'}});

document.querySelectorAll('[data-lab-carousel]').forEach(carousel=>{
  const track=carousel.querySelector('.lab-carousel-track');
  const slides=[...carousel.querySelectorAll('.lab-slide')];
  const section=carousel.closest('.lab-carousel-section');
  const tabs=section?[...section.querySelectorAll('.lab-year-btn')]:[];
  const prev=carousel.querySelector('.lab-carousel-arrow.prev');
  const next=carousel.querySelector('.lab-carousel-arrow.next');
  let index=0;
  const show=i=>{
    index=(i+slides.length)%slides.length;
    track.style.transform='translateX(-'+(index*100)+'%)';
    tabs.forEach((tab,n)=>{
      tab.classList.toggle('active',n===index);
      tab.setAttribute('aria-selected',n===index?'true':'false');
    });
  };
  tabs.forEach((tab,n)=>tab.addEventListener('click',()=>show(n)));
  if(prev)prev.addEventListener('click',()=>show(index-1));
  if(next)next.addEventListener('click',()=>show(index+1));
  show(0);
});
