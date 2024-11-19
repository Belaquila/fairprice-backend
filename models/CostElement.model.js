const mongoose = require('mongoose');

const CostElementSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['main', 'extra'], 
    required: true 
  },
  cost_type: { 
    type: String, 
    enum: ['ingredient', 'HR', 'place', 'energy'], 
    required: true 
  },
});

module.exports = mongoose.model('CostElement', CostElementSchema);