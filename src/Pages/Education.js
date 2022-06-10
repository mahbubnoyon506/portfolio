import React from 'react';
import educationbg from '../assets/images/bg/4.jpg'
import stepbg from '../assets/images/bg/11.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Education = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div class="pt-10 pb-20" style={{ backgroundImage: `url(${educationbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <h1 class="pb-5 text-5xl font-bold pl-20">Education</h1>
            <div className='hero px-20'>
                <div class="">
                    <div class="card  shadow-xl shadow-blue-500/50 ">
                        {/* <figure><img src={stepbg} alt="Shoes" /></figure> */}
                        <div class="card-body">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', fontSize: '20px', color: '#7E3DFF', flexShrink: 0 }}>
                                        Diploma In Civil Engineering
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>Dhaka Polytechnic Institute</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Department: Civil Engineering.
                                        <br />
                                        Duration: 2011 - 2015
                                        <br />
                                        I have obtained a Diploma in Civil Engineering Certificate from Dhaka Polytechnic Institute under Bangladesh Technical Education Board.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '33%', fontSize: '20px', color: '#7E3DFF', flexShrink: 0 }}>Secondary School Certificate</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        Civil Aviation High School
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Group: Science.
                                        <br />
                                        Duration: 2007 - 2011
                                        <br />
                                        I have obtained Secondary School Certificate from Civil Aviation High School under the Science Department of Bangladesh National Board of Education.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '33%', fontSize: '20px', color: '#7E3DFF', flexShrink: 0 }}>
                                        Complete Web Development
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        Programming Hero
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Mentor: Jhankar Mahbub
                                        <br />
                                        Duration: Jan 2022 - June 2022
                                        <br />
                                        I have learned HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,  ES6, DOM, HTTP, Rest API, React Js, Node Js, Express Js, TypeScript, Next Js, React Native, MongoDB, and the use of too many relative libraries.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;




