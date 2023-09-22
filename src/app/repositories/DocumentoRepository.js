import Documento from "../model/Documento.js";

class DocumentoRepository {
    async create(documento) {
        const documentoModel = new Documento(documento);
        documentoModel.save();
    }

    async findAll() {
        return await Documento.find();
    }

    async findById(id) {
        return await Documento.findById(id);
    }

    async update(id, documento) {
        await Documento.findByIdAndUpdate(id, documento);
    }

    async delete(id) {
        await Documento.findByIdAndDelete(id);
    }

}

export default new DocumentoRepository();