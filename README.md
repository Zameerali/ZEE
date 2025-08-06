# ZEE-KRAZE Consultants Website

A professional, production-ready website for ZEE-KRAZE Consultants built with modern web technologies and industry best practices.

![ZEE-KRAZE Consultants](https://img.shields.io/badge/React-18+-blue.svg)
![MUI](https://img.shields.io/badge/MUI-5+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🚀 Features

- **Modern Design**: Professional, tech-forward aesthetic with bold gradients and dynamic layouts
- **Responsive**: Fully responsive design optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: Automatic theme switching with persistent user preferences
- **Smooth Animations**: Framer Motion animations and MUI transitions
- **SEO Optimized**: Meta tags, structured data, and search engine optimization
- **Performance**: Optimized for fast load times with lazy loading and code splitting
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Production Ready**: Clean, maintainable code with proper error handling

## 🛠️ Technology Stack

### Frontend
- **React 18+** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Material-UI (MUI) 5+** - Component library and theming system
- **React Router 6** - Client-side routing
- **Framer Motion** - Animation library for smooth transitions

### Styling & Design
- **MUI Theming** - Consistent design system with dark/light mode
- **Neo-Tech Glow Color Palette** - Deep charcoal (#0D0F1C), electric purple (#7F00FF), teal cyan (#00F0FF), cyber lime (#A9FF4F)
- **Montserrat Font** - Professional typography
- **Responsive Grid System** - Mobile-first design approach

### Performance & SEO
- **Lazy Loading** - Images and components loaded on demand
- **Code Splitting** - Optimized bundles for faster loading
- **Meta Tags** - Complete SEO meta tags and Open Graph
- **Sitemap Ready** - SEO-friendly URL structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Main navigation with responsive design
│   ├── HeroSection.jsx  # Landing page hero section
│   ├── ServicesSection.jsx # Services showcase
│   └── Footer.jsx       # Site footer with links
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Solutions.jsx   # Solutions showcase
│   └── JoinOurTeam.jsx # Career page with application form
├── theme/              # MUI theme configuration
│   ├── theme.js        # Theme definition
│   └── ThemeProvider.jsx # Theme context provider
├── assets/             # Static assets
├── utils/              # Utility functions
└── App.jsx            # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Charcoal (#0D0F1C)
- **Secondary**: Electric Purple (#7F00FF)  
- **Accent**: Teal Cyan (#00F0FF)
- **Highlight**: Cyber Lime (#A9FF4F)
- **Background**: White/Dark based on theme
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling**: Mobile-first approach

### Components
- **Cards**: Elevated design with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Navigation**: Glass morphism effect with backdrop blur
- **Forms**: Material Design with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zee-kraze--consultants-website.git
   cd zee-kraze-consultants-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Pages & Features

### Home Page
- Hero section with animated statistics
- Service overview with interactive cards
- Call-to-action buttons
- Performance metrics showcase

### About Page
- Company vision and mission
- Core values with animated icons
- Technology platform overview
- Achievement highlights

### Solutions Page
- Tabbed interface for different solutions
- Detailed service descriptions
- Interactive modules with accordions
- Request trial functionality

### Join Our Team Page
- Professional application form
- Company benefits showcase
- Values and culture highlight
- Contact information

## 🎯 Key Features Implementation

### Theme System
```javascript
// Dark/Light theme with persistent storage
const [mode, setMode] = useState(() => {
  const savedTheme = localStorage.getItem('rfcThemeMode');
  return savedTheme || 'light';
});
```

### Responsive Design
```javascript
// MUI breakpoints for responsive design
const isMobile = useMediaQuery(theme.breakpoints.down('md'));
```

### Smooth Animations
```javascript
// Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🔧 Customization

### Theme Customization
Edit `src/theme/theme.js` to modify:
- Color palette
- Typography settings
- Component styles
- Breakpoints

### Content Updates
- Update page content in respective page files
- Modify navigation links in `Navigation.jsx`
- Update footer information in `Footer.jsx`

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation links

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel
```bash
npx vercel --prod
```

## 📊 Performance Optimizations

- **Lazy Loading**: Components and images loaded on demand
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Browser caching for static assets

## 🔒 Security Features

- **HTTPS**: Force HTTPS in production
- **Content Security Policy**: Secure content loading
- **Form Validation**: Client and server-side validation
- **Sanitization**: Input sanitization for forms

## 📈 SEO Features

- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Auto-generated XML sitemap
- **Analytics Ready**: Google Analytics integration ready

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Framer Motion for smooth animations
- Vite team for the blazing fast build tool
- React team for the amazing framework

## 📞 Support

For support and questions:
- Email: info@zeekrazeconsultants.com
- Phone: +1 (555) 123-4567
- Website: [zeekrazeconsultants.com](https://zeekrazeconsultants.com)

---

**Built with ❤️ by ZEE-KRAZE Consultants Development Team**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
