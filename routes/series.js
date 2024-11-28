import express from 'express';
import Serie from '../models/Serie.js';

const router = express.Router();

// Crear (POST)
router.post('/', async (req, res) => {
  try {
    const newSerie = await Serie.create(req.body);
    res.status(201).json(newSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la serie.' });
  }
});

// Leer todas (GET)
router.get('/', async (req, res) => {
  try {
    const series = await Serie.find();
    res.json(series);
  } catch (error) {
    res.status(404).json({ error: 'Error al obtener las series.' });
  }
});

// Actualizar (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedSerie = await Serie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la serie.' });
  }
});

// Eliminar (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedSerie = await Serie.findByIdAndDelete(req.params.id);
    res.json(deletedSerie);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la serie.' });
  }
});

export default router;
