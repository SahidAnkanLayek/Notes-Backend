const express = require("express");
const {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
} = require("../controllers/notesController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", getAllNotes);
router.post("/:userId", auth, createNote);
router.get("/:id", auth, getNoteById);
router.put("/:id", auth, updateNote);
router.delete("/:id", auth, deleteNote);

module.exports = router;
