import React from 'react';
import { Input, Row, Col } from 'antd';
const { TextArea } = Input;
const DescriptionBox: React.FC = () => (
    <>
        <TextArea placeholder="Description" />
        {/* <Row style={{border:"1px solid", borderRadius:"5px",textAlign:"left"}}>
            <Col>
                <p >
             Aenean blandit vulputate tellus a dapibus. Phasellus volutpat turpis quis massa laoreet blandit. Integer pulvinar ligula at massa auctor, vel vehicula diam malesuada. In malesuada laoreet tellus, et vestibulum velit congue quis. In viverra neque at massa accumsan, id ornare urna bibendum. Quisque tempor vitae sem sed varius. Curabitur leo leo, scelerisque vitae lorem porttitor, efficitur scelerisque nulla. Praesent et luctus sapien. Aliquam mollis vel nisi bibendum pulvinar. Mauris scelerisque ex in enim malesuada, non faucibus mi laoreet. Etiam aliquam est non lectus dictum fermentum. In suscipit nunc id dolor aliquam porta. Morbi auctor efficitur ante, sed tristique mi interdum ultrices. Donec tincidunt sem sit amet accumsan sollicitudin. Praesent in dolor in enim imperdiet venenatis euismod vel urna
          </p></Col>
        </Row> */}
    </>
);

export default DescriptionBox;