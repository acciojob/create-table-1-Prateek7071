const table=  document.getElementById('sampleTable')
let level=2
function insert_Row() {
	level++
	let child_td = document.createElement('tr')
	child_td.innerHTML=`
	<td>Row${level} cell1</td> 
	<td>Row${level} cell2</td>
		`
	table.appendChild(child_td)
  
  
}
