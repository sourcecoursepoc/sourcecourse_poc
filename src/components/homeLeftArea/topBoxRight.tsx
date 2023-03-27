import React from "react";
import { Row, Col, Divider, Statistic, Button } from "antd";
import styles from "./topBoxRight.module.css";




const TopBoxRight: React.FC = () => {
 

  return (
    <>
    <div className={styles.outerbox}>

    <div className={styles.innerrightTop}>
        
   
    </div>
  
    <div  className={styles.innerrightBottom}> <Button type="link" href="/compose" style={{ color: "black",marginLeft:"1rem"}}>
       Compose </Button></div>
      {/* <div className={styles.innerright}>
        <Row className={styles.image}
        ><Col>
            akhkjh
          </Col>
        </Row>
        <Row className={styles.imageName}>
          <Col className={styles.imageNameText}>schema</Col></Row>
      </div>
      <div className={styles.innerleft}>
        <Row className={styles.items}><Col><p>items</p></Col></Row>
      </div> */}
    </div>

  </>
   
  );
};
export default TopBoxRight;
