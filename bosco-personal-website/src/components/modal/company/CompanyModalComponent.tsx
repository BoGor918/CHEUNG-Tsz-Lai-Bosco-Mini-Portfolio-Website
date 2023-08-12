/* eslint-disable react-hooks/exhaustive-deps */
// others
import { useState, useEffect } from "react";

export default function CompanyModalComponent({
  companyName,
  team,
  position,
  jobDuties,
  projects,
  skillSets,
  startDate,
  endDate,
  present,
  logo }: {
    companyName: string;
    team: string;
    position: string;
    jobDuties: string;
    projects: string;
    skillSets: [];
    startDate: any;
    endDate: any;
    present: boolean;
    logo: string;
  }) {
  // tech stack list
  const [techStackList, setTechStackList] = useState('')
  // date variable
  const [toStartDate, setToStartDate] = useState('')
  const [toEndDate, setToEndDate] = useState('')
  const [resultDate, setResultDate] = useState('')

  // date function
  useEffect(() => {
    if (present === true) {
      setToStartDate(new Date(startDate.seconds * 1000).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      setToEndDate("Present")
      // New date instances
      const dt_date1 = new Date(startDate.toDate());
      const dt_date2 = new Date();

      // Get the Timestamp
      const date1_time_stamp = dt_date1.getTime();
      const date2_time_stamp = dt_date2.getTime();

      let calc: Date;

      // Check which timestamp is greater
      if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
      } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
      }

      // Retrieve the date, month, and year
      const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
      // Convert to an array and store
      const calcFormat = calcFormatTmp.split("-");
      // Subtract each member of our array from the default date
      const days_passed = Math.abs(Number(calcFormat[0]) - 1);
      const months_passed = Math.abs(Number(calcFormat[1]) - 1);
      const years_passed = Math.abs(Number(calcFormat[2]) - 1970);

      // Set up custom text
      const yrsTxt = ["Year", "Years"];
      const mnthsTxt = ["Month", "Months"];
      const daysTxt = ["Day", "Days"];

      // Display the result with custom text
      const result = ((years_passed === 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
        years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed === 1) ? months_passed + ' ' + mnthsTxt[0] + ' ' : (months_passed > 1) ?
          months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed === 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
          days_passed + ' ' + daysTxt[1] : '');

      setResultDate(result.trim())
    } else {
      setToStartDate(new Date(startDate.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
      setToEndDate(new Date(endDate.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));

      // New date instances
      const dt_date1 = new Date(startDate.toDate());
      const dt_date2 = new Date(endDate.toDate());

      // Get the Timestamp
      const date1_time_stamp = dt_date1.getTime();
      const date2_time_stamp = dt_date2.getTime();

      let calc: Date;

      // Check which timestamp is greater
      if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
      } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
      }

      // Retrieve the date, month, and year
      const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
      // Convert to an array and store
      const calcFormat = calcFormatTmp.split("-");
      // Subtract each member of our array from the default date
      const days_passed = Math.abs(Number(calcFormat[0]) - 2);
      const months_passed = Math.abs(Number(calcFormat[1]) - 1);
      const years_passed = Math.abs(Number(calcFormat[2]) - 1970);

      // Set up custom text
      const yrsTxt = ["Year", "Years"];
      const mnthsTxt = ["Month", "Months"];
      const daysTxt = ["Day", "Days"];

      // Display the result with custom text
      const result = ((years_passed === 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
        years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed === 1) ? months_passed + ' ' + mnthsTxt[0] + ' ' : (months_passed > 1) ?
          months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed === 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
          days_passed + ' ' + daysTxt[1] : '');

      setResultDate(result.trim())
    }
  }, [])

  // tech stack list function
  useEffect(() => {
    var tempTechStackList = ''

    for (let i = 0; i < skillSets.length; i++) {
      if (i === skillSets.length - 1) {
        tempTechStackList += skillSets[i]
      } else {
        tempTechStackList += skillSets[i] + ' / '
      }
    }

    setTechStackList(tempTechStackList)
  }, [])

  // text style
  const textStyle = 'text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] text-[#9A9A9A] dark:text-[#94A3B8]'

  return (
    <div className='flex flex-col font-light p-3'>
      {/* company logo */}
      <div className='flex justify-center items-center bg-[#9a9a9a17] p-[2rem] rounded-lg'>
        <img src={logo} alt={companyName} />
      </div>
      {/* company name */}
      <span className='text-black dark:text-white text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] font-medium mt-5 mb-1'>{companyName}</span>
      {/* team */}
      <span className={textStyle}><span className='font-medium'>Team: </span>{team}</span>
      {/* position */}
      <span className={textStyle}><span className='font-medium'>Position: </span>{position}</span>
      {/* job duties */}
      <span className={textStyle}><span className='font-medium'>Job Duties: </span>{jobDuties}</span>
      {/* projects */}
      <span className={textStyle}><span className='font-medium'>Projects: </span>{projects}</span>
      {/* skill sets */}
      <span className={textStyle}><span className='font-medium'>Tech Stacks: </span>{techStackList}</span>
      {/* period */}
      <span className={textStyle}>
        <span className='font-medium'>Period: </span>
        <span>{resultDate}, </span>
        <span>{toStartDate} - {toEndDate}</span>
      </span>
    </div>
  )
}
