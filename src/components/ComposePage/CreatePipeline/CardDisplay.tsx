import { Card } from 'antd'
import React from 'react'

const CardDisplay = ({alt,src,title}) => {
    return (
        <Card hoverable style={{ width: 240, margin: "0.2rem" }}>
            <Card.Meta
                avatar={<img height={30} alt={alt} src={src} style={{ marginRight: 10 }} />}
                title={title}
                style={{ fontSize: 16 }}
            />
        </Card>
    )
}

export default CardDisplay