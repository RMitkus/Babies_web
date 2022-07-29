import { useRouter } from "next/router"

const Location = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<div>
            location: {slug}
		</div>
	)
}

export default Location