import React from "react";

const List = (props) => {
   const {Topic,onlisthandle,Genrelist}=props;
   let classes="list-group-item list-group-item-action";

  return (

    <div className="list-group">
    
      {
        Genrelist.map(list=><a  key={list._id} className={Topic===list.name?classes+" active":classes} onClick={()=>onlisthandle(list.name)}>{list.name}</a>)
      }
    </div>  
  );
};

export default List;
