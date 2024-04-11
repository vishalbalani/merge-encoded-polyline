import { Router } from "express";
import { mergePolylineSerice } from "../controllers/mergePolylineController.js";

const mergePolylineRoute = Router();

mergePolylineRoute.post("/mergePolyline", mergePolylineSerice);


export default mergePolylineRoute;