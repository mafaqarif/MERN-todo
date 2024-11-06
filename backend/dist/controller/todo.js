"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const Todo_1 = __importDefault(require("../model/Todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield Todo_1.default.find();
    res.json(todos);
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = new Todo_1.default({ title: req.body.title });
    yield newTodo.save();
    res.json(newTodo);
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTodo = yield Todo_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedTodo);
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Todo_1.default.findByIdAndDelete(id);
    res.json({ message: "Todo Deleted" });
});
exports.deleteTodo = deleteTodo;
