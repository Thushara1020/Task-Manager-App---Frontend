# Task Manager Application

A professional Full-Stack Task Management System designed for efficient task tracking and team collaboration. [cite_start]This application allows users to manage tasks through a modern interface while ensuring data persistence through a robust backend.

---

##  Tech Stack

### **Frontend**
- **Framework:** Angular v21.1.4
- **Styling:** Tailwind CSS (Modern Glassmorphism UI) 
- **Forms:** Reactive Forms for complex validations and scalability 
- **Testing:** Vitest

### **Backend**
- **Framework:** Java Spring Boot 
- **Database:** MySQL 
- **Architecture:** Controller-Service-Repository pattern
- **Build Tool:** Maven.

---

##  Project Structure

- **`/frontend`**: Angular source code including components for task forms, dashboards, and API services.
- **`/backend`**: Spring Boot REST API for managing tasks, entity models, and data persistence.

---

##  Setup & Installation

### **Prerequisites**
- Java 17 or higher
- Node.js & npm (Angular CLI)
- MySQL Server
- Maven

### **1. Database Configuration**
1. Create a MySQL database named `task_manager`.
2. Open `/backend/src/main/resources/application.properties`.
3. Update the following lines with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/task_manager
   spring.datasource.username=YOUR_USERNAME
   spring.datasource.password=YOUR_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
