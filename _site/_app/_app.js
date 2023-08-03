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

document.querySelectorAll(".color-mode").forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
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
        gray: theme('colors.slate'),
        brand: theme('colors.rose'),
        accent: theme('colors.emerald'),
      }),
      fontFamily: ({ theme }) => ({
        mono: 'JetBrains Mono,'+ theme('fontFamily.mono'),
      }),
    },
  },
  rules: [
  ],
});
injectGlobal`
  /* layers: defaults, base, components, shortcuts, utilities, overrides */
  @layer base {
    [x-cloak] { @apply hidden; }
  }
`