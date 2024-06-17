"use client"
import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import MugPerso from '@/components/models3d/MugPerso';
import dynamic from 'next/dynamic';
import useStore from '@/store/useStore';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), { ssr: false });
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

const PageClient = ({ photos }) => {
  const mugTexture = useStore((state) => state.mugTexture);
  const { editor, onReady } = useFabricJSEditor();
  const [FillColor, setFillColor] = useState('#FF0000');
  const [StrokeColor, setStrokeColor] = useState('#000000');
  const [BackColor, setBackColor] = useState('#FFFFFF');
  const [Stroke, setStroke] = useState(2);

  useEffect(() => {
    if (editor) {
      editor.canvas.backgroundColor = BackColor;
      editor.setFillColor(FillColor);
      editor.setStrokeColor(StrokeColor);
      var ellipse = new fabric.Ellipse({
        left: 10,
        top: 10,
        rx: 30,
        ry: 20,
        strokeWidth: parseInt(Stroke),
        fill: FillColor,
        stroke: StrokeColor,
        strokeUniform: true,
      });

      editor.canvas.add(ellipse);
    }
  }, [editor, FillColor, StrokeColor, BackColor, Stroke]);

  const handleImageUpload = (e) => {
    if (!editor) return;

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target.result;

      fabric.Image.fromURL(imageUrl, (image) => {
        image.set({
          left: 0,
          top: 0,
          scaleX: 0.75,
          scaleY: 0.75,
        });

        editor.canvas.add(image);
        editor.canvas.renderAll();
      });
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!mugTexture) return;

    fabric.Image.fromURL(mugTexture, (image) => {
      image.set({
        left: 0,
        top: 0,
        scaleX: 0.75,
        scaleY: 0.75,
      });

      editor.canvas.add(image);
      editor.canvas.renderAll();
    });

    return () => {
      if (editor.canvas) {
        editor.canvas.clear();
      }
    };
  }, [mugTexture, editor]);

  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5">
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Mug Texture</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">{mugTexture}</h1>
          <p className="mb-8 text-2xl leading-normal">A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>
      </div>

      {true && (
        <View orbit className="absolute top-0 flex h-1/2 w-1/2 flex-col items-center justify-center">
          <MugPerso />
          <Common />
        </View>
      )}

      <div className='flex flex-col'>

        <div className="fabric-canvas"></div>
        <div className="canvas-container">
          <FabricJSCanvas id="cnvs" className="sample-canvas" onReady={onReady} />
        </div>

        <div className="upload-section mt-96">
          <h2>Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
    </>
  );
};

export default PageClient;
