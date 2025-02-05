import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import { WarpBackground } from '@/components/ui/warp-background.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card.jsx";
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal.jsx";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container flex flex-col justify-center items-center gap-y-5">
          <div className="work-canvas ">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
            {/* <WarpBackground className="w-full h-full">
              <Card>
                <CardContent className="flex flex-col gap-2 p-4">
                  <CardTitle>My Professional Experience: A Timeline of Growth</CardTitle>
                  <CardDescription>
                  Explore the key milestones in my career journey, showcasing the skills I've developed, the challenges I've overcome, and the contributions I've made to each role along the way.
                  </CardDescription>
                </CardContent>
              </Card>
           
                <ScratchToReveal
                  width={250}
                  height={250}
                  minScratchPercentage={70}
                  className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                  gradientColors={["#1a1a1a ","#1a1a1a ","#1a1a1a"]}
                >
                  <p className="text-9xl bg-black-600">😎</p>
                </ScratchToReveal>
      
            </WarpBackground> */}

          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;