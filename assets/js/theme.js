/**
 * Configuração centralizada de temas e paleta de cores institucional
 * Maida Advocacia - Design Dark Luxo (Inspirado em Maestro Class)
 */
window.tailwind = window.tailwind || {};
tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1a1a32',
					foreground: '#f8fafc'
				},
				'primary-foreground': '#f8fafc',
				secondary: {
					DEFAULT: '#131326',
					foreground: '#f8fafc'
				},
				'secondary-foreground': '#f8fafc',
				champagne: {
					DEFAULT: '#ac8754',
					dark: '#8e6c3e',
					light: '#c8a876'
				},
				'champagne-dark': '#8e6c3e',
				accent: {
					DEFAULT: '#ac8754',
					dark: '#8e6c3e'
				},
				alert: '#ef4444',
				card: '#16162c',
				border: 'rgba(255, 255, 255, 0.08)',
				muted: {
					DEFAULT: 'rgba(255, 255, 255, 0.05)',
					foreground: '#94a3b8'
				},
				'muted-foreground': '#94a3b8'
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'serif'],
				sans: ['"DM Sans"', 'sans-serif'],
				mono: ['"DM Sans"', 'sans-serif']
			}
		}
	}
};

