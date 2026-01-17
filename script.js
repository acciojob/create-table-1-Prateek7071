const table=  document.getElementById('sampleTable')
let level=-1
let level2=0
function insert_Row() {
	level+=2
	level2+=2
	let child_td = document.createElement('tr')
	child_td.innerHTML=`
	<td>New Cell${level}</td> 
	<td>New Cell${level2}</td>
	`
	table.appendChild(child_td)
}
