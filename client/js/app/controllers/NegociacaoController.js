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
        let data = helper.textoParaData(this._inputData.value);

        let negociação = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

        let diaMesAno = helper.data

        console.log(diaMesAno);

        //adicionar a negociação em uma lista
    }
}