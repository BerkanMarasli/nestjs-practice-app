import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class CatsService {
  async getAllCats() {
    const filePath = './databases/cats.json';
    const json = await readFile(filePath, 'utf8');
    return JSON.parse(json);
  }
}
