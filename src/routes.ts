import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

router.post("/settings", settingsController.create);
router.get("/settings/:username", settingsController.findByUsername);
router.put("/settings/:username", settingsController.update)

router.post("/users", usersController.create);

router.get("/messages/:id", messagesController.showByUser);
router.post("/messages", messagesController.create);

export { router };
