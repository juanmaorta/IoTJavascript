export const getIntervals = (position, intervals, totalPositions) => {
	const stepsByPosition = Math.floor(totalPositions / intervals)

	if (position > totalPositions) return intervals

	return Math.trunc(position / stepsByPosition) + 1
}

export const getPWMValue = (position, intervals, totalPositions) => {
	const stepsByPosition = Math.floor(totalPositions / intervals)

	return Math.trunc( position * stepsByPosition) 
}