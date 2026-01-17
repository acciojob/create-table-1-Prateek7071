const table=  document.getElementById('sampleTable')
let level=2
let level2=0
let level3=1
function insert_Row() {
	level++
	level2++
	level3++
	let child_td = document.createElement('tr')
	child_td.innerHTML=`
	<td value="New Cell${level2}">Row${level} cell1</td> 
	<td value="New Cell${level3}">Row${level} cell2</td>
		`
	table.appendChild(child_td)
  
  
}