/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/
    $(document).ready(function() {
        $(function() {
            $("#alerta").draggable();
        });
         //Inserir um comando para deixar a div #alerta movel  (Dica: função da jqueryui)
        
        contador();//chamar a funcão chamada "contador"
        
        setTimeout(toggleAlert, 5000); //Fazer a alerta aparecer depois de 5 segundos, chamando ã função toggleAlert
        
        $("#novidadesform [type='submit']").click(function(e) {
            e.preventDefault();
            
            var email = $('input').val(); //criar uma variavel e pegar o conteudo digitado na input
            
            //verificar se o campo não está vazio com if e else    
            if (email=='')
            //se for vazio execultar o comando abaixo
            //toastr.error('Preencha um email!', 'Error!');
            {
             toastr.error('Preencha um email!', 'Error!');   
            }
            else 
            //se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
            // -- passando o paramentro "meuemail" e o dataType JSON

            {
                $.ajax({
                type: "POST",
                url: "http://51.254.204.44/ti/enviar_email.php",
                dataType: 'JSON',
                sucess:sucess,
                data:{'meuemail':email}
                }).
            //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
            // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
            //limpar input
            //fechar a alerta depois de 2 segundos            
                success(function(){
                    toastr.sucess('deu bom');
                    $(".resultado").html(email+' foi salvo em nossa lista de novidades =)');
                    $('input').val('');
                    setTimeout(toggleAlert,2000);
                });
/*                error(function(){
                    toastr.error('deu ruim');
                }) */
            }
        })
    });            
        
        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor


/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    console.log("entra")
    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 5;

function contador() {
    if (i<=0){
        $("#contador").hide();
    }
    if (i<=3){
        $("#contador").css("color", "red");
    }
    $("#contador").html("Alerta aparecendo em " +i);

    setTimeout(function(){
        i--;
        if (i>=-1){
            contador()
        }
    },1000)
    //Ocultar a div #contador qnd o cronometro ser menor ou igual a ZERO

    //Mudar a cor do texto da div #contador qnd o cronometro ser menor ou igual a TRES

    //Sinalizar contador. Ex: Alerta aparecendo em: __  (usar a div #contador)
}

