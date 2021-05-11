


var form = document.getElementById("myForm")



form.addEventListener('submit',function(e){
  e.preventDefault()

var search = document.getElementById("search").value

var orginalName = search.split(' ').join('')

//alert(orginalName)

fetch("https://api.github.com/users/"+orginalName)
.then((result) => result.json())
.then((data) => {

  console.log(data)

  document.getElementById("result").innerHTML = `

     <img src="${data.avatar_url}"/>
  `
  })

})