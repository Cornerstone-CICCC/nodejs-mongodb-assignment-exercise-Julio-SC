import { Router, RequestHandler } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

// 👇 Asegúrate que TypeScript entienda que estas funciones son handlers
router.get('/', productController.getAllProducts as RequestHandler);
router.get('/:id', productController.getProductById as RequestHandler);
router.post('/', productController.createProduct as RequestHandler);
router.put('/:id', productController.updateProduct as RequestHandler);
router.delete('/:id', productController.deleteProduct as RequestHandler);

export default router;
