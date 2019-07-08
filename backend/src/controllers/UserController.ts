// import { Request, Response } from "express";

import { Route, Response, Get, Post, Patch, Header, Body, Security, Controller, Path } from "tsoa";
import { logger } from "../logger/logger";

@Route("/users")
export class UserController extends Controller {
  @Get("/")
  public async getAll() {
    logger.info("Testing");
    return { Hitesh: "fddfdsfds" };
  }

  @Get("/test")
  public async stupidTest() {
    return { Joshi: "Vendetta" };
  }
}
