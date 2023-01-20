import type { NextPage } from 'next';
import { KAKAO_OAUTH2_URL } from 'src/app.features/login/constants';

const Home: NextPage = () => {
	console.log(KAKAO_OAUTH2_URL);

	return (
		<div>
			<button className="bg-yellow-400 rounded p-2 text-center mx-auto">
				<a href={KAKAO_OAUTH2_URL}>테스트용 카카오로그인 버튼</a>
			</button>
		</div>
	);
};

export default Home;
