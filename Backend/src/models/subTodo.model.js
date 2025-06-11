import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        default: 'low',
        enum: ['low', 'medium', 'high']
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);