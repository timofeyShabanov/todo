import { useEffect, useState } from "react";

type Tvalue = number | string | boolean;
type Tdelay = number;

function useDebounce(value: Tvalue, delay: Tdelay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const t = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(t);
		};
	}, [value, delay]);
	return debouncedValue;
}

export default useDebounce;
