import { Col, Row, Image } from 'antd'
import React from 'react'
import styles from "./CardDisplay.module.css";

const CardDisplay = ({ alt, src, title }) => {
    return (
        <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}
          ><Col>
               <Image preview={false} src={src} alt={alt} style={{ width: "3rem", height: "3rem", marginRight: "0.5rem" }} />
            </Col>
          </Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}><Col style={{ width: "100%", textAlign: "-webkit-center" }}><p className={styles.styeText}>{title}</p></Col></Row>
        </div>
      </div>

    </>
    )
}

export default CardDisplay