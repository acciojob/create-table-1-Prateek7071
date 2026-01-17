const table=  document.getElementById('sampleTable')
let level=0
let level2=1
function insert_Row() {
	level+=2
	level2+=2
	let child_td = document.createElement('tr')
	child_td.innerHTML=`
	<td>New cell${level}</td> 
	<td>New cell${level2}</td>
	`
	table.appendChild(child_td)
}
