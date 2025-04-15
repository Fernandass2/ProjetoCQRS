import { Router } from "express";
import { 
    getMedicos, 
    createMedicoHandler, 
    updateMedicoHandler, 
    deleteMedicoHandler 
} from "../controllers/UserControllers";

const router = Router();

router.get("/med", getMedicos);
router.post("/create", createMedicoHandler);
router.put("/update/:id", updateMedicoHandler);
router.delete("/delete/:id", deleteMedicoHandler);

export default router;
