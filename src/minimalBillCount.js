function minimumBillCount(value, availables){
  availables = availables.sort((a,b)=> {return b-a;});
//	console.log(availables);
	let done = false;
	let billCount = 0;
  let fullBills=0;
	//console.log('value\t','item\t', 'fullBills\t','remainder');
	availables.forEach( function (item) {
		const remainder = value%item;
		fullBills = Math.floor(value/item);
		//console.log(value+'\t', item+ '\t', fullBills+ '\t\t', remainder);
		billCount += fullBills;
		value -= fullBills*item;
	});
  return billCount;
}

minimumBillCount(110,[10, 50, 20]);