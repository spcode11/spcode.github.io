const requestAjax = (URL_TO_FETCH, func, method = 'get', contentJson = null) => {
    if( method == 'get'){
        fetch(URL_TO_FETCH, {
        method: 'get' // opcional 
        })
        .then(response => { 
        return response.json();
        }).then( response => {
            //debugger
            let conteudo_portfolio = document.getElementById('conteudo-portfolio');
            retorno = func(response.conteudo);
            conteudo_portfolio.innerHTML = retorno;
            // debugger          
        })
        .catch(function(err) { 
            console.error(err); 
        });
    } 
}




const makeHtml = (content) => {
    
    let html = '';
    content.forEach((e,i) =>{
        
        html += `
       
            <div class="col-12 col-md-5">
                <button type="button" class="card card-client py-5" data-toggle="modal" data-target="#portfolio-${i}" style="background-image: url(${e.backgroundCard}); background-size: cover; background-repeat: no-repeat;">
                    <div class="card-body">
                    <div class="card-title text-center">
                        <h3 class="title is-4">${e.nome}</h3>
                        <p class="subtitle is-6">${e.descricao}</p>
                    </div>
                    </div>
                </button>
            </div>
                
            <!-- Modal -->
            <div class="modal fade" id="portfolio-${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center">
                        <h5 class="modal-title" id="exampleModalLabel">${e.nome}</h5>
                        <button type="button" class="close mx-3" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body row mx-0 p-0 justify-content-around">  
                            <a href="${e.imagemDesktop}" class="col-12 col-md-6 modal-item" data-toggle="modal" data-target="#exampleModal" data-lightbox="image-1" data-title="Galeria">
                                <div class="card-body">
                                    <div class="card-title my-0 text-center">
                                    <h3 class="title my-0"><i class="fas fa-desktop"></i></h3>
                                    </div>
                                </div>
                            </a>
                            <a href="${e.imagemMobile}" class="col-12 col-md-6 modal-item" data-toggle="modal" data-target="#exampleModal" data-lightbox="image-1" data-title="Galeria">
                                <div class="card-body">
                                    <div class="card-title my-0 text-center">
                                    <h3 class="title my-0"><i class="fas fa-mobile-alt"></i></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> `
    });

    return [html];
}


requestAjax('assets/js/content.json',makeHtml);