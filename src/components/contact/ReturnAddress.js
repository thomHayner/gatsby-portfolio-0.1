import * as React from 'react';
import { Row } from "react-bootstrap";
import contentData from '../../assets/content/contact-info.json';

export default function ReturnAddress() {
  return (
    <address>
      {contentData.contactName ? <Row>{contentData.contactName}</Row> : <div />}
      {contentData.contactCompany ? <Row>{contentData.contactCompany}</Row> : <div />}
      {contentData.contactAddress1 ? <Row>{contentData.contactAddress1}</Row> : <div />}
      {contentData.contactAddress2 ? <Row>{contentData.contactAddress2}</Row> : <div />}
      {contentData.contactAddress3 ? <Row>{contentData.contactAddress3}</Row> : <div />}
      {contentData.contactAddress4 ? <Row>{contentData.contactAddress4}</Row> : <div />}
      {contentData.contactAddress5 ? <Row>{contentData.contactAddress5}</Row> : <div />}
      {contentData.contactCity ?
        contentData.contactState ?
          contentData.contactCountry ?
            <Row>{contentData.contactCity}, {contentData.contactState}, {contentData.contactCountry}</Row>
          : 
            <Row>{contentData.contactCity}, {contentData.contactState}</Row>
        :
          contentData.contactCountry ?
            <Row>{contentData.contactCity}, {contentData.contactCountry}</Row>
          :
            <Row>{contentData.contactCity}</Row>
        
      : 
        contentData.contactState ?
          contentData.contactCountry ?
            <Row>{contentData.contactState}, {contentData.contactCountry}</Row>
          :
            <Row>{contentData.contactState}</Row>
      :
        contentData.contactCountry ?
        <Row>{contentData.contactCountry}</Row> : <div />
      }
      {contentData.contactPostalCode ? <Row className='justify-content-end'>{contentData.contactPostalCode}</Row> : <div />}
      {contentData.contactPhone ? <Row>{contentData.contactPhone}</Row> : <div />}
      {contentData.contactEmail ? <Row>{contentData.contactEmail}</Row> : <div />}
    </address>
  )
};
