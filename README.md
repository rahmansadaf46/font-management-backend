# Font Management System - Backend

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Express.js](https://img.shields.io/badge/Express.js-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-green)

A TypeScript-based backend system for managing fonts and font groups with Node.js, Express, and MongoDB.

## Features

- TTF font file upload with validation
- Font metadata management
- Font group creation with validation (minimum 2 fonts)
- RESTful API endpoints
- Type-safe codebase
- File upload handling with Multer

## Project Structure

```
font-management-backend/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── fontController.ts
│   │   └── fontGroupController.ts
│   ├── models/
│   │   ├── font.ts
│   │   └── fontGroup.ts
│   ├── routes/
│   │   ├── fontGroupRoutes.ts
│   │   └── fontRoutes.ts
│   ├── services/
│   │   └── fileUploadService.ts
│   └── server.ts
├── uploads/
├── .env
├── .gitignore
├── notation.json
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Language**: TypeScript
- **File Upload**: Multer
- **Environment Management**: dotenv
- **CORS Handling**: cors
- **Development**: nodemon, ts-node

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB running locally or remotely
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rahmansadaf46/font-management-backend.git
   cd font-management-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (create `.env` file if not exists):
   ```
   MONGO_URI=mongodb://localhost:27017/font_manager
   PORT=5050
   ```

### Running the Application

Start the development server:
```bash
nodemon src/server.ts
```

Or use the TypeScript compiler:
```bash
npm run build && node dist/server.js
```

The server will start on port `5050` (as configured in `.env`).

## API Documentation

### Base URL
`http://localhost:5050/api`

### Font Endpoints

| Method | Endpoint       | Description                          | Request Body             |
|--------|----------------|--------------------------------------|--------------------------|
| POST   | `/fonts`       | Upload new font (TTF only)           | FormData (file upload)   |
| GET    | `/fonts`       | Get all uploaded fonts               | -                        |
| GET    | `/fonts/:id`   | Get details of a specific font       | -                        |
| DELETE | `/fonts/:id`   | Delete a font                        | -                        |

### Font Group Endpoints

| Method | Endpoint            | Description                          | Request Body             |
|--------|---------------------|--------------------------------------|--------------------------|
| POST   | `/font-groups`      | Create new font group                | JSON { name, fonts[] }   |
| GET    | `/font-groups`      | Get all font groups                  | -                        |
| GET    | `/font-groups/:id`  | Get details of specific font group   | -                        |
| PUT    | `/font-groups/:id`  | Update a font group                  | JSON { name, fonts[] }   |
| DELETE | `/font-groups/:id`  | Delete a font group                  | -                        |

## Dependencies

### Production
- `express`: ^5.1.0
- `mongoose`: ^8.13.2
- `multer`: ^1.4.5-lts.2
- `dotenv`: ^16.4.7
- `cors`: ^2.8.5
- `body-parser`: ^2.2.0

### Development
- `typescript`: ^5.8.3
- `ts-node`: ^10.9.2
- `nodemon`: ^3.1.9
- `@types/node`: ^22.14.0
- `@types/express`: ^5.0.1
- `@types/multer`: ^1.4.12
- `@types/cors`: ^2.8.17

## Development Notes

1. The system strictly accepts only TTF font files
2. Font groups require at least 2 fonts to be created
3. All operations maintain type safety through TypeScript
4. Follows SOLID principles in architecture
5. Uploaded fonts are stored in the `uploads/` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/rahmansadaf46/font-management-backend/issues).
