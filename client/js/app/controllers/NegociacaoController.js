class NegociacaoController {
    
    constructor() {        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let helper = new DateHelper();

        let negociação = new Negociacao(helper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);

        let diaMesAno = helper.dataParaTexto(negociação.data);

        console.log(negociação);

        //adicionar a negociação em uma lista
    }
}