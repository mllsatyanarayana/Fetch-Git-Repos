


var form = document.getElementById("myForm")



form.addEventListener('submit',function(e){
  e.preventDefault()

var search = document.getElementById("search").value

var orginalName = search.split(' ').join('')

//alert(orginalName)

//fetch("https://api.github.com/users/"+orginalName)
fetch('https://api.github.com/users/'+orginalName+'/repos')
  .then((result) => result.json())
  .then((data) => {
  
    console.log(data);
    var statusHTML = '';
      $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.html_url + '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '<td>' + status.full_name + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
 
    document.getElementById("tbody").innerHTML =  statusHTML; 
  }

  )
}
)

