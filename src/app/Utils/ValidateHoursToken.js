import moment from "moment";
class ValidateHoursToken {

    validateHours(dataHoraT){
        let result = true;
        const dataHoraToken = dataHoraT;
        const dataHoraAtual = moment().add(3, 'hours');
        const dataHoraExpiracao = moment(dataHoraToken, 'YYYY-MM-DD HH:mm:ss').add(8, 'hours').add(1, 'seconds');

        if (dataHoraAtual.isAfter(dataHoraExpiracao)) {
            result = false;
        }
        return result;
    }
}
export default new ValidateHoursToken();