# Planning Document (sp.planning)

## Architecture

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts          # Portfolio data
└── public/
    └── mypic/           # Profile image
```

## Design System

### Colors
- Primary: #1a1a2e (Dark Navy)
- Secondary: #e94560 (Coral Pink)
- Accent: #0f3460 (Deep Blue)
- Background: #fafafa (Light Gray)
- Text: #333333 (Dark Gray)

### Typography
- Headings: Inter (bold)
- Body: Inter (regular)

### Spacing Scale
- xs: 0.5rem, sm: 1rem, md: 2rem, lg: 4rem, xl: 6rem

## Animation Strategy
- Scroll-triggered reveals (Framer Motion)
- Hover micro-interactions
- Staggered children animations
- Parallax subtle effects
