const { Router } = require("express");

const { Answer, Result } = require("../../models");
const manageAllErrors = require("../../utils/routes/error-management");

const router = new Router();