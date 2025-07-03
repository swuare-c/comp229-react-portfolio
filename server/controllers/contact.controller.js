import Contact from "../models/contact.model.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    req.contact = contact;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve contact" });
  }
};

const read = (req, res) => res.json(req.contact);

const update = async (req, res) => {
  try {
    Object.assign(req.contact, req.body);
    await req.contact.save();
    res.json(req.contact);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await req.contact.deleteOne();
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, contactByID, read, update, remove };
