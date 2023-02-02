import React from 'react';
import './style.css';
import { Image1 } from './components/image1';
import { Image2 } from './components/image2';
import { Image3 } from './components/image3';
import { Image4 } from './components/image4';
import { Form } from './components/form';
export default function App() {
  return (
    <div
      class=" w-[400px] h-[300px]   m-[10px] relative  flex justify-center items-center"
      style={{
        background:
          'linear-gradient(112.74deg, rgba(253, 153, 3, 0.78) 10.08%, rgba(250, 102, 147, 0.65) 84.31%)',
      }}
    >
      <div class="absolute left-0 top-0 ">
        <Image2 />
      </div>
      <div class="absolute top-0 right-0">
        <Image1 />
      </div>
      <div class="absolute left-0 bottom-0">
        <Image3 />
      </div>
      <div class="absolute right-0 bottom-0">
        <Image4 />
      </div>
      <div  class="" >
        <Form />
      </div>
    </div>
  );
}
