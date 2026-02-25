# BookingHub 📅
**"Book Services Anytime, Anywhere"**

---

## 🚀 Project Overview

BookingHub is a full-stack web application for service appointment booking. Users can browse different service providers (doctors, lawyers, salons, etc.), book appointments, and track booking status. Providers can manage their availability and appointments. Admins oversee the entire platform.

> 🎯 Multi-service based appointment system.

---

## 👥 Roles & Permissions

| Role | Description | Key Permissions |
|------|-------------|-----------------|
| **Customer** | Users who book appointments | Browse providers, book slots, track bookings, leave reviews |
| **Provider** | Service providers | Manage availability, view bookings, update status |
| **Admin** | Platform moderators | Manage users, categories, oversee bookings |

> 💡 Users select role during registration. Admin accounts should be seeded.

---

## 🛠️ Tech Stack

### Frontend
- Next.js  
- TypeScript  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  
- PostgreSQL  
- Prisma ORM  

---

## ✨ Features

### 🌐 Public Features

- Browse all service providers  
- Filter providers by category, location, price  
- View provider profile and available time slots  

---

### 👤 Customer Features

- Register and login  
- Search and filter providers  
- View provider details  
- Book appointment (select date & time slot)  
- Cancel appointment  
- Track booking status  
- Leave reviews  
- Manage profile  

---

### 🧑‍💼 Provider Features

- Register and login as provider  
- Create provider profile  
- Set availability (date & time slots)  
- View incoming bookings  
- Accept/reject bookings  
- Update booking status  
- Manage profile  

---

### 🛡️ Admin Features

- View all users  
- Suspend/activate users  
- Manage service categories  
- View all bookings  
- Platform statistics dashboard  

---

## 📄 Pages & Routes

### Public Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, categories, featured providers |
| `/providers` | Browse Providers | List with filters |
| `/providers/:id` | Provider Details | Info + available slots |
| `/login` | Login | Login form |
| `/register` | Register | Registration form |

---

### Customer Routes (Private)

| Route | Page | Description |
|-------|------|-------------|
| `/bookings` | My Bookings | Booking history |
| `/bookings/:id` | Booking Details | Status & info |
| `/profile` | Profile | Edit info |

---

### Provider Routes (Private)

| Route | Page | Description |
|-------|------|-------------|
| `/provider/dashboard` | Dashboard | Stats |
| `/provider/availability` | Availability | Manage time slots |
| `/provider/bookings` | Bookings | View & update |

---

### Admin Routes (Private)

| Route | Page | Description |
|-------|------|-------------|
| `/admin` | Dashboard | Statistics |
| `/admin/users` | Users | Manage users |
| `/admin/bookings` | Bookings | All bookings |
| `/admin/categories` | Categories | Manage service types |

---

## 🗄️ Database Tables

- **Users**  
- **ProviderProfiles**  
- **Categories**  
- **AvailabilitySlots** ⭐  
- **Bookings**  
- **Reviews**

---

### ⭐ AvailabilitySlots (Core Table)

Suggested fields:

- id  
- providerId  
- date  
- startTime  
- endTime  
- isBooked  

> 💡 This replaces the cart logic from FoodHub.

---

## 🔌 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Current user |

---

### 👨‍⚕️ Providers (Public)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/providers` | Get providers |
| GET | `/api/providers/:id` | Provider details |
| GET | `/api/providers/:id/slots` | Available slots |

---

### 📅 Bookings

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings` | User bookings |
| GET | `/api/bookings/:id` | Booking details |
| PATCH | `/api/bookings/:id/cancel` | Cancel booking |

---

### 🧑‍💼 Provider Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/provider/slots` | Create slot |
| DELETE | `/api/provider/slots/:id` | Delete slot |
| PATCH | `/api/provider/bookings/:id` | Update status |

---

### 🛡️ Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/users` | All users |
| PATCH | `/api/admin/users/:id` | Update status |
| GET | `/api/admin/bookings` | All bookings |

---

## 🔄 Booking Flow

```mermaid
flowchart TD
A[Register/Login] --> B[Browse Providers]
B --> C[View Available Slots]
C --> D[Book Appointment]
D --> E[Track Status]
E --> F[Leave Review]

#📊 Booking Status
REQUESTED → CONFIRMED → COMPLETED
        ↘
        CANCELLED