const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
});

// The Product model
const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desc: {
        type: Sequelize.TEXT,
    },
    SKU: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.DECIMAL,
    },
    category_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ProductCategory',
            key: 'id',
        },
    },
    inventory_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ProductInventory',
            key: 'id',
        },
    },
    discount_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Discount',
            key: 'id',
        },
    },
    created_at: {
        type: Sequelize.DATE,
    },
    modified_at: {
        type: Sequelize.DATE,
    },
    deleted_at: {
        type: Sequelize.DATE,
    },
});

// The ProductCategory model
const ProductCategory = sequelize.define('ProductCategory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desc: {
        type: Sequelize.TEXT,
    },
    created_at: {
        type: Sequelize.DATE,
    },
    modified_at: {
        type: Sequelize.DATE,
    },
    deleted_at: {
        type: Sequelize.DATE,
    },
});

const ProductInventory = sequelize.define('ProductInventory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DATE,
    },
    modified_at: {
        type: Sequelize.DATE,
    },
    deleted_at: {
        type: Sequelize.DATE,
    },
});

const Discount = sequelize.define('Discount', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desc: {
        type: Sequelize.TEXT,
    },
    discount_percent: {
        type: Sequelize.DECIMAL,
    },
    active: {
        type: Sequelize.BOOLEAN,
    },
    created_at: {
        type: Sequelize.DATE,
    },
    modified_at: {
        type: Sequelize.DATE,
    },
    deleted_at: {
        type: Sequelize.DATE,
    },
})


Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });


module.exports = {
    Product,
    ProductCategory,
    ProductInventory,
    Discount,
};
