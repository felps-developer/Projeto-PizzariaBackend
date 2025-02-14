import { Router, Request, Response, request } from "express";
import multer from "multer";
import CreateUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { CloseORderController } from "./controllers/order/CloseORderController";
import { AddItemsController } from "./controllers/order/AddItemsController";
import { RemoveItemsController } from "./controllers/order/RemoveItemsController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailsOrderService } from "./services/order/DetailsOrderService";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { ConcludeOrderController } from "./controllers/order/ConcludeOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//--Rotas User--
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)

//--Rotas Category--
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//--Rotas Product--
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//--Rotas Order--
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new CloseORderController().handle)
router.post('/order/add', isAuthenticated, new AddItemsController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemsController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailsOrderController().handle)
router.put('/order/conclude', isAuthenticated, new ConcludeOrderController().handle)


export { router }

