
# 🚀 Digital Entrepreneurship Hub - Empowering African Youth 🌍

<div align="center">

![Platform Banner](https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=300&fit=crop&crop=center)

### 🎯 Bridging the Digital Divide Through Innovation and Education

[![Safaricom](https://img.shields.io/badge/Safaricom-00A651?style=for-the-badge&logo=safaricom)](https://www.safaricom.co.ke/)
[![M-Pesa](https://img.shields.io/badge/M--Pesa-00A651?style=for-the-badge&logo=safaricom)](https://www.safaricom.co.ke/personal/m-pesa)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)


</div>

---

## 🌟 Overview

Welcome to the **Digital Entrepreneurship Hub** - a comprehensive platform designed specifically for African youth to learn, grow, and succeed in the digital economy! 🎓✨

Our platform combines **cutting-edge technology** with **local payment solutions** (M-Pesa) to provide accessible digital education and opportunities across Africa. 🌍💡

---

## ✨ Key Features

### 🎓 **Learning & Development**
- 📚 **Digital Courses** - Comprehensive course library with both free and premium content
- 🧠 **AI-Powered Coach** - Personalized learning assistant
- 🏆 **Certifications** - Industry-recognized certificates
- 📄 **Resume Builder** - Professional CV creation tools
- 🧪 **Interactive Quizzes** - Skill assessment and testing

### 💼 **Career Opportunities**
- 📱 **USSD Job Board** - Access jobs via simple phone codes (no internet required!)
- 🤝 **1-on-1 Mentorship** - Connect with industry experts
- 💰 **Freelance Opportunities** - Discover remote work possibilities
- 🌐 **Global Platforms Integration** - Upwork, Fiverr, and more

### 🗣️ **Community & Support**
- 💬 **Discussion Forums** - Topic-based community discussions
- ❓ **Q&A Section** - Get answers from experts and peers
- 📖 **Success Stories** - Inspiring journeys from fellow entrepreneurs
- 🌟 **Peer Support** - Collaborative learning environment

### 💳 **Payment & Subscriptions**
- 📱 **M-Pesa Integration** - Seamless mobile money payments
- 💎 **Subscription Plans** - Basic, Premium, and Pro tiers
- 🛒 **Course Purchases** - Buy individual courses
- 💵 **Mentorship Booking** - Pay for expert sessions

---

## 🔧 Technology Stack

### **Frontend Technologies** 🎨
- ⚛️ **React 18.3.1** - Modern UI framework
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first styling
- 🧩 **Shadcn/UI** - Beautiful component library
- 📊 **Recharts** - Data visualization
- 🔍 **React Query** - Server state management
- 🧭 **React Router** - Client-side routing

### **Backend & Database** 🗄️
- 🚀 **Supabase** - Backend-as-a-Service
- 🐘 **PostgreSQL** - Robust database
- 🔐 **Row Level Security** - Data protection
- 🔄 **Real-time subscriptions** - Live updates
- ⚡ **Edge Functions** - Serverless computing

### **Payment Integration** 💰
- 📱 **Safaricom M-Pesa API** - Mobile money integration
- 🔒 **STK Push** - Secure payment initiation
- 💳 **Payment callbacks** - Transaction verification
- 📈 **Payment analytics** - Transaction tracking

---

## 📱 Safaricom M-Pesa Integration

### **🛠️ M-Pesa Tools Used**

#### 1. **📡 STK Push (Lipa na M-Pesa Online)**
```javascript
// Initiate payment from customer's phone
const stkPushResponse = await mpesaAPI.stkPush({
  phoneNumber: "254712345678",
  amount: 1000,
  callbackURL: "https://yourapp.com/callback"
});
```

#### 2. **🔄 Payment Callbacks**
- ✅ **Success notifications** - Real-time payment confirmation
- ❌ **Failure handling** - Graceful error management
- 📊 **Transaction logging** - Complete audit trail

#### 3. **🔐 Security Features**
- 🛡️ **OAuth 2.0** - Secure API authentication
- 🔑 **Encrypted credentials** - Safe key management
- ✅ **Request validation** - Data integrity checks

### **💼 Payment Workflows**

#### **Course Purchase Flow** 📚💳
1. 🛒 User selects course
2. 💰 Enters M-Pesa number
3. 📱 Receives STK push prompt
4. 🔢 Enters M-Pesa PIN
5. ✅ Payment confirmed
6. 🎓 Course access granted

#### **Mentorship Booking Flow** 🤝💵
1. 👨‍🏫 User selects mentor
2. 📅 Chooses available slot
3. 📱 M-Pesa payment initiated
4. ✅ Payment confirmation
5. 📧 Booking confirmation sent
6. 🔗 Meeting link provided

#### **Subscription Flow** 💎📱
1. 📊 User selects plan
2. 💳 Monthly/annual billing
3. 🔄 Auto-renewal setup
4. 📱 M-Pesa recurring payments
5. 🎯 Feature access updated

---

## 🚀 Installation & Setup

### **Prerequisites** 📋
- 📦 **Node.js** (v18 or higher)
- 🧶 **npm** or **yarn**
- 🗄️ **Supabase account**
- 📱 **Safaricom Developer Account**

### **1. Clone Repository** 📥
```bash
git clone https://github.com/yourusername/digital-entrepreneurship-hub.git
cd digital-entrepreneurship-hub
```

### **2. Install Dependencies** 📦
```bash
npm install
# or
yarn install
```

### **3. Environment Setup** ⚙️
```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# M-Pesa Credentials (Supabase Secrets)
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_BUSINESS_SHORT_CODE=your_business_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=your_callback_url
```

### **4. Database Setup** 🗄️
```bash
# Run Supabase migrations
npx supabase db reset
npx supabase start
```

### **5. Start Development** 🏃‍♂️
```bash
npm run dev
# or
yarn dev
```

---

## 📊 Database Schema

### **Core Tables** 🗂️
- 👤 **profiles** - User information
- 📚 **courses** - Course catalog
- 🛒 **course_purchases** - Purchase records
- 💳 **payments** - Transaction history
- 💎 **subscriptions** - User plans
- 🤝 **mentorship_bookings** - Mentor sessions

### **Community Tables** 🌟
- 💬 **forum_topics** - Discussion threads
- 📝 **forum_posts** - Topic responses
- ❓ **qa_questions** - Q&A questions
- 💡 **qa_answers** - Question responses
- 🏆 **success_stories** - User achievements
- 📱 **job_listings** - USSD job opportunities

---

## 🎯 Core Functionalities

### **🎓 Learning Management System**
- 📖 Course content delivery
- 🎥 Video streaming
- 📊 Progress tracking
- 🏅 Achievement system
- 📜 Certificate generation

### **📱 USSD Job Integration**
- 📞 Phone-based job access
- 🌍 Rural-friendly opportunities
- 📋 Application tracking
- 💼 Category filtering
- 📍 Location-based search

### **🤝 Mentorship Platform**
- 👨‍🏫 Expert mentor profiles
- 📅 Calendar integration
- 💰 Session payments
- 🎥 Video conferencing
- 📊 Session analytics

### **💰 Payment Processing**
- 📱 M-Pesa STK Push
- 🔄 Real-time validation
- 📈 Payment analytics
- 💳 Subscription management
- 🧾 Invoice generation

---

## 🔮 Future Features

### **🚀 Coming Soon**
- 🤖 **Advanced AI Tutor** - Personalized learning paths
- 🌐 **Multi-language Support** - Swahili, French, Portuguese
- 📊 **Analytics Dashboard** - Detailed learning insights
- 🎮 **Gamification** - Points, badges, leaderboards
- 📲 **Mobile App** - Native iOS/Android applications

### **🎯 Roadmap Q1 2025**
- 🏪 **Marketplace** - Sell your own courses
- 🤝 **Partnership Program** - Business collaborations
- 🎓 **University Integration** - Academic partnerships
- 💼 **Job Placement** - Direct employment opportunities
- 🌍 **Pan-African Expansion** - Multi-country support

### **🔮 Long-term Vision**
- 🏢 **Corporate Training** - Enterprise solutions
- 🌟 **Alumni Network** - Graduate community
- 💰 **Microfinance Integration** - Small business loans
- 🚀 **Startup Incubator** - Business acceleration
- 🌍 **Global Certification** - International recognition

---

## 🛠️ Development Workflow

### **🔄 Git Workflow**
```bash
# Feature development
git checkout -b feature/new-feature
git commit -m "✨ Add new feature"
git push origin feature/new-feature

# Create Pull Request
# Code Review & Testing
# Merge to main
```

### **🧪 Testing Strategy**
- 🔍 **Unit Tests** - Component testing
- 🔗 **Integration Tests** - API testing
- 🎭 **E2E Tests** - User journey testing
- 📱 **Payment Testing** - M-Pesa sandbox

### **🚀 Deployment Pipeline**
1. 🔍 **Code Review** - Peer validation
2. 🧪 **Automated Testing** - CI/CD pipeline
3. 📱 **Payment Testing** - M-Pesa validation
4. 🌐 **Staging Deployment** - Pre-production
5. ✅ **Production Release** - Live deployment

---

## 📚 API Documentation

### **🔐 Authentication Endpoints**
```typescript
// User registration
POST /auth/register
{
  email: string,
  password: string,
  full_name: string
}

// User login
POST /auth/login
{
  email: string,
  password: string
}
```

### **💳 Payment Endpoints**
```typescript
// Initiate M-Pesa payment
POST /payments/mpesa/initiate
{
  phoneNumber: string,
  amount: number,
  paymentType: 'course_purchase' | 'mentorship_booking' | 'subscription'
}

// Payment callback
POST /payments/mpesa/callback
{
  // Safaricom callback payload
}
```

---

## 🤝 Contributing

### **🌟 How to Contribute**
1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch**
3. ✍️ **Make your changes**
4. 🧪 **Add tests**
5. 📝 **Update documentation**
6. 🔄 **Submit a pull request**

### **📋 Contribution Guidelines**
- ✨ Follow code style guidelines
- 📝 Write clear commit messages
- 🧪 Include tests for new features
- 📚 Update documentation
- 🎯 Focus on user experience

---

## 📞 Support & Community

### **🆘 Getting Help**
- 📧 **Email**: support@digitalhub.africa
- 💬 **Discord**: [Join our community](https://discord.gg/digitalhub)
- 📱 **WhatsApp**: +254700000000
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/repo/issues)

### **🌍 Community Channels**
- 📘 **Facebook**: Digital Entrepreneurs Africa
- 🐦 **Twitter**: @DigitalHubAfrica
- 📸 **Instagram**: @digitalhub_africa
- 📺 **YouTube**: Digital Hub Africa

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### **🌟 Special Thanks**
- 📱 **Safaricom** - M-Pesa API integration
- 🚀 **Supabase** - Backend infrastructure
- 🎨 **Shadcn/UI** - Component library
- 🌍 **African Developer Community** - Inspiration and support

### **💡 Inspiration**
Built with ❤️ for African youth, by African developers, to bridge the digital divide and create opportunities in the digital economy.

---

<div align="center">

### 🚀 Ready to Transform Digital Africa? 

**[🌟 Star this repo](https://github.com/yourusername/repo)** • **[🍴 Fork it](https://github.com/yourusername/repo/fork)** • **[📖 Read the docs](https://docs.digitalhub.africa)**

---

**Made with 💚 in Kenya 🇰🇪 | Empowering Africa 🌍 | Building the Future 🚀**

</div>
