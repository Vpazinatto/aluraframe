class DateHelper {

    textoParaData(texto) {
        return texto.split('-');
    }

    dataParaTexto(data) {
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear(); 
    }

}