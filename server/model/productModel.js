const mongoose = require('mongoose');
const schema = mongoose.schema


const CategorySchema = new schema(
    {
        name: { type: 'string', required: true}
    }
)


const ProductSchema = new schema(
    {
        name: { type: 'string', required: true},
        abjective: { type: 'string', required: true},
        description: { type: 'string', required: true},
        price: { type: 'string', required: true},
        category: { type: 'string', required: true},

    }
)


module.exports  = mongoose.model('Product', ProductSchema);  