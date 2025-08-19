export const colors = {
  // Base colors that work in both themes
  primary: '#00FFF0',
  success: '#66BB6A',
  warning: '#EF5350',
  
  // Theme-specific colors
  dark: {
    // Backgrounds
    bgPrimary: '#080A0A',
    bgSecondary: '#17181A',
    bgCard: '#111213',
    bgInput: '#080A0A',
    
    // Text colors
    textPrimary: 'rgba(255, 255, 255, 0.8)',      // text-white/80
    textSecondary: 'rgba(255, 255, 255, 0.6)',    // text-white/60
    textTertiary: 'rgba(255, 255, 255, 0.4)',     // text-white/40
    textMuted: 'rgba(255, 255, 255, 0.2)',        // text-white/20
    
    // Borders
    borderPrimary: 'rgba(255, 255, 255, 0.1)',     // white/10
    borderSecondary: 'rgba(255, 255, 255, 0.2)',   // white/20
    borderHover: 'rgba(255, 255, 255, 0.4)',       // white/40
    
    // Hover states
    hoverPrimary: 'rgba(255, 255, 255, 0.05)',     // white/5
    hoverSecondary: 'rgba(255, 255, 255, 0.06)',   // white/6
    
    // Special backgrounds
    bgAccent: '#1C1F20',
    bgOverlay: 'rgba(255, 255, 255, 0.15)',        // white/15
  },
  
  light: {
    // Backgrounds
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F7F8FA',
    bgCard: '#FFFFFF',
    bgInput: '#FFFFFF',
    
    // Text colors
    textPrimary: 'rgba(18, 21, 24, 0.8)',         // #121518/80
    textSecondary: 'rgba(18, 21, 24, 0.5)',        // #121518/50
    textTertiary: 'rgba(18, 21, 24, 0.4)',         // #121518/40
    textMuted: 'rgba(18, 21, 24, 0.2)',            // #121518/20
    
    // Borders
    borderPrimary: 'rgba(0, 0, 0, 0.1)',           // #000000/10
    borderSecondary: 'rgba(0, 0, 0, 0.2)',         // #000000/20
    borderHover: 'rgba(0, 0, 0, 0.4)',             // #000000/40
    
    // Hover states
    hoverPrimary: 'rgba(0, 0, 0, 0.05)',           // black/5
    hoverSecondary: 'rgba(0, 0, 0, 0.06)',         // black/6
    
    // Special backgrounds
    bgAccent: '#F5F5F5',
    bgOverlay: 'rgba(0, 0, 0, 0.15)',              // black/15
  }
}

// Helper function to get theme-aware colors
export const getThemeColors = (isDark: boolean = true) => {
  return isDark ? colors.dark : colors.light
}

// CSS custom properties for dynamic theme switching
export const getCSSVariables = (isDark: boolean = true) => {
  const theme = getThemeColors(isDark)
  
  return {
    '--color-primary': colors.primary,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    
    '--color-bg-primary': theme.bgPrimary,
    '--color-bg-secondary': theme.bgSecondary,
    '--color-bg-card': theme.bgCard,
    '--color-bg-input': theme.bgInput,
    
    '--color-text-primary': theme.textPrimary,
    '--color-text-secondary': theme.textSecondary,
    '--color-text-tertiary': theme.textTertiary,
    '--color-text-muted': theme.textMuted,
    
    '--color-border-primary': theme.borderPrimary,
    '--color-border-secondary': theme.borderSecondary,
    '--color-border-hover': theme.borderHover,
    
    '--color-hover-primary': theme.hoverPrimary,
    '--color-hover-secondary': theme.hoverSecondary,
    
    '--color-bg-accent': theme.bgAccent,
    '--color-bg-overlay': theme.bgOverlay,
  }
}

// Tailwind-like utility classes mapping
export const colorClasses = {
  // Backgrounds
  'bg-primary': 'var(--color-bg-primary)',
  'bg-secondary': 'var(--color-bg-secondary)',
  'bg-card': 'var(--color-bg-card)',
  'bg-input': 'var(--color-bg-input)',
  'bg-accent': 'var(--color-bg-accent)',
  'bg-overlay': 'var(--color-bg-overlay)',
  
  // Text colors
  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  'text-tertiary': 'var(--color-text-tertiary)',
  'text-muted': 'var(--color-text-muted)',
  
  // Borders
  'border-primary': 'var(--color-border-primary)',
  'border-secondary': 'var(--color-border-secondary)',
  'border-hover': 'var(--color-border-hover)',
  
  // Hover states
  'hover-primary': 'var(--color-hover-primary)',
  'hover-secondary': 'var(--color-hover-secondary)',
}
