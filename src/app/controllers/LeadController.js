import FormattedDateTime from "../Utils/FormattedDateTime.js";
import Lead from "../model/Lead.js";

class LeadController {
    // async findAll(request, response){
    //     try {
    //
    //     }catch (e) {
    //         response.json(e);
    //     }
    // }

    async store(request, response){
        // const codigo = request.body.codigo;
        try {
            const formattedDateTime = FormattedDateTime.formatted();
            const lead = new Lead(
                null,
                request.body.nomeCompleto,
                request.body.companhia,
                request.body.telefone,
                request.body.email,
                request.body.status,
                request.body.criadoPor,
                null,
                formattedDateTime,
                null
            );
            response.json(lead);
        }catch (e) {
            response.json(e);
        }
    }
}
export default new LeadController();