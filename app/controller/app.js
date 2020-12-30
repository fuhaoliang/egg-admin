'use strict';

const Controller = require('egg').Controller;

class AppController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '';
  }
}


module.exports = AppController;
