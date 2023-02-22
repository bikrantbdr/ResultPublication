const Result = require('../models/resultModel');
exports.getResultBySymbolNumber = async (req, res) => {
    
    body = req.body;
    const result = await Result.findOne({symbolnumber: body.symbolnumber});

    if (result) {
        if(result.DOB === body.DOB)
        {
            console.log("DOB matched");
        }
        else{
            console.log("DOB not matched");
        }
        console.log(result);
        res.json(result);
    }
    else {
        res.status(404).json({ message: 'Result not found' });
    }
    
}

exports.putResult = async (req, res) => {
    const body = req.body;
    const result = new Result({
        symbolnumber: body.symbolnumber,
        DOB: body.DOB,
        name: body.name,
    });


    const savedResult = await result.save();
    res.json(savedResult);
}