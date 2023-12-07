// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// color mode
const toggleColorMode = function() {
  // light
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-mode', 'light')
    return;
  }
  // dark
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-mode', 'dark');
};

document.querySelectorAll('.color-mode').forEach(btn => {
  btn.addEventListener('click', toggleColorMode);
});

// twind
import { install, injectGlobal, autoDarkColor } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineclamp from '@twind/preset-line-clamp';
import presetTypography from '@twind/preset-typography';
install({
  presets: [presetAutoprefix(), presetTailwind(), presetLineclamp(), presetTypography()],
  darkMode: 'class',
  darkColor: autoDarkColor,
  hash: false,
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: theme('colors.rose'),
        accent: theme('colors.emerald'),
      }),
      fontFamily: ({ theme }) => ({
        mono: ['JetBrains Mono', ...theme('fontFamily.mono')],
      }),
      keyframes: {
        blob: {
          '15%': { transform: 'scale(1.4, 1.2)', },
          '40%': { transform: 'scale(.9, .9)', },
          '75%': { transform: 'scale(1.1, 1)', },
          '100%': { transform: 'scale(1, 1)', },
        },
        rock: {
          '50%': { transform: 'rotate(-3.5deg)', },
          '100%': { transform: 'rotate(6.5deg)', },
        },
      },
      animation: {
        blob: 'blob .3s ease-in-out',
        rock: 'rock .2s ease-in-out',
      },
    },
  },
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance)', 'textWrap'],
    ['btn', 'py-2.5 px-3.5 text-sm font-semibold inline-flex items-center gap-1.5 rounded-md motion-safe:(transition)'],
    ['btn-', ({ $$ }) => `text-${$$}-500 ring-(2 inset current) hover:(text-${$$}-700 ring-4)`],
  ],
});
injectGlobal`
  /* layers: defaults, base, components, shortcuts, utilities, overrides */
  @layer base {
    [x-cloak] { @apply hidden; }
  }
`

// alpine
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus'
window.Alpine = Alpine;
Alpine.plugin(focus)
Alpine.start();