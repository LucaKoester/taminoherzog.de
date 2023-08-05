import React, { useState } from 'react';

import './repeater.scss';

export default function repeater(property:any){

    const open = (property:any) => {
        let repeaterBox = document.getElementById("repeater");
        let icon = document.getElementById('icon');
        
        //const [repeaterBoxClass, setRepeaterBoxClass] = useState();
    
        // if (property.item.alt = "open"){
        //     repeaterBox?.classList.add('close');
        //     icon?.classList.add('turnIcon');
    
        //     //setRepeaterBoxClass(repeaterBox?.classList.add('close'));
        // }
        // else if(property.item.alt = "close"){
        //     repeaterBox?.classList.remove('close');
        //     icon?.classList.remove('turnIcon');
        // }
    }


        return (
                <div className="repeater" id="repeater">
                        <span>
                            <a href={property.item.hyperlink} target='_blank'>
                                <h1 className="headline"> {property.item.headline} </h1>
                            </a>
                            <img src={property.item.imageSource} alt={property.item.alt} className="icon" id="icon" onClick={open}/>
                        </span>

                       {property.item.plugIn}
                    
                </div>
            );
}