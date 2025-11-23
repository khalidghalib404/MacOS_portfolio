import dayjs from "dayjs";
import React from 'react';
import navLinks, {navIcons} from '../Constans/index.js';

const Navbar = () => {
    return <nav>
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <p className="font-bold">Khalid Ghalib</p>
            <ul>
                {navLinks.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>

        {/*Importing the icons*/}
        <div>
            <ul>
                {navIcons.map(({id,img})=>(
                    <li key={id}>
                        <img className="icon-hover" alt={`icon-${id}`} src={img} alt={name}/>
                    </li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A") }</time>
        </div>
    </nav>
};

export default Navbar;