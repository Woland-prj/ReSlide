type TSlideObject = {
	type: TText | TVector | TImage
	size: TSlideObjectSize
	cords: TSlideObjectCords
	rotationAngel: number
}

type TSlideObjectSize = {
	width: number
	height: number
}

type TSlideObjectCords = {
	x: number
	y: number
}
