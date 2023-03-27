const express = require('express')
const router = express.Router()


// router.get('/', (req, res) => {
//     res.send("hello product")
// })

const products = [
    {
        id: 1,
        name: "iPhone 1",
        price: 150
    },
    {
        id: 2,
        name: "iPhone 2",
        price: 200
    }
]

router.get('/', (req, res) => {
    res.send(products)
})














module.exports = router