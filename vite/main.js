import * as THREE from 'three'

const canvas = document.getElementById('canvas')

const scene = new THREE.Scene()
scene.background = new THREE.Color('#f0f0f0')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: '#468585' })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#9CDBA6' })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = -1.5

scene.add(box)

const light = new THREE.DirectionalLight(0x9CDBA6, 1)
light.position.set(1, 1, 1)
scene.add(light)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)