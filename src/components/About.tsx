import React from 'react';
import styled from 'styled-components';
import { Text, Image } from '@fluentui/react';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

function About() {
  return (
    <Wrapper>
      <Nav />
      <Text variant={'xxLargePlus'}>About</Text>

      <Image src="https://hackboxstorage.blob.core.windows.net/projectimages/914261591112659878.jpg" />
      <Text><p>From 2009-2012 I created and authored a police accountability project called the NPMSRP that attempted 
        to use data science to quantify police accountability and identify problematic law enforcement agencies where reforms may be needed. </p>
        <p>That study resulted in a number of exonerations of falsely arrested individuals, led to federal investigations and reforms of a number of departments, 
          and is still cited to this day in media given the lack of statistical data about law enforcement accountability and misconduct.</p>
        <p>Back then the reporting was a full-time job and all data was gathered and analyzed manually. I would like to use modern data mining and 
          machine learning data sciences to create a new accountability project that will help identify where improvements may be needed and quantify 
          the issue of law enforcement accountability for the general public.</p>
        <p>For more information about the NPMSRP:</p>
        <ul>
          <li><a href="https://www.theguardian.com/commentisfree/cifamerica/2011/oct/25/lack-transparency-enables-police-brutality">
              The Guardian - How a lack of transparency enables police brutality (2011)</a></li>
          <li><a href="https://fivethirtyeight.com/features/allegations-of-police-misconduct-rarely-result-in-charges/">
            FiveThirtyEight - Allegations of police misconduct rarely result in charges (2014)</a></li>
          <li><a href="https://www.vox.com/2020/5/29/21274810/george-floyd-police-killing-derek-chauvin-arrested">
            Vox - Former Minneapolis officer Derek Chauvin charged with murder in the death of George Floyd (2020)</a></li>
          <li><a href="https://www.jstor.org/stable/43525523?seq=1">Journal of African American Studies - Racism and Police Brutality in America (2013)</a></li>
        </ul>
      </Text>
      <Text variant={'xxLargePlus'}>Story</Text>
      <Text variant={'smallPlus'}><p>INSPIRATION</p></Text>
      <Text>
        <p>When the National Police Misconduct Statistical Reporting Project (NPMSRP) was started in 2009, a majority of the public believed that 
        law enforcement misconduct was limited to rare isolated incidents and that racial bias in policing wasn't a systemic issue in the US. in fact, 
        even in 2014 only 43% of people polled believed that there were broad problems with the way law enforcement treated black Americans. (1)</p>
        <p>With the recent high-profile deaths of black Americans during law enforcement activity, like George Floyd and the resultant videos of 
          law enforcement responses to Black Lives Matter protests, public opinion has radically shifted with 69% of those polled now believing 
          that there are broad and systemic problems with law enforcement in the US. (2)</p>
        <p>This sea change in public perception about the state of law enforcement and systemic racial injustices is driving government officials 
          to promise change, but it has become clear that there is no consensus on what reforms would be impactful and which policies are ineffectual. 
          Additionally, it is difficult to identify agencies as gold standards for discipline and professionalism when there is no common set of metrics 
          with which to measure all agencies.</p>
        <p>To drive meaningful change, there must be meaningful data. In the decade since the NPMSRP was authored, there still is no national statistical 
          study of law enforcement misconduct and accountability in the US that supplies publicly available statistical data with which effective policy 
          can be identified or measured. At best, highly limited scope studies performed by the federal government concerning arrest-related deaths that 
          ended in 2012 only included 40% of agencies in the US that reported data on a voluntary basis.(3) While some independent efforts have gleaned 
          some meaningful statistical information, those have been limited to in custody deaths or very local efforts, not national and, thus, are not comparative.</p>
        <p>This project seeks to change that with an independent data gathering and analysis of law enforcement conduct in the United States, 
          then using that model, expanding scope internationally wherever the methodology can be applicable.</p>
        <ol>
          <li><a href="https://www.washingtonpost.com/politics/big-majorities-support-protests-over-floyd-killing-and-say-police-need-to-change-poll-finds/2020/06/08/6742d52c-a9b9-11ea-9063-e69bd6520940_story.html">
            https://www.washingtonpost.com/politics/big-majorities-support-protests-over-floyd-killing-and-say-police-need-to-change-poll-finds/2020/06/08/6742d52c-a9b9-11ea-9063-e69bd6520940_story.html</a></li>
          <li>
            <a href="https://www.washingtonpost.com/context/june-2-7-2020-washington-post-schar-poll/6b811cdf-8f99-4e28-b8f1-c76df335c16a/?itid=lk_inline_manual_2">https://www.washingtonpost.com/context/june-2-7-2020-washington-post-schar-poll/6b811cdf-8f99-4e28-b8f1-c76df335c16a/?itid=lk_inline_manual_2</a>
          </li>
          <li>
            <a href="https://www.bjs.gov/index.cfm?ty=dcdetail&iid=428">https://www.bjs.gov/index.cfm?ty=dcdetail&iid=428</a>
          </li>
        </ol>
      </Text> 
      <Text variant={'smallPlus'}><p>HOW IT WILL WORK / HOW IT WILL BE BUILT</p></Text>
      <Text>
        <p>There are over 15,000 law enforcement agencies in the United States, including police, sheriffs, state, federal, and others. Each state has 
          different laws concerning law enforcement disciplinary records, many of which either actively protect that information or allow each agency 
          leniency in regard to how transparent those records may be. Accordingly, to get as full a picture as possible of the full scope of law enforcement 
          misconduct and accountability, it is necessary to pull information from multiple sources.</p>
        <p>With the above in mind, this project aims to primarily ingest data from media reports of law enforcement misconduct and racially biased policing 
          along with other available sources of information including vetted crowd-sourced reports, agency records, legal findings, and other bodies of research 
          focused on this issue.</p>
        <p>Therefore, we have identified the following (draft) workstreams for this project:</p>
        <ul>
          <li>Create a web crawler capable of identifying reports of law enforcement disciplinary matters from media sources.</li>
          <li>Determine if contextual machine learning is capable of removing duplicate reports gathered above and pull statistically relevant 
            data from unique reports into a database.</li>
          <li>Identify additional data sources that contain sufficient data for statistical analysis utilizing the same statistically relevant criteria 
            or, if not, populate additional databases for specialized statistical reporting.</li>
          <li>Determine if machine learning can be trained to analyze statistical data combined with data concerning departmental policy and local reform 
            measures to identify significant trend data that indicates efficacy of those policies and measures.</li>
          <li>Utilize data visualization and mapping tools to present gathered statistical information in meaningful, configurable, and easily consumed ways.</li>
          <li>Create a front-end for this data that is accessible and readily available to policy makers, nonprofit agencies, and the public to help 
            inform the public, identify problematic agencies, and enable data-driven policy decisions.</li>
        </ul>
        <p>Future work:</p>
        <ul>
          <li>Tie incident reporting and trend analysis to policy changes that are public knowledge in addition to state and local laws that affect 
          law enforcement accountability in order to provide insight into policy effectiveness over time.</li>
          <li>Examine feasibility of globalizing this type of project in other countries. Law enforcement accountability and systemic racial injustice 
            aren't uniquely American issues.</li>
        </ul>
      </Text>   
      <Text variant={'xxLargePlus'}>Code Resources</Text>  
      <Text><p>Source Code Repository: <a href="https://garage-06.visualstudio.com/LEAT%20%20Law%20Enforcement%20Accountability%20Tracker%202107%2089319">https://garage-06.visualstudio.com/LEAT%20%20Law%20Enforcement%20Accountability%20Tracker%202107%2089319</a></p></Text>
    </Wrapper>
  );
}

export default About;