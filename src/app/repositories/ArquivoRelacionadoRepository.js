import ArquivoRelacionadoModel from '../model/ArquivoRelacionado.js';

class ArquivoRelacionadoRepository {
    async create(arquivoRelacionados){
        const arquivoRelacionado = new ArquivoRelacionadoModel(arquivoRelacionados);
        arquivoRelacionado.save();
    }

    async findAll(){
        return await ArquivoRelacionadoModel.find();
    }

    async findById(id){
        return await ArquivoRelacionadoModel.findById(id);
    }

    async update(id, arquivoRelacionados){
        await ArquivoRelacionadoModel.findByIdAndUpdate(id, arquivoRelacionados);
    }

    async delete(id){
        await ArquivoRelacionadoModel.findByIdAndDelete(id);
    }
    

}

export default new ArquivoRelacionadoRepository();