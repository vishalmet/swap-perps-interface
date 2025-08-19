import { getThemeColors } from './colors'

// Helper function to get theme-aware class names
export const getThemeClasses = (isDark: boolean = true) => {
  const theme = getThemeColors(isDark)
  
  return {
    // Background classes
    bgPrimary: `bg-[${theme.bgPrimary}]`,
    bgSecondary: `bg-[${theme.bgSecondary}]`,
    bgCard: `bg-[${theme.bgCard}]`,
    bgInput: `bg-[${theme.bgInput}]`,
    bgAccent: `bg-[${theme.bgAccent}]`,
    
    // Text classes
    textPrimary: `text-[${theme.textPrimary}]`,
    textSecondary: `text-[${theme.textSecondary}]`,
    textTertiary: `text-[${theme.textTertiary}]`,
    textMuted: `text-[${theme.textMuted}]`,
    
    // Border classes
    borderPrimary: `border-[${theme.borderPrimary}]`,
    borderSecondary: `border-[${theme.borderSecondary}]`,
    borderHover: `border-[${theme.borderHover}]`,
    
    // Hover classes
    hoverPrimary: `hover:bg-[${theme.hoverPrimary}]`,
    hoverSecondary: `hover:bg-[${theme.hoverSecondary}]`,
  }
}

// CSS variable-based classes for dynamic theme switching
export const themeClasses = {
  // Backgrounds
  bgPrimary: 'bg-[var(--color-bg-primary)]',
  bgSecondary: 'bg-[var(--color-bg-secondary)]',
  bgCard: 'bg-[var(--color-bg-card)]',
  bgInput: 'bg-[var(--color-bg-input)]',
  bgAccent: 'bg-[var(--color-bg-accent)]',
  bgOverlay: 'bg-[var(--color-bg-overlay)]',
  
  // Text colors
  textPrimary: 'text-[var(--color-text-primary)]',
  textSecondary: 'text-[var(--color-text-secondary)]',
  textTertiary: 'text-[var(--color-text-tertiary)]',
  textMuted: 'text-[var(--color-text-muted)]',
  
  // Borders
  borderPrimary: 'border-[var(--color-border-primary)]',
  borderSecondary: 'border-[var(--color-border-secondary)]',
  borderHover: 'border-[var(--color-border-hover)]',
  
  // Hover states
  hoverPrimary: 'hover:bg-[var(--color-hover-primary)]',
  hoverSecondary: 'hover:bg-[var(--color-hover-secondary)]',
  
  // Semantic colors
  textSuccess: 'text-[var(--color-success)]',
  textWarning: 'text-[var(--color-warning)]',
  textPrimaryColor: 'text-[var(--color-primary)]',
  
  bgSuccess: 'bg-[var(--color-success)]',
  bgWarning: 'bg-[var(--color-warning)]',
  bgPrimaryColor: 'bg-[var(--color-primary)]',
}

// Common theme-aware component styles
export const componentStyles = {
  card: `${themeClasses.bgCard} ${themeClasses.borderPrimary} border rounded-lg`,
  input: `${themeClasses.bgInput} ${themeClasses.borderPrimary} border rounded-md`,
  button: `${themeClasses.bgSecondary} ${themeClasses.textPrimary} ${themeClasses.hoverPrimary} transition-colors`,
}
