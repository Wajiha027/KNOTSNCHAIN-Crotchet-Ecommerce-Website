module.exports = {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Updated to include index.html and JS/JSX
    ],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          // Keep all your HSL variables
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          // ... (rest of your color definitions)
  
          // Enhanced brand colors with opacity support
          brand: {
            pink: {
              light: '#FFDEE2',
              DEFAULT: '#FFC5CF',
              dark: '#FF9DAC',
              10: 'rgba(255, 197, 207, 0.1)',
              50: 'rgba(255, 197, 207, 0.5)'
            },
            // ... other brand colors
          }
        },
        // Add these new utilities:
        boxShadow: {
          'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        },
        transitionProperty: {
          'height': 'height',
          'width': 'width'
        }
      }
    },
    plugins: [
      require("tailwindcss-animate"),
      require('@tailwindcss/typography')
    ],
  }