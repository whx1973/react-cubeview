import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@kadira/storybook';
//import { action } from '@storybook/addon-actions';
import * as THREE from 'three';

import Container3d from 'react-container-3d';

import CubeView from '../src';

import './style.css';
import './../src/css/react-cubeview.css';

//import test1 from "./test1";

var cube, container;

//this.cube = cube;
var objects = {};

var updateAngles = (phi, theta) => {
	if(container)
	    container.setAngles(phi, theta);
};

var updateAngles2 = (phi, theta)=>{
    if(cube){
        cube.setAngles(phi, theta);
    }
}

//3D ui controllers
var getDomContainer = () =>{
	return ReactDOM.findDOMNode(container);
}

function getDomCube() {
	return ReactDOM.findDOMNode(cube);
}

storiesOf('react-cubeview', module)
	.add('simple', () => (
		<div className="canvas-3d">
			<CubeView aspect={1} 
			hoverColor={0x0088ff} 
			cubeSize={2} 
			zoom={6} 
			antialias={false} 
			width={200}
			height={200}/>
		</div>
	))
	.add('bigger', () => (
		<div className="canvas-3d">
			<CubeView aspect={1} 
			hoverColor={0x0088ff} 
			cubeSize={2} 
			zoom={6} 
			antialias={false} 
			width={500}
			height={500}/>
		</div>
	))
	.add('zoom out', () => (
		<div className="canvas-3d">
			<CubeView aspect={1} 
			hoverColor={0x0088ff} 
			cubeSize={2} 
			zoom={12} 
			antialias={false} 
			width={500}
			height={500}/>
		</div>
	))
	.add('antialias On', () => (
		<div className="canvas-3d">
			<CubeView aspect={1} 
			hoverColor={0x0088ff} 
			cubeSize={3} 
			zoom={6} 
			antialias={true} 
			width={500}
			height={500}/>
		</div>
	))
	.add('16/9 aspect', () => (
		<div className="canvas-3d">
			<CubeView aspect={16/9} 
			hoverColor={0x0088ff} 
			cubeSize={2} 
			zoom={6} 
			antialias={true} 
			width={500}
			height={500}/>
		</div>
	))
	.add('custom hover color', () => (
		<div className="canvas-3d">
			<CubeView aspect={1} 
			hoverColor={0xff0000} 
			cubeSize={2} 
			zoom={6} 
			antialias={true} 
			width={500}
			height={500}/>
		</div>
	))

	.add('combined with react-container-3d', () => (
		<div>
			<Container3d
				className="canvas-3d"
				percentageWidth={'100%'}
				fitScreen
				ref={c => (container = c)}
				marginBottom={30}
				addLight={true}
				addControls={true}
				addGrid={true}
				antialias={false}
                onUpdateAngles={updateAngles2}
			/>

			<div className="cube-view">
				<CubeView
					aspect={1}
					hoverColor={0x0088ff}
					cubeSize={2}
					ref={c => (cube = c)}
					zoom={6}
					antialias={false}
                    key={'cv'}
                    width={150}
                    height={150}
					onUpdateAngles={updateAngles}
				/>
			</div>
		</div>
	));
