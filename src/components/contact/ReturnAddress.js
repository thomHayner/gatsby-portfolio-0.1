import * as React from 'react';
import { Container } from "react-bootstrap";
import contentData from '../../assets/content/contact-info.json';

export default function ReturnAddress() {
  return (
    <Container
      className='p-2 bg-secondary border-tertiary rounded shadow-lg'>
      <address>
        {contentData.contactName ? <span>{contentData.contactName}<br /></span> : null}
        
        {contentData.contactCompany ? <span>{contentData.contactCompany}<br /></span> : null}
        {contentData.contactAddress1 ? <span>{contentData.contactAddress1}<br /></span> : null}
        {contentData.contactAddress2 ? <span>{contentData.contactAddress2}<br /></span> : null}
        {contentData.contactAddress3 ? <span>{contentData.contactAddress3}<br /></span> : null}
        {contentData.contactAddress4 ? <span>{contentData.contactAddress4}<br /></span> : null}
        {contentData.contactAddress5 ? <span>{contentData.contactAddress5}<br /></span> : null}
        {contentData.contactCity ?
          contentData.contactState ?
            contentData.contactPostalCode ?
              <span>{contentData.contactCity}, {contentData.contactState}, {contentData.contactPostalCode}<br /></span>
            :
              <span>{contentData.contactCity}, {contentData.contactState}<br /></span>
          :
            contentData.contactPostalCode ?
              <span>
                {contentData.contactCity}, {contentData.contactPostalCode}<br />
              </span>
            :
              <span>{contentData.contactCity}<br /></span>
          
        : 
          contentData.contactState ?
            contentData.contactPostalCode ?
              <span>
                {contentData.contactState}, {contentData.contactPostalCode}<br />
              </span>
            :
              <span>{contentData.contactState}<br /></span>
          :
            contentData.contactPostalCode ?
              <span>{contentData.contactPostalCode}<br /></span> : null
        }
        {contentData.contactCountry ? <span>{contentData.contactCountry}<br /></span> : null}
        {contentData.contactPhone || contentData.contactEmail ? <hr /> : null}
        {contentData.contactPhone ? <span>{contentData.contactPhone}<br /></span> : null}
        {contentData.contactEmail ? <span>{contentData.contactEmail}<br /></span> : null}
      </address>
    </Container>
  )
};
