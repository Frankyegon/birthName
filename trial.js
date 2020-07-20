const wrapper =document.querySelector('.wrapper')
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e){
    e.preventDefault();
    var formData = new FormData(form[0]);
    
   //var date = parseInt(formData.get(DD));
    //if ((formData.get(DD))>1){alert("date less than 1");}else{alert("ready to proceed");}
     //else if(DD>31){alert("enter date less than 31");}
     //else{alert("proceed")}

    alert(formData.get('DD'))
    alert(formData.get('MM'))
    alert(formData.get('CC'))
    alert(formData.get('YY'))
    alert (formData.get('DD')+formData.get('MM')+formData.get('CC')+formData.get('YY'));
}


document.addEventListener("DOMContentLoaded",function () {
    submitInput.addEventListener('click',getDataForm, false);
}, false)



