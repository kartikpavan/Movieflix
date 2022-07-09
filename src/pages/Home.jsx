import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { requests } from "../request";
const Home = () => {
	return (
		<>
			<Main />
			<Row
				rowId="1"
				title="Up Coming"
				fetchURL={requests.requestUpcoming}
			/>
			<Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
			<Row
				rowId="3"
				title="Top Rated"
				fetchURL={requests.requestTopRated}
			/>
			<Row
				rowId="4"
				title="Trending"
				fetchURL={requests.requestTrending}
			/>

			<Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
			<Row rowId="6" title="Drama" fetchURL={requests.requestDrama} />
			<Row rowId="7" title="Comedy" fetchURL={requests.requestComedy} />
			<Row
				rowId="8"
				title="Animation"
				fetchURL={requests.requestAnimation}
			/>
			<Row
				rowId="9"
				title="Adventure"
				fetchURL={requests.requestAdventure}
			/>

			<Row
				rowId="10"
				title="Fantasy"
				fetchURL={requests.requestFantasy}
			/>
			<Row rowId="11" title="Music" fetchURL={requests.requestMusic} />
			<Row
				rowId="12"
				title="Mystery"
				fetchURL={requests.requestMystery}
			/>
			<Row
				rowId="13"
				title="Romance"
				fetchURL={requests.requestRomance}
			/>
			<Row
				rowId="14"
				title="Science-Fiction"
				fetchURL={requests.requestScifi}
			/>
			<Row
				rowId="15"
				title="Thriller"
				fetchURL={requests.requestThriller}
			/>
			<Row
				rowId="16"
				title="Western"
				fetchURL={requests.requestWestern}
			/>
		</>
	);
};

export default Home;
