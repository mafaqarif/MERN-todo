import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const TodoScheme: Schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>("Todo", TodoScheme);
