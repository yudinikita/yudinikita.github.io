const SCROLL_THRESHOLD = 50;

const applyEffect = () => {
  const scrollPosition = window.scrollY;
  const bioElement = document.querySelector('.bio');

  if (scrollPosition >= SCROLL_THRESHOLD) {
    bioElement.classList.add('hero-hide');
    bioElement.classList.remove('hero-show');
  } else {
    bioElement.classList.remove('hero-hide');
    bioElement.classList.add('hero-show');
  }
};

const scrollToThreshold = () => {
  window.scrollTo({
    top: SCROLL_THRESHOLD,
    behavior: 'smooth',
  });
};

const onLoad = () => {
  applyEffect();
};

const onScroll = () => {
  applyEffect();
};

const onClickMore = () => {
  scrollToThreshold();
};

addEventListener('load', onLoad);
addEventListener('scroll', onScroll);
