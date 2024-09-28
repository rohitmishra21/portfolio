import React from 'react'
import "./style.css";
import * as THREE from "three";
import vertex from "../shader/vertex.glsl";
import fragment from "../shader/frgment.glsl";
import gsap from "gsap";

const pro = () => {
 

class Site {
  constructor({ dom }) {
    this.time = 0;
    this.contaner = dom;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.images = [...document.querySelectorAll(".images img")];

    this.material;
    this.imgStore = [];
    this.uStartIndex = 0;
    this.uEndIndex = 1;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      100,
      2000
    );

    this.camera.position.z = 200;
    this.camera.fov = 2 * Math.atan(this.height / 2 / 200) * (180 / Math.PI);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.width, this.height);
    this.contaner.appendChild(this.renderer.domElement);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.render(this.scene, this.camera);

    this.addImages();
    this.resize();
    this.setupResize();
    this.setPosition();
    this.hoverLinks();
    this.render();
  }

  resize() {
    this.width = this.contaner.offsetWidth;
    this.height = this.contaner.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.setPosition(); // Call to update image positions after resizing
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  setPosition() {
    this.imgStore.forEach((img) => {
      const bounds = img.img.getBoundingClientRect();
      img.mesh.position.y = (-bounds.top + bounds.height / 2) / 2;
      img.mesh.position.x = bounds.left + bounds.width / 2 - this.width / 2;
    });
  }

  addImages() {
    const textureLoader = new THREE.TextureLoader();
    const textures = this.images.map((img) => textureLoader.load(img.src));

    const uniforms = {
      uTime: { value: 0 },
      uTimeline: { value: 0.2 },
      uStartIndex: { value: 0 },
      uEndIndex: { value: 1 },
      uImg: { value: textures[0] },
      uImg1: { value: textures[1] },
      uImg2: { value: textures[2] },
      uImg3: { value: textures[3] },
      uImg4: { value: textures[4] },
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });

    this.images.forEach((img) => {
      const bounds = img.getBoundingClientRect();
      const geometry = new THREE.PlaneGeometry(bounds.width, bounds.height);
      const mesh = new THREE.Mesh(geometry, this.material);

      this.scene.add(mesh);

      this.imgStore.push({
        img: img,
        mesh: mesh,
        top: bounds.top,
        left: bounds.left,
        width: bounds.width,
        height: bounds.height,
      });
    });
  }

  hoverLinks() {
    const links = document.querySelectorAll(".links a");
    links.forEach((link, i) => {


    
      link.addEventListener("mouseover", () => {
   
        console.log(link);
        
        
        this.material.uniforms.uTimeline.value = 0.0;
        gsap.killTweensOf(this.material.uniforms.uTimeline);

        gsap.to(this.material.uniforms.uTimeline, {
          value: 4.0,
          duration: 2,
          onStart: () => {
            this.uEndIndex = i;
            this.material.uniforms.uStartIndex.value = this.uStartIndex;
            this.material.uniforms.uEndIndex.value = this.uEndIndex;
            this.uStartIndex = this.uEndIndex;
          },
        });
      });
    });
  }

  render() {
    this.time += 0.05;
    this.material.uniforms.uTime.value = this.time;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Site({
  dom: document.querySelector(".canvas"),
});

  return (
    <div>pro</div>
  )
}

export default pro