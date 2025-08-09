/*// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import your route files
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/Genreroutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));










//server 2 which is running properly  
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const genreRoutes = require('./routes/genres');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);

mongoose.connect('mongodb://localhost:27017/movie-theatre', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connected'))
  .catch(err => console.log('DB connection error:', err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server 3
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
dotenv.config(); // Load environment variables from .env

// Routes
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const genreRoutes = require('./routes/Genreroutes');

const app = express();

// Middleware
app.use(helmet()); // Add basic security headers
app.use(morgan('dev')); // Log incoming HTTP requests
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/users', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);

// DB Connection (Using MONGO_URI from .env)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ DB connection error:', err));

// Global Error Handler (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
*/
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
dotenv.config();

const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const genreRoutes = require('./routes/Genreroutes');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/users', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ DB connection error:', err));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
