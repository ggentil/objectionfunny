import { CallbackHell } from "../services/taskService";

class TaskController {
  async test(req, res) {
    CallbackHell();
    res.status(200).json();
  };
}

export default new TaskController();
