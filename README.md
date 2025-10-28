# Finance Learning Hub

A modern, interactive finance learning website built with Next.js, featuring three essential financial calculators to help users understand and plan their personal finances.

## 🎯 Features

### Interactive Calculators
1. **Fixed Deposit Calculator** - Calculate returns on fixed deposits with compound interest
2. **Emergency Fund Calculator** - Plan your financial safety net
3. **Annual Savings Calculator** - Plan for retirement and long-term goals

### Educational Content
- Comprehensive guides for each calculator
- Financial planning best practices
- Real-world tips and strategies

### Modern Design
- Responsive design that works on all devices
- Clean, professional interface
- Accessible and user-friendly

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd testproject
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── calculators/       # Calculator pages
│   │   ├── fixed-deposit/
│   │   ├── emergency-fund/
│   │   └── annual-savings/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   └── CalculatorLayout.tsx
├── types/                 # TypeScript type definitions
│   └── calculator.ts
└── utils/                 # Utility functions
    └── calculations.ts
```

## 💰 Calculator Details

### Fixed Deposit Calculator
- **Purpose**: Calculate compound interest on fixed deposits
- **Features**: Multiple compounding frequencies, detailed breakdown
- **Educational Content**: Understanding compound interest and FD benefits

### Emergency Fund Calculator
- **Purpose**: Plan your emergency fund based on monthly expenses
- **Features**: Target calculation, timeline planning, progress tracking
- **Educational Content**: Emergency fund best practices and timelines

### Annual Savings Calculator
- **Purpose**: Calculate required savings for retirement goals
- **Features**: Future value projections, required monthly/annual savings
- **Educational Content**: Retirement planning strategies and tips

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and quality assurance

## 🎨 Design Principles

- **User-Centric**: Intuitive interface designed for financial beginners
- **Educational**: Each calculator includes learning content
- **Responsive**: Works seamlessly across all device sizes
- **Accessible**: Follows web accessibility guidelines
- **Professional**: Clean design suitable for financial topics

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices and hooks
- Implement responsive design with Tailwind CSS
- Create reusable components
- Include educational content alongside calculators
- Ensure accessibility standards are met

### Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow consistent naming conventions
- Separate concerns (calculation logic, UI, educational content)

## 📈 Future Enhancements

Potential features for future development:
- Additional calculators (loan, mortgage, investment)
- User accounts and saved calculations
- Export functionality for results
- Advanced charting and visualization
- Mobile app version
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, questions, or suggestions, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for financial education and empowerment.