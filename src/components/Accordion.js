import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from 'react';

function Accordion ({ items }){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handelClick = (nextIndex) => {
        setExpandedIndex( (currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });

        // if(expandedIndex === nextIndex){
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    };

    const renderedItems = items.map((item, index) =>{
        const isExpended = index === expandedIndex;

        const icon = <span className="text-3xl">
            {isExpended ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div
                 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                 onClick={() => handelClick(index)}>
                    {item.label}
                    {icon}
                    </div>
                {isExpended && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;