import React from "react";

import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
	const { data, isFetching, error } = useGetTopChartsQuery();

	if (isFetching) return <Loader title="Loading artists..." />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
				Top artists
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3  gap-4 m-auto">
				{data?.map((track) => (
					<ArtistCard key={track.key} track={track} />
				))}
			</div>
		</div>
	);
};

export default TopArtists;
