class InteractiveMap {
  constructor() {
    this.regions = ['north', 'haifa', 'shomron', 'jerusalem', 'telaviv', 'center', 'south', 'azza'];
    this.currentActiveRegion = null;
    this.isAnimating = false;
    this.autoHideTimer = null;

    this.init();
  }

  init() {
    this.initializeElements();
    this.setupEventListeners();
    this.setupAccessibility();
    this.addVisualEffects();
  }

  initializeElements() {
    // Cache DOM elements for better performance
    this.infoPlaceholder = document.querySelector('.info-placeholder');
    this.regionButtons = document.querySelectorAll('.region-button');
    this.infoBoxes = document.querySelectorAll('.info-box');
    this.mapImage = document.querySelector('.map-image');

    // Initialize all info boxes as hidden
    this.infoBoxes.forEach(box => {
      box.style.display = 'none';
      box.style.opacity = '0';
      box.style.transform = 'translateY(20px)';
    });

    // Ensure placeholder is visible initially
    if (this.infoPlaceholder) {
      this.infoPlaceholder.style.display = 'flex';
      this.infoPlaceholder.style.opacity = '1';
    }
  }

  setupEventListeners() {
    // Region button click handlers
    this.regions.forEach(region => {
      const btn = document.getElementById(`btn-${region}`);
      const info = document.getElementById(`info-${region}`);

      if (btn && info) {
        btn.addEventListener('click', (e) => this.handleRegionClick(e, region));
        btn.addEventListener('mouseenter', () => this.handleButtonHover(btn, region, true));
        btn.addEventListener('mouseleave', () => this.handleButtonHover(btn, region, false));

        // Prevent info box clicks from closing
        info.addEventListener('click', (e) => e.stopPropagation());
      }
    });

    // Global click handler to close active regions
    document.addEventListener('click', (e) => this.handleGlobalClick(e));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // Window resize handler
    window.addEventListener('resize', () => this.handleResize());
  }

  setupAccessibility() {
    // Add ARIA labels and keyboard support
    this.regionButtons.forEach((button, index) => {
      button.setAttribute('role', 'button');
      button.setAttribute('tabindex', '0');
      button.setAttribute('aria-expanded', 'false');

      const region = button.getAttribute('data-region');
      button.setAttribute('aria-label', `הצג מידע על ${this.getRegionHebrewName(region)}`);
    });

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .region-button:focus {
        outline: 3px solid var(--primary-blue);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  getRegionHebrewName(region) {
    const names = {
      'north': 'צפון ישראל',
      'haifa': 'חיפה והסביבה',
      'shomron': 'שומרון',
      'jerusalem': 'ירושלים',
      'telaviv': 'תל אביב',
      'center': 'מרכז הארץ',
      'south': 'דרום הארץ',
      'azza': 'אזור עזה'
    };
    return names[region] || region;
  }

  addVisualEffects() {
    // Add subtle pulse animation to placeholder
    if (this.infoPlaceholder) {
      const pulseIcon = this.infoPlaceholder.querySelector('.pulse');
      if (pulseIcon) {
        setInterval(() => {
          if (this.infoPlaceholder.style.display !== 'none') {
            pulseIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
              pulseIcon.style.transform = 'scale(1)';
            }, 300);
          }
        }, 2000);
      }
    }

    // Add map hover effect
    if (this.mapImage) {
      this.mapImage.addEventListener('mouseenter', () => {
        this.mapImage.style.transform = 'scale(1.02)';
      });

      this.mapImage.addEventListener('mouseleave', () => {
        this.mapImage.style.transform = 'scale(1)';
      });
    }
  }

  async handleRegionClick(e, region) {
    e.stopPropagation();

    if (this.isAnimating) return;

    // Clear any existing auto-hide timer
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
      this.autoHideTimer = null;
    }

    // If clicking the same region, toggle it off
    if (this.currentActiveRegion === region) {
      await this.hideCurrentRegion();
      return;
    }

    await this.showRegion(region);
  }

  async showRegion(region) {
    this.isAnimating = true;

    // Hide current active region if any
    if (this.currentActiveRegion) {
      await this.hideInfoBox(this.currentActiveRegion);
      this.deactivateButton(this.currentActiveRegion);
    }

    // Hide placeholder with animation
    await this.hidePlaceholder();

    // Show new region
    await this.showInfoBox(region);
    this.activateButton(region);

    this.currentActiveRegion = region;
    this.isAnimating = false;

    // Set auto-hide timer (optional - remove if not desired)
    this.setAutoHideTimer();
  }

  async hideCurrentRegion() {
    if (!this.currentActiveRegion) return;

    this.isAnimating = true;

    await this.hideInfoBox(this.currentActiveRegion);
    this.deactivateButton(this.currentActiveRegion);
    await this.showPlaceholder();

    this.currentActiveRegion = null;
    this.isAnimating = false;
  }

  async showInfoBox(region) {
    const info = document.getElementById(`info-${region}`);
    if (!info) return;

    return new Promise(resolve => {
      info.style.display = 'block';

      // Force reflow
      info.offsetHeight;

      // Animate in
      info.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      info.style.opacity = '1';
      info.style.transform = 'translateY(0)';

      // Add stagger animation to facts
      const facts = info.querySelectorAll('.region-fact');
      facts.forEach((fact, index) => {
        fact.style.opacity = '0';
        fact.style.transform = 'translateX(20px)';
        fact.style.transition = `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;

        setTimeout(() => {
          fact.style.opacity = '1';
          fact.style.transform = 'translateX(0)';
        }, 200 + (index * 50));
      });

      setTimeout(resolve, 400);
    });
  }

  async hideInfoBox(region) {
    const info = document.getElementById(`info-${region}`);
    if (!info) return;

    return new Promise(resolve => {
      info.style.transition = 'all 0.3s ease-out';
      info.style.opacity = '0';
      info.style.transform = 'translateY(-10px)';

      setTimeout(() => {
        info.style.display = 'none';
        info.style.transform = 'translateY(20px)';
        resolve();
      }, 300);
    });
  }

  async showPlaceholder() {
    if (!this.infoPlaceholder) return;

    return new Promise(resolve => {
      this.infoPlaceholder.style.display = 'flex';
      this.infoPlaceholder.style.transition = 'all 0.3s ease-out';

      // Force reflow
      this.infoPlaceholder.offsetHeight;

      this.infoPlaceholder.style.opacity = '1';
      this.infoPlaceholder.style.transform = 'translateY(0)';

      setTimeout(resolve, 300);
    });
  }

  async hidePlaceholder() {
    if (!this.infoPlaceholder || this.infoPlaceholder.style.display === 'none') return;

    return new Promise(resolve => {
      this.infoPlaceholder.style.transition = 'all 0.2s ease-out';
      this.infoPlaceholder.style.opacity = '0';
      this.infoPlaceholder.style.transform = 'translateY(-10px)';

      setTimeout(() => {
        this.infoPlaceholder.style.display = 'none';
        resolve();
      }, 200);
    });
  }

  activateButton(region) {
    const btn = document.getElementById(`btn-${region}`);
    if (!btn) return;

    // Remove active class from all buttons
    this.regionButtons.forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    });

    // Add active class to current button
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');

    // Add subtle bounce effect
    btn.style.animation = 'buttonActivate 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    setTimeout(() => {
      btn.style.animation = '';
    }, 400);
  }

  deactivateButton(region) {
    const btn = document.getElementById(`btn-${region}`);
    if (!btn) return;

    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }

  handleButtonHover(btn, region, isEntering) {
    if (this.isAnimating || region === this.currentActiveRegion) return;

    if (isEntering) {
      btn.style.transform = 'translateY(-2px) scale(1.05)';
      btn.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      btn.style.transform = '';
    }
  }

  handleGlobalClick(e) {
    // Don't close if clicking on a region button or info box
    if (e.target.closest('.region-button') || e.target.closest('.info-box')) {
      return;
    }

    if (this.currentActiveRegion && !this.isAnimating) {
      this.hideCurrentRegion();
    }
  }

  handleKeyboard(e) {
    if (e.key === 'Escape' && this.currentActiveRegion) {
      this.hideCurrentRegion();
    }

    // Arrow key navigation for buttons
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      const focusedButton = document.activeElement;
      if (focusedButton.classList.contains('region-button')) {
        e.preventDefault();
        this.navigateButtons(focusedButton, e.key);
      }
    }

    // Enter or Space to activate button
    if ((e.key === 'Enter' || e.key === ' ') && 
        document.activeElement.classList.contains('region-button')) {
      e.preventDefault();
      const region = document.activeElement.getAttribute('data-region');
      this.handleRegionClick(e, region);
    }
  }

  navigateButtons(currentButton, direction) {
    const buttons = Array.from(this.regionButtons);
    const currentIndex = buttons.indexOf(currentButton);
    let nextIndex;

    switch (direction) {
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
        break;
    }

    if (nextIndex !== undefined) {
      buttons[nextIndex].focus();
    }
  }

  setAutoHideTimer() {
    // Auto-hide after 30 seconds of inactivity (optional feature)
    this.autoHideTimer = setTimeout(() => {
      if (this.currentActiveRegion && !this.isAnimating) {
        this.hideCurrentRegion();
      }
    }, 30000);
  }

  handleResize() {
    // Responsive adjustments if needed
    if (window.innerWidth < 768) {
      // Mobile adjustments
      this.regionButtons.forEach(btn => {
        btn.style.fontSize = '0.75rem';
        btn.style.padding = '0.25rem 0.5rem';
      });
    }
  }
}

// Add CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  @keyframes buttonActivate {
    0% { transform: translateY(-2px) scale(1.05); }
    50% { transform: translateY(-4px) scale(1.1); }
    100% { transform: translateY(-2px) scale(1.08); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .region-fact {
    transition: all 0.3s ease-out;
  }

  .info-box {
    will-change: transform, opacity;
  }

  .region-button {
    will-change: transform;
  }

  /* Smooth scrolling for mobile */
  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .info-panel {
      order: -1;
    }
  }
`;
document.head.appendChild(animationStyles);

// Initialize the interactive map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  new InteractiveMap();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InteractiveMap;
}