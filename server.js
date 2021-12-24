const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server listening on PORT ' + PORT);
});

// GET fitness data
app.get('/fitness', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
})