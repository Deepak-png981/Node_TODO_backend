import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.json({
                success: false,
                message: "Title and description are mandatory"
            })
        }
        await Task.create({
            title,
            description,
            user: req.user
        });
        res.status(201).json({
            success: true,
            message: "Task created successfully"
        })
    } catch (error) {
        next(error);
    }
}

export const getMyTask = async (req, res, next) => {
    try {
        const id = req.user._id;
        const tasks = await Task.find({ user: id });
        res.status(200).json({
            success: true,
            message: "All tasks are fetched successfully",
            tasks
        })
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task)
            return next(new ErrorHandler("Invalid Id", 404));
        task.isCompleted = !task.isCompleted;

        await task.save();
        res.status(200).json({
            success: true,
            message: "Task Updates",
            task
        })
    } catch (error) {
        next(error);
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task)
            return next(new ErrorHandler("Invalid Id", 404));

        await task.deleteOne();
        res.status(404).json({
            success: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error);
    }
}