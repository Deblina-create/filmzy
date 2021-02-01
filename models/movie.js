const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    plot: {
        type: String
    },
    genreIds: {
        type: [String],
        required: true
    },
    movieUrl: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Movie", movieSchema);