# 🥷⚽ Ninja League

<img width="300" height="300" alt="logo" src="https://github.com/user-attachments/assets/dfc48a35-a649-43d6-af42-5fd7dd5809ac" />

> Choose Your Team. Train Your Ninja. Become Kage.

Ninja League is a gamified counter application developed with **HTML**, **CSS**, and **JavaScript**. Instead of simply increasing a number, players train a ninja, progress through multiple ranks, and can represent an Italian soccer team while unlocking visual upgrades along the way.

---

## 🎯 Project Overview

The goal of this project was to transform a traditional counter application into a more engaging and interactive experience by applying gamification techniques and dynamic user interface updates.

Players can:

- Select an Italian soccer team
- Gain levels through training
- Progress through ninja ranks
- Unlock new ninja appearances
- Receive promotion messages
- Experience team-themed interfaces
- Keep their progress during the session

---

## 🚀 Features

### Ninja Progression System

Progress through five ninja ranks:

| Level Range | Rank |
|------------|---------|
| 0 - 19  | Student |
| 20 - 39 | Genin |
| 40 - 59 | Chunin |
| 60 - 79 | Jonin |
| 80+     | Kage |

As the player levels up:

- The experience progress bar advances
- The character appearance changes
- The current rank updates
- Promotion messages are displayed

---

### Team Selection

Choose between three Italian soccer teams:

🟡🔴 **Roma**

🔵 **Napoli**

⚫⚪ **Juventus**

Each team includes:

- Dedicated background image
- Unique ninja character set
- Personalized colors
- Team-specific promotion messages

Switching teams starts a new ninja journey by resetting the current progress.

---

### Dynamic User Interface

The application interface is generated dynamically using JavaScript DOM Manipulation.

Implemented features include:

- Dynamic element creation
- Dynamic image loading
- Dynamic theme switching
- Dynamic rank rendering
- Dynamic progress tracking

---

### Promotion System

Players receive custom messages whenever they achieve a new rank (for now only ITA language supporteed).

Examples:

- 🟡🔴 "You have earned the rank of Genin of Roma!"
- 🔵 "Jonin of Napoli! Your power is feared!"
- ⚫⚪ "Kage of Juventus! You have reached the highest level!"

---

### Session Storage

The application uses Session Storage to keep:

- Current level
- Selected team

This ensures that user progress is preserved while the browser session remains active.

---

## 🛠 Technologies Used

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript

### JavaScript Concepts

- DOM Manipulation
- Event Listeners
- Dynamic Rendering
- State Management
- Session Storage
- Template Literals
- Arrays and Objects

### CSS Techniques

- Responsive Design
- Media Queries
- CSS Animations
- Dynamic Themes
- Background Effects

---

## 📂 Project Structure

```text
Ninja-League/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── logo.png
│   │
│   ├── backgrounds/
│   │   ├── roma-bg.jpg
│   │   ├── napoli-bg.jpg
│   │   └── juventus-bg.jpg
│   │
│   └── ninja/
│       ├── roma/
│       ├── napoli/
│       └── juventus/
│
└── README.md
```

---

## 📱 Responsive Design

The application adapts to different screen sizes.

### Desktop

- Character displayed outside the main card
- Large immersive backgrounds
- Expanded layout

### Mobile

- Optimized spacing
- Responsive controls
- Character repositioned (within card) for better usability
- Mobile-friendly design

---

## 🎮 Why Ninja League?

Rather than creating a simple counter, the objective was to create a small gamified experience where every interaction feels meaningful.

By combining:

- Team identity
- Character progression
- Dynamic visuals
- Promotion rewards

the application delivers a more engaging user experience than a traditional counter app.

---

## 📸 Screenshots

### Roma Theme

<img width="600" height="400" alt="Roma-theme" src="https://github.com/user-attachments/assets/fd9dd1a1-3be4-4dc4-b228-c029e5cff918" />

### Napoli Theme

<img width="600" height="400" alt="Napoli-theme" src="https://github.com/user-attachments/assets/fcb9ad88-01ec-46eb-9480-7048b0eb3c1f" />

### Juventus Theme

<img width="600" height="400" alt="Juventus-theme" src="https://github.com/user-attachments/assets/35b15e03-9ea5-40b7-8e55-7c4957389bdc" />

### Mobile Version

<img width="600" height="400" alt="Mobile-version" src="https://github.com/user-attachments/assets/78263ad1-dc1d-4c6c-a5ba-77797cdfec71" />

---

## 🔴 Screenshots

https://flg-ninja-league.netlify.app/

## 🏆 Conclusion

Ninja League demonstrates how a simple counter application can be transformed into a fun and interactive experience through gamification, dynamic content, and responsive design.

The project successfully combines technical JavaScript concepts with creative user experience design, resulting in a unique application that is both functional and engaging.

---

## 👨‍💻 Author

**Filippo La Greca**

Developed with ❤️ using HTML, CSS and Vanilla JavaScript.
