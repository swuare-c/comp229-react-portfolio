import Project from "../models/project.model.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    req.project = project;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve project" });
  }
};

const read = (req, res) => res.json(req.project);

const update = async (req, res) => {
  try {
    Object.assign(req.project, req.body);
    await req.project.save();
    res.json(req.project);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await req.project.deleteOne();
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, projectByID, read, update, remove };
