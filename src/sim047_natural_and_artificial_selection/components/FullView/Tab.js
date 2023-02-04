import React, { useEffect } from "react";
import Button from "../../../app/components/Button";

const Tab = ({ data, btnActive, selectTab, disableIndex, isPopupActive }) => {

  const getAriaLabel=(item,i)=>{
    if(btnActive==i){
      return item.tab+" "+data.selected
    }else{
         return item.tab      
    }
  }
  return (
    <>
      <div className="btn-container">
        {data.tabs.map((item, i) => {
          const state=getAriaLabel(item,i)
          return (
            <Button label={item.tab}
              key={item.id}
              text={item.tab}
              classes={`tabs label ${btnActive == i ? 'primary select' : ''}  `}
              onClick={() =>{
                if(btnActive != i) { //added coz of a11y
                  selectTab(i)
                }
                }
              }
              disabled={disableIndex == i ? true : false}
              isPopupActive={isPopupActive}
              ariaHidden={isPopupActive}
              ariaPressed={ btnActive == i?true:false}
            />
          )
        })}
      </div>

    </>
  )
}

export default Tab