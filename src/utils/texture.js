import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { dirtImg, logImg, grassImg, glassImg, woodImg } from "../assets";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

dirtTexture.wrapS = RepeatWrapping;
dirtTexture.wrapT = RepeatWrapping;
dirtTexture.repeat.set(5, 5);

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
};
