(() => {
  'use strict';
  const settings = window.DOE_DATA.release.analytics;
  const home = document.getElementById('visitor-map-home');
  const panel = document.createElement('div');
  panel.className = 'visitor-map-card';
  const link = document.createElement('a');
  link.href = settings.statistics_url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.className = 'visitor-map-link';
  link.setAttribute('aria-label', 'Open country and visit statistics on Flag Counter');
  const map = document.createElement('img');
  map.alt = 'World map with visitor countries and visit counts, provided by Flag Counter';
  map.width = 800;
  map.height = 375;
  map.referrerPolicy = 'strict-origin-when-cross-origin';
  map.decoding = 'async';
  // One persistent image per document, including direct links to paper pages.
  // Hash navigation moves this same node rather than loading a second counter.
  link.append(map);
  const status = document.createElement('p');
  status.className = 'visitor-map-status';
  status.setAttribute('role', 'status');
  panel.append(link, status);
  home.append(panel);
  const enabled = location.hostname === settings.production_host && !new URLSearchParams(location.search).has('qa');
  const fail = () => {
    map.hidden = true;
    status.textContent = 'The map is temporarily unavailable. Open detailed statistics below to view the counter.';
    panel.classList.add('map-unavailable');
  };
  map.addEventListener('error', fail);
  map.addEventListener('load', () => {
    if (map.naturalWidth < 50) { fail(); return; }
    status.textContent = '';
    status.hidden = true;
    panel.classList.remove('map-loading');
  });
  if (enabled) {
    status.textContent = 'Loading visitor statistics…';
    panel.classList.add('map-loading');
    map.src = settings.image_url;
  } else {
    map.hidden = true;
    status.textContent = 'Visit counting is disabled in this preview. The visitor map is available on the published website.';
    panel.classList.add('map-preview');
  }
  window.UQVisitors = {
    stash() { home.append(panel); },
    mount() { const slot = document.getElementById('visitor-map-slot'); if (slot) slot.append(panel); },
    enabled
  };
})();
