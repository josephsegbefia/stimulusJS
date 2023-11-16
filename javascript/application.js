import { Application, Controller } from 'stimulus';
import DisableButtonController from "./controllers/disable_button_controller.js";

window.Stimulus = Application.start();
Stimulus.register('disable-button', DisableButtonController);
