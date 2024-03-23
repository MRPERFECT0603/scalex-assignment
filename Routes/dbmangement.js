const express = require('express');
const router = express.Router();
const { createPair, findPairs, updatePair, deletePair } = require('../Controllers/dbMangement');

router.post('/', createPair);
router.get('/', findPairs);
router.put('/:id', updatePair);
router.delete('/:id', deletePair);

module.exports = router;
