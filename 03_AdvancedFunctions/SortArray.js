function Sort(array, criteria){
    if(criteria == 'asc') return array.sort((a,b) => a-b);
    if(criteria == 'desc') return array.sort((a,b) => b-a);
}