import React, { useState, useEffect } from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParamas) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: '' });
	const [data, setData] = useState(null);

	const fetchData = async (url) => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.Response === 'True') {
				setError({ show: false, msg: '' });
				setData(data.Search || data);
			} else {
				setError({ show: true, msg: data.Error });
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(`${API_ENDPOINT}${urlParamas}`);
	}, [urlParamas]);

	return { isLoading, error, data };
};

export default useFetch;
