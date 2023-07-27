import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import FeatureCard from './Business'; 

const Features = () => {
  return (
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  );
}

export default Features;