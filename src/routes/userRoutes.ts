
import { Router } from "express";
import { getUsersmedic, create, update,deleta } from "../controllers/userControllers";
const route = Router();
route.get("/users",getUsersmedic);
route.post("/create", create);
route.put("/update/:id",update)
route.delete("/delete/:id",deleta)
export default route;

