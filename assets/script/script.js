const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const heroTitle = document.getElementById('heroTitle');
const heroCopy = document.getElementById('heroCopy');
const footerYear = document.getElementById('footerYear');
const parallaxItems = document.querySelectorAll('[data-parallax]');
const socialPlaceholders = document.querySelectorAll('.tiktok-placeholder, .social-placeholder');

let tiktokScriptPromise;
let instagramScriptPromise;

const loadTikTokScript = () => {
  if (tiktokScriptPromise) {
    return tiktokScriptPromise;
  }
  tiktokScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return tiktokScriptPromise;
};

const loadInstagramScript = () => {
  if (instagramScriptPromise) {
    return instagramScriptPromise;
  }
  instagramScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return instagramScriptPromise;
};

const loadSocialEmbed = (container) => {
  if (!container || container.dataset.loaded === 'true') {
    return;
  }
  const videoId = container.dataset.videoId;
  const videoUrl = container.dataset.videoUrl;
  if (!videoUrl) {
    return;
  }
  container.dataset.loaded = 'true';
  if (videoUrl.includes('instagram.com')) {
    container.innerHTML = `
      <blockquote class="instagram-media" data-instgrm-permalink="${videoUrl}" data-instgrm-version="14">
        <a target="_blank" rel="noopener noreferrer" href="${videoUrl}">Open on Instagram</a>
      </blockquote>
    `;
    loadInstagramScript()
      .then(() => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      })
      .catch(() => {
        container.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${videoUrl}">Open on Instagram</a>`;
      });
    return;
  }

  if (!videoId) {
    return;
  }
  container.innerHTML = `
    <blockquote class="tiktok-embed" cite="${videoUrl}" data-video-id="${videoId}">
      <section>
        <a target="_blank" title="@ronel.guidigan" href="${videoUrl}">Visualiser sur TikTok</a>
      </section>
    </blockquote>
  `;
  loadTikTokScript()
    .then(() => {
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
    })
    .catch(() => {
      container.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${videoUrl}">Open on TikTok</a>`;
    });
};

const updateNavbar = () => {
  const scrolled = window.scrollY > 50;
  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

const updateHeroParallax = () => {
  const scrollY = window.scrollY;
  if (heroTitle) {
    const offset = Math.min(scrollY * 0.1, 100);
    heroTitle.style.transform = `translateY(${offset}px)`;
    heroTitle.style.opacity = `${Math.max(1 - scrollY / 700, 0)}`;
  }

  if (heroCopy) {
    heroCopy.style.opacity = `${Math.max(1 - scrollY / 450, 0)}`;
    heroCopy.style.transform = `translateY(${scrollY * 0.05}px)`;
  }

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0);
    item.style.transform = `translateY(${scrollY * speed}px)`;
  });
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  navbar.classList.remove('menu-open');
  document.body.style.overflow = 'unset';
};

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  navbar.classList.toggle('menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : 'unset';
});

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', () => {
  updateNavbar();
  updateHeroParallax();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});

if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.textContent = `© ${year} RN. Video. All rights reserved.`;
}

updateNavbar();
updateHeroParallax();

socialPlaceholders.forEach((placeholder) => {
  const button = placeholder.querySelector('button');
  if (button) {
    button.addEventListener('click', () => loadSocialEmbed(placeholder));
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadTikTokEmbed(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '200px' }
  );

  socialPlaceholders.forEach((placeholder) => observer.observe(placeholder));
}
