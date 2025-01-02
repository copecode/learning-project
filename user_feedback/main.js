const faces = document.querySelectorAll('.faces .face')

// console.log(faces)
for (let face of faces  ) {
    face.addEventListener('click',function (){
        const selectface = document.querySelector('.faces .face span[class*="selected"]')
        if (selectface !== this.firstChild){
            // console.log(selectface)
            if(selectface){
            selectface.classList.remove('selected')
            }
            this.firstChild.setAttribute('class','selected')
        }
    })
}

