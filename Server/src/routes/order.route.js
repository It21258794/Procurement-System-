"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
var express_1 = require("express");
var order_controller_1 = require("../controller/order.controller");
var authGuard_1 = require("../utils/authGuard");
exports.orderRoute = (0, express_1.Router)();
exports.orderRoute.post('/sendOrderEmail', order_controller_1.default.sendOrder);
exports.orderRoute.post('/createOrder', order_controller_1.default.createOrder);
exports.orderRoute.get('/getSiteOrder/:siteId', authGuard_1.default, order_controller_1.default.getOrderBySite);
exports.orderRoute.get('/getOrderById/:orderId', authGuard_1.default, order_controller_1.default.getOrderById);
exports.orderRoute.put('/setStatus', order_controller_1.default.changeStatus);
exports.orderRoute.get('/getOrderBudget/:orderId', authGuard_1.default, order_controller_1.default.getOrderAndBudget);
exports.orderRoute.delete('/deleteOrder/:id', authGuard_1.default, order_controller_1.default.deleteOrderById);
exports.orderRoute.get('/getOrdersByMonth', order_controller_1.default.getOrders);
//get all orders supplier
exports.orderRoute.get('/getAllOrders', order_controller_1.default.getAllOrders);
