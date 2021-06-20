const CodeModel = require('../models/codeModel');

exports.newFunction = async (form) => {
    if (form.name.trim() === "") {
        return({
            success: false,
            error: "Merci de renseigné un nom"
        })
    }
    if(form.language.trim() === "") {
        return({
            success: false,
            error: "Merci de renseigné le language utilisé"
        })
    }
    if(form.code.trim() === "") {
        return({
            success: false,
            error: "Merci de renseigné le code utilisé"
        })
    }
    if(form.description.trim() === "") {
        return({
            success: false,
            error: "Merci de renseigné la description"
        })
    }
    const newCode = new CodeModel({createdAt: new Date()});
    Object.assign(newCode, form)
    await newCode.save();
    return({
        success: true,
    })
}
