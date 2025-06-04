

import express from 'express';
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);

// Place these AFTER fixed routes
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.get("/:blogId", getBlogById); // move this to the very bottom

export default blogRouter;