function Sort(array){
    array = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join('\n'))
}

Sort(['alpha', 'beta', 'gamma'])
Sort(['Isacc','Theodor','Jack','Harrison','George'])