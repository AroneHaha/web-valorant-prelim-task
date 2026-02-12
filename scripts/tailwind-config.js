tailwind.config = {
    theme: {
        extend: {
            colors: {
                valorant: {
                    dark: '#0f1923', // Deep background
                    red: '#ff4655',  // Primary accent
                    white: '#ece8e1', // Primary text
                    gray: '#8b9bb4', // Secondary text
                    card: '#1f2731'
                }
            },
            fontFamily: {
                sans: ['"Teko"', 'sans-serif'],
                body: ['system-ui', 'sans-serif']
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')",
                'hero-mobile': "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            skew: {
                '12': '-12deg',
            }
        }
    }
}