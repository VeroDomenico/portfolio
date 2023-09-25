import React from 'react';
import Cards from '../components/Cards/Cards'



export default function ProjectsSkills() {
    return (
        <div className={''}>
            <h1 className='flex justify-center'>My Project's</h1>
            <div className='flex flex-row justify-center py-6'>
                <Cards str={"/OneImprint.jpg"} title={"OneImprint"} desc={"Full-Stack Development"} />
                <Cards str={"/headshot.png"} title={"OneImprint"} desc={"Full-Stack Development"} />
            </div>
        </div>
        );
}

