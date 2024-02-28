import React from 'react';
import {Card} from 'antd';
import { Image } from 'antd';


const AboutComponent = () => {
    return (
        <Card className={'w-40 m-h-500'} style={{backgroundColor: 'white'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adpiscing elit.In suscipit suspict porttitor.Suspendisse ex
                lorem, rhoncus nec ante eu, venatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla
                finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat
                volupat. Ut at tristique libero, nec efficitur dui. Aliquam erat volupat. Fusce quam sem, tempus nec
                justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
                Proin ac lacinia erat, et commmodo felis, Phasellus tempor tellus eu vulputate tempus.</p>
            <Image
                width={200}
                src='../src/assets/person.png'
                alt="Descrição da imagem"
            />
        </Card>
    );
};

export default AboutComponent;
