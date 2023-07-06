import moment from "moment";
class FormattedDateTime{
    formatted(tipo = null){
        let formatted;
        switch (tipo) {
            case 'date':
                // YYYY-MM-dd
                formatted = new Date().toISOString().split('T')[0];
                break;
            case 'time':
                // HH:MM:ss
                formatted = moment().format('HH:mm:ss');
                break;
            default:
                formatted = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, '/');
        }
        return formatted
    }
}
export default new FormattedDateTime();