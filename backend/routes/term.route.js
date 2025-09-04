import express from "express";
import { getTerms } from "../controller/term.controller.js";

const router = express.Router();

router.get("/", getTerms);

export default router;
