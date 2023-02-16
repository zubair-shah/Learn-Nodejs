
import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "./handlers/products";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/updates";
import { validateInputErrors } from "./modules/middleware";
const router = Router();
/**
 * Product
 */
router.get("/product", getAllProducts);

router.get("/product/:id", getOneProduct);

router.post("/product", body('name').isString(), validateInputErrors, createProduct);

router.put("/product/:id", body('name').isString(), validateInputErrors, updateProduct);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.post("/update",
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('prodcutId').exists().isString(),
  createUpdate);

router.put("/update/:id",
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']).optional(),
  body('version').optional()
  , updateUpdate);

router.delete("/update/:id", deleteUpdate);

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => { });

router.get("/updatepoint/:id", (req, res) => { });

router.post("/updatepoint",

  (req, res) => { });

router.put("/updatepoint/:id",
  body('name').optional().isString(),
  body('description').optional().isString(),
  body('updateId').optional().isString(),
  (req, res) => { });

router.delete("/updatepoint/:id", (req, res) => { });

export default router;