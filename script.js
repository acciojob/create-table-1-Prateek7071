const table=  document.getElementById('sampleTable')
let level=-1
let level2=0
function insert_Row() {
	level+=2
	level2+=2
	let child_tr = document.createElement('tr')
	let child_td1 = document.createElement('td')
	let child_td2 = document.createElement('td')
	
	child_td2.textContent = `New Cell${level}`
	child_tr.appendChild(child_td2)
	child_td1.textContent = `New Cell${level2}`
	child_tr.appendChild(child_td1)
	
	table.insertBefore(child_tr,table.firstChild)

}