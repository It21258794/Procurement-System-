"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_service_1 = __importDefault(require("../services/site.service"));
// Function to insert a new site
const insertSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = req.body;
        const site = yield site_service_1.default.insertSite(dto);
        res.status(200).json(site);
    }
    catch (err) {
        res.status(400).json({ err: err });
    }
});
const getSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sites = yield site_service_1.default.getSite();
        res.status(200).json(sites);
    }
    catch (err) {
        res.status(400).json({ err: 'Sites not Found' });
    }
});
exports.default = { insertSite, getSite };
