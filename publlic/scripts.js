var cardMostrar = document.querySelectorAll('p.content')

    cardMostrar.forEach((item, index) =>{
        document.querySelectorAll('.card h2')[index]
            .addEventListener('click', function(){

                var content = document.querySelectorAll('p.content')[index]

                if(content.classList.contains('mostrar')){
                   content.classList.remove('mostrar')

                    document.querySelectorAll('h2 span')[index].innerHTML = "[mostrar mais]"
                }else{
                    content.classList.add('mostrar')

                    document.querySelectorAll('h2 span')[index].innerHTML = "[ocultar]"
                }
            })
    })

    var lastIndex = 0;
    var images = document.querySelectorAll('.box .boxSingle')
    
    images.forEach((item, index)=>{
            document.querySelectorAll('.bullet-single')[index]
            .addEventListener('click', ()=>{
                let lastImage = document.querySelectorAll('.box .boxSingle')[lastIndex]
                let actualImage = document.querySelectorAll('.box .boxSingle')[index]
    
                document.querySelectorAll('.bullet-single')[lastIndex]
                .classList.remove('active-bullet')
    
                document.querySelectorAll('.bullet-single')[index]
                .classList.add('active-bullet')
    
                lastImage.style.opacity = 0;
                actualImage.style.opacity = 1;
    
                lastIndex = index
            })
    })