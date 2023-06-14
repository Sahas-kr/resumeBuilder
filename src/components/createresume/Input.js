import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import InputControl from '../inputcontrol/InputControl'

function Input() {
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Project",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Other"
    }
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievements]: {
          id: sections.achievements,
          sectionTitle: sections.achievements,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0])
    const [activeInformation, setActiveInformation] = useState(resumeInformation[sections[Object.keys(sections)[0]]])
    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]])
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    })


    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
      };
      


    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title ex. Frontend developer" defaultValue={values.title}  onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }/>
                <InputControl label="Company Name" placeholder="Enter company name ex. Amazon" defaultValue={values.companyName}   onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }/>
            </div>
            <div className={styles.row}>
                <InputControl label="Certificate Link" placeholder="Enter certificate link" defaultValue={values.certificationLink} onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          } />
            </div>
            <div className={styles.row}>
                <InputControl label="Location" placeholder="Enter location ex. Remote" defaultValue={values.Location}  onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          } />
            </div>
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" defaultValue={values.startDate} onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }/>
                <InputControl label="End Date" type="date" defaultValue={values.endDate}  onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }/>
            </div>


            <div className={styles.column}>
                <label>Enter Work Description</label>
                <InputControl placeholder="line1" 
                defaultValue={values.points ? values.points[0] : ""} onChange={(event) => handlePointUpdate(event.target.value, 0)}/>
                <InputControl placeholder="line2" 
                defaultValue={values.points ? values.points[1] : ""} onChange={(event) => handlePointUpdate(event.target.value, 1)}/>
                <InputControl placeholder="line3" 
                defaultValue={values.points ? values.points[2] : ""} onChange={(event) => handlePointUpdate(event.target.value, 2)}/>
            </div>

        </div>
    )

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title ex. Chat App" defaultValue={values.title}  onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          } />
            </div>
            <InputControl label="Overview" placeholder="Enter basic overview of project" defaultValue={values.overview} onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        } />
            <div className={styles.row}>
                <InputControl label="Deployed Link" placeholder="Enter deployed link of project" defaultValue={values.link}  onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }/>
                <InputControl label="Github Link" placeholder="Enter github link of project" defaultValue={values.github}  onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }/>
            </div>
            <div className={styles.column}>
                <label>Enter Work Description</label>
                <InputControl placeholder="line1" 
                defaultValue={values.points ? values.points[0] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 0)}/>
                <InputControl placeholder="line2" 
                defaultValue={values.points ? values.points[1] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 1)}/>
                <InputControl placeholder="line3" 
                defaultValue={values.points ? values.points[2] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 2)}/>
                <InputControl placeholder="line4" 
                defaultValue={values.points ? values.points[3] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 3)}/>
            </div>
        </div>
    )

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title ex. B-Tech" defaultValue={values.title}  onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }/>
            </div>
            <InputControl label="College/School Name" placeholder="Enter your school/college" defaultValue={values.college}  onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }/>
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" defaultValue={values.startDate}  onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }/>
                <InputControl label="End Date" type="date" defaultValue={values.endDate}   onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }/>
            </div>
        </div>
    )

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Name" placeholder="Enter your full name" defaultValue={values.name}  onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>
                <InputControl label="Title" placeholder="Enter your title ex. Fronted developer" defaultValue={values.title}    onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }/>
            </div>
            <div className={styles.row}>
                <InputControl label="Linkedin Link" placeholder="Enter your Linkedin profile link" defaultValue={values.linkedin}  onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }/>
                <InputControl label="Github Link" placeholder="Enter your Github profile link" defaultValue={values.github}  onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }/>
            </div>
            <div className={styles.row}>
                <InputControl label="Email" type="email" placeholder="Enter your email id" defaultValue={values.email}   onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/>
                <InputControl label="Enter phone" type="number" placeholder="Enter your Phone number " defaultValue={values.phone}   onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }/>
            </div>
        </div>
    )

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="line1" 
                defaultValue={values.points ? values.points[0] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 0)}/>
                <InputControl placeholder="line2" 
                defaultValue={values.points ? values.points[1] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 1)}/>
                <InputControl placeholder="line3" 
                defaultValue={values.points ? values.points[2] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 2)}/>
                <InputControl placeholder="line4" 
                defaultValue={values.points ? values.points[3] : ""}  onChange={(event) => handlePointUpdate(event.target.value, 3)}/>
            </div>
        </div>
    )

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl label="Summary" placeholder="Enter your objective/summary" defaultValue={values.summary}   onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        } />
        </div>
    )
    const otherBody = (
        <div className={styles.detail}>
            <InputControl label="Other" placeholder="Other" defaultValue={values.other} onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }/>
        </div>
    )

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;
            default: return null;
        }
    }

    useEffect(()=>{
        const activeInfo = resumeInformation[sections[activeSectionKey]]
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey])
        
    },[activeSectionKey])

    return (

        <div className={styles.containerInput}>
            <div className={styles.header}>
                {Object.keys(sections).map((key) => <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} key={key} onClick={() => setActiveSectionKey(key)}>
                    {sections[key]}
                </div>)}
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter Section title" value={sectionTitle} onChange={(e)=>setSectionTitle(e.target.value)} />

                <div className={styles.chips}>
                        {
                            activeInformation?.details ? activeInformation?.details?.map((item,index)=>(
                                <div className={styles.chip} key={item.title+index}>
                                     <p>{sections[activeSectionKey]} {index+1} <i class="fa-solid fa-circle-xmark"></i></p>
                                </div>
                            ))
                            :""
                        }
                    
                </div>

                {generateBody()}

                        <button className='btn btn-success' style={{width:'fit-content',transition:'200ms'}}>Save</button>

            </div>
        </div>

    )
}

export default Input