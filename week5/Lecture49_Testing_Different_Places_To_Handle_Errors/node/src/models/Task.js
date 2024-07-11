const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
