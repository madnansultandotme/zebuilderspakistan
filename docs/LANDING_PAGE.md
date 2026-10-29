# Zeppelin Student Builders — Landing Page Documentation

## Overview

This document provides comprehensive documentation for the Zeppelin Student Builders landing page implementation.

**Production URL:** https://zebuilderspakistan.tech

## Technology Stack

- **Framework:** Next.js 16.4.3 (App Router)
- **React:** 19.3.0
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS v4
- **Icons:** 
  - lucide-react (UI icons)
  - react-icons (Social media brand icons)
- **Font:** Geist Sans & Geist Mono (Google Fonts)

---

## Project Structure

```
zebuilderspakistan/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page (main entry)
│   ├── globals.css         # Global styles with Tailwind v4 theme
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navigation bar
│   │   └── Footer.tsx      # Footer with branding & social links
│   │
│   ├── landing/
│   │   ├── Hero.tsx        # Hero section with logo & network animation
│   │   ├── CommunityIntro.tsx    # Community introduction
│   │   ├── FocusAreas.tsx        # 4 core focus areas
│   │   ├── NetworkSection.tsx    # National network visualization
│   │   ├── PurposeVision.tsx     # Purpose & Vision section
│   │   └── FinalCTA.tsx          # Final call-to-action
│   │
│   └── shared/
│       ├── CTAButton.tsx         # Reusable button component
│       ├── SectionHeading.tsx    # Reusable section heading
│       ├── SocialLinks.tsx       # Social media links
│       └── FloatingSocials.tsx   # Floating social icons
│
├── config/
│   ├── site.ts             # Site configuration
│   └── socials.ts          # Social media links
│
├── public/
│   └── logos/
│       ├── light-bg-logo.png    # Logo for light backgrounds
│       └── dark-bg-logo.png     # Logo for dark backgrounds
│
├── docs/
│   └── LANDING_PAGE.md     # This documentation
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Brand Identity

### Official Name
**Zeppelin Student Builders**

### Organization
**Zeppelin Labs**

### Positioning
**Pakistan's Student Builders Community**

### Tagline
**Build Skills. Build Together.**

### Supporting Statement
**Shape the future through open source.**

### Brand Colors

```css
Navy (Primary):     #0D1E32
Cyan (Accent):      #159BD4
Light Background:   #F5F8FC
White:              #FFFFFF
Secondary Text:     #64748B
```

### Typography
- **Primary Font:** Geist Sans
- **Monospace Font:** Geist Mono
- Both fonts loaded with `display: swap` for performance

---

## Configuration

### Site Configuration (`config/site.ts`)

```typescript
export const siteConfig = {
  name: "Zeppelin Student Builders",
  organization: "Zeppelin Labs",
  url: "https://zebuilderspakistan.tech",
  
  tagline: "Build Skills. Build Together.",
  supportingStatement: "Shape the future through open source.",
  
  description: "A community of university students learning, building real-world projects, contributing to open source, and growing together.",
  
  positioning: "Pakistan's Student Builders Community",
  
  membershipUrl: "", // To be added later
  
  seo: {
    title: "Zeppelin Student Builders — Pakistan's Student Developer Community",
    description: "Zeppelin Student Builders is a national student developer community focused on learning, mentorship, open source, and collaborative building.",
  },
} as const;
```

### Social Links Configuration (`config/socials.ts`)

```typescript
export const socialLinks = {
  instagram: "https://www.instagram.com/zebuilders.pakistan/",
  linkedin: "https://www.linkedin.com/showcase/zebuilders-pakistan/",
  github: "https://github.com/Zebuilders-Pakistan/",
} as const;
```

---

## Component Documentation

### Layout Components

#### 1. Navbar (`components/layout/Navbar.tsx`)

**Purpose:** Fixed navigation bar with responsive design

**Features:**
- Official Zeppelin Student Builders logo (light background version)
- Desktop navigation: About
- Primary CTA: "Join the Community"
- Mobile hamburger menu
- Smooth transitions and hover effects

**Behavior:**
- Changes background on scroll (blur effect)
- Mobile menu toggles on hamburger click
- Disables CTA when `membershipUrl` is empty

**Props:** None (uses global config)

---

#### 2. Footer (`components/layout/Footer.tsx`)

**Purpose:** Site footer with branding and social links

**Features:**
- Official Zeppelin Student Builders logo (dark background version)
- Tagline: "Learning · Mentorship · Open Source"
- Mission statement
- Social media links (Instagram, LinkedIn, GitHub)
- Copyright notice
- Zeppelin Labs attribution

**Layout:**
- Grid layout (responsive)
- Brand section (spans 2 columns on large screens)
- Social links section
- Bottom bar with copyright

---

### Landing Page Sections

#### 1. Hero (`components/landing/Hero.tsx`)

**Purpose:** Main hero section with animated background

**Features:**
- Navy blue background
- Animated grid pattern (subtle)
- Floating network nodes with connections
- Animated SVG connection lines
- Official Zeppelin Student Builders logo (large, dark background version)
- Positioning statement
- Tagline and supporting statement
- Community description
- Dual CTAs:
  - Primary: "Join the Community" (disabled if URL empty)
  - Secondary: "Learn More" (links to #about)

**Animations:**
- Floating nodes (CSS keyframes)
- Pulsing connection lines (SVG)
- Respects `prefers-reduced-motion`

**Technical:**
- Client component (`"use client"`)
- Uses Next.js Image component for logo
- Responsive sizing for all breakpoints

---

#### 2. CommunityIntro (`components/landing/CommunityIntro.tsx`)

**Purpose:** Introduce the Zeppelin Student Builders network concept

**Content:**
- Eyebrow: "THE ZEBUILDERS NETWORK"
- Heading: "Connecting student builders across Pakistan"
- Supporting text about learning philosophy
- Highlighted concept card: "More than a student community"

**Styling:**
- White background
- Centered layout
- Cyan-bordered highlight box
- Editorial typography

---

#### 3. FocusAreas (`components/landing/FocusAreas.tsx`)

**Purpose:** Display the 4 core focus areas

**Areas:**
1. **Learn by Building** (Code2 icon)
2. **Open Source** (GitBranch icon)
3. **Community** (Users icon)
4. **Mentorship** (Lightbulb icon)

**Layout:**
- 2x2 grid (responsive)
- Each card has:
  - Number (01-04)
  - Icon (Lucide)
  - Title
  - Description
- Hover effects (border color change, icon scale)

**Styling:**
- Light gray background
- White cards with borders
- Cyan accents on hover

---

#### 4. NetworkSection (`components/landing/NetworkSection.tsx`)

**Purpose:** Visualize the national network of chapters

**Features:**
- Navy background
- Animated network visualization:
  - Central hub (ZeBuilders logo badge)
  - 8 university nodes (positioned in circle)
  - Connection lines to center
  - Hover effects on nodes
- Statistics grid:
  - 15+ Universities
  - 500+ Student Builders
  - 100+ Projects Built

**Technical:**
- Client component (for animations)
- SVG for connection lines
- Dynamic positioning using trigonometry
- Pulsing animation on central hub

---

#### 5. PurposeVision (`components/landing/PurposeVision.tsx`)

**Purpose:** Communicate the organization's purpose and vision

**Features:**
- Section heading: "Our Purpose & Vision"
- Two-column layout (responsive):
  
  **Purpose Card:**
  - Target icon
  - Cyan accent border
  - Mission statement
  - Focus on empowerment and skill development
  
  **Vision Card:**
  - Eye icon
  - Navy accent border
  - Vision statement
  - Focus on global impact and community support

- Core values bar:
  - Navy background
  - 5 core principles:
    - Learning by Doing
    - Collaboration Over Competition
    - Open Source First
    - Community Support
    - Continuous Growth

**Styling:**
- White background
- Light gray card backgrounds
- Left-border accent (cyan for purpose, navy for vision)
- Icons in colored circular backgrounds
- Hover effects on core values

**Content Focus:**
- Empowering Pakistani university students
- Bridging academic and industry gaps
- Practical building culture
- Global open source contribution
- Accessible mentorship and opportunities

---

#### 6. FinalCTA (`components/landing/FinalCTA.tsx`)

**Purpose:** Strong conversion section

**Content:**
- Large heading: "YOUR NEXT BUILD STARTS HERE"
- Three-line value proposition:
  - Learn with others.
  - Build something real.
  - Contribute to open source.
- Mission statement
- Primary CTA: "Join the Community"
- Fallback message: "Applications opening soon" (when URL empty)

**Styling:**
- Navy background
- Animated grid pattern (subtle)
- Large typography
- Centered layout

---

### Shared Components

#### 1. CTAButton (`components/shared/CTAButton.tsx`)

**Purpose:** Reusable call-to-action button

**Props:**
```typescript
interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}
```

**Variants:**
- **primary:** Cyan background, white text
- **secondary:** Navy background, white text
- **outline:** White/navy border with hover fill

**Features:**
- Renders as `<a>` when href provided
- Renders as `<button>` otherwise
- Optional arrow icon (Lucide ArrowRight)
- Disabled state styling
- Focus ring for accessibility

---

#### 2. SectionHeading (`components/shared/SectionHeading.tsx`)

**Purpose:** Consistent section headings across landing page

**Props:**
```typescript
interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}
```

**Structure:**
- Eyebrow (optional): Small, uppercase, cyan text
- Heading: Large, bold, navy text
- Description (optional): Gray text, max-width constrained

---

#### 3. SocialLinks (`components/shared/SocialLinks.tsx`)

**Purpose:** Reusable social media icons

**Props:**
```typescript
interface SocialLinksProps {
  variant?: "default" | "footer";
  className?: string;
}
```

**Icons:**
- Instagram (FaInstagram from react-icons)
- LinkedIn (FaLinkedin from react-icons)
- GitHub (FaGithub from react-icons)

**Variants:**
- **default:** Navy icons, hover cyan
- **footer:** Gray icons, hover cyan

**Features:**
- Links open in new tab
- `rel="noopener noreferrer"` for security
- ARIA labels for accessibility

---

## Styling System

### Tailwind CSS v4 Configuration

The project uses Tailwind CSS v4 with the new `@theme` directive for custom colors.

**File:** `app/globals.css`

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-navy: #0D1E32;
  --color-cyan: #159BD4;
  --color-light-bg: #F5F8FC;
  --color-secondary-text: #64748B;
}

:root {
  --background: #FFFFFF;
  --foreground: #0D1E32;
}
```

### Usage in Components

**Tailwind Classes:**
```
bg-navy       → Navy background
bg-cyan       → Cyan background
bg-light-bg   → Light gray background
text-navy     → Navy text
text-cyan     → Cyan text
text-secondary-text → Gray text
```

### Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Accessibility Features

**Implemented:**
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on icon-only buttons
- Focus states (ring) on interactive elements
- Sufficient color contrast (WCAG AA compliant)
- `prefers-reduced-motion` support

**Focus Rings:**
```css
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan
```

---

## SEO Configuration

### Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://zebuilderspakistan.tech"),
  title: "Zeppelin Student Builders — Pakistan's Student Developer Community",
  description: "Zeppelin Student Builders is a national student developer community focused on learning, mentorship, open source, and collaborative building.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zebuilderspakistan.tech",
    title: "Zeppelin Student Builders — Pakistan's Student Developer Community",
    description: "...",
    siteName: "Zeppelin Student Builders",
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
  },
};
```

### Best Practices Applied

- Semantic HTML structure
- Descriptive page title
- Meta description under 160 characters
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL set via metadataBase

---

## Performance Optimizations

### Image Optimization

**Next.js Image Component:**
- Used for all logos
- Automatic format optimization (WebP)
- Lazy loading (except hero logo with `priority`)
- Responsive sizing with `width="auto"`

**Example:**
```tsx
<Image
  src="/logos/light-bg-logo.png"
  alt="Zeppelin Student Builders"
  width={200}
  height={50}
  priority
  className="h-10 w-auto md:h-12 lg:h-14"
/>
```

### Font Loading

**Optimization:**
```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text during load
});
```

### Server Components

**Default:** All landing components are Server Components except:
- `Navbar` (uses `useState` and `useEffect`)
- `Hero` (uses animations)
- `NetworkSection` (uses animations)

**Benefits:**
- Reduced JavaScript bundle size
- Faster initial page load
- Better SEO

---

## Responsive Design

### Breakpoint Strategy

**Mobile First:**
- Base styles for mobile (320px+)
- Progressive enhancement for larger screens

**Key Responsive Patterns:**

1. **Navbar:**
   - Mobile: Hamburger menu
   - Desktop: Horizontal navigation

2. **Hero:**
   - Mobile: Stacked layout, smaller logo
   - Desktop: Larger logo, dual CTAs side-by-side

3. **Focus Areas:**
   - Mobile: 1 column
   - Desktop: 2x2 grid

4. **Footer:**
   - Mobile: 1 column
   - Desktop: 3 column grid

### Typography Scale

```
Mobile → Desktop
Hero Logo: h-16 → h-20 → h-24
Hero Text: text-5xl → text-6xl → text-7xl → text-8xl
Section Headings: text-3xl → text-4xl → text-5xl
Body Text: text-base → text-lg
```

---

## Animations

### Hero Floating Nodes

**CSS Keyframes:**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}
```

**Applied to nodes with varying durations:**
- 6s, 7s, 7.5s, 8s, 9s (creates organic movement)

### SVG Connection Lines

**Animated using:**
```tsx
className="animate-pulse"
style={{ animationDuration: "3s" }}
```

### Hover Transitions

**Standard duration:** `transition-colors duration-200`

**Applied to:**
- Links (text color)
- Buttons (background, border)
- Icons (color, scale)
- Cards (border, shadow)

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Future Enhancements (Not Yet Implemented)

### Backend Features (Phase 2)

- Membership application form
- Database (Neon + Prisma)
- Authentication system
- Admin dashboard
- Chapter management
- Event management
- Project showcase CRUD

### Additional Pages (Phase 2)

- `/about` - About page
- `/chapters` - Chapters directory
- `/events` - Events calendar
- `/projects` - Projects showcase
- `/team` - Team page
- `/contact` - Contact form

### Current Scope

**Only landing page is implemented** as specified in requirements. The architecture is ready for phase 2 additions without requiring landing page refactoring.

---

## Deployment

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Environment Requirements

- Node.js 20.x or higher
- npm 10.x or higher

### Production Checklist

- [ ] Set `membershipUrl` in `config/site.ts`
- [ ] Add Open Graph image to `/public/og-image.png`
- [ ] Configure domain DNS
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Test on multiple devices
- [ ] Verify all social links
- [ ] Run Lighthouse audit
- [ ] Test with screen readers
- [ ] Verify meta tags in production

---

## Maintenance

### Updating Content

**Site Configuration:**
- Edit `config/site.ts` for global site settings
- Edit `config/socials.ts` for social media links

**Adding Membership URL:**
```typescript
// config/site.ts
membershipUrl: "https://forms.example.com/zebuilders-join"
```

**Updating Statistics:**
```typescript
// components/landing/NetworkSection.tsx
// Update numbers in the stats grid
```

### Logo Updates

Replace files in `public/logos/`:
- `light-bg-logo.png` - Used in Navbar
- `dark-bg-logo.png` - Used in Hero and Footer

**Recommended sizes:**
- Light BG: 200px width minimum
- Dark BG: 400px width minimum
- PNG format with transparency

### Logo Updates

Edit `app/globals.css`:
```css
@theme {
  --color-navy: #0D1E32;
  --color-cyan: #159BD4;
  --color-light-bg: #F5F8FC;
  --color-secondary-text: #64748B;
}
```

---

## Common Issues & Solutions

### Issue: Membership Button Disabled

**Cause:** `membershipUrl` is empty in config

**Solution:**
```typescript
// config/site.ts
membershipUrl: "https://your-form-url"
```

### Issue: Logo Not Showing

**Cause:** Incorrect path or missing file

**Solution:**
1. Verify files exist in `public/logos/`
2. Check file names match exactly
3. Clear Next.js cache: `rm -rf .next`

### Issue: Social Links Not Working

**Cause:** Incorrect URLs in config

**Solution:**
```typescript
// config/socials.ts
// Ensure URLs are complete with https://
```

### Issue: Build Fails

**Common causes:**
1. TypeScript errors - Run `npm run lint`
2. Missing dependencies - Run `npm install`
3. Image optimization - Check image file formats

---

## Browser Support

### Supported Browsers

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Known Limitations

- IE 11: Not supported (uses modern CSS features)
- Older Android browsers: May have animation issues

---

## License & Credits

**Organization:** Zeppelin Labs  
**Community:** Zeppelin Student Builders  
**Copyright:** © 2026 Zeppelin Student Builders

**Technologies:**
- Next.js by Vercel
- Tailwind CSS by Tailwind Labs
- React by Meta
- Lucide Icons
- React Icons

---

## Contact & Support

**Social Media:**
- Instagram: [@zebuilders.pakistan](https://www.instagram.com/zebuilders.pakistan/)
- LinkedIn: [zebuilders-pakistan](https://www.linkedin.com/showcase/zebuilders-pakistan/)
- GitHub: [Zebuilders-Pakistan](https://github.com/Zebuilders-Pakistan/)

**Website:** https://zebuilderspakistan.tech

---

*Last Updated: January 2026*
