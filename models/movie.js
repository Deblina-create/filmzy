const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    plot: {
        type: String
    },
    genre: {
        type: [String],
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
    releaseDate: {
        type: Date,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    rated: {
        type: String
    },
    actors: {
        type: [String]
    },
    imdbId: {
        type: String,
        required: true
    },
    createdBy: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    lastModifiedBy: {
        type: String
    },
    lastModifiedOn: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Movie", movieSchema);