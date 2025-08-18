const express = require('express');
require('dotenv').config()
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
const { corsOptions } = require('./config/corsOptions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions))
app.use(express.json())

const posts = [
    {
        id: 1,
        title: "Post 1",
        description: "Explore our extensive collection of shoes for every occasion. Discover styles, sizes, and comfort to elevate your footwear game. Shop now!"
    },
    {
        id: 2,
        title: "Post 2",
        description: "Discover the fascinating world of rain. Learn its importance, impact on nature, and how to enjoy rainy days to the fullest. Join our journey into raindrops!"
    },
    {
        id: 3,
        title: "Post 3",
        description: "Discover how to optimize your meta tags for better SEO. Learn the best practices for crafting effective meta titles and descriptions that attract clicks."
    },
    {
        id: 4,
        title: "Post 4",
        description: "Discover how Google revolutionizes search. Learn tips, tricks, and hidden features to optimize your experience with Google for better results."
    }
]

app.get('/posts', (req, res) => {
    return res.json(posts)
})

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    
    if (id) {
        const post = posts.find(post => post.id === Number(id));
        if (!post) {
            return res.json({message: "post not found"})
        }
        res.json(post)
    }
})

app.use('/', createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: false }));

app.listen(PORT, () => `Server running on port ${PORT}`);