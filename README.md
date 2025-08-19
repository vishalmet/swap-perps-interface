# Kanalabs - Advanced DeFi & Trading Platform

A cutting-edge DeFi platform offering advanced trading, swapping, and perpetual futures trading with multi-chain support. Built with Next.js 15, React 19, and modern web technologies.

## 🚀 Features

- **Multi-Chain Support**: Trade on Ethereum, Polygon, BSC, and more
- **Advanced Trading**: Perpetual futures trading with TP/SL functionality
- **Token Swapping**: Cross-chain and same-chain token swaps
- **Responsive Design**: Mobile-first design optimized for all devices
- **Theme System**: Light and dark mode with seamless switching
- **Professional UI**: Modern, intuitive interface built with Radix UI components

## 🏗️ Project Structure

```
kana-task/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata and theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and CSS variables
│   ├── swap/                    # Token swapping functionality
│   │   └── page.tsx
│   ├── perps/                   # Perpetual futures trading
│   │   └── page.tsx
│   └── assets/                  # Static assets and icons
│       └── icons/               # SVG icons for various chains and actions
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header with theme toggle
│   ├── Footer.tsx               # Application footer
│   ├── Assets.tsx               # Asset management and icon exports
│   ├── ThemeToggle.tsx          # Theme switching component
│   ├── ThemeProvider.tsx        # Theme context provider
│   └── ui/                      # UI component library
│       ├── button.tsx           # Button component with variants
│       ├── card.tsx             # Card component
│       ├── tabs.tsx             # Tabs component
│       └── accordion.tsx        # Accordion component
├── lib/                         # Utility libraries
│   ├── colors.ts                # Color palette and theme management
│   ├── theme-utils.ts           # Theme utility functions
│   └── utils.ts                 # General utility functions
├── public/                      # Static files
│   ├── icon.png                 # App icon
│   └── manifest.json            # PWA manifest
└── configuration files          # Next.js, TypeScript, Tailwind, ESLint configs
```

## 🧩 Components

### Core Components
- **Header**: Responsive navigation with hamburger menu for mobile, theme toggle, and navigation links
- **Footer**: Site footer with responsive layout
- **ThemeProvider**: React Context for global theme management
- **ThemeToggle**: Button component for switching between light/dark themes

### UI Components (Radix UI Based)
- **Button**: Multiple variants (default, outline, secondary, ghost, link) with theme-aware styling
- **Card**: Container component with theme-aware backgrounds and borders
- **Tabs**: Tabbed interface component with theme-specific styling
- **Accordion**: Collapsible content sections with smooth animations

### Page Components
- **Swap Page**: Token swapping interface with cross-chain support, responsive design, and theme-specific light mode colors
- **Perps Page**: Perpetual futures trading with TP/SL functionality, custom checkbox implementation, and responsive layout

## 🛠️ Technologies & Techniques

### Frontend Framework
- **Next.js 15**: App Router, Server Components, Metadata API
- **React 19**: Latest React features and hooks
- **TypeScript**: Type-safe development

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework with custom breakpoints
- **CSS Custom Properties**: Dynamic theming with CSS variables
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful, customizable icons

### State Management
- **React Context API**: Global theme state management
- **useState & useCallback**: Local component state and performance optimization

### Responsive Design
- **Mobile-First Approach**: Designed for mobile, enhanced for larger screens
- **Custom Breakpoints**: Tailwind CSS with xs, sm, md, lg, xl breakpoints
- **Flexbox & Grid**: Modern CSS layout techniques
- **Hamburger Menu**: Mobile navigation with smooth animations

### Theme System
- **Dynamic CSS Variables**: Runtime theme switching without page reload
- **Color Palette Management**: Centralized color definitions for consistency
- **Theme-Aware Components**: All components automatically adapt to current theme
- **Conditional Asset Loading**: Icons and images switch based on theme

### Performance & UX
- **Turbopack**: Fast development builds
- **Image Optimization**: Next.js Image component with Sharp
- **CSS-in-JS**: Efficient styling with class-variance-authority
- **Smooth Transitions**: CSS transitions and hover effects

## 🎨 Design System

### Color Palette
- **Primary**: #00FFF0 (Cyan) - Main brand color
- **Success**: #66BB6A (Green) - Positive actions
- **Warning**: #EF5350 (Red) - Caution and errors
- **Backgrounds**: Dynamic based on theme (dark: #080A0A, light: #FFFFFF)
- **Text**: Theme-aware with proper contrast ratios

### Typography
- **Font Family**: Manrope (primary) with monospace fallback
- **Responsive Sizing**: Adaptive text sizes for different screen sizes
- **Hierarchy**: Clear visual hierarchy with consistent spacing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd kana-task

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Responsive Breakpoints

- **xs**: 0px+ (Mobile)
- **sm**: 640px+ (Large Mobile/Small Tablet)
- **md**: 768px+ (Tablet)
- **lg**: 1024px+ (Desktop)
- **xl**: 1280px+ (Large Desktop)

## 🎯 Key Features Implementation

### Theme Switching
- Seamless light/dark mode toggle
- Persistent theme preference
- Theme-aware component styling
- Dynamic asset loading based on theme

### Responsive Navigation
- Hamburger menu for mobile devices
- Desktop navigation with theme toggle
- Smooth mobile menu animations
- Adaptive layout for all screen sizes

### Custom Checkbox
- Custom-styled checkbox with primary color tick
- Theme-aware styling
- Proper accessibility with hidden input
- Smooth hover and focus states

### Multi-Chain Support
- Ethereum, Polygon, BSC, Solana, and more
- Chain-specific icons and styling
- Responsive chain selection interface

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (via Tailwind CSS)

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the development team for contribution guidelines.

---

Built with ❤️ using Next.js, React, and modern web technologies.
