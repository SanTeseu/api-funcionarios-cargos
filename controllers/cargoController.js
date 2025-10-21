const Cargo = require("../models/Cargo")
const Funcionario = require("../models/Funcionario")

exports.listar = async (req,res) =>{
    const cargos = await Cargo.findAll();
    res.json(cargos)
}

exports.buscarPorId = async (req,res)=>{
    const {id}= req.params
    const {fun}=req.query

    const include = fun==1 ? [{model:Funcionario,as:"funcionarios"}] : [];

    const cargo = await Cargo.findByPk(id, { include})

    if(!cargo) return res.status(404).json({ erro:"Cargo não encontrado"})

    res.json(cargo)
}

exports.criar = async(req,res)=>{
    const cargo = await Cargo.create(req.body)
    res.status(201).json(cargo)
}

exports.atualizar = async (req,res)=>{
    const {id}=req.params
    const cargo = await Cargo.findByPk(id)
    
    if(!cargo) return res.status(404).json({erro:"Cargo não encontrado"})

    await cargo.update(req.body);
    res.json(cargo)
}

exports.remover = async (req,res)=>{
    const {id} = req.params
    const cargo = await Cargo.findByPk(id)
    
    if(!cargo) return res.status(404).json({erro:"Cargo não encontrado"});
    
    const funcVinculados = await Funcionario.count({
        where:{ cargoId: id }
    })

    if(funcVinculados>0) return res.status(400).json({erro: "Não é possível excluir cargos com funcionários vinculados."})
    
    await cargo.destroy();
    res.sendStatus(204)
}