const Post = require('../Models/postModel');
const Comment = require('../Models/CommentModel'); // Imported as Comment

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        // ✅ Fixed: Use uppercase 'Comment' to match import
        const comment = new Comment({ post, user, body });

        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        ).populate("comments").exec();

        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(201).json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};