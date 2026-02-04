diff --git a/Web-Kelas-V2-main/src/Pages/Gallery.jsx b/Web-Kelas-V2-main/src/Pages/Gallery.jsx
index 6663996e5ccc5b6120106c1951f5a9a0e28c7014..c5d632d38a9cb3d7c76c45008f1d3c926766263d 100644
--- a/Web-Kelas-V2-main/src/Pages/Gallery.jsx
+++ b/Web-Kelas-V2-main/src/Pages/Gallery.jsx
@@ -1,65 +1,73 @@
 import React, { useEffect, useState } from "react"
 import Slider from "react-slick"
 import "slick-carousel/slick/slick.css"
 import "slick-carousel/slick/slick-theme.css"
-import ButtonSend from "../components/ButtonSend"
-import ButtonRequest from "../components/ButtonRequest"
 import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
 import Modal from "@mui/material/Modal"
 import { Box, IconButton } from "@mui/material"
 import CloseIcon from "@mui/icons-material/Close"
 import { useSpring, animated } from "@react-spring/web" // Import the necessary components
+import { demoGalleryImages } from "../data/demoContent"
 
 const Carousel = () => {
 	const [images, setImages] = useState([])
 	const [open, setOpen] = useState(false)
 	const [selectedImage, setSelectedImage] = useState(null)
+	const [isFirebaseAvailable, setIsFirebaseAvailable] = useState(true)
 
 	const modalFade = useSpring({
 		opacity: open ? 1 : 0,
 		config: { duration: 300 }, // Adjust the duration as needed
 	})
 
 	// Fungsi untuk mengambil daftar gambar dari Firebase Storage
 	const fetchImagesFromFirebase = async () => {
 		try {
 			const storage = getStorage() // Mendapatkan referensi Firebase Storage
 			const storageRef = ref(storage, "GambarAman/") // Menggunakan ref dengan storage
 
 			const imagesList = await listAll(storageRef) // Menggunakan listAll untuk mendapatkan daftar gambar
 
 			const imageURLs = await Promise.all(
 				imagesList.items.map(async (item) => {
 					const url = await getDownloadURL(item) // Menggunakan getDownloadURL untuk mendapatkan URL gambar
 					return url
 				}),
 			)
 
+			if (imageURLs.length === 0) {
+				setIsFirebaseAvailable(false)
+				setImages(demoGalleryImages)
+				return
+			}
+
 			setImages(imageURLs)
 		} catch (error) {
 			console.error("Error fetching images from Firebase Storage:", error)
+			setIsFirebaseAvailable(false)
+			setImages(demoGalleryImages)
 		}
 	}
 
 	useEffect(() => {
 		fetchImagesFromFirebase()
 	}, [])
 
 	const settings = {
 		centerMode: true,
 		centerPadding: "30px",
 		slidesToShow: 3,
 		slidesToScroll: 1,
 		autoplay: true,
 		autoplaySpeed: 2000,
 		dots: true,
 		responsive: [
 			{
 				breakpoint: 768,
 				settings: {
 					arrows: false,
 					centerMode: true,
 					centerPadding: "50px",
 					slidesToShow: 1,
 					dots: false,
 				},
@@ -70,69 +78,69 @@ const Carousel = () => {
 					arrows: false,
 					centerMode: true,
 					centerPadding: "70px",
 					slidesToShow: 1,
 					dots: false,
 				},
 			},
 		],
 	}
 
 	const handleImageClick = (imageUrl) => {
 		setSelectedImage(imageUrl)
 		setOpen(true)
 	}
 
 	const handleCloseModal = () => {
 		setOpen(false)
 		setSelectedImage(null)
 	}
 
 	return (
 		<>
 			<div className="text-white opacity-60 text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8" id="Gallery">
 				Class Gallery
 			</div>
+			{!isFirebaseAvailable && (
+				<div className="text-center text-sm text-white/70 mb-4">
+					Gallery sedang memakai mode demo. Hubungkan Firebase untuk melihat foto terbaru.
+				</div>
+			)}
 			<div id="Carousel">
 				<Slider {...settings}>
 					{images.map((imageUrl, index) => (
 						<img
 							key={index}
 							src={imageUrl}
 							alt={`Image ${index}`}
 							onClick={() => handleImageClick(imageUrl)}
 							style={{ cursor: "pointer" }}
 						/>
 					))}
 				</Slider>
 			</div>
 
-		
-
 			<Modal
 				open={open}
 				onClose={handleCloseModal}
 				aria-labelledby="image-modal"
 				aria-describedby="image-modal-description"
 				className="flex justify-center items-center">
 				<animated.div
 					style={{
 						...modalFade,
 						maxWidth: "90vw",
 						maxHeight: "auto",
 						display: "flex",
 						flexDirection: "column",
 						justifyContent: "center",
 						alignItems: "center",
 						position: "relative",
 					}}
 					className="p-2 rounded-lg">
 					<IconButton
 						edge="end"
 						color="inherit"
 						onClick={handleCloseModal}
 						aria-label="close"
 						sx={{
 							position: "absolute",
