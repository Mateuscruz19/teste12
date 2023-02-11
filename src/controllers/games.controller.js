import { connectionDB } from "../database/db.js";

export async function create(req, res) {
  
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  try {
      await connectionDB.query(
          'INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)',
          [name, image, stockTotal, categoryId, pricePerDay]);
          
        res.sendStatus(201);
  } catch (error) {
      res.status(500).send(error.message);
  }
}

export async function findAll(req, res) {
  const { name } = req.query;

  try {
      
      let allGames;

      if(name) {
          allGames = await connectionDB.query(
              `SELECT games.*,
              categories.name AS "categoryName" 
              FROM games JOIN categories
              ON games."categoryId" = categories.id
              WHERE games.name ILIKE '%' || $1 || '%';`,[name]
              );

          return res.send(games.rows);
          }

      games = await connectionDB.query(
              `
              SELECT games.*,
              categories.name AS "categoryName" 
              FROM games JOIN categories
              ON games."categoryId" = categories.id`
            );
        
            res.send(games.rows);
  } catch (error) {
      res.status(500).send(error.message);
  }

  res.status(200)
}
