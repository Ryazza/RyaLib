const FunctionService = require('../services/code.service')

exports.newFunction = async (req, res) => {
    try {
        let newFunctionRes = await FunctionService.newFunction(req.body)
        if(newFunctionRes.success === true) {
            res.status(201)
            res.send(newFunctionRes)
        } else {
            res.status(400)
            res.send(newFunctionRes)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            error: e
        })
    }
}
