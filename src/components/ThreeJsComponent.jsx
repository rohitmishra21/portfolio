// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import vertex from "../shader/vertix.glsl";
// import fragment from "../shader/fragment.glsl";
// import gsap from "gsap";

// const ThreeJsComponent = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     class Site {
//       constructor({ dom }) {
//         this.time = 0;
//         this.container = dom;
//         this.height = window.innerHeight;
//         this.width = window.innerWidth;
//         this.images = [...document.querySelectorAll(".images img")];

//         this.material;
//         this.imgStore = [];
//         this.uStartIndex = 0;
//         this.uEndIndex = 1;

//         this.scene = new THREE.Scene();
//         this.camera = new THREE.PerspectiveCamera(
//           75,
//           this.width / this.height,
//           100,
//           2000
//         );

//         this.camera.position.z = 200;
//         this.camera.fov = 2 * Math.atan(this.height / 2 / 200) * (180 / Math.PI);
//         this.renderer = new THREE.WebGLRenderer({
//           antialias: true,
//           alpha: true,
//         });
//         this.renderer.setSize(this.width, this.height);
//         this.container.appendChild(this.renderer.domElement);
//         this.renderer.setPixelRatio(window.devicePixelRatio);
//         this.renderer.render(this.scene, this.camera);

//         this.addImages();
//         this.resize();
//         this.setupResize();
//         this.setPosition();
//         this.hoverLinks();
//         this.render();
//       }

//       resize() {
//         this.width = this.container.offsetWidth;
//         this.height = this.container.offsetHeight;
//         this.renderer.setSize(this.width, this.height);
//         this.camera.aspect = this.width / this.height;
//         this.camera.updateProjectionMatrix();

//         this.setPosition();
//       }

//       setupResize() {
//         window.addEventListener("resize", this.resize.bind(this));
//       }

//       setPosition() {
//         this.imgStore.forEach((img) => {
//           const bounds = img.img.getBoundingClientRect();
//           img.mesh.position.y = (-bounds.top + bounds.height / 2) / 2;
//           img.mesh.position.x = bounds.left + bounds.width / 2 - this.width / 2;
//         });
//       }

//       addImages() {
//         const textureLoader = new THREE.TextureLoader();
//         const textures = this.images.map((img) => textureLoader.load(img.src));

//         const uniforms = {
//           uTime: { value: 0 },
//           uTimeline: { value: 0.2 },
//           uStartIndex: { value: 0 },
//           uEndIndex: { value: 1 },
//           uImg: { value: textures[0] },
//           uImg1: { value: textures[1] },
//           uImg2: { value: textures[2] },
//           uImg3: { value: textures[3] },
//           uImg4: { value: textures[4] },
//         };

//         this.material = new THREE.ShaderMaterial({
//           uniforms: uniforms,
//           vertexShader: vertex,
//           fragmentShader: fragment,
//           transparent: true,
//         });

//         this.images.forEach((img) => {
//           const bounds = img.getBoundingClientRect();
//           const geometry = new THREE.PlaneGeometry(bounds.width, bounds.height);
//           const mesh = new THREE.Mesh(geometry, this.material);

//           this.scene.add(mesh);

//           this.imgStore.push({
//             img: img,
//             mesh: mesh,
//             top: bounds.top,
//             left: bounds.left,
//             width: bounds.width,
//             height: bounds.height,
//           });
//         });
//       }

//       hoverLinks() {
//         const links = document.querySelectorAll(".links a");
//         links.forEach((link, i) => {
//           link.addEventListener("mouseover", (e) => {
//             this.material.uniforms.uTimeline.value = 0.0;
//             gsap.killTweensOf(this.material.uniforms.uTimeline);

//             gsap.to(this.material.uniforms.uTimeline, {
//               value: 4.0,
//               duration: 2,
//               onStart: () => {
//                 this.uEndIndex = i;
//                 this.material.uniforms.uStartIndex.value = this.uStartIndex;
//                 this.material.uniforms.uEndIndex.value = this.uEndIndex;
//                 this.uStartIndex = this.uEndIndex;
//               },
//             });
//           });
//         });
//       }

//       render() {
//         this.time += 0.05;
//         this.material.uniforms.uTime.value = this.time;
//         this.renderer.render(this.scene, this.camera);
//         window.requestAnimationFrame(this.render.bind(this));
//       }
//     }

//     const site = new Site({
//       dom: canvasRef.current,
//     });

//     return () => {
//       window.removeEventListener("resize", site.resize);
//     };
//   }, []);

//   return (
//     <>
//         <div className="app  h-screen flex w-full" >
//          <div className="canvas w-1/2 h-screen relative ">
//             <div className="images absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32vw] w-[25vw]">
//                <img className="w-full h-full object-cover absolute " src="https://images.unsplash.com/photo-1727384182379-e4cd8e8d5ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                <img className="w-full h-full object-cover absolute " src="https://images.unsplash.com/photo-1727341392733-c2646fe7987d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                <img className="w-full h-full object-cover absolute " src="https://images.unsplash.com/photo-1727440144543-ded882c768c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                <img className="w-full h-full object-cover absolute " src="https://images.unsplash.com/photo-1726999992858-362c15be0d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
//                <img className="w-full h-full object-cover absolute " src="https://images.unsplash.com/photo-1727246115849-eea4f2b85a65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" />
//             </div>
//          </div>
//          <div className="links w-1/2 h-screen flex flex-col gap-10 items-center justify-center text-4xl uppercase font-extrabold bg-gray-900 text-white">
//              <a href="">some words</a>
//              <a href="">some words</a>
//              <a href="">some words</a>
//              <a href="">some words</a>
//              <a href="">some words</a>
//              <a href="">some words</a>
//          </div>
//     </div>
//     </>
//   )
// };

// export default ThreeJsComponent;
