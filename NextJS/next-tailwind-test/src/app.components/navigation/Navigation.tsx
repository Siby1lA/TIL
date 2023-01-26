import { useRouter } from 'next/router';

function Navigation() {
	const router = useRouter();
	return (
		<div className="flex justify-around items-center  text-gray-500 text-xs border-t-2 p-3 text-center cursor-pointer">
			<div onClick={() => router.push('/')}>
				<div>아이콘</div>
				<div>홈</div>
			</div>
			<div onClick={() => router.push('/calendar')}>
				<div>아이콘</div>
				<div>캘린더</div>
			</div>
			<div>
				<div>아이콘</div>
				<div>게시판</div>
			</div>
			<div>
				<div>아이콘</div>
				<div>마이페이지</div>
			</div>
		</div>
	);
}
export default Navigation;
