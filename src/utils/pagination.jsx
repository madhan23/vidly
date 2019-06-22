import _ from "lodash";
export function moviesplits(items,pageno,pagesize){

const startindex=(pageno-1)*pagesize;
 const data=_.slice(items,startindex);
return _.take(data,pagesize)


};

