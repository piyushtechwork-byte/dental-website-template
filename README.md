# 🦷 Dentiva - Premium Dental Clinic Website Template

**A modern, fully responsive, and feature-rich dental clinic website template built with HTML, CSS, and JavaScript. Perfect for the Dentiva Basic package.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Customization Guide](#customization-guide)
- [Features in Detail](#features-in-detail)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [SEO](#seo)
- [License](#license)

---

## ✨ Features

### 🎯 Core Features
- ✅ **Premium Design** - Modern, clean, and professional dental clinic aesthetic
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Fast Loading** - Optimized for speed with minimal dependencies
- ✅ **Smooth Animations** - Subtle CSS and JS animations throughout
- ✅ **Mobile-First** - Built with mobile users in mind
- ✅ **No Backend Required** - Pure frontend HTML/CSS/JavaScript

### 📱 Page Sections
1. **Navigation Bar** - Sticky header with mobile hamburger menu
2. **Hero Section** - Eye-catching hero with stats and CTA buttons
3. **About Section** - Clinic information and features
4. **Services** - 6 service cards with descriptions
5. **Why Choose Us** - 6 benefits with icons
6. **Team Section** - Doctor profiles with credentials
7. **Testimonials** - Patient reviews with ratings
8. **FAQ Section** - Accordion with common questions
9. **Appointment Booking** - Contact info + enquiry form + WhatsApp integration
10. **Location** - Google Maps embed + contact details
11. **Footer** - Complete footer with links and social media

### 🚀 Functionality
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- FAQ accordion toggle
- Form validation (email, phone, name)
- WhatsApp appointment booking integration
- Intersection Observer animations
- Counter animations for stats
- Notification system
- Active navigation link highlighting

### 🎨 Design Elements
- **Color Scheme**: Professional blue, teal, and white
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent, balanced layout
- **Shadows**: Subtle depth and elevation
- **Animations**: Smooth transitions and effects

---

## 🚀 Quick Start

### 1. Download the Template
```bash
git clone https://github.com/piyushtechwork-byte/dental-website-template.git
cd dental-website-template
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 3. Deploy
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **Traditional Hosting**: Upload files via FTP

---

## 📁 File Structure

```
dental-website-template/
├── index.html          # Main HTML file (complete structure)
├── styles.css          # All CSS styling (responsive, animations)
├── script.js           # JavaScript functionality
├── README.md           # This file
└── CUSTOMIZATION.md    # Detailed customization guide
```

**Total Size**: ~75 KB (highly optimized)

---

## 🎯 Customization Guide

### 1. **Clinic Name & Branding**

**File**: `index.html`

```html
<!-- Line 1: Change Logo -->
<div class="nav-logo">
    <span class="logo-icon">🦷</span>
    <span class="logo-text">Dentiva</span>  <!-- Change "Dentiva" to your clinic name -->
</div>

<!-- Line 2: Change Page Title -->
<title>Dentiva Dental Clinic - Premium Dental Care</title>
<!-- To: Your Clinic Name - Premium Dental Care -->

<!-- Line 3: Change Meta Description -->
<meta name="description" content="Dentiva Dental Clinic - Premium dental care...">
<!-- To: Your Clinic Name - Your clinic description -->
```

### 2. **Contact Information**

**File**: `index.html` - Search and replace all instances:

```html
<!-- Phone Number (appears in multiple places) -->
+919876543210  →  +91 YOUR_PHONE_NUMBER

<!-- WhatsApp Number -->
919876543210   →  91YOUR_PHONE_NUMBER (without + or spaces)

<!-- Email -->
info@dentiva.com  →  your-email@domain.com

<!-- Address -->
123 Smile Street, Medical Complex, New Delhi, Delhi 110001, India
→ Your clinic address
```

### 3. **Doctor Information**

**File**: `index.html` - Find the Team Section

```html
<div class="team-card">
    <div class="team-image">
        <div class="placeholder-avatar">👨‍⚕️</div>  <!-- Change emoji or add image -->
    </div>
    <h3>Dr. Rajesh Kumar</h3>  <!-- Change doctor name -->
    <p class="team-title">Chief Dentist & Founder</p>  <!-- Change title -->
    <p class="team-bio">BDS, MDS with 15+ years of experience...</p>  <!-- Change bio -->
</div>
```

### 4. **Services**

**File**: `index.html` - Find Services Section

```html
<div class="service-card">
    <div class="service-icon">🦷</div>  <!-- Change emoji -->
    <h3>General Dentistry</h3>  <!-- Change service name -->
    <p>Routine checkups, cleanings, fillings, and preventive care...</p>  <!-- Change description -->
    <ul class="service-list">
        <li>Regular Checkups</li>  <!-- Change service items -->
        <li>Professional Cleaning</li>
        <li>Cavity Fillings</li>
        <li>Root Canal Treatment</li>
    </ul>
</div>
```

### 5. **Business Hours**

**File**: `index.html` - Contact Section

```html
<p>Mon-Sat: 9:00 AM - 8:00 PM<br>Sunday: 10:00 AM - 6:00 PM</p>
<!-- Update to your clinic hours -->
```

### 6. **Testimonials**

**File**: `index.html` - Testimonials Section

```html
<div class="testimonial-card">
    <div class="testimonial-rating">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
    <p class="testimonial-text">"Dr. Rajesh is amazing!..."</p>  <!-- Change review -->
    <div class="testimonial-author">
        <div class="author-avatar">👨</div>  <!-- Change emoji or image -->
        <div>
            <p class="author-name">Arjun Singh</p>  <!-- Change name -->
            <p class="author-title">Business Owner</p>  <!-- Change profession -->
        </div>
    </div>
</div>
```

### 7. **Colors (Optional)**

**File**: `styles.css` - Find CSS Variables

```css
:root {
    --primary-color: #003d6b;      /* Change primary blue */
    --secondary-color: #00A8D8;    /* Change secondary teal */
    --accent-color: #00D4FF;       /* Change accent color */
    /* ... other colors ... */
}
```

### 8. **Google Maps Embed**

**File**: `index.html` - Contact Section

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5437099076935!2d77.22868!3d28.63408!..." ></iframe>
```

1. Go to Google Maps
2. Find your clinic location
3. Click Share → Embed Map
4. Copy iframe code
5. Replace src URL

### 9. **FAQ Questions**

**File**: `index.html` - FAQ Section

```html
<div class="faq-item">
    <button class="faq-question">
        <span>How often should I visit the dentist?</span>
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>We recommend visiting the dentist at least twice...</p>
    </div>
</div>
```

### 10. **About Section Text**

**File**: `index.html` - About Section

```html
<h3>We're Committed to Your Smile</h3>
<p>At Dentiva Dental Clinic, we believe that everyone deserves a healthy, beautiful smile...</p>
<p>Our mission is to make dental care accessible, affordable, and anxiety-free...</p>
```

---

## 🎨 Features in Detail

### Navigation
- Sticky header
- Mobile menu
- Smooth scroll
- Active section highlight

### Hero Section
- Large headline
- CTA buttons
- Stats display
- Background gradient

### Responsive Design
- Mobile-first layout
- Tablet and desktop optimized

### Forms & Validation
- Email and phone validation
- Success notifications
- WhatsApp integration

### FAQ
- Expand/collapse accordion

### Animations
- Scroll reveal effects
- Hover transitions
- Counter animation

---

## 🌐 Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile Safari
- Mobile Chrome

---

## ⚡ Performance

- No external libraries
- Lightweight SVG graphics
- Clean CSS/JS
- Mobile optimized

---

## 🔍 SEO

- Meta tags included
- Open Graph support
- Semantic HTML structure
- Mobile-friendly layout

---

## 📄 License

This project is licensed under the MIT License.

---

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and enable

### Netlify
1. Drag and drop folder
2. Deploy instantly

### Vercel
1. Connect GitHub repo
2. Auto deploy

---

## 🙌 Final Notes

This template is built for frontend-only use and is intentionally designed to be easy to customize for multiple dental clinic clients.

You can replace clinic name, doctor names, phone numbers, address, service lists, testimonials, and maps information quickly in the HTML file.

**Built for Dentiva Basic package.**
