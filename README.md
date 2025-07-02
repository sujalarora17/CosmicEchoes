# Cosmic Echoes - Space Events in Alternate Realities

A beautiful, interactive web application that showcases real astronomical events from history alongside creative alternate reality versions of what might have been. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌌 Features

- **Real-time Date Detection**: Automatically detects the current date and displays relevant space events
- **Historical Space Events**: Curated collection of significant astronomical events throughout history
- **Alternate Reality Toggle**: Interactive button to switch between real events and creative "what if" scenarios
- **Immersive Space Theme**: Beautiful starfield animation, cosmic gradients, and space-inspired design
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and micro-interactions using Framer Motion
- **Accessibility First**: Screen reader support, keyboard navigation, and high contrast mode compatibility
- **Performance Optimized**: Fast loading times with efficient animations and responsive images

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cosmic-echoes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be available in the `dist` directory.

## 📱 Usage

1. **View Today's Event**: The app automatically displays a space event that occurred on the current date
2. **Toggle Timeline**: Click the "Enter Alternate Timeline" button to see a creative alternate reality version
3. **Return to Reality**: Click "Return to Reality" to switch back to the historical event
4. **Interactive Elements**: Hover over cards and buttons to see smooth animations and effects

## 🎨 Design Features

### Visual Elements
- **Animated Star Field**: Dynamic background with twinkling stars
- **Cosmic Color Palette**: Deep space blues, stellar purples, and nebula accents
- **Glowing Effects**: Subtle glows and particle animations
- **Gradient Backgrounds**: Beautiful cosmic gradients throughout the interface

### Accessibility
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Supports system high contrast preferences
- **Reduced Motion**: Respects user's motion preferences
- **Focus Indicators**: Clear visual focus indicators for accessibility

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Breakpoint System**: Adapts layout for tablet and desktop screens
- **Flexible Typography**: Scalable text sizes across different screen sizes
- **Touch Targets**: Appropriately sized buttons and interactive elements

## 🧬 Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React
- **Lucide React**: Beautiful, customizable SVG icons
- **Vite**: Fast build tool and development server

## 🌟 Event Data Structure

Each space event includes:
- **Historical Information**: Real astronomical events with accurate dates and descriptions
- **Alternate Reality Versions**: Creative "what if" scenarios exploring different outcomes
- **Event Categories**: Discovery, Launch, Mission, Observation, Milestone
- **Rich Metadata**: Years, event types, and detailed descriptions

## 🔧 Customization

### Adding New Events
Events are stored in `src/data/events.ts`. Each event follows this structure:

```typescript
{
  id: 'MM-DD',
  date: 'MM-DD',
  title: 'Event Title',
  description: 'Historical description',
  year: 2024,
  type: 'discovery' | 'launch' | 'mission' | 'observation' | 'milestone',
  alternateReality: {
    title: 'Alternate Title',
    description: 'Alternate description',
    timeline: 'Timeline Name'
  }
}
```

### Styling Customization
- Colors and themes can be modified in `tailwind.config.js`
- Animation settings are available in the Tailwind config
- Component styles use Tailwind utility classes for easy customization

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 🚀 Deployment

This application can be deployed to various platforms:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload static files to S3 bucket with CloudFront

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Your site will be deployed with automatic updates on new commits

---

**Cosmic Echoes** - Exploring the infinite possibilities of space and time through beautiful, interactive storytelling.