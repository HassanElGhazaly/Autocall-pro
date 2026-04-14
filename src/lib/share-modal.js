/**
 * Share Modal Logic with robust null-checks and DOM readiness check
 */
export const initShareModal = () => {
  const runInit = () => {
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const closeBtn = document.getElementById('close-share-modal');

    if (shareBtn && shareModal) {
      shareBtn.addEventListener('click', () => {
        shareModal.classList.remove('hidden');
        shareModal.classList.add('flex');
      });
    }

    if (closeBtn && shareModal) {
      closeBtn.addEventListener('click', () => {
        shareModal.classList.add('hidden');
        shareModal.classList.remove('flex');
      });
    }

    // Close on outside click
    if (shareModal) {
      window.addEventListener('click', (e) => {
        if (e.target === shareModal) {
          shareModal.classList.add('hidden');
          shareModal.classList.remove('flex');
        }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit);
  } else {
    runInit();
  }
};
