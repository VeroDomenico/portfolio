import React from 'react';
import Cards from '../components/Cards/Cards'



export default function ProjectsSkills() {
    return (
        <div className={''}>
            <h1 className='flex justify-center'>My Project's</h1>
            <div className='flex flex-row justify-center py-6'>
                <Cards str={"/OneImprint.jpg"} title={"OneImprint"} desc={"Full-Stack Development"} link={'https://www.oneimprint.com/'} />
                <Cards str={"/VisaCCOLicense.png"} title={"Visa"} desc={"Engineer"} link={'https://www.visa.com'}/>
            </div>
        </div>
        );
}

