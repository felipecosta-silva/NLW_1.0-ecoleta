import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsControllers {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.110:3333/uploads/${item.image}`, //Lembrar de trocar a URL para o endereço que deve retornar, foi trocado para '//192.168.0.108:/uploads' para poder utilizar no EXPO versão Mobile
      };
    });
    return response.json(serializedItems);
   }
}

export default ItemsControllers;