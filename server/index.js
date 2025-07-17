import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Create __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// 100% RELIABLE PATH
const moviesPath = path.join(__dirname, 'data', 'movies.json');

// Enable CORS
app.use(cors());

app.get('/api/movies', (req, res) => {
    try {
        const data = fs.readFileSync(moviesPath, 'utf8');
        const movies = JSON.parse(data);
        console.log('Movies sent:', movies); // Debug log
        res.json(movies);
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).json({
            error: "READ FAILED",
            actualPath: moviesPath,
            solution: "1. Verify file exists 2. Check console for exact path",
            details: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📂 Movie file path: ${moviesPath}`);
    console.log(`🔍 File exists: ${fs.existsSync(moviesPath)}`);
});