import React from "react";
import _ from "lodash"; 

const Page = (props) => {

    const {currentpageinfo, movielength,PageCount}=props;
    const pageLimit=Math.ceil(movielength/PageCount);  // 9/10 returns 0.9 floating pt. that why convert decimal using ceil()
    const pages=_.range(1,pageLimit+1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
        <li className="page-item"><a className="page-link"onClick={()=>props.previoushandle()} ><span aria-hidden="true">&laquo;</span><span className="sr-only">Next</span></a></li>
        {pages.map(page=><li  key={page} className={ currentpageinfo===page?"page-item  active":"page-item"}><a   onClick={()=>props.pagehandle(page)} className="page-link" >{page}</a></li> )}
        <li className="page-item"><a className="page-link" onClick={()=>props.nexthandle()} ><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
