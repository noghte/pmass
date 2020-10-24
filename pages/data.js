import styles from '../styles/Home.module.css'
import convert from "xml-js";
import fs from 'fs';
import XMLViewer from 'react-xml-viewer';
import { Container, Row, Col } from 'reactstrap';

export default function Data({xml_string}) {
    // const options = {compact: true, ignoreComment: true, spaces: 4}
    // const result = convert.json2xml({"a":"hello!"}, options);
    let data = convert.xml2json(xml_string,{compact:true});
  
    return (
        <>
        <h1 className={styles.title}>
        Data
      </h1>

      <p className={styles.description}>
        Contents from data.xml in XML and JSON
      </p>
        <Container>
        <Row xs="2">
        <Col xs="6" style={{maxWidth:'50%'}}><XMLViewer xml={xml_string} /></Col>
        <Col xs="6">
            {data}
        </Col>
      </Row>
      

      </Container>
        </>
    )
}

export async function getStaticProps(context) {
    let xml_string = fs.readFileSync("./data.xml", "utf8");
    return {
      props: {xml_string}, // will be passed to the page component as props
    }
  }