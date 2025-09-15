# Krea AI - AI Generation Platform

A modern, responsive web application showcasing AI-powered generation tools with a beautiful carousel interface and comprehensive tool grid.

## 🚀 Project Overview

Krea AI is a Next.js-based platform that demonstrates various AI generation capabilities including image generation, video creation, text processing, and more. The application features a sophisticated carousel showcasing featured AI models and a comprehensive grid of generation tools.

### Key Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between themes with persistent state
- **Interactive Carousel**: Showcases featured AI models with custom layouts
- **Tool Grid**: Comprehensive display of AI generation tools
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
krea-ai/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── Header.tsx           # Navigation header with theme toggle
│   │   ├── FeaturedCarousel.tsx # AI model showcase carousel
│   │   ├── GenerateTools.tsx    # AI tools grid component
│   │   ├── LegalPricingLinks.tsx # Legal and pricing links
│   │   └── Footer.tsx           # Site footer
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   └── images/                  # Static images for carousel
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd krea-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage Examples

### Theme Toggle
Click the sun/moon icon in the header to switch between light and dark modes. The theme preference is applied globally across all components.

### Carousel Navigation
- Use the arrow buttons to navigate between slides
- Click pagination dots to jump to specific slides
- On desktop, the carousel shows 2 slides at once
- On mobile, it displays 1 slide at a time

### Tool Cards
- Hover over tool cards to see interactive effects
- Click "Open" buttons to access individual tools
- "New" badges indicate recently added features

## 🧪 Testing

### Run Tests
```bash
npm run test
# or
yarn test
# or
pnpm test
```

### Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server
```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🎨 Customization

### Adding New Tools
To add a new tool to the GenerateTools component:

1. Add a new object to the `toolsData` array in `GenerateTools.tsx`
2. Include required properties: `id`, `icon`, `title`, `description`, `isNew`, `color`, `bgColor`
3. Choose an appropriate Lucide React icon

### Modifying Carousel Content
To update carousel slides:

1. Edit the `carouselData` array in `FeaturedCarousel.tsx`
2. Add custom layouts for specific slide IDs
3. Update image paths in the `public/images/` directory

### Styling Changes
- Modify Tailwind classes in component files
- Update `globals.css` for global styles
- Configure `tailwind.config.js` for custom design tokens

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px (1 column layout)
- **Tablet**: 640px - 1024px (2 column layout)
- **Desktop**: > 1024px (4 column layout for tools, 2 slides for carousel)

## 🌙 Dark Mode Implementation

Dark mode is implemented using:
- Tailwind's `dark:` prefix for conditional styling
- Document class toggling (`dark` class on `<html>`)
- State management with React hooks
- Consistent theming across all components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Embla Carousel](https://www.embla-carousel.com/) for smooth carousel functionality
- [Framer Motion](https://www.framer.com/motion/) for animations

---

**Built with ❤️ using Next.js and TypeScript**